import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";

type SiteFooterProps = {
  siteName: string;
  siteTagline?: string | null;
  logoLight?: string | null;
  email?: string | null;
  phone?: string | null;
  officeAddress?: string | null;
  footerText?: string | null;
};

const footerLinks = [
  { href: "/layanan", label: "Layanan" },
  { href: "/retainer", label: "Retainer" },
  { href: "/tim", label: "Tim Lawyer" },
  { href: "/artikel", label: "Artikel" },
  { href: "/kontak", label: "Kontak" },
];

function normalizeFooterText(
  value: string | null | undefined,
  siteName: string,
) {
  const fallback = `${"\u00a9"} ${new Date().getFullYear()} ${siteName}.`;

  return (value || fallback).replace(
    "\u00c2\u00a9",
    "\u00a9",
  );
}

export function SiteFooter({
  siteName,
  siteTagline,
  logoLight,
  email,
  phone,
  officeAddress,
  footerText,
}: SiteFooterProps) {
  return (
    <footer className="dark-section text-slate-300">
      <div className="container-app py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.75fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo
                src={logoLight}
                siteName={siteName}
                variant="light"
              />

              <div>
                <p className="text-xl font-black text-white">
                  {siteName}
                </p>
                <p className="text-xs font-semibold uppercase text-[var(--brand-accent-soft)]">
                  Legal services
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md leading-7 text-slate-300">
              {siteTagline ??
                "Pendamping hukum profesional untuk bisnis dan individu."}
            </p>
          </div>

          <div>
            <p className="font-semibold text-white">
              Navigasi
            </p>

            <div className="mt-4 grid gap-2 text-sm">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex w-fit items-center gap-2 text-slate-300 transition hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[var(--brand-accent)]"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">
              Hubungi Kami
            </p>

            <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
              {officeAddress ? (
                <p className="flex gap-3 whitespace-pre-line">
                  <MapPin
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-accent)]"
                  />
                  {officeAddress}
                </p>
              ) : null}
              {phone ? (
                <p className="flex items-center gap-3">
                  <Phone
                    aria-hidden="true"
                    className="h-4 w-4 text-[var(--brand-accent)]"
                  />
                  {phone}
                </p>
              ) : null}
              {email ? (
                <p className="flex items-center gap-3">
                  <Mail
                    aria-hidden="true"
                    className="h-4 w-4 text-[var(--brand-accent)]"
                  />
                  {email}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-app py-5 text-sm text-slate-400">
          <p>
            {normalizeFooterText(
              footerText,
              siteName,
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
