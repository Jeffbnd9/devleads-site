// components/FAQ.tsx
"use client";

import { useRef, useState, useEffect } from "react";

type FAQItem = { q: string; a: React.ReactNode };

const DEFAULT_FAQ: FAQItem[] = [
  {
    q: "Quels sont les délais de livraison ?",
    a: (
      <>
        Vitrine Express : <strong>7–10 jours</strong> ; Vitrine Pro :{" "}
        <strong>2–3 semaines</strong> ; E-commerce Starter :{" "}
        <strong>2–4 semaines</strong>. Les délais dépendent surtout des contenus
        fournis (textes, images).
      </>
    ),
  },
  {
    q: "Est-ce que vous gérez le contenu (textes, photos) ?",
    a: (
      <>
        Oui en option. Rédaction SEO <em>(300–600 mots/page)</em>, retouches
        images et sourcing photos libres de droits. On peut aussi travailler à
        partir de vos éléments.
      </>
    ),
  },
  {
    q: "Puis-je payer en plusieurs fois ?",
    a: (
      <>
        Oui. Acompte <strong>30–50%</strong> à la commande, puis solde à la mise
        en ligne. Possibilité de plan en <strong>2–3 échéances</strong> sur les
        offres Pro/E-commerce.
      </>
    ),
  },
  {
    q: "RGPD et mentions légales sont-ils inclus ?",
    a: (
      <>
        Oui, une base <strong>RGPD</strong> (bannière cookies, mentions légales,
        politique de confidentialité) est incluse. Les textes juridiques avancés
        peuvent nécessiter une validation par votre conseil.
      </>
    ),
  },
  {
    q: "Hébergement & nom de domaine ?",
    a: (
      <>
        On peut gérer la mise en ligne (Vercel/OVH/Infomaniak) et vous garder la
        propriété du domaine. L’hébergement n’est pas inclus dans le prix des
        packs.
      </>
    ),
  },
  {
    q: "Travail à distance ou sur place (local) ?",
    a: (
      <>
        Les deux. <strong>Le Thuit-de-l’Oison</strong> & alentours pour le
        local ; visio/phone pour le reste de la France.
      </>
    ),
  },
  {
    q: "Maintenance et garanties ?",
    a: (
      <>
        Trois formules : <strong>Essentielle</strong> (49€),{" "}
        <strong>Pro</strong> (79€), <strong>Business</strong> (119€). Correctifs
        techniques inclus, petites évolutions selon le plan.
      </>
    ),
  },
];

export default function FAQ({ items = DEFAULT_FAQ }: { items?: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const panelsRef = useRef<Array<HTMLDivElement | null>>([]);

  // Recalcule la hauteur (utile si le contenu change ou au resize)
  useEffect(() => {
    const onResize = () => {
      if (open === null) return;
      const el = panelsRef.current[open];
      if (!el) return;
      el.style.maxHeight = el.scrollHeight + "px";
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const toggle = (i: number) => {
    setOpen((prev) => (prev === i ? null : i));
  };

  return (
    <section
      className="
        relative overflow-hidden
        mx-auto mt-10 max-w-6xl
        rounded-3xl bg-[#31343a]
        border border-[#23252c]
        shadow-[4px_4px_16px_#23252c,-4px_-4px_12px_#484c56,0_1px_0px_#16171b]
        px-6 py-8 md:px-10 md:py-10
      "
      aria-labelledby="faq-title"
    >
      {/* Liseré/Glow subtil en haut */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2c31] border border-[#3f434c] shadow-inner text-[11px] tracking-wider text-gray-200">
        <span className="inline-block w-2 h-2 rounded-full bg-[#7be8ff] shadow-[0_0_8px_#7be8ff]" />
        FAQ
      </div>

      <h2
        id="faq-title"
        className="mt-4 text-xl md:text-2xl font-extrabold text-white tracking-wide"
      >
        Questions fréquentes
      </h2>

      <ul className="mt-6 divide-y divide-[#3f434c]">
        {items.map((item, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          const btnId = `faq-btn-${i}`;

          return (
            <li key={i} className="py-3 first:pt-0 last:pb-0">
              <button
                id={btnId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => {
                  // Ferme l'ancien panel de façon animée
                  if (open !== null && panelsRef.current[open]) {
                    panelsRef.current[open]!.style.maxHeight = "0px";
                  }
                  // Ouvre le nouveau
                  requestAnimationFrame(() => {
                    toggle(i);
                    // on laisse React mettre à jour, puis on applique la hauteur
                    requestAnimationFrame(() => {
                      const el = panelsRef.current[i];
                      if (el) el.style.maxHeight = el.scrollHeight + "px";
                    });
                  });
                }}
                className="
                  w-full text-left flex items-start justify-between gap-4
                  text-white font-semibold tracking-wide
                  group
                "
              >
                <span className="text-sm md:text-base">{item.q}</span>
                <span
                  className="
                    shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-xl
                    border border-[#23252c] bg-[#2a2c31] text-gray-200
                    transition-transform duration-200 group-hover:scale-105
                  "
                  aria-hidden
                >
                  {/* + / – icon */}
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                ref={(el) => {
                  panelsRef.current[i] = el;
                }}
                style={{
                  maxHeight: isOpen ? undefined : 0,
                  transition:
                    "max-height 220ms ease, opacity 220ms ease, filter 220ms ease",
                  opacity: isOpen ? 1 : 0,
                  filter: isOpen ? "blur(0px)" : "blur(3px)",
                  overflow: "hidden",
                }}
                className="mt-1"
              >
                <div className="pt-3 text-sm md:text-[15px] text-gray-200">
                  {item.a}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Glow sous la carte */}
      <span className="pointer-events-none absolute left-1/2 -bottom-3 -translate-x-1/2 w-24 h-3 rounded-full bg-[#b8eaff] blur-[6px] opacity-70" />
    </section>
  );
}
