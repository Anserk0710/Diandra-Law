import type { Metadata } from "next";

import { getGlobalSeoMeta } from "@/features/seo/seo.queries";
import { getSiteSettings } from "@/lib/public-site";

export async function buildGlobalMetadata(): Promise<Metadata> {
  try {
    const [seo, settings] =
      await Promise.all([
        getGlobalSeoMeta(),
        getSiteSettings(),
      ]);

    const siteName =
      settings?.siteName ??
      "Diandra Law Firm";

    const title =
      seo?.metaTitle ?? siteName;

    const description =
      seo?.metaDescription ??
      settings?.siteTagline ??
      "Pendamping hukum profesional untuk bisnis dan individu.";

    const canonicalUrl =
      seo?.canonicalUrl ?? undefined;

    return {
      metadataBase: canonicalUrl
        ? new URL(canonicalUrl)
        : undefined,

      title: {
        default: title,
        template: `%s | ${siteName}`,
      },

      description,

      alternates: canonicalUrl
        ? {
            canonical: canonicalUrl,
          }
        : undefined,

      robots:
        seo?.robots ??
        "index,follow",

      openGraph: {
        type: "website",
        siteName,
        title,
        description,
        url: canonicalUrl,
        images: seo?.ogImage
          ? [
              {
                url: seo.ogImage,
              },
            ]
          : undefined,
      },

      twitter: {
        card: seo?.ogImage
          ? "summary_large_image"
          : "summary",
        title,
        description,
        images: seo?.ogImage
          ? [seo.ogImage]
          : undefined,
      },
    };
  } catch (error) {
    console.error(
      "Gagal membaca metadata global:",
      error,
    );

    return {
      title: {
        default: "Diandra Law Firm",
        template:
          "%s | Diandra Law Firm",
      },
      description:
        "Website company profile firma hukum.",
    };
  }
}