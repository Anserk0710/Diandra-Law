import "server-only";
import path from "node:path";
import { fileTypeFromBuffer } from "file-type";
import { ALLOWED_IMAGE_MIME_TYPES, DEFAULT_MAX_IMAGE_SIZE_BYTES, type AllowedImageMimeType } from "@/features/media/media.constants";

const MIME_EXTENTIONS_MAP: Record<
    AllowedImageMimeType,
    string
> = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
}

export class MediaValidationError extends Error {
    constructor(
        message: string,
        public readonly statusCode = 400,
    ) {
        super(message);
        this.name =
            "MediaValidationError";
    }
}

export function getMaxMediaFileSizeBytes() {
    const configured =
        Number(
            process.env.MEDIA_MAX_FILE_SIZE_MB,
        );

    if (
        Number.isFinite(configured) &&
        configured > 0 &&
        configured <= 25
    ) {
        return Math.floor(
            configured * 1024 * 1024,
        );
    }

    return DEFAULT_MAX_IMAGE_SIZE_BYTES;
}

function sanitizeOriginalName(
    value: string,
) {
    const fileName = path
        .basename(value)
        .normalize("NFKC")
        .replace(/[\u0000-\u001F\u007F]/g, "",)
        .trim()
        .slice(0, 255);

    return fileName || "image";
}

function normalizeBrowserMime(
    mimeType: string,
) {
    if (mimeType === "image/jpg") {
        return "image/jpeg";
    }

    return mimeType;
}

export type ValidatedImageUpload = {
    buffer: Buffer;
    originalName: string;
    mimeType: AllowedImageMimeType;
    extension: string;
    fileSize: number;
};

export async function validateImageUpload(
    file: File,
): Promise<ValidatedImageUpload> {
    if (file.size <= 0) {
        throw new MediaValidationError(
            "File kosong atau tidak valid.",
        );
    }

    const maxFileSize =
        getMaxMediaFileSizeBytes();

    if (file.size > maxFileSize) {
        const maxMb = Math.floor(
            maxFileSize / 1024 / 1024,
        );

        throw new MediaValidationError(
            `Ukuran file maksimal ${maxMb} MB.`,
            413,
        );
    }

    const arrayBuffer =
        await file.arrayBuffer();

    const buffer =
        Buffer.from(arrayBuffer);

    const detectedType =
        await fileTypeFromBuffer(buffer);

    if (!detectedType) {
        throw new MediaValidationError(
            "Format file tidak dapat dikenali.",
        );
    }

    if (
        !ALLOWED_IMAGE_MIME_TYPES.includes(
            detectedType.mime as AllowedImageMimeType,
        )
    ) {
        throw new MediaValidationError(
            "Format file tidak didukung. Gunakan JPG, PNG, atau WebP.",
        );
    }

    const detectedMime =
        detectedType.mime as AllowedImageMimeType;

    const browserMime =
        normalizeBrowserMime(file.type);

    if (
        browserMime &&
        browserMime !== detectedMime
    ) {
        throw new MediaValidationError(
            "Tipe file yang dikirim browser tidak sesuai dengan isi file.",
        );
    }

    return {
        buffer,
        originalName:
            sanitizeOriginalName(
                file.name,
            ),
        mimeType: detectedMime,
        extension: MIME_EXTENTIONS_MAP[
            detectedMime
        ],
        fileSize: file.size,
    };
}