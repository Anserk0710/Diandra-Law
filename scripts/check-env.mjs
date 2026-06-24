import path from "node:path";

import {
    config as loadEnv,
} from "dotenv";

const initialNodeEnv =
    process.env.NODE_ENV ??
    "development";

const environmentFiles = [
    `.env.${initialNodeEnv}.local`,
    ".env.local",
    `.env.${initialNodeEnv}`,
    ".env",
];

for (const environmentFile of environmentFiles) {
    loadEnv({
        path: environmentFile,
    });
}

const nodeEnv =
    process.env.NODE_ENV ??
    initialNodeEnv;

const errors = [];
const warnings = [];

function readEnvironmentValue(name) {
    return (
        process.env[name]?.trim() ??
        ""
    );
}

function requireEnvironmentValue(name) {
    const value =
        readEnvironmentValue(name);

    if (!value) {
        errors.push(
            `${name} wajib diisi.`,
        );
    }

    return value;
}

function validateUrl(
    name,
    value,
    options = {},
) {
    if (!value) {
        return;
    }

    try {
        const parsedUrl =
            new URL(value);

        if (
            options.protocols &&
            !options.protocols.includes(
                parsedUrl.protocol,
            )
        ) {
            errors.push(
                `${name} harus menggunakan protocol ${options.protocols.join(
                    " atau ",
                )}.`,
            );
        }

        if (
            options.requireHttps &&
            parsedUrl.protocol !==
            "https:"
        ) {
            errors.push(
                `${name} production harus menggunakan https.`,
            );
        }
    } catch {
        errors.push(
            `${name} bukan URL yang valid.`,
        );
    }
}

const databaseUrl =
    requireEnvironmentValue(
        "DATABASE_URL",
    );

validateUrl(
    "DATABASE_URL",
    databaseUrl,
    {
        protocols: ["mysql:"],
    },
);

const authSecret =
    requireEnvironmentValue(
        "AUTH_SECRET",
    );

if (
    authSecret &&
    authSecret.length < 32
) {
    errors.push(
        "AUTH_SECRET harus memiliki minimal 32 karakter.",
    );
}

const siteUrl =
    requireEnvironmentValue(
        "NEXT_PUBLIC_SITE_URL",
    );

validateUrl(
    "NEXT_PUBLIC_SITE_URL",
    siteUrl,
    {
        protocols: [
            "http:",
            "https:",
        ],

        requireHttps:
            nodeEnv ===
            "production",
    },
);

const uploadRoot =
    readEnvironmentValue(
        "MEDIA_UPLOAD_ROOT",
    );

if (
    nodeEnv === "production" &&
    !uploadRoot
) {
    errors.push(
        "MEDIA_UPLOAD_ROOT wajib diisi pada production.",
    );
}

if (
    nodeEnv === "production" &&
    uploadRoot &&
    !path.isAbsolute(uploadRoot)
) {
    errors.push(
        "MEDIA_UPLOAD_ROOT production harus berupa absolute path.",
    );
}

const mediaPublicBaseUrl =
    readEnvironmentValue(
        "MEDIA_PUBLIC_BASE_URL",
    );

if (
    mediaPublicBaseUrl &&
    !mediaPublicBaseUrl.startsWith(
        "/",
    ) &&
    !mediaPublicBaseUrl.startsWith(
        "http://",
    ) &&
    !mediaPublicBaseUrl.startsWith(
        "https://",
    )
) {
    errors.push(
        "MEDIA_PUBLIC_BASE_URL harus diawali / atau berupa URL http/https.",
    );
}

const maximumUploadSize =
    Number(
        readEnvironmentValue(
            "MEDIA_MAX_FILE_SIZE_MB",
        ) || "5",
    );

if (
    !Number.isFinite(
        maximumUploadSize,
    ) ||
    maximumUploadSize <= 0 ||
    maximumUploadSize > 25
) {
    errors.push(
        "MEDIA_MAX_FILE_SIZE_MB harus lebih dari 0 dan maksimal 25.",
    );
}

if (
    nodeEnv === "production" &&
    readEnvironmentValue(
        "AUTH_TRUST_HOST",
    ) !== "true"
) {
    warnings.push(
        "AUTH_TRUST_HOST belum true. Ini biasanya dibutuhkan ketika aplikasi berada di belakang reverse proxy.",
    );
}

console.log(
    `Environment mode: ${nodeEnv}`,
);

if (warnings.length > 0) {
    console.log(
        "\nPeringatan:",
    );

    for (const warning of warnings) {
        console.log(
            `- ${warning}`,
        );
    }
}

if (errors.length > 0) {
    console.error(
        "\nEnvironment belum valid:",
    );

    for (const error of errors) {
        console.error(
            `- ${error}`,
        );
    }

    process.exit(1);
}

console.log(
    "\nEnvironment valid.",
);