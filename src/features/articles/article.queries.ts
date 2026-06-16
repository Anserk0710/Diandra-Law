import { prisma } from "@/lib/db/prisma";

export function getAdminArticles() {
  return prisma.article.findMany({
    orderBy: [
      {
        publishedAt: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });
}

export function getAdminArticleById(
  id: bigint,
) {
  return prisma.article.findUnique({
    where: {
      id,
    },
  });
}

export function getArticleCategories() {
  return prisma.articleCategory.findMany({
    orderBy: {
      name: "asc",
    },
    include: {
      _count: {
        select: {
          articles: true,
        },
      },
    },
  });
}