import "server-only";

import { cache } from "react";

import { prisma } from "@/lib/db/prisma";

import type { SeoEntityType } from "./seo.types";

export const GLOBAL_SEO_ENTITY_TYPE =
  "global";

export const GLOBAL_SEO_ENTITY_ID =
  BigInt(0);

export const getGlobalSeoMeta = cache(
  async () =>
    prisma.seoMeta.findUnique({
      where: {
        entityType_entityId: {
          entityType:
            GLOBAL_SEO_ENTITY_TYPE,
          entityId:
            GLOBAL_SEO_ENTITY_ID,
        },
      },
    }),
);

export const getEntitySeoMeta = cache(
  async (
    entityType: SeoEntityType,
    entityId: bigint,
  ) =>
    prisma.seoMeta.findUnique({
      where: {
        entityType_entityId: {
          entityType,
          entityId,
        },
      },
    }),
);

export async function getPageSeoEditorTarget(
  pageKey: string,
) {
  const page =
    await prisma.page.findUnique({
      where: {
        pageKey,
      },
      select: {
        id: true,
        pageKey: true,
        title: true,
      },
    });

  if (!page) {
    return null;
  }

  const seo = await getEntitySeoMeta(
    "page",
    page.id,
  );

  return {
    page,
    seo,
  };
}