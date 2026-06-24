import "server-only";
import { randomUUID } from "node:crypto";
import path from "node:path";
import type { MediaModule } from "@/features/media/media.constants";
import { cloudinary } from "./cloudinary-client";

function sanitizeFileBaseName(originalName: string) {
    const extension = path.extname(originalName);
    const rawBaseName = path.basename(originalName, extension);

    const sanitized = rawBaseName
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 60);

    return sanitized || "image";
}

export type CloudinaryUploadResult = {
    publicId: string;
    fileUrl: string;
    fileName: string;
    /** Cloudinary public_id — disimpan di DB sebagai filePath untuk keperluan deletion */
    filePath: string;
};

/**
 * Upload image buffer ke Cloudinary.
 * Mengembalikan publicId, fileUrl, fileName, dan filePath (= publicId).
 */
export async function uploadImageToCloudinary(
    buffer: Buffer,
    module: MediaModule,
    originalName: string,
    extension: string,
    mimeType: string,
): Promise<CloudinaryUploadResult> {
    const now = new Date();
    const year = String(now.getUTCFullYear());
    const month = String(now.getUTCMonth() + 1).padStart(2, "0");

    const safeBaseName = sanitizeFileBaseName(originalName);
    const uniquePart = randomUUID().replace(/-/g, "");
    const fileBaseName = `${safeBaseName}-${uniquePart}`;
    const folder = `diandra-law/${module}/${year}/${month}`;
    const publicId = `${folder}/${fileBaseName}`;

    // Encode buffer sebagai data URI untuk di-upload ke Cloudinary
    const dataUri = `data:${mimeType};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(dataUri, {
        public_id: publicId,
        overwrite: false,
        resource_type: "image",
        // Jangan transformasi otomatis agar file original tetap tersimpan
        format: extension.replace(".", ""),
    });

    return {
        publicId: result.public_id,
        fileUrl: result.secure_url,
        fileName: `${fileBaseName}.${extension}`,
        filePath: result.public_id,
    };
}

/**
 * Hapus image dari Cloudinary berdasarkan public_id.
 * Tidak throw jika file sudah tidak ada.
 */
export async function deleteImageFromCloudinary(
    publicId: string,
): Promise<void> {
    await cloudinary.uploader.destroy(publicId, {
        resource_type: "image",
    });
}
