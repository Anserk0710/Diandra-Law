import { prisma } from "@/lib/db/prisma";

export async function getSiteSettings() {
    return prisma.siteSetting.findFirst({
        orderBy: {
            id: "asc",
        },
        select: {
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
            footerText: true
        },
    });
}

export async function getPublishedPage(pageKey: string) {
    return prisma.page.findFirst({
        where: {
            pageKey,
            status: "published",
        },
        select: {
            title: true,
            contentJson: true,
        },
    });
}

export async function getPublishedServices(
    options: {
        featured?: boolean;
        take?: number;
    } = {},
) {
    return prisma.service.findMany({
        where: {
            status: "published",
            ...(typeof options.featured === "boolean"
                ? { featured: options.featured }
                : {}),
            },
            orderBy: [
                { sortOrder: "asc" },
                { title: "asc" },
            ],
            take: options.take,
            select: {
                id: true,
                title: true,
                slug: true,
                summary: true,
                coverImage: true,
        },
    });
}

export async function getPublishedServiceBySlug(
    slug: string,
) {
    return prisma.service.findFirst({
        where: {
            slug,
            status: "published",
        },
        include: {
            faqs: {
                orderBy: [
                    { sortOrder: "asc" },
                    { id: "asc" },
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
    });
}

export async function getPublishedLawyers(
    options: {
        featured?: boolean;
        take?: number;
    } = {},
) {
    return prisma.lawyer.findMany({
        where: {
            status: "published",
            ...(typeof options.featured === "boolean"
                ? { featured: options.featured }
                : {}),
        },
        orderBy: [
            { sortOrder: "asc" },
            { name: "asc" },
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
        },
    });
}

export async function getPublishedLawyerBySlug(
    slug: string,
) {
    return prisma.lawyer.findFirst({
        where: {
            slug,
            status: "published",
        },
    });
}

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
            { publishedAt: "desc" },
            { createdAt: "desc" },
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

export async function getPublishedArticleBySlug(
    slug: string,
) {
    return prisma.article.findFirst({
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
    });
}

export async function getPublishedClients() {
    return prisma.client.findMany({
        where: {
            status: "published",
        },
        orderBy: [
            { sortOrder: "asc" },
            { name: "asc" },
        ],
    });
}
