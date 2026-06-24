import type {
  CSSProperties,
  ReactNode,
} from "react";

import { SiteFooter } from "@/components/public/SiteFooter";
import { SiteHeader } from "@/components/public/SiteHeader";
import { WhatsappFloatingButton } from "@/components/public/WhatsappFloatingButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGlobalSeoMeta } from "@/features/seo/seo.queries";
import { getSiteSettings } from "@/lib/public-site";
import { buildOrganizationJsonLd } from "@/lib/seo/json-ld";
import { getSiteUrl } from "@/lib/seo/metadata";
import { buildWhatsAppUrl } from "@/lib/site-utils";

export default async function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [
    settings,
    globalSeo,
    siteUrl,
  ] = await Promise.all([
    getSiteSettings(),
    getGlobalSeoMeta(),
    getSiteUrl(),
  ]);

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

  const organizationJsonLd =
    buildOrganizationJsonLd({
      siteUrl,
      settings,
      schemaType:
        globalSeo?.schemaType,
    });

  return (
    <div
      className="public-site flex min-h-screen flex-col overflow-x-hidden text-slate-900"
      style={themeStyle}
    >
      <JsonLd
        id="organization-jsonld"
        data={
          organizationJsonLd
        }
      />

      <SiteHeader
        siteName={siteName}
        logoDark={
          settings?.logoDark
        }
        whatsappHref={
          whatsappHref
        }
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