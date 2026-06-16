import { prisma } from "@/lib/db/prisma";

export function getAdminClients() {
  return prisma.client.findMany({
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

export function getAdminClientById(
  id: bigint,
) {
  return prisma.client.findUnique({
    where: {
      id,
    },
  });
}