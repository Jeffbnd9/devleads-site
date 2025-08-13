// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactBody =
  | {
      type: "message";
      name: string;
      email: string;
      message: string;
    }
  | {
      type: "vitrine" | "ecommerce" | "personnalise" | "devis";
      name: string;
      email: string;
      phone?: string;
      project: string;
    };

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;

    // Validation basique commune
    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false, error: "Corps invalide" }, { status: 400 });
    }

    const { name, email } = body as Record<string, unknown>;
    if (!isNonEmptyString(name) || !isNonEmptyString(email)) {
      return NextResponse.json({ ok: false, error: "Nom et email requis" }, { status: 400 });
    }

    // Branches selon type
    const t = (body as Record<string, unknown>).type;
    if (!isNonEmptyString(t)) {
      return NextResponse.json({ ok: false, error: "Type requis" }, { status: 400 });
    }

    let subject = "";
    let html = "";

    if (t === "message") {
      const msg = (body as Record<string, unknown>).message;
      if (!isNonEmptyString(msg)) {
        return NextResponse.json({ ok: false, error: "Message requis" }, { status: 400 });
      }

      subject = `[DevLeads] Nouveau message de ${name}`;
      html = `
        <div style="font-family: Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f9f9f9;">
          <div style="background:#fff;padding:30px;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.1);">
            <h2 style="color:#A62609;margin-bottom:20px;text-align:center;">Nouveau message de contact</h2>
            <div style="background:#f8f9fa;padding:20px;border-radius:8px;margin-bottom:20px;">
              <h3 style="color:#333;margin-top:0;">Informations de contact :</h3>
              <p style="margin:8px 0;"><strong>Nom :</strong> ${name}</p>
              <p style="margin:8px 0;"><strong>Email :</strong> ${email}</p>
            </div>
            <div style="background:#f8f9fa;padding:20px;border-radius:8px;">
              <h3 style="color:#333;margin-top:0;">Message :</h3>
              <p style="line-height:1.6;color:#555;margin:0;">${msg.replace(/\n/g, "<br>")}</p>
            </div>
            <div style="margin-top:30px;padding-top:20px;border-top:1px solid #eee;text-align:center;color:#666;font-size:14px;">
              <p>Message envoyé depuis le site DevLeads</p>
            </div>
          </div>
        </div>
      `;
    } else {
      const project = (body as Record<string, unknown>).project;
      const phone = (body as Record<string, unknown>).phone;
      if (!isNonEmptyString(project)) {
        return NextResponse.json({ ok: false, error: "Description du projet requise" }, { status: 400 });
      }

      const humanType =
        t === "vitrine" ? "Site Vitrine" :
        t === "ecommerce" ? "Boutique E-commerce" :
        t === "personnalise" ? "Projet Personnalisé" :
        "Devis";

      subject = `[DevLeads] Demande de devis de ${name}`;
      html = `
        <div style="font-family: Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f9f9f9;">
          <div style="background:#fff;padding:30px;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.1);">
            <h2 style="color:#A62609;margin-bottom:20px;text-align:center;">Nouvelle demande de devis</h2>
            <div style="background:#f8f9fa;padding:20px;border-radius:8px;margin-bottom:20px;">
              <h3 style="color:#333;margin-top:0;">Informations de contact :</h3>
              <p style="margin:8px 0;"><strong>Nom :</strong> ${name}</p>
              <p style="margin:8px 0;"><strong>Email :</strong> ${email}</p>
              ${isNonEmptyString(phone) ? `<p style="margin:8px 0;"><strong>Téléphone :</strong> ${phone}</p>` : ""}
            </div>
            <div style="background:#e8f5e8;padding:20px;border-radius:8px;margin-bottom:20px;">
              <h3 style="color:#333;margin-top:0;">Type de projet :</h3>
              <p style="margin:0;color:#A62609;font-weight:bold;">${humanType}</p>
            </div>
            <div style="background:#f8f9fa;padding:20px;border-radius:8px;">
              <h3 style="color:#333;margin-top:0;">Description du projet :</h3>
              <p style="line-height:1.6;color:#555;margin:0;">${project.replace(/\n/g, "<br>")}</p>
            </div>
            <div style="margin-top:30px;padding-top:20px;border-top:1px solid #eee;text-align:center;color:#666;font-size:14px;">
              <p>Demande envoyée depuis le site DevLeads</p>
            </div>
          </div>
        </div>
      `;
    }

    const port = Number(process.env.SMTP_PORT || "0");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      logger: true,
      debug: true,
      tls: { rejectUnauthorized: false },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject,
      html,
      replyTo: email as string,
    });

    return NextResponse.json({ ok: true, message: "Email envoyé avec succès" });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Erreur envoi email:", msg);
    return NextResponse.json(
      { ok: false, error: "Erreur lors de l’envoi de l’email" },
      { status: 500 }
    );
  }
}