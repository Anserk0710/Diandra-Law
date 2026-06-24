import type { MediaModule } from "./media.constants";

export type MediaItem = {
    id: string;
    module: MediaModule;
    originalName: string;
    fileName: string;
    filePath: string;
    fileUrl: string;
    mimeType: string;
    fileSize: number;
    createdAt: string;

    uploadedByAdmin: {
        id: string;
        fullName: string;
        email: string;
    } | null;
};

export type MediaLibraryResult = {
    items: MediaItem[];
    pagination: {
        page: number;
        pageSize: number;
        totalItems: number;
        totalPages: number;
    };
};

export type MediaApiResponse = {
    item?: MediaItem;
    items: MediaItem[];
    pagination?: MediaLibraryResult["pagination"];
    error?: string;
}