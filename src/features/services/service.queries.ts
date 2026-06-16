import { prisma } from "@/lib/db/prisma";

export function getAdminServices() {
    return prisma.service.findMany({
        orderBy: [
            {
                sortOrder: "asc"
            },
            {
                createdAt: "desc"
            },
        ],
        select: {
            id: true,
            title: true,
            slug: true,
            status: true,
            featured: true,
            sortOrder: true,
            updatedAt: true,
            _count: {
                select: {
                    faqs: true,
                    ctas: true,
                },
            },
        },
    });
}

export function getAdminServiceById(
    id: bigint,
) {
    return prisma.service.findUnique({
        where: {
            id,
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
                orderBy: {
                    id: "asc",
                },
            },
        },
    });
}
