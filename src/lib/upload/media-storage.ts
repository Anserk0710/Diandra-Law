import "server-only";
import { randomUUID } from "node:crypto";
import path from "node:path";
import type { MediaModule } from "@/features/media/media.constants";

function removeTrailingSlash(
    value: string,
) {
    return value.replace(/\/$/, "");
}

function ensureLeadingSlash(
    value: string,
) {
    return `/${value.replace(/^\//, "")}`;
}

export function getMediaUploadRoot() {
    const configuredRoot =
        process.env.MEDIA_UPLOAD_ROOT?.trim();

    if (configuredRoot) {
        return path.resolve(configuredRoot);
    }

    return path.resolve(
        process.cwd(),
        "public",
        "cms",
        "uploads",
    );
}

export function getMediaPublicBaseUrl() {
    const configuredUrl =
        process.env.MEDIA_PUBLIC_BASE_URL?.trim();
    if (!configuredUrl) {
        return "/cms/uploads";
    }

    if (
        configuredUrl.startsWith(
            "http://",
        ) ||
        configuredUrl.startsWith(
            "https://",
        )
    ) {
        return removeTrailingSlash(
            configuredUrl,
        );
    }

    return removeTrailingSlash(
        ensureLeadingSlash(configuredUrl),
    );
}

function sanitizeFileBaseName(
    originalName: string,
) {
    const extension =
        path.extname(originalName);

    const rawBaseName = path.basename(
        originalName,
        extension,
    );

    const sanitized = rawBaseName
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "",)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 60);

    return sanitized || "image";
}

export type MediaStorageTarget = {
    directoryPath: string;
    absolutePath: string;
    relativePath: string;
    fileName: string;
    fileUrl: string;
};

export function buildMediaStorageTarget(
    module: MediaModule,
    originalName: string,
    extension: string,
): MediaStorageTarget {
    const now = new Date();

    const year = String(
        now.getUTCFullYear(),
    );

    const month = String(
        now.getUTCMonth() + 1,
    ).padStart(2, "0");

    const safeBaseName =
        sanitizeFileBaseName(
            originalName,
        );

    const uniquePart =
        randomUUID().replace(/-/g, "");

    const fileName =
        `${safeBaseName}-${uniquePart}.${extension}`;

    const relativePath =
        path.posix.join(
            module,
            year,
            month,
            fileName,
        );

    const uploadRoot =
        getMediaUploadRoot();

    const directoryPath = path.join(
        uploadRoot,
        module,
        year,
        month,
    );

    const absolutePath = path.join(
        directoryPath,
        fileName,
    );

    const publicBaseUrl =
        getMediaPublicBaseUrl();

    const fileUrl =
        `${publicBaseUrl}/${relativePath}`;

    return {
        directoryPath,
        absolutePath,
        relativePath,
        fileName,
        fileUrl,
    };
}

export function resolveStoredMediaPath(
    relativePath: string,
) {
    if (path.isAbsolute(relativePath)) {
        throw new Error(
            "Absolute media path tidak diizinkan.",
        );
    }

    const uploadRoot =
        getMediaUploadRoot();

    const normalizedRelativePath =
        relativePath.replace(/\\/g, "/");

    const absolutePath = path.resolve(
        uploadRoot,
        ...normalizedRelativePath.split("/"),
    );

    const expectedPrefix =
        `${uploadRoot}${path.sep}`;

    if (
        absolutePath !== uploadRoot &&
        !absolutePath.startsWith(
            expectedPrefix,
        )
    ) {
        throw new Error("Media path berada di luar storage route");
    }

    return absolutePath;
}

