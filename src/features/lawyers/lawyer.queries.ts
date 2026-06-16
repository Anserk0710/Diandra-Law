import { prisma } from "@/lib/db/prisma";

export function getAdminLawyers() {
  return prisma.lawyer.findMany({
    orderBy: [
      {
        sortOrder: "asc",
      },
      {
        createdAt: "desc",
      },
    ],
  });
}

export function getAdminLawyerById(
  id: bigint,
) {
  return prisma.lawyer.findUnique({
    where: {
      id,
    },
  });
}