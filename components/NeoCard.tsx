// components/ui/NeoCard.tsx
"use client";

type NeoCardProps = {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
};

export default function NeoCard({
  children,
  className = "",
  padded = true,
}: NeoCardProps) {
  return (
    <div
      className={
        "rounded-3xl bg-[#31343a] border border-[#23252c] " +
        "shadow-[4px_4px_16px_#23252c,-4px_-4px_12px_#484c56,0_1px_0px_#16171b] " +
        "relative overflow-hidden " +
        (padded ? " md:px-8 md:py-5 " : "") +
        className
      }
    >
      {/* Liseré / Glow subtil en haut */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />
      {children}
      {/* Glow sous la carte */}
      <span className="pointer-events-none absolute left-1/2 -bottom-3 -translate-x-1/2 w-24 h-3 rounded-full bg-[#b8eaff] blur-[6px] opacity-70" />
    </div>
  );
}
