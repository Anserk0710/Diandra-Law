"use client";

import Link from "next/link";
import {
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
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
  const isExternalWhatsapp =
    whatsappHref.startsWith("http");

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
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/92 shadow-sm shadow-slate-950/[0.03] backdrop-blur-xl">
      <div className="container-app flex min-h-18 items-center justify-between gap-3 sm:min-h-20">
        <Link
          href="/"
          className="group flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <BrandLogo
            src={logoDark}
            siteName={siteName}
            variant="dark"
          />
        </Link>

        <nav
          className="hidden items-center rounded-lg border border-slate-200 bg-slate-50/80 p-1 lg:flex"
          aria-label="Navigasi utama"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={
                isActive(item.href)
                  ? { color: "#ffffff" }
                  : undefined
              }
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${isActive(item.href)
                  ? "bg-[var(--brand)] !text-white shadow-sm"
                  : "text-slate-600 hover:bg-white hover:text-slate-950"
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
              isExternalWhatsapp
                ? "_blank"
                : undefined
            }
            rel={
              isExternalWhatsapp
                ? "noreferrer"
                : undefined
            }
            className="btn-primary px-4 text-sm"
          >
            <MessageCircle
              aria-hidden="true"
              className="h-4 w-4"
            />
            Konsultasi
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-900 shadow-sm transition hover:border-teal-600 hover:text-teal-700 lg:hidden"
          aria-label={
            isOpen ? "Tutup menu" : "Buka menu"
          }
          aria-expanded={isOpen}
          onClick={() =>
            setIsOpen((current) => !current)
          }
        >
          {isOpen ? (
            <X
              aria-hidden="true"
              className="h-5 w-5"
            />
          ) : (
            <Menu
              aria-hidden="true"
              className="h-5 w-5"
            />
          )}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200/80 bg-white/95 shadow-xl backdrop-blur-xl lg:hidden">
          <nav
            className="container-app grid gap-2 py-4"
            aria-label="Navigasi mobile"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={
                  isActive(item.href)
                    ? { color: "#ffffff" }
                    : undefined
                }
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${isActive(item.href)
                    ? "bg-[var(--brand)] !text-white"
                    : "text-slate-700 hover:bg-slate-100"
                  }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={whatsappHref}
              target={
                isExternalWhatsapp
                  ? "_blank"
                  : undefined
              }
              rel={
                isExternalWhatsapp
                  ? "noreferrer"
                  : undefined
              }
              className="btn-primary mt-2 w-full"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle
                aria-hidden="true"
                className="h-4 w-4"
              />
              Konsultasi WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
