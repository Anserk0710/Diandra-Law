import "server-only";

import { cache } from "react";

import { prisma } from "@/lib/db/prisma";

export const getSiteSettings =
  cache(async () =>
    prisma.siteSetting.findFirst({
      orderBy: {
        id: "asc",
      },

      select: {
        id: true,
        siteName: true,
        siteTagline: true,
        logoLight: true,
        logoDark: true,
        primaryColor: true,
        secondaryColor: true,
        whatsappNumber: true,
        whatsappMessage: true,
        email: true,
        phone: true,
        officeAddress: true,
        mapEmbedUrl: true,
        footerText: true,
        updatedAt: true,
      },
    }),
  );

export const getPublishedPage =
  cache(async (pageKey: string) =>
    prisma.page.findFirst({
      where: {
        pageKey,
        status: "published",
      },

      select: {
        id: true,
        pageKey: true,
        title: true,
        contentJson: true,
        updatedAt: true,
      },
    }),
  );

export async function getPublishedServices(
  options: {
    featured?: boolean;
    take?: number;
  } = {},
) {
  return prisma.service.findMany({
    where: {
      status: "published",

      ...(typeof options.featured ===
      "boolean"
        ? {
            featured:
              options.featured,
          }
        : {}),
    },

    orderBy: [
      {
        sortOrder: "asc",
      },
      {
        title: "asc",
      },
    ],

    take: options.take,

    select: {
      id: true,
      title: true,
      slug: true,
      summary: true,
      coverImage: true,
      updatedAt: true,
    },
  });
}

export const getPublishedServiceBySlug =
  cache(async (slug: string) =>
    prisma.service.findFirst({
      where: {
        slug,
        status: "published",
      },

      include: {
        faqs: {
          orderBy: [
            {
              sortOrder: "asc",
            },
            {
              id: "asc",
            },
          ],
        },

        ctas: {
          where: {
            isActive: true,
          },

          orderBy: {
            id: "asc",
          },
        },
      },
    }),
  );

export async function getPublishedLawyers(
  options: {
    featured?: boolean;
    take?: number;
  } = {},
) {
  return prisma.lawyer.findMany({
    where: {
      status: "published",

      ...(typeof options.featured ===
      "boolean"
        ? {
            featured:
              options.featured,
          }
        : {}),
    },

    orderBy: [
      {
        sortOrder: "asc",
      },
      {
        name: "asc",
      },
    ],

    take: options.take,

    select: {
      id: true,
      name: true,
      slug: true,
      photo: true,
      position: true,
      shortBio: true,
      specialty: true,
      updatedAt: true,
    },
  });
}

export const getPublishedLawyerBySlug =
  cache(async (slug: string) =>
    prisma.lawyer.findFirst({
      where: {
        slug,
        status: "published",
      },
    }),
  );

export async function getPublishedArticles(
  options: {
    take?: number;
  } = {},
) {
  return prisma.article.findMany({
    where: {
      status: "published",
    },

    orderBy: [
      {
        publishedAt: "desc",
      },
      {
        createdAt: "desc",
      },
    ],

    take: options.take,

    include: {
      category: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  });
}

export const getPublishedArticleBySlug =
  cache(async (slug: string) =>
    prisma.article.findFirst({
      where: {
        slug,
        status: "published",
      },

      include: {
        category: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
    }),
  );

export async function getPublishedClients() {
  return prisma.client.findMany({
    where: {
      status: "published",
    },

    orderBy: [
      {
        sortOrder: "asc",
      },
      {
        name: "asc",
      },
    ],
  });
}