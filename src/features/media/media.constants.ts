export const MEDIA_MODULES = [
    "pages",
    "services",
    "lawyers",
    "articles",
    "clients",
    "seo",
] as const;

export type MediaModule =
    (typeof MEDIA_MODULES)[number];

export const MEDIA_MODULE_LABELS: Record<
    MediaModule,
    string
> = {
    pages: "Halaman & Pengaturan",
    services: "Layanan",
    lawyers: "Tim Lawyer",
    articles: "Artikel",
    clients: "Klien",
    seo: "SEO",
};

export const ALLOWED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
] as const;

export type AllowedImageMimeType =
    (typeof ALLOWED_IMAGE_MIME_TYPES)[number];

export const DEFAULT_MEDIA_PAGE_SIZE = 32;

export const DEFAULT_MAX_IMAGE_SIZE_MB = 10;

export const DEFAULT_MAX_IMAGE_SIZE_BYTES =
    DEFAULT_MAX_IMAGE_SIZE_MB * 1024 * 1024;

export function isMediaModule(
    value: unknown,
): value is MediaModule {
    return (
        typeof value === "string" &&
        MEDIA_MODULES.includes(
            value as MediaModule,
        )
    );
}