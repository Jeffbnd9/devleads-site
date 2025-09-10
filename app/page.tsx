"use client";

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      {/* SECTION 1 — Intro + CTA + Logos + Mockup */}
      <section
        className="
          min-h-screen
          grid grid-cols-1 grid-rows-none
          md:grid-cols-4 md:grid-rows-5
          gap-4
          px-2 md:px-4
          py-15 md:py-0
          w-full max-w-7xl mx-auto
        "
      >
        {/* Bloc 1 — Intro */}
        <div className="relative order-1 md:order-none md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-4 md:mt-15 flex flex-col justify-end">
          <div className="mb-5 mt-4 w-full flex justify-start hidden xl:block">
            <Image
              src="/logo_devleads_transparent.png"
              alt="Logo DevLeads - Développement Web"
              width={300}
              height={80}
              priority
              className="w-44 md:w-[300px] object-contain"
            />
          </div>

          <h2
            className={`text-2xl md:text-4xl lg:text-[40px] mb-5 ${poppins.className} text-left max-w-xl text-black`}
          >
            Votre partenaire digital pour des solutions web personnalisées
          </h2>

          <p
            className={`text-base md:text-lg ${poppins.className} text-left max-w-xl text-gray-600`}
          >
            Chez DevLeads, nous transformons vos idées en expériences numériques
            puissantes. Spécialisés dans le développement web sur mesure, nous
            créons des sites performants, esthétiques et optimisés pour les
            résultats.
          </p>
        </div>

        {/* Bloc 2 — CTA */}
        <div className="neocard relative order-2 md:order-none md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-6 flex items-center justify-center">
          {/* Liserés */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

          <Link
            href="/contact"
            className="neobutton neobutton-hover text-lg md:text-2xl py-3 text-center"
            aria-label="Accéder à la page contact"
          >
            Consultation / Devis GRATUIT
          </Link>
        </div>

        {/* Bloc 3 — Mockup */}
        <div className="neocard relative order-4 md:order-none md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-6 flex items-center justify-center">
          {/* Liserés */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

          <div className="w-full flex justify-center transition-transform duration-300 ease-out hover:scale-[1.03] hover:[transform:rotate(0.5deg)]">
            <Image
              src="/images/mac_tesla.png"
              alt="Mockup Mac Tesla"
              width={700}
              height={300}
              priority
              className="rounded-lg w-full max-w-md md:max-w-xl"
              style={{ height: "auto" }}
            />
          </div>
        </div>

        {/* Bloc 4 — Logos prestations */}
        <div className=" relative order-3 md:order-none md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3 flex flex-col items-center justify-end gap-5 mt-2 md:mt-4">
          <Image
            src="/images/logo_site_vitrine.png"
            alt="DevLeads - Développement Site vitrine"
            width={250}
            height={120}
            priority
            className="w-50 md:w-[150px] lg:w-[225px]"
          />
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <Image
              src="/images/logo_site_commerce.png"
              alt="DevLeads - Développement Site e-commerce"
              width={250}
              height={120}
              priority
              className="w-50 md:w-[150px] lg:w-[225px]"
            />
            <Image
              src="/images/logo_site_perso.png"
              alt="DevLeads - Développement Site personnalisé"
              width={250}
              height={100}
              priority
              className="w-50 md:w-[150px] lg:w-[225px]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — Offre (3 NeoCards) */}
      <section className="min-h-screen mt-15 grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-5 gap-5 w-full max-w-7xl mx-auto px-2 md:px-4 py-10 md:py-0">
        {/* Titre section */}
        <div className="col-start-1 md:col-end-4 row-start-1 row-end-2 flex justify-center items-center">
          <h2
            className={`w-full md:w-[1000px] text-center text-2xl md:text-5xl lg:text-7xl font-bold text-black z-10 mt-10 md:mt-20 pb-6 md:pb-10 border-b border-[#3a3d45] ${poppins.className}`}
          >
            Conception WEB
          </h2>
        </div>

        {/* Vitrine */}
        <div className="neocard neocard-hover relative col-start-1 col-end-2 row-start-2 row-end-6 text-center">
          {/* Liserés */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

          <div className="flex flex-col items-center">
            <Image
              src="/images/img_vitrine.png"
              alt="DevLeads - Site Vitrine"
              width={70}
              height={70}
              className="mb-4 w-16 md:w-[70px]"
              style={{ height: "auto" }}
              loading="lazy"
            />
            <h3 className="text-xl md:text-4xl font-bold text-white mb-2 md:mb-4">
              Conception de sites web
            </h3>
            <p className="text-sm md:text-2xl text-gray-200 mb-2 mt-10">
              Nous concevons des sites modernes, rapides et pensés pour la
              conversion. Nos sites vitrines sont optimisés pour refléter votre
              image et atteindre vos objectifs.
            </p>
            <p className="md:text-xl text-gray-400">
              Que ce soit pour un événement, une landing page ou un portfolio
              professionnel, nous garantissons un design unique, responsive et
              engageant pour vos visiteurs.
            </p>
          </div>

          {/* Marqueurs */}
          <div className="w-full mt-8 space-y-2 overflow-hidden">
            <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] text-xs md:text-sm text-[#7be8ff] font-semibold">
              <span className="inline-block mx-3">Site Vitrine</span>
              <span className="inline-block mx-3">Landing Page</span>
              <span className="inline-block mx-3">Portfolio</span>
              <span className="inline-block mx-3">One Page</span>
              <span className="inline-block mx-3">Événementiel</span>
              <span className="inline-block mx-3">Responsive</span>
            </div>
            <div className="whitespace-nowrap animate-[marquee-reverse_24s_linear_infinite] text-xs md:text-sm text-[#9cc6ff] font-semibold">
              <span className="inline-block mx-3">HTML</span>
              <span className="inline-block mx-3">Next.js</span>
              <span className="inline-block mx-3">UI/UX</span>
              <span className="inline-block mx-3">Design</span>
              <span className="inline-block mx-3">Animations</span>
              <span className="inline-block mx-3">Accessibilité</span>
            </div>
          </div>
        </div>

        {/* E-commerce */}
        <div className="neocard neocard-hover relative col-start-1 md:col-start-2 md:col-end-3 row-start-6 md:row-start-2 md:row-end-6 text-center">
          {/* Liserés */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

          <div className="flex flex-col items-center">
            <Image
              src="/images/img_commerce.png"
              alt="DevLeads - E-commerce"
              width={70}
              height={70}
              className="mb-4 w-16 md:w-[70px]"
              style={{ height: "auto" }}
              loading="lazy"
            />
            <h3 className="text-xl md:text-4xl font-bold text-white mb-2 md:mb-4">
              Boutiques en ligne modernes
            </h3>
            <p className="text-sm md:text-2xl text-gray-200 mb-2 mt-10">
              Des e-commerces performants, sécurisés et évolutifs pour booster
              vos ventes. Intégration de solutions de paiement comme Stripe ou
              PayPal.
            </p>
            <p className="md:text-xl text-gray-400">
              Gestion simplifiée du catalogue produits, commandes en temps réel
              et suivi des performances pour optimiser votre stratégie
              commerciale.
            </p>
          </div>

          {/* Marqueurs */}
          <div className="w-full mt-8 space-y-2 overflow-hidden">
            <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] text-xs md:text-sm text-[#b8eaff] font-semibold">
              <span className="inline-block mx-3">E-commerce</span>
              <span className="inline-block mx-3">Stripe</span>
              <span className="inline-block mx-3">Paiement sécurisé</span>
              <span className="inline-block mx-3">Catalogue</span>
              <span className="inline-block mx-3">Vente en ligne</span>
            </div>
            <div className="whitespace-nowrap animate-[marquee-reverse_24s_linear_infinite] text-xs md:text-sm text-[#b8eaff] font-semibold">
              <span className="inline-block mx-3">Produits</span>
              <span className="inline-block mx-3">Commandes</span>
              <span className="inline-block mx-3">Livraison</span>
              <span className="inline-block mx-3">Dashboard</span>
              <span className="inline-block mx-3">Next.js</span>
            </div>
          </div>
        </div>

        {/* Sur-mesure */}
        <div className="neocard neocard-hover relative col-start-1 md:col-start-3 md:col-end-4 row-start-7 md:row-start-2 md:row-end-6 text-center">
          {/* Liserés */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

          <div className="flex flex-col items-center">
            <Image
              src="/images/img_perso.png"
              alt="DevLeads - Sur-mesure"
              width={70}
              height={70}
              className="mb-4 w-16 md:w-[70px]"
              style={{ height: "auto" }}
              loading="lazy"
            />
            <h3 className="text-xl md:text-4xl font-bold text-white mb-2 md:mb-4">
              L&apos;envie de votre choix&nbsp;?
            </h3>
            <p className="text-sm md:text-2xl text-gray-200 mb-2 mt-10">
              Vous avez un concept unique ? Nous développons des solutions 100 %
              personnalisées pour vos besoins spécifiques.
            </p>
            <p className="md:text-xl text-gray-400">
              Du SaaS au tableau de bord interne, en passant par
              l’automatisation et les API sur mesure, notre expertise couvre
              toutes les possibilités.
            </p>
          </div>

          {/* Marqueurs */}
          <div className="w-full mt-8 space-y-2 overflow-hidden">
            <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] text-xs md:text-sm text-[#ffd0f0] font-semibold">
              <span className="inline-block mx-3">Sur-mesure</span>
              <span className="inline-block mx-3">Dashboard</span>
              <span className="inline-block mx-3">Admin Panel</span>
              <span className="inline-block mx-3">API REST</span>
              <span className="inline-block mx-3">Automatisation</span>
            </div>
            <div className="whitespace-nowrap animate-[marquee-reverse_24s_linear_infinite] text-xs md:text-sm text-[#ffd0f0] font-semibold">
              <span className="inline-block mx-3">SaaS</span>
              <span className="inline-block mx-3">Client Privé</span>
              <span className="inline-block mx-3">Intranet</span>
              <span className="inline-block mx-3">Portail sécurisé</span>
              <span className="inline-block mx-3">Composants UI</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Technologies */}
      <section className="min-h-screen flex flex-col items-center justify-center px-2 md:px-4 py-16 md:py-28 w-full">
        <div className="neocard relative w-full max-w-4xl text-center">
          {/* Liserés */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Technologies avec lesquelles nous travaillons
          </h1>
          <div className="w-16 md:w-32 h-[2px] bg-[#7be8ff] my-4 mx-auto opacity-70" />
          <h2 className="text-gray-200 text-base md:text-2xl mb-10">
            Technologies de programmation pour la conception et le développement
            web
          </h2>

          <div className="mx-auto w-full max-w-[800px] transition-transform duration-300 ease-out hover:scale-[1.03]">
            <Image
              src="/images/tech_web.png"
              alt="Compétences DevLeads"
              width={800}
              height={450}
              className="w-full border border-[#454953] rounded-xl shadow-[4px_4px_16px_#23252c,-4px_-4px_12px_#3a3d45]"
              style={{ height: "auto" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
