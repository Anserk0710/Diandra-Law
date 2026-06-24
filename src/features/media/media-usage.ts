import "server-only";

import { prisma } from "@/lib/db/prisma";

function jsonContainsExactString(
    value: unknown,
    target: string,
): boolean {
    if (typeof value === "string") {
        return value === target;
    }

    if (Array.isArray(value)) {
        return value.some((item) =>
            jsonContainsExactString(
                item,
                target,
            ),
        );
    }

    if (
        typeof value === "object" &&
        value !== null
    ) {
        return Object.values(
            value,
        ).some((item) =>
            jsonContainsExactString(
                item,
                target,
            ),
        );
    }

    return false;
}

export async function findMediaUsage(
    fileUrl: string,
) {
    const [
        services,
        lawyers,
        articles,
        clients,
        siteSettings,
        seoMeta,
        pages,
    ] = await Promise.all([
        prisma.service.findMany({
            where: {
                coverImage: fileUrl,
            },
            select: {
                title: true,
            },
        }),

        prisma.lawyer.findMany({
            where: {
                photo: fileUrl,
            },
            select: {
                name: true,
            },
        }),

        prisma.article.findMany({
            where: {
                thumbnail: fileUrl,
            },
            select: {
                title: true,
            },
        }),

        prisma.client.findMany({
            where: {
                logo: fileUrl,
            },
            select: {
                name: true,
            },
        }),

        prisma.siteSetting.findMany({
            where: {
                OR: [
                    {
                        logoLight: fileUrl,
                    },
                    {
                        logoDark: fileUrl,
                    },
                ],
            },
            select: {
                id: true,
            },
        }),

        prisma.seoMeta.findMany({
            where: {
                ogImage: fileUrl,
            },
            select: {
                entityType: true,
                entityId: true,
            },
        }),

        prisma.page.findMany({
            select: {
                pageKey: true,
                contentJson: true,
            },
        }),
    ]);

    const usage: string[] = [];

    for (const service of services) {
        usage.push(
            `Service: ${service.title}`,
        );
    }

    for (const lawyer of lawyers) {
        usage.push(
            `Lawyer: ${lawyer.name}`,
        );
    }

    for (const article of articles) {
        usage.push(
            `Artikel: ${article.title}`,
        );
    }

    for (const client of clients) {
        usage.push(
            `Client: ${client.name}`,
        );
    }

    if (siteSettings.length > 0) {
        usage.push(
            "Global Settings",
        );
    }

    for (const seo of seoMeta) {
        usage.push(
            `SEO: ${seo.entityType} #${seo.entityId.toString()}`,
        );
    }

    for (const page of pages) {
        if (
            jsonContainsExactString(
                page.contentJson,
                fileUrl,
            )
        ) {
            usage.push(
                `Page: ${page.pageKey}`,
            );
        }
    }

    return usage;
}