import type { MediaItem } from "./media.types";
import type { MediaModule } from "./media.constants";

type MediaRecord = {
    id: bigint;
    module: string;
    originalName: string;
    fileName: string;
    filePath: string;
    fileUrl: string;
    mimeType: string;
    fileSize: bigint;
    createdAt: Date;

    uploadedByAdmin?: {
        id: bigint;
        fullName: string;
        email: string;
    } | null;
};

export function serializeMediaItem(
    media: MediaRecord,
): MediaItem {
    return {
        id: media.id.toString(),

        module: media.module as MediaModule,

        originalName: media.originalName,

        fileName: media.fileName,

        filePath: media.filePath,

        fileUrl: media.fileUrl,

        mimeType: media.mimeType,

        fileSize: Number(media.fileSize),

        createdAt: media.createdAt.toISOString(),

        uploadedByAdmin: media.uploadedByAdmin
            ? {
                id: media
                    .uploadedByAdmin.id
                    .toString(),

                fullName: media
                    .uploadedByAdmin
                    .fullName,

                email: media
                    .uploadedByAdmin
                    .email,
            }
            : null,
    };
}