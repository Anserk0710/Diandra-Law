"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/auth/require-admin";
import { parseEntityId } from "@/lib/cms/cms-utils";
import { prisma } from "@/lib/db/prisma";
import { deleteImageFromCloudinary } from "@/lib/upload/media-storage";

import { findMediaUsage } from "./media-usage";

export async function deleteMediaAction(
    mediaId: string,
    _formData: FormData,
) {
    await requireAdmin();

    const id = parseEntityId(mediaId);

    if (!id) {
        redirect("/admin/media?error=invalid-id");
    }

    const media = await prisma.mediaUpload.findUnique({
        where: { id },
    });

    if (!media) {
        redirect("/admin/media?error=not-found");
    }

    const usage = await findMediaUsage(media.fileUrl);

    if (usage.length > 0) {
        const usageSummary = usage.slice(0, 5).join(", ");
        redirect(
            `/admin/media?error=in-use&usage=${encodeURIComponent(usageSummary)}`,
        );
    }

    // Hapus record dari database terlebih dahulu
    try {
        await prisma.mediaUpload.delete({ where: { id } });
    } catch (databaseError) {
        console.error("Gagal menghapus metadata media:", databaseError);
        redirect("/admin/media?error=database");
    }

    // Hapus file dari Cloudinary setelah DB berhasil dihapus
    // filePath menyimpan Cloudinary public_id
    try {
        await deleteImageFromCloudinary(media.filePath);
    } catch (cloudinaryError) {
        // File sudah tidak ada di DB, log saja error Cloudinary
        // tapi jangan gagalkan operasi karena data sudah konsisten
        console.error(
            "Metadata terhapus tetapi file Cloudinary gagal dihapus:",
            cloudinaryError,
        );
    }

    revalidatePath("/admin/media");
    redirect("/admin/media?deleted=1");
}