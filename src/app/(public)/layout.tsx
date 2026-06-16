import type {
  CSSProperties,
  ReactNode,
} from "react";

import { SiteFooter } from "@/components/public/SiteFooter";
import { SiteHeader } from "@/components/public/SiteHeader";
import { WhatsappFloatingButton } from "@/components/public/WhatsappFloatingButton";
import { getSiteSettings } from "@/lib/public-site";
import { buildWhatsAppUrl } from "@/lib/site-utils";

export default async function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  const settings =
    await getSiteSettings();

  const siteName =
    settings?.siteName ??
    "Diandra Law Firm";

  const whatsappHref =
    buildWhatsAppUrl(
      settings?.whatsappNumber,
      settings?.whatsappMessage,
    );

  const themeStyle = {
    "--brand":
      settings?.primaryColor ??
      "#0F172A",
    "--brand-accent":
      settings?.secondaryColor ??
      "#D4AF37",
  } as CSSProperties;

  return (
    <div
      className="public-site flex min-h-screen flex-col overflow-x-hidden bg-slate-50 text-slate-900"
      style={themeStyle}
    >
      <SiteHeader
        siteName={siteName}
        logoDark={settings?.logoDark}
        whatsappHref={whatsappHref}
      />

      <main className="flex-1">
        {children}
      </main>

      <SiteFooter
        siteName={siteName}
        siteTagline={
          settings?.siteTagline
        }
        logoLight={
          settings?.logoLight
        }
        email={settings?.email}
        phone={settings?.phone}
        officeAddress={
          settings?.officeAddress
        }
        footerText={
          settings?.footerText
        }
      />

      <WhatsappFloatingButton
        href={whatsappHref}
      />
    </div>
  );
}
