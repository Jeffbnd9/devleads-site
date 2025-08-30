"use client";

import Link from "next/link";
import Image from "next/image";

// Icônes SVG (remplacent @mui/icons-material/*)
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06C2 17.08 5.66 21.2 10.44 22v-7.03H7.9v-2.9h2.54v-2.2c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33V22C18.34 21.2 22 17.08 22 12.06Z"
      />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"
      />
    </svg>
  );
}
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6a2.5 2.5 0 0 1 2.48-2.5ZM3 8.98h4v12H3v-12ZM9.5 9h3.84v1.64h.05c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.54 4.8 5.85v5.44h-4v-4.83c0-1.15-.02-2.64-1.6-2.64-1.6 0-1.85 1.25-1.85 2.56v4.91h-4v-12Z"
      />
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8l8 6 8-6v10H4Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#31343a] text-white py-10 px-4 mt-20 border-t border-white relative">
      {/* Liseré lumineux bleu en haut (option, comme la nav/neo) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Bloc 1 - Logo & présentation */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image
            src="/images/logo_devleads.png"
            alt="Logo DevLeads - Développement Web"
            width={120}
            height={40}
            className="w-auto"
            priority
          />
          <p className="text-sm text-white max-w-xs">
            DevLeads conçoit des sites web sur-mesure pour particuliers et
            professionnels. Créativité, performance et accompagnement.
          </p>
        </div>

        {/* Bloc 2 - Navigation */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-lg font-medium text-[#E10600] mb-2">
            Navigation
          </h4>
          <Link href="/" className="text-white hover:text-red-500 transition">
            Accueil
          </Link>
          <Link
            href="/prestations"
            className="text-white hover:text-red-500 transition"
          >
            Prestations
          </Link>
          <Link
            href="/projets"
            className="text-white hover:text-red-500 transition"
          >
            Projets
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-red-500 transition"
          >
            Contact
          </Link>
        </div>

        {/* Bloc 3 - Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4 className="text-lg font-medium text-[#E10600] mb-2">
            Suivez-nous
          </h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 transition"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@devleads.org"
              aria-label="Mail"
              className="hover:text-gray-400 transition"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Informations légales */}
      <div className="border-t border-white mt-10 pt-6 text-sm text-white text-center space-y-2">
        <p>DevLeads - Le Thuit-de-l&apos;Oison, France</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-xs text-white">
          <Link href="/mentions" className="hover:text-red-500 transition">
            Mentions légales
          </Link>
          <Link href="/conf" className="hover:text-red-500 transition">
            Politique de confidentialité
          </Link>
          <Link href="/cgu" className="hover:text-red-500 transition">
            Conditions générales d&apos;utilisation (CGU)
          </Link>
        </div>
        <p>© {new Date().getFullYear()} DevLeads. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
