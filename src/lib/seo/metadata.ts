import "server-only";

import type { Metadata } from "next";
import { cache } from "react";

import {
  getEntitySeoMeta,
  getGlobalSeoMeta,
} from "@/features/seo/seo.queries";
import type { SeoEntityType } from "@/features/seo/seo.types";
import {
  getPublishedPage,
  getSiteSettings,
} from "@/lib/public-site";

type SeoMetaLike = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogImage?: string | null;
  canonicalUrl?: string | null;
  robots?: string | null;
  schemaType?: string | null;
};

type BuildMetadataInput = {
  fallbackTitle: string;
  fallbackDescription: string;
  path: string;
  fallbackImage?: string | null;
  seo?: SeoMetaLike | null;
  type?: "website" | "article";
  publishedTime?: Date | null;
  modifiedTime?: Date | null;
};

function isAbsoluteHttpUrl(
  value: string,
) {
  try {
    const url = new URL(value);

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    );
  } catch {
    return false;
  }
}

function normalizeSiteUrl(
  value: string,
) {
  return value.replace(/\/+$/, "");
}

function normalizeDescription(
  value: string,
) {
  return value
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 500);
}

function buildAutomaticTitle(
  pageTitle: string,
  siteName: string,
) {
  const normalizedPageTitle =
    pageTitle.trim();

  const normalizedSiteName =
    siteName
      .trim()
      .toLocaleLowerCase("id-ID");

  if (
    normalizedPageTitle
      .toLocaleLowerCase("id-ID")
      .includes(normalizedSiteName)
  ) {
    return normalizedPageTitle;
  }

  return `${normalizedPageTitle} | ${siteName}`;
}

function robotsFromValue(
  value?: string | null,
): Metadata["robots"] {
  const normalized =
    value ?? "index,follow";

  return {
    index:
      !normalized.includes(
        "noindex",
      ),

    follow:
      !normalized.includes(
        "nofollow",
      ),
  };
}

export const getSiteSeoContext =
  cache(async () => {
    try {
      const [
        settings,
        globalSeo,
      ] = await Promise.all([
        getSiteSettings(),
        getGlobalSeoMeta(),
      ]);

      const siteName =
        settings?.siteName ??
        "Diandra Law Firm";

      const configuredSiteUrl =
        globalSeo?.canonicalUrl?.trim() ||
        process.env
          .NEXT_PUBLIC_SITE_URL?.trim() ||
        "http://localhost:3000";

      const siteUrl =
        isAbsoluteHttpUrl(
          configuredSiteUrl,
        )
          ? normalizeSiteUrl(
              configuredSiteUrl,
            )
          : "http://localhost:3000";

      return {
        settings,
        globalSeo,
        siteName,
        siteUrl,

        defaultDescription:
          globalSeo
            ?.metaDescription ??
          settings?.siteTagline ??
          "Pendamping hukum profesional untuk bisnis dan individu.",
      };
    } catch (error) {
      console.error(
        "Gagal membaca konteks SEO website:",
        error,
      );

      const environmentUrl =
        process.env
          .NEXT_PUBLIC_SITE_URL?.trim();

      return {
        settings: null,
        globalSeo: null,

        siteName:
          "Diandra Law Firm",

        siteUrl:
          environmentUrl &&
          isAbsoluteHttpUrl(
            environmentUrl,
          )
            ? normalizeSiteUrl(
                environmentUrl,
              )
            : "http://localhost:3000",

        defaultDescription:
          "Pendamping hukum profesional untuk bisnis dan individu.",
      };
    }
  });

export async function getSiteUrl() {
  const context =
    await getSiteSeoContext();

  return context.siteUrl;
}

export function toAbsoluteUrl(
  siteUrl: string,
  value: string,
) {
  if (isAbsoluteHttpUrl(value)) {
    return value;
  }

  const normalizedPath =
    value.startsWith("/")
      ? value
      : `/${value}`;

  return `${normalizeSiteUrl(
    siteUrl,
  )}${normalizedPath}`;
}

export async function buildRootMetadata(): Promise<Metadata> {
  const context =
    await getSiteSeoContext();

  const title =
    context.globalSeo?.metaTitle ??
    context.siteName;

  const description =
    normalizeDescription(
      context.defaultDescription,
    );

  const ogImage =
    context.globalSeo?.ogImage
      ? toAbsoluteUrl(
          context.siteUrl,
          context.globalSeo
            .ogImage,
        )
      : undefined;

  return {
    metadataBase: new URL(
      context.siteUrl,
    ),

    title: {
      default: title,
      template: `%s | ${context.siteName}`,
    },

    description,

    alternates: {
      canonical:
        context.siteUrl,
    },

    robots: robotsFromValue(
      context.globalSeo?.robots,
    ),

    openGraph: {
      type: "website",
      siteName:
        context.siteName,
      title,
      description,
      url: context.siteUrl,

      images: ogImage
        ? [
            {
              url: ogImage,
              alt: title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: ogImage
        ? "summary_large_image"
        : "summary",

      title,
      description,

      images: ogImage
        ? [ogImage]
        : undefined,
    },
  };
}

export async function buildSeoMetadata({
  fallbackTitle,
  fallbackDescription,
  path,
  fallbackImage,
  seo,
  type = "website",
  publishedTime,
  modifiedTime,
}: BuildMetadataInput): Promise<Metadata> {
  const context =
    await getSiteSeoContext();

  const title =
    seo?.metaTitle?.trim()
      ? seo.metaTitle.trim()
      : buildAutomaticTitle(
          fallbackTitle,
          context.siteName,
        );

  const description =
    normalizeDescription(
      seo?.metaDescription?.trim() ||
        fallbackDescription ||
        context.defaultDescription,
    );

  const configuredCanonical =
    seo?.canonicalUrl?.trim();

  const canonical =
    configuredCanonical &&
    isAbsoluteHttpUrl(
      configuredCanonical,
    )
      ? configuredCanonical
      : toAbsoluteUrl(
          context.siteUrl,
          path,
        );

  const imageValue =
    seo?.ogImage?.trim() ||
    fallbackImage?.trim() ||
    context.globalSeo
      ?.ogImage?.trim();

  const image = imageValue
    ? toAbsoluteUrl(
        context.siteUrl,
        imageValue,
      )
    : undefined;

  const commonOpenGraph = {
    siteName:
      context.siteName,

    title,
    description,
    url: canonical,

    images: image
      ? [
          {
            url: image,
            alt: title,
          },
        ]
      : undefined,
  };

  const openGraph:
    Metadata["openGraph"] =
    type === "article"
      ? {
          ...commonOpenGraph,

          type: "article",

          publishedTime:
            publishedTime?.toISOString(),

          modifiedTime:
            modifiedTime?.toISOString(),
        }
      : {
          ...commonOpenGraph,
          type: "website",
        };

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical,
    },

    robots: robotsFromValue(
      seo?.robots ??
        context.globalSeo
          ?.robots,
    ),

    openGraph,

    twitter: {
      card: image
        ? "summary_large_image"
        : "summary",

      title,
      description,

      images: image
        ? [image]
        : undefined,
    },
  };
}

export async function buildStaticPageMetadata({
  pageKey,
  path,
  fallbackTitle,
  fallbackDescription,
  fallbackImage,
}: {
  pageKey: string;
  path: string;
  fallbackTitle: string;
  fallbackDescription: string;
  fallbackImage?: string | null;
}) {
  const page =
    await getPublishedPage(
      pageKey,
    );

  const seo = page
    ? await getEntitySeoMeta(
        "page",
        page.id,
      )
    : null;

  return buildSeoMetadata({
    fallbackTitle:
      page?.title ??
      fallbackTitle,

    fallbackDescription,

    fallbackImage,

    path,

    seo,

    modifiedTime:
      page?.updatedAt,
  });
}

export async function getSeoForEntity(
  entityType: SeoEntityType,
  entityId: bigint,
) {
  return getEntitySeoMeta(
    entityType,
    entityId,
  );
}

export function buildNotFoundMetadata(): Metadata {
  return {
    title:
      "Halaman Tidak Ditemukan",

    robots: {
      index: false,
      follow: false,
    },
  };
}