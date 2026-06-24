import "server-only";

import type { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/db/prisma";

import {
    DEFAULT_MEDIA_PAGE_SIZE,
    type MediaModule,
} from "./media.constants";
import { serializeMediaItem } from "./media.serialize";
import type { MediaLibraryResult } from "./media.types";

type GetMediaLibraryOptions = {
    module?: MediaModule;
    search?: string;
    page?: number;
    pageSize?: number;
};

export async function getAdminMediaLibrary({
    module,
    search = "",
    page = 1,
    pageSize =
    DEFAULT_MEDIA_PAGE_SIZE,
}: GetMediaLibraryOptions = {}): Promise<MediaLibraryResult> {
    const normalizedPage =
        Math.max(1, page);

    const normalizedPageSize =
        Math.min(
            60,
            Math.max(1, pageSize),
        );

    const normalizedSearch =
        search.trim();

    const where: Prisma.MediaUploadWhereInput =
        {};

    if (module) {
        where.module = module;
    }

    if (normalizedSearch) {
        where.OR = [
            {
                originalName: {
                    contains:
                        normalizedSearch,
                },
            },
            {
                fileName: {
                    contains:
                        normalizedSearch,
                },
            },
        ];
    }

    const [totalItems, media] =
        await Promise.all([
            prisma.mediaUpload.count({
                where,
            }),

            prisma.mediaUpload.findMany({
                where,

                orderBy: {
                    createdAt: "desc",
                },

                skip:
                    (normalizedPage - 1) *
                    normalizedPageSize,

                take: normalizedPageSize,

                include: {
                    uploadedByAdmin: {
                        select: {
                            id: true,
                            fullName: true,
                            email: true,
                        },
                    },
                },
            }),
        ]);

    const totalPages = Math.max(
        1,
        Math.ceil(
            totalItems /
            normalizedPageSize,
        ),
    );

    return {
        items: media.map(
            serializeMediaItem,
        ),

        pagination: {
            page: normalizedPage,
            pageSize:
                normalizedPageSize,
            totalItems,
            totalPages,
        },
    };
}