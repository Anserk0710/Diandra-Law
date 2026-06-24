"use server";

import { randomUUID } from "node:crypto";
import {
    rename,
    unlink,
} from "node:fs/promises";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/auth/require-admin";
import { parseEntityId } from "@/lib/cms/cms-utils";
import { prisma } from "@/lib/db/prisma";
import { resolveStoredMediaPath } from "@/lib/upload/media-storage";

import { findMediaUsage } from "./media-usage";

function isNodeError(
    error: unknown,
): error is NodeJS.ErrnoException {
    return error instanceof Error;
}

export async function deleteMediaAction(
    mediaId: string,
    _formData: FormData,
) {
    await requireAdmin();

    const id =
        parseEntityId(mediaId);

    if (!id) {
        redirect(
            "/admin/media?error=invalid-id",
        );
    }

    const media =
        await prisma.mediaUpload.findUnique({
            where: {
                id,
            },
        });

    if (!media) {
        redirect(
            "/admin/media?error=not-found",
        );
    }

    const usage =
        await findMediaUsage(
            media.fileUrl,
        );

    if (usage.length > 0) {
        const usageSummary =
            usage
                .slice(0, 5)
                .join(", ");

        redirect(
            `/admin/media?error=in-use&usage=${encodeURIComponent(
                usageSummary,
            )}`,
        );
    }

    let absolutePath: string;

    try {
        absolutePath =
            resolveStoredMediaPath(
                media.filePath,
            );
    } catch (error) {
        console.error(
            "Invalid media path:",
            error,
        );

        redirect(
            "/admin/media?error=invalid-path",
        );
    }

    const trashPath =
        `${absolutePath}.delete-${randomUUID()}`;

    let fileMovedToTrash = false;

    try {
        await rename(
            absolutePath,
            trashPath,
        );

        fileMovedToTrash = true;
    } catch (error) {
        if (
            !isNodeError(error) ||
            error.code !== "ENOENT"
        ) {
            console.error(
                "Gagal memindahkan media sebelum delete:",
                error,
            );

            redirect(
                "/admin/media?error=filesystem",
            );
        }
    }

    try {
        await prisma.mediaUpload.delete({
            where: {
                id,
            },
        });
    } catch (databaseError) {
        console.error(
            "Gagal menghapus metadata media:",
            databaseError,
        );

        if (fileMovedToTrash) {
            try {
                await rename(
                    trashPath,
                    absolutePath,
                );
            } catch (restoreError) {
                console.error(
                    "Gagal mengembalikan file setelah database error:",
                    restoreError,
                );
            }
        }

        redirect(
            "/admin/media?error=database",
        );
    }

    if (fileMovedToTrash) {
        try {
            await unlink(trashPath);
        } catch (cleanupError) {
            console.error(
                "Metadata terhapus tetapi file trash gagal dibersihkan:",
                cleanupError,
            );
        }
    }

    revalidatePath("/admin/media");

    redirect(
        "/admin/media?deleted=1",
    );
}