import { prisma } from "@/lib/db/prisma";

export async function getAdminSiteSettings() {
  return prisma.siteSetting.findFirst({
    orderBy: {
      id: "asc",
    },
  });
}