import { prisma } from "@/lib/db/prisma";

export const GLOBAL_SEO_ENTITY_TYPE =
  "global";

export const GLOBAL_SEO_ENTITY_ID = BigInt(0);

export function getGlobalSeoMeta() {
  return prisma.seoMeta.findUnique({
    where: {
      entityType_entityId: {
        entityType:
          GLOBAL_SEO_ENTITY_TYPE,
        entityId:
          GLOBAL_SEO_ENTITY_ID,
      },
    },
  });
}
