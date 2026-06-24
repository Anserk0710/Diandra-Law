import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/seo/metadata";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteUrl =
    await getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",

      disallow: [
        "/admin/",
        "/api/",
      ],
    },

    sitemap:
      `${siteUrl}/sitemap.xml`,

    host:
      siteUrl,
  };
}