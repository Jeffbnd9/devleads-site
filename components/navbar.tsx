"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import NeoButton from "@/components/NeoButton";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Prestations", path: "/prestations" },
  { label: "Projets", path: "/projets" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* BARRE FIXE CENTRÉE */}
      <div
        className="neocard fixed left-1/2 -translate-x-1/2 z-50
        top-5 rounded-2xl w-[90%] max-w-[1600px] px-3 py-2
        bg-[#31343a] border-[#23252c]
        shadow-[4px_4px_16px_#23252c,-4px_-4px_12px_#484c56,0_1px_0px_#16171b]"
      >
        <div className="flex items-center justify-between gap-2">
          {/* Burger (mobile) */}
          <div className="md:hidden">
            <NeoButton
              onClick={() => setOpen(true)}
              className="px-3 py-2"
              aria-label="Ouvrir le menu"
              type="button"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </NeoButton>
          </div>

          {/* Logo (desktop) */}
          <Link
            href="/"
            className="hidden md:inline-block bg-white rounded-xl px-3 py-1 transition-transform hover:scale-[1.12]"
            style={{ lineHeight: 0 }}
          >
            <Image
              src="/logo_devleads_transparent.png"
              alt="Logo DevLeads - Développement Web"
              width={120}
              height={40}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Link>

          {/* Liens desktop */}
          <div className="hidden md:flex items-center gap-4 mr-12">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <NeoButton
                  key={item.path}
                  onClick={() => go(item.path)}
                  active={active}
                  className="text-sm px-4 py-2 bg-[#31343a] border-[#23252c] relative overflow-visible"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-150 bg-[linear-gradient(120deg,transparent_35%,rgba(255,255,255,.18)_48%,rgba(150,235,255,.14)_62%,transparent_70%)] group-hover:opacity-100"
                  />
                  <span className="relative z-10">{item.label}</span>
                </NeoButton>
              );
            })}
          </div>

          <div className="md:hidden w-[44px]" />
        </div>
      </div>

      {/* DRAWER MOBILE */}
      {open && (
        <>
          <button
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40"
          />
          <div
            className="fixed z-50 top-0 left-0 h-dvh w-[200px]
            bg-[#2f3136] border-r border-[#23252c]
            shadow-[8px_0_24px_rgba(0,0,0,.35)] p-4
            animate-in slide-in-from-left duration-200"
          >
            <div className="my-3 flex justify-center">
              <Image
                src="/logo_devleads_transparent.png"
                alt="Logo DevLeads - Développement Web"
                width={120}
                height={40}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>

            <div className="h-px bg-[#3c3f46] my-2" />

            <nav className="mt-3 grid gap-3">
              {navItems.map((item) => {
                const active = pathname === item.path;
                return (
                  <NeoButton
                    key={item.path}
                    onClick={() => go(item.path)}
                    active={active}
                    className="w-full justify-center bg-[#31343a] border-2 font-bold tracking-wide"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-150 bg-[linear-gradient(120deg,transparent_35%,rgba(255,255,255,.18)_48%,rgba(150,235,255,.14)_62%,transparent_70%)]"
                      style={{ opacity: 0.9 }}
                    />
                    <span className="relative z-10">{item.label}</span>
                  </NeoButton>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
