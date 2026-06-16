"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/tentang-kami", label: "Tentang" },
    { href: "/layanan", label: "Layanan" },
    { href: "/daftar-client", label: "Client" },
    { href: "/retainer", label: "Retainer" },
    { href: "/tim", label: "Tim" },
    { href: "/artikel", label: "Artikel" },
    { href: "/kontak", label: "Kontak" },
];

type SiteHeaderProps = {
    siteName: string;
    logoDark?: string | null;
    whatsappHref: string;
};

export function SiteHeader({
    siteName,
    logoDark,
    whatsappHref,
}: SiteHeaderProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    function isActive(href: string) {
        if (href === "/") {
            return pathname === "/";
        }
        return (
            pathname === href ||
            pathname.startsWith(`${href}/`)
        );
    }

    return (
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-app flex min-h-16 items-center justify-between gap-3 sm:min-h-20">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <BrandLogo
          src={logoDark}
          siteName={siteName}
          variant="dark"
          />

          <span className="truncate font-bold text-slate-950">
            {siteName}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Navigasi utama"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition hover:text-amber-700 ${
                isActive(item.href)
                  ? "text-amber-700"
                  : "text-slate-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappHref}
            target={
              whatsappHref.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel={
              whatsappHref.startsWith("http")
                ? "noreferrer"
                : undefined
            }
            className="btn-primary text-sm"
          >
            Konsultasi
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-slate-900 lg:hidden"
          aria-label={
            isOpen ? "Tutup menu" : "Buka menu"
          }
          aria-expanded={isOpen}
          onClick={() =>
            setIsOpen((current) => !current)
          }
        >
          <span className="text-xl" aria-hidden="true">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav
            className="container-app grid gap-1 py-4"
            aria-label="Navigasi mobile"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-amber-50 text-amber-800"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={whatsappHref}
              target={
                whatsappHref.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                whatsappHref.startsWith("http")
                  ? "noreferrer"
                  : undefined
              }
              className="btn-primary mt-2 w-full"
              onClick={() => setIsOpen(false)}
            >
              Konsultasi WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
    )
}
