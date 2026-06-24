import { mkdir, unlink, writeFile } from "node:fs/promises";

import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db/prisma";
import {
    buildMediaStorageTarget,
} from "@/lib/upload/media-storage";
import {
    MediaValidationError,
    validateImageUpload,
} from "@/lib/upload/image-validation";
import { mediaModuleSchema } from "@/features/media/media.schema";
import { mediaListQuerySchema } from "@/features/media/media.schema";
import { getAdminMediaLibrary } from "@/features/media/media.queries";
import { serializeMediaItem } from "@/features/media/media.serialize";

export const runtime = "nodejs";

export const dynamic =
    "force-dynamic";

async function getAuthenticatedAdmin() {
    const session = await auth();

    if (
        !session?.user ||
        session.user.role !== "admin" ||
        !session.user.id ||
        !/^[1-9]\d*$/.test(
            session.user.id,
        )
    ) {
        return null;
    }

    return {
        id: BigInt(session.user.id),
        session,
    };
}

export async function GET(
    request: Request,
) {
    const admin =
        await getAuthenticatedAdmin();

    if (!admin) {
        return NextResponse.json(
            {
                error:
                    "Anda harus login sebagai admin.",
            },
            {
                status: 401,
            },
        );
    }

    const url = new URL(request.url);

    const parsed =
        mediaListQuerySchema.safeParse({
            module:
                url.searchParams.get(
                    "module",
                ) ?? undefined,

            search:
                url.searchParams.get(
                    "search",
                ) ?? "",

            page:
                url.searchParams.get(
                    "page",
                ) ?? "1",

            pageSize:
                url.searchParams.get(
                    "pageSize",
                ) ?? "24",
        });

    if (!parsed.success) {
        return NextResponse.json(
            {
                error:
                    "Parameter media tidak valid.",
            },
            {
                status: 400,
            },
        );
    }

    const result =
        await getAdminMediaLibrary({
            module:
                parsed.data.module,
            search:
                parsed.data.search,
            page:
                parsed.data.page,
            pageSize:
                parsed.data.pageSize,
        });

    return NextResponse.json(
        result,
        {
            status: 200,
        },
    );
}

export async function POST(
    request: Request,
) {
    const admin =
        await getAuthenticatedAdmin();

    if (!admin) {
        return NextResponse.json(
            {
                error:
                    "Anda harus login sebagai admin.",
            },
            {
                status: 401,
            },
        );
    }

    let formData: FormData;

    try {
        formData =
            await request.formData();
    } catch {
        return NextResponse.json(
            {
                error:
                    "Request upload tidak valid.",
            },
            {
                status: 400,
            },
        );
    }

    const parsedModule =
        mediaModuleSchema.safeParse(
            formData.get("module"),
        );

    if (!parsedModule.success) {
        return NextResponse.json(
            {
                error:
                    "Module media tidak valid.",
            },
            {
                status: 400,
            },
        );
    }

    const fileValue =
        formData.get("file");

    if (!(fileValue instanceof File)) {
        return NextResponse.json(
            {
                error:
                    "File image wajib dipilih.",
            },
            {
                status: 400,
            },
        );
    }

    try {
        const validated =
            await validateImageUpload(
                fileValue,
            );

        const storageTarget =
            buildMediaStorageTarget(
                parsedModule.data,
                validated.originalName,
                validated.extension,
            );

        await mkdir(
            storageTarget.directoryPath,
            {
                recursive: true,
            },
        );

        await writeFile(
            storageTarget.absolutePath,
            validated.buffer,
            {
                flag: "wx",
            },
        );

        try {
            const media =
                await prisma.mediaUpload.create({
                    data: {
                        module:
                            parsedModule.data,

                        originalName:
                            validated.originalName,

                        fileName:
                            storageTarget.fileName,

                        filePath:
                            storageTarget.relativePath,

                        fileUrl:
                            storageTarget.fileUrl,

                        mimeType:
                            validated.mimeType,

                        fileSize:
                            BigInt(
                                validated.fileSize,
                            ),

                        uploadedByAdminId:
                            admin.id,
                    },

                    include: {
                        uploadedByAdmin: {
                            select: {
                                id: true,
                                fullName: true,
                                email: true,
                            },
                        },
                    },
                });

            return NextResponse.json(
                {
                    item:
                        serializeMediaItem(
                            media,
                        ),
                },
                {
                    status: 201,
                },
            );
        } catch (databaseError) {
            try {
                await unlink(
                    storageTarget.absolutePath,
                );
            } catch (cleanupError) {
                console.error(
                    "Gagal membersihkan file setelah database error:",
                    cleanupError,
                );
            }

            console.error(
                "Gagal menyimpan metadata media:",
                databaseError,
            );

            return NextResponse.json(
                {
                    error:
                        "File tidak dapat disimpan ke database.",
                },
                {
                    status: 500,
                },
            );
        }
    } catch (error) {
        if (
            error instanceof
            MediaValidationError
        ) {
            return NextResponse.json(
                {
                    error: error.message,
                },
                {
                    status:
                        error.statusCode,
                },
            );
        }

        console.error(
            "Media upload error:",
            error,
        );

        return NextResponse.json(
            {
                error:
                    "Upload gagal karena kesalahan server.",
            },
            {
                status: 500,
            },
        );
    }
}