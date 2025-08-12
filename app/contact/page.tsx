// app/contact/page.tsx
"use client";

import { useState } from "react";

type Tab = "message" | "devis";

export default function ContactPage() {
  const [tab, setTab] = useState<Tab>("message");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // ► Version "mock" : pas d’appel API, on simule juste une réussite
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>, type: Tab) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMsg(null);

    // Tu pourras brancher ici ton futur appel (fetch ou action server)
    setTimeout(() => {
      setStatus("success");
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  return (
    <div className="min-h-screen w-full flex items-start justify-center mt-24 py-10 md:py-16 px-3">
      {/* Orbe douce */}
      <div
        className="absolute inset-x-0 top-24 mx-auto h-[220px] sm:h-[260px] max-w-5xl -z-10 overflow-hidden rounded-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(140,243,255,0.18), rgba(0,0,0,0) 65%)",
        }}
      />

      {/* Carte principale */}
      <div
        className="neocard w-full max-w-5xl overflow-hidden"
        style={{ padding: 0 }} // retire le padding par défaut de .neocard
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

        {/* Onglets */}
        <div
          role="tablist"
          aria-label="Choix du formulaire"
          className="grid grid-cols-2"
        >
          <button
            role="tab"
            aria-selected={tab === "message"}
            aria-controls="panel-message"
            id="tab-message"
            onClick={() => setTab("message")}
            className={`py-4 text-base sm:text-lg md:text-xl font-semibold tracking-wide border-b border-[#3c3f46] ${
              tab === "message" ? "text-white" : "text-gray-300"
            }`}
          >
            Message
          </button>
          <button
            role="tab"
            aria-selected={tab === "devis"}
            aria-controls="panel-devis"
            id="tab-devis"
            onClick={() => setTab("devis")}
            className={`py-4 text-base sm:text-lg md:text-xl font-semibold tracking-wide border-b border-[#3c3f46] ${
              tab === "devis" ? "text-white" : "text-gray-300"
            }`}
          >
            Devis
          </button>
          <span className="pointer-events-none absolute left-1/2 -bottom-3 -translate-x-1/2 w-24 h-3 rounded-full bg-[#b8eaff] blur-[6px] opacity-70" />
        </div>

        {/* Contenu onglets */}
        <div className="relative min-h-[560px] md:min-h-[520px]">
          {tab === "message" && (
            <section
              id="panel-message"
              role="tabpanel"
              aria-labelledby="tab-message"
              className="grid gap-6 p-5 sm:p-6 md:p-8 md:grid-cols-[1fr_1px_420px]"
            >
              {/* Formulaire message */}
              <div className="md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-left">
                  Message
                </h3>

                <form
                  className="space-y-5 max-w-2xl"
                  onSubmit={(e) => handleSubmit(e, "message")}
                >
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Votre nom"
                    className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#7be8ff66]"
                  />
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Votre email"
                    className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#7be8ff66]"
                  />
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Votre message"
                    className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-[#7be8ff66]"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 text-sm text-gray-300">
                    <a href="mailto:contact@devleads.org" className="underline">
                      contact@devleads.org
                    </a>
                    <span>+33 7 81 54 80 27</span>
                  </div>

                  {status === "success" && (
                    <p className="text-green-400">
                      ✅ Message enregistré (démo)
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-400">
                      ❌ Erreur d&apos;envoi
                      {errorMsg ? ` — ${errorMsg}` : ""}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="neobutton neobutton-hover mt-4 w-full sm:w-auto"
                    disabled={loading}
                  >
                    {loading ? "Envoi..." : "Envoyer"}
                  </button>
                </form>
              </div>

              {/* Séparateur */}
              <div className="hidden md:block w-px bg-[#3c3f46]" />

              {/* Carte Google Maps */}
              <div className="mt-2 md:mt-0 md:pl-8 flex flex-col items-center">
                <div
                  className="neocard w-full max-w-[320px]"
                  style={{ padding: 0 }}
                >
                  <div className="w-full h-56 md:h-60 rounded-2xl overflow-hidden bg-[#2a2c31] border border-[#454953] shadow-inner">
                    <iframe
                      title="Localisation DevLeads"
                      src="https://www.google.com/maps?q=19+rue+Normande,+27370+Le+Thuit-de-l%E2%80%99Oison,+France&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
                <p className="text-center text-gray-200 text-sm mt-3">
                  19 rue Normande,
                  <br />
                  27370 Le Thuit-de-l’Oison, France
                </p>
              </div>
            </section>
          )}

          {tab === "devis" && (
            <section
              id="panel-devis"
              role="tabpanel"
              aria-labelledby="tab-devis"
              className="grid gap-6 p-5 sm:p-6 md:p-8 md:grid-cols-[420px_1px_1fr]"
            >
              {/* Bouton retour */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setTab("message")}
                  className="neobutton neobutton-hover mt-6 md:mt-10"
                >
                  ←
                </button>
              </div>

              {/* Séparateur */}
              <div className="hidden md:block w-px bg-[#3c3f46]" />

              {/* Formulaire devis */}
              <div className="md:pl-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-left">
                  Devis
                </h3>

                <form
                  className="space-y-5 max-w-2xl"
                  onSubmit={(e) => handleSubmit(e, "devis")}
                >
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Votre nom"
                    className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner"
                  />
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Votre email"
                    className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+33 …"
                    className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner"
                  />
                  <select
                    name="siteType"
                    defaultValue="Vitrine"
                    className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner"
                  >
                    <option>Vitrine Express</option>
                    <option>Vitrine Pro SEO</option>
                    <option>E-commerce Starter + Landing Page</option>
                  </select>
                  <input
                    name="project"
                    placeholder="Quelques lignes…"
                    className="w-full rounded-xl px-4 py-3 bg-[#2a2c31] text-white border border-[#454953] shadow-inner"
                  />

                  {status === "success" && (
                    <p className="text-green-400">
                      ✅ Demande enregistrée (démo)
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-400">
                      ❌ Erreur d&apos;envoi
                      {errorMsg ? ` — ${errorMsg}` : ""}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="neobutton neobutton-hover mt-4 w-full sm:w-auto"
                    disabled={loading}
                  >
                    {loading ? "Envoi..." : "Envoyer"}
                  </button>
                </form>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
