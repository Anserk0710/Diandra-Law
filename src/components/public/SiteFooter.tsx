import Link from "next/link";
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
        <footer className="bg-slate-950 text-slate-300">
          <div className="container-app grid gap-10 py-12 md:grid-cols-3">
            <div>
              <BrandLogo src={logoLight} siteName={siteName} variant="light" />
              <p className="text-xl font-bold text-white">
                {siteName}
              </p>

              <p className="mt-3 max-w-sm leading-7 text-slate-400">
                {siteTagline ??
                "Pendamping hukum profesional untuk bisnis dan individu."}
              </p>
            </div>

        <div>
          <p className="font-semibold text-white">
            Navigasi
          </p>

          <div className="mt-4 grid gap-2 text-sm">
            <Link
              href="/layanan"
              className="hover:text-amber-300"
            >
              Layanan
            </Link>

            <Link
              href="/tim"
              className="hover:text-amber-300"
            >
              Tim Lawyer
            </Link>

            <Link
              href="/artikel"
              className="hover:text-amber-300"
            >
              Artikel
            </Link>

            <Link
              href="/kontak"
              className="hover:text-amber-300"
            >
              Kontak
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">
            Hubungi Kami
          </p>

          <div className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
            {officeAddress ? <p>{officeAddress}</p> : null}
            {phone ? <p>{phone}</p> : null}
            {email ? <p>{email}</p> : null}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-app flex flex-col gap-3 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            {footerText ??
              `© ${new Date().getFullYear()} ${siteName}.`}
          </p>

          <Link
            href="/admin/login"
            className="hover:text-slate-300"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
    )
}
