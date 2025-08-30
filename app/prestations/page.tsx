import Link from "next/link";
import FAQ from "@/components/FAQ";
import SeoJsonLd from "@/components/SeoJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Prestations — Création de sites web (Le Thuit-de-l'Oison, Eure, Normandie)",
  description:
    "DevLeads conçoit des sites vitrines, e-commerce et solutions web sur-mesure. Performance, SEO local et accompagnement.",
  alternates: { canonical: "https://www.devleads.org/prestations" },
  openGraph: {
    title: "Prestations — DevLeads",
    description:
      "Sites vitrines, e-commerce et projets web sur-mesure. Performance & SEO.",
    url: "https://www.devleads.org/prestations",
    type: "website",
    images: [{ url: "/images/logo_devleads.png" }],
  },
};

const services = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Création de site vitrine",
    provider: { "@type": "LocalBusiness", name: "DevLeads" },
    areaServed: { "@type": "Place", name: "Eure, France" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Création de boutique e-commerce",
    provider: { "@type": "LocalBusiness", name: "DevLeads" },
    areaServed: { "@type": "Place", name: "Eure, France" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Développement web personnalisé",
    provider: { "@type": "LocalBusiness", name: "DevLeads" },
    areaServed: { "@type": "Place", name: "Normandie, France" },
  },
];

type Pack = {
  name: string;
  tagline: string;
  price: string;
  audience: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

export default function PrestationsPage() {
  const packs: Pack[] = [
    {
      name: "Vitrine Express",
      tagline: "Site rapide & mobile — livré en 10 jours",
      price: "300–1 500 €",
      audience: "Commerces & artisans / particulier",
      features: [
        "1 page scroll (ou 3 sections clés)",
        "Design Moderne",
        "Formulaire contact (mail + stockage Supabase)",
        "Perf & SEO de base (Lighthouse ≥ 90, sitemap, meta)",
        "Mentions légales + RGPD (v1)",
        "Analytics (Plausible/GA4)",
      ],
      ctaLabel: "Demander un audit gratuit (48 h)",
      ctaHref: "/contact",
    },
    {
      name: "Vitrine Pro Local SEO",
      tagline: "Conçu pour convertir & remonter sur les requêtes locales",
      price: "500–2 000 €",
      audience: "TPE locales (services, artisans, B2B)",
      features: [
        "5–7 pages (Home, Services, Réalisations, À propos, Contact…)",
        "Landing locale optimisée (ex. Elbeuf, Louviers)",
        "Formulaire avancé + tracking conversions",
        "Schema.org LocalBusiness, LCP < 2,5 s",
        "1 cas client (ou démo sectorielle) + FAQ",
        "Audit express + plan d’actions 90 jours (PDF)",
      ],
      ctaLabel: "Parler de mon projet",
      ctaHref: "/contact",
      highlighted: true,
    },
    {
      name: "E-commerce Starter + Landing Page",
      tagline: "Vendre en ligne simplement (10–50 produits)",
      price: "1 000–3 500 €",
      audience: "Petites boutiques",
      features: [
        "Catalogue, fiches produits, panier, paiement Stripe",
        "Pages légales e-commerce (CGV de base, retours, mentions)",
        "E-mails transactionnels (commande, expédition)",
        "SEO de base + performance + suivi conversion",
        "Formation 1 h (prise en main)",
      ],
      ctaLabel: "Obtenir une estimation",
      ctaHref: "/contact",
    },
  ];

  const options = [
    "Rédaction pages (SEO 300–600 mots) — 60–120 € / page",
    "Logo & mini-charte — 150–350 €",
    "Google Business Profile — 75 €",
    "Landing locale additionnelle — 180–300 €",
    "Intégration API (selon besoin) — 250–900 €",
  ];

  const maintenance = [
    {
      name: "Essentielle",
      price: "49 €/mois",
      items: ["Mises à jour mineures", "Sauvegardes", "30 min support"],
    },
    {
      name: "Pro",
      price: "79 €/mois",
      items: ["+ Perf & uptime", "Petites modifs mensuelles (3 modifications)"],
    },
    {
      name: "Business",
      price: "119 €/mois",
      items: ["+ 2 h d’évolutions", "Priorisation tickets"],
    },
  ];

  const ceoBonus = [
    "Session stratégique 30 min (dirigeant)",
    "Clarification offre & message (ICP)",
    "Plan d’actions 30/60/90 jours (PDF)",
    "Checklist SEO local (quick wins)",
    "Template Notion de suivi + priorités",
  ];

  return (
    <main className="w-full">
      <SeoJsonLd json={services} />
      {/* En-tête */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-black">
          Nos prestations
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
          Des sites modernes, rapides et conformes RGPD, pensés pour générer des
          demandes locales. Packs simples, délais courts, options à la carte.
        </p>
      </section>

      {/* Packs */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packs.map((p) => (
            <div key={p.name} className="neocard relative p-6">
              {/* Liserés haut/bas */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

              {/* Badges */}
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2c31] border border-[#3f434c] shadow-inner text-[11px] tracking-wider text-gray-200">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#7be8ff]" />
                  PACK
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2c31] border border-[#3f434c] shadow-inner text-[11px] tracking-wider text-gray-200">
                  {p.price}
                </div>
              </div>

              {/* Titre */}
              <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                {p.name}
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-300">
                {p.tagline}
              </p>
              <p className="mt-1 text-xs text-gray-400">Pour : {p.audience}</p>

              {/* Features */}
              <ul className="mt-6 space-y-2 text-gray-200">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#b8eaff]" />
                    <span className="text-sm md:text-[15px]">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <Link href={p.ctaHref}>
                  <button className="neobutton neobutton-hover w-full">
                    {p.ctaLabel}
                  </button>
                </Link>
              </div>

              {p.highlighted && (
                <div className="absolute left-6 top-6 rounded-full bg-[#ef4444] px-3 py-1 text-xs font-semibold text-white shadow">
                  RECOMMANDÉ
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Options */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="neocard mx-auto max-w-6xl relative p-6">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
          <h3 className="mt-2 text-xl md:text-2xl font-extrabold text-white">
            Options à la carte
          </h3>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200">
            {options.map((o) => (
              <li key={o} className="flex gap-2">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#b8eaff]" />
                <span className="text-sm">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Maintenance */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-black text-center m-10">
          Les options d&apos;abonnements
        </h1>
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {maintenance.map((m) => (
            <div key={m.name} className="neocard relative p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
              <h4 className="mt-2 text-xl font-extrabold text-white">
                {m.name}
              </h4>
              <p className="text-sm text-gray-300 mt-1">{m.price}</p>
              <ul className="mt-5 space-y-2 text-gray-200">
                {m.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#b8eaff]" />
                    <span className="text-sm">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[11px] text-gray-400">
          TVA non applicable, art. 293 B du CGI.
        </p>
        <div className="mt-8 text-center">
          <Link href="/contact">
            <button
              className="neobutton neobutton-hover"
              aria-label="Accéder à la page contact"
            >
              Vous hésitez ? Demandez un audit gratuit (48 h)
            </button>
          </Link>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
