// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 🔧 IMPORTANT : forcer le runtime Node.js (pas Edge) pour Nodemailer
export const runtime = "nodejs";          // nécessaire sur Vercel pour utiliser nodemailer
export const dynamic = "force-dynamic";   // évite certains caches en dev/preview

type BodyMessage = {
  type: "message";
  name: string;
  email: string;
  message: string;
};

type BodyDevis = {
  type: "vitrine" | "ecommerce" | "personnalise" | "devis";
  name: string;
  email: string;
  phone?: string;
  project: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v || !v.trim()) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return v;
}

export async function POST(request: Request) {
  try {
    // ---------- 1) Validation d'entrée ----------
    const body = (await request.json()) as unknown;

    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false, error: "Corps invalide" }, { status: 400 });
    }

    const { name, email, type } = body as Record<string, unknown>;

    if (!isNonEmptyString(name) || !isNonEmptyString(email)) {
      return NextResponse.json({ ok: false, error: "Nom et email requis" }, { status: 400 });
    }
    if (!isNonEmptyString(type)) {
      return NextResponse.json({ ok: false, error: "Type requis" }, { status: 400 });
    }

    // ---------- 2) Construire le contenu de l'email ----------
    let subject = "";
    let html = "";

    if (type === "message") {
      const message = (body as Record<string, unknown>).message;
      if (!isNonEmptyString(message)) {
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
              <p style="line-height:1.6;color:#555;margin:0;">${(message as string).replace(/\n/g, "<br>")}</p>
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
        type === "vitrine" ? "Site Vitrine" :
        type === "ecommerce" ? "Boutique E-commerce" :
        type === "personnalise" ? "Projet Personnalisé" :
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
              <p style="line-height:1.6;color:#555;margin:0;">${(project as string).replace(/\n/g, "<br>")}</p>
            </div>
            <div style="margin-top:30px;padding-top:20px;border-top:1px solid #eee;text-align:center;color:#666;font-size:14px;">
              <p>Demande envoyée depuis le site DevLeads</p>
            </div>
          </div>
        </div>
      `;
    }

    // ---------- 3) Charger et vérifier les variables d'env ----------
    // Pour Gmail Workspace :
    //   SMTP_HOST=smtp.gmail.com
    //   SMTP_PORT=465 (ou 587)
    //   SMTP_USER=contact@devleads.org   (l’adresse Gmail/Workspace)
    //   SMTP_PASS=<App Password>         (mot de passe d’application, pas le mdp normal)
    //   SMTP_FROM="DevLeads <contact@devleads.org>"
    //   SMTP_TO=contact@devleads.org     (ou ce que tu veux recevoir)
    const host = requireEnv("SMTP_HOST");
    const portStr = requireEnv("SMTP_PORT");
    const user = requireEnv("SMTP_USER");
    const pass = requireEnv("SMTP_PASS");
    const from = requireEnv("SMTP_FROM");
    const to = requireEnv("SMTP_TO");

    const port = Number(portStr);
    const secure = port === 465; // true pour 465 (SSL), false pour 587 (STARTTLS)

    // ---------- 4) Créer le transport ----------
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      // logger/debug : tu peux mettre à false en prod si trop verbeux
      logger: true,
      debug: true,
      tls: { rejectUnauthorized: false },
    });

    try {
      await transporter.verify();
    } catch (e) {
      console.error("[MAIL VERIFY ERROR]:", e);
      return NextResponse.json(
        { ok: false, error: "Vérification SMTP impossible (voir logs serveur)" },
        { status: 500 }
      );
    }

    // ---------- 5) Envoyer ----------
    await transporter.sendMail({
      from,
      to,
      subject,
      html,
      replyTo: email as string,
    });

    return NextResponse.json({ ok: true, message: "Email envoyé avec succès" });
  } catch (error: unknown) {
    console.error("[MAIL SEND ERROR]:", error);
    return NextResponse.json(
      { ok: false, error: "Erreur lors de l’envoi de l’email" },
      { status: 500 }
    );
  }
}