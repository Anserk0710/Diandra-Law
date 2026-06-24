import "server-only";

import { toAbsoluteUrl } from "@/lib/seo/metadata";

type SiteSettingsLike = {
  siteName?: string | null;
  siteTagline?: string | null;
  logoLight?: string | null;
  logoDark?: string | null;
  email?: string | null;
  phone?: string | null;
  officeAddress?: string | null;
};

export function buildOrganizationJsonLd({
  siteUrl,
  settings,
  schemaType,
}: {
  siteUrl: string;
  settings: SiteSettingsLike | null;
  schemaType?: string | null;
}) {
  const allowedTypes = new Set([
    "LegalService",
    "ProfessionalService",
    "Organization",
  ]);

  const resolvedType =
    schemaType &&
    allowedTypes.has(schemaType)
      ? schemaType
      : "LegalService";

  const logo =
    settings?.logoDark ??
    settings?.logoLight;

  return {
    "@context":
      "https://schema.org",

    "@type":
      resolvedType,

    "@id":
      `${siteUrl}/#organization`,

    name:
      settings?.siteName ??
      "Diandra Law Firm",

    url: siteUrl,

    description:
      settings?.siteTagline ??
      undefined,

    logo: logo
      ? toAbsoluteUrl(
          siteUrl,
          logo,
        )
      : undefined,

    image: logo
      ? toAbsoluteUrl(
          siteUrl,
          logo,
        )
      : undefined,

    email:
      settings?.email ??
      undefined,

    telephone:
      settings?.phone ??
      undefined,

    address:
      settings?.officeAddress
        ? {
            "@type":
              "PostalAddress",

            streetAddress:
              settings.officeAddress,

            addressCountry:
              "ID",
          }
        : undefined,
  };
}

export function buildBreadcrumbJsonLd({
  siteUrl,
  items,
}: {
  siteUrl: string;

  items: Array<{
    name: string;
    path: string;
  }>;
}) {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "BreadcrumbList",

    itemListElement:
      items.map(
        (item, index) => ({
          "@type":
            "ListItem",

          position:
            index + 1,

          name:
            item.name,

          item:
            toAbsoluteUrl(
              siteUrl,
              item.path,
            ),
        }),
      ),
  };
}

export function buildServiceJsonLd({
  siteUrl,
  service,
  schemaType,
}: {
  siteUrl: string;

  service: {
    title: string;
    slug: string;
    summary: string;
    coverImage?:
      | string
      | null;
  };

  schemaType?: string | null;
}) {
  const allowedTypes = new Set([
    "LegalService",
    "ProfessionalService",
    "Service",
  ]);

  const resolvedType =
    schemaType &&
    allowedTypes.has(schemaType)
      ? schemaType
      : "LegalService";

  return {
    "@context":
      "https://schema.org",

    "@type":
      resolvedType,

    name:
      service.title,

    description:
      service.summary,

    url:
      toAbsoluteUrl(
        siteUrl,
        `/layanan/${service.slug}`,
      ),

    image:
      service.coverImage
        ? toAbsoluteUrl(
            siteUrl,
            service.coverImage,
          )
        : undefined,

    provider: {
      "@id":
        `${siteUrl}/#organization`,
    },

    areaServed: {
      "@type":
        "Country",

      name:
        "Indonesia",
    },
  };
}

export function buildFaqJsonLd(
  faqs: Array<{
    question: string;
    answer: string;
  }>,
) {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "FAQPage",

    mainEntity:
      faqs.map((faq) => ({
        "@type":
          "Question",

        name:
          faq.question,

        acceptedAnswer: {
          "@type":
            "Answer",

          text:
            faq.answer,
        },
      })),
  };
}

export function buildPersonJsonLd({
  siteUrl,
  lawyer,
}: {
  siteUrl: string;

  lawyer: {
    name: string;
    slug: string;
    photo?: string | null;
    position: string;
    shortBio: string;
    specialty: string;
  };
}) {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "Person",

    name:
      lawyer.name,

    url:
      toAbsoluteUrl(
        siteUrl,
        `/tim/${lawyer.slug}`,
      ),

    image:
      lawyer.photo
        ? toAbsoluteUrl(
            siteUrl,
            lawyer.photo,
          )
        : undefined,

    jobTitle:
      lawyer.position,

    description:
      lawyer.shortBio,

    knowsAbout:
      lawyer.specialty,

    worksFor: {
      "@id":
        `${siteUrl}/#organization`,
    },
  };
}

export function buildArticleJsonLd({
  siteUrl,
  siteName,
  article,
}: {
  siteUrl: string;
  siteName: string;

  article: {
    title: string;
    slug: string;
    excerpt?: string | null;
    thumbnail?: string | null;
    publishedAt?: Date | null;
    createdAt: Date;
    updatedAt: Date;
  };
}) {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "Article",

    headline:
      article.title,

    description:
      article.excerpt ??
      undefined,

    url:
      toAbsoluteUrl(
        siteUrl,
        `/artikel/${article.slug}`,
      ),

    image:
      article.thumbnail
        ? [
            toAbsoluteUrl(
              siteUrl,
              article.thumbnail,
            ),
          ]
        : undefined,

    datePublished:
      (
        article.publishedAt ??
        article.createdAt
      ).toISOString(),

    dateModified:
      article.updatedAt
        .toISOString(),

    author: {
      "@type":
        "Organization",

      name:
        siteName,

      "@id":
        `${siteUrl}/#organization`,
    },

    publisher: {
      "@type":
        "Organization",

      name:
        siteName,

      "@id":
        `${siteUrl}/#organization`,
    },

    mainEntityOfPage: {
      "@type":
        "WebPage",

      "@id":
        toAbsoluteUrl(
          siteUrl,
          `/artikel/${article.slug}`,
        ),
    },
  };
}