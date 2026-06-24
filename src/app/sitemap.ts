import type { MetadataRoute } from "next";

import { prisma } from "@/lib/db/prisma";
import {
  getSiteUrl,
  toAbsoluteUrl,
} from "@/lib/seo/metadata";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl =
    await getSiteUrl();

  const staticEntries:
    MetadataRoute.Sitemap = [
    {
      url: toAbsoluteUrl(
        siteUrl,
        "/",
      ),
      changeFrequency:
        "weekly",
      priority: 1,
    },

    {
      url: toAbsoluteUrl(
        siteUrl,
        "/tentang-kami",
      ),
      changeFrequency:
        "monthly",
      priority: 0.8,
    },

    {
      url: toAbsoluteUrl(
        siteUrl,
        "/layanan",
      ),
      changeFrequency:
        "weekly",
      priority: 0.9,
    },

    {
      url: toAbsoluteUrl(
        siteUrl,
        "/daftar-client",
      ),
      changeFrequency:
        "monthly",
      priority: 0.7,
    },

    {
      url: toAbsoluteUrl(
        siteUrl,
        "/retainer",
      ),
      changeFrequency:
        "monthly",
      priority: 0.8,
    },

    {
      url: toAbsoluteUrl(
        siteUrl,
        "/tim",
      ),
      changeFrequency:
        "monthly",
      priority: 0.8,
    },

    {
      url: toAbsoluteUrl(
        siteUrl,
        "/artikel",
      ),
      changeFrequency:
        "weekly",
      priority: 0.8,
    },

    {
      url: toAbsoluteUrl(
        siteUrl,
        "/kontak",
      ),
      changeFrequency:
        "monthly",
      priority: 0.8,
    },
  ];

  try {
    const [
      services,
      lawyers,
      articles,
    ] = await Promise.all([
      prisma.service.findMany({
        where: {
          status: "published",
        },

        select: {
          slug: true,
          updatedAt: true,
        },
      }),

      prisma.lawyer.findMany({
        where: {
          status: "published",
        },

        select: {
          slug: true,
          updatedAt: true,
        },
      }),

      prisma.article.findMany({
        where: {
          status: "published",
        },

        select: {
          slug: true,
          updatedAt: true,
        },
      }),
    ]);

    const serviceEntries =
      services.map((service) => ({
        url: toAbsoluteUrl(
          siteUrl,
          `/layanan/${service.slug}`,
        ),

        lastModified:
          service.updatedAt,

        changeFrequency:
          "monthly" as const,

        priority: 0.8,
      }));

    const lawyerEntries =
      lawyers.map((lawyer) => ({
        url: toAbsoluteUrl(
          siteUrl,
          `/tim/${lawyer.slug}`,
        ),

        lastModified:
          lawyer.updatedAt,

        changeFrequency:
          "monthly" as const,

        priority: 0.7,
      }));

    const articleEntries =
      articles.map((article) => ({
        url: toAbsoluteUrl(
          siteUrl,
          `/artikel/${article.slug}`,
        ),

        lastModified:
          article.updatedAt,

        changeFrequency:
          "monthly" as const,

        priority: 0.7,
      }));

    return [
      ...staticEntries,
      ...serviceEntries,
      ...lawyerEntries,
      ...articleEntries,
    ];
  } catch (error) {
    console.error(
      "Gagal membuat sitemap dinamis:",
      error,
    );

    return staticEntries;
  }
}