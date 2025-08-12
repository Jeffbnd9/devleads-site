"use client";

import { useRouter } from "next/navigation";

export default function ProjetsComingSoon() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4">
      {/* Orbe décorative */}
      <div
        className="pointer-events-none absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] aspect-square rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(140,243,255,0.35), rgba(0,0,0,0) 65%)",
        }}
      />

      {/* Carte principale */}
      <div className="neocard neocard-hover w-full max-w-3xl text-center px-6 py-10 md:px-12 md:py-14 relative">
        {/* Liserés haut et bas */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2c31] border border-[#3f434c] shadow-inner text-xs tracking-wider text-gray-200 mb-5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#7be8ff] shadow-[0_0_8px_#7be8ff]" />
          PROJETS
        </div>

        {/* Titre */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide">
          Coming&nbsp;soon
        </h1>

        {/* Sous-titre */}
        <p className="mt-4 text-sm md:text-base text-gray-300">
          Notre galerie de réalisations arrive très bientôt.
        </p>

        {/* Animation points */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#b8eaff] opacity-70 animate-bounce" />
          <span className="w-2 h-2 rounded-full bg-[#b8eaff] opacity-70 animate-bounce [animation-delay:120ms]" />
          <span className="w-2 h-2 rounded-full bg-[#b8eaff] opacity-70 animate-bounce [animation-delay:240ms]" />
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => router.push("/contact")}
            className="neobutton neobutton-hover px-5 py-2.5"
          >
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
}
