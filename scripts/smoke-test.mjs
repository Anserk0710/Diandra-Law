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
        path:
            environmentFile,
    });
}

const rawBaseUrl =
    process.env.QA_BASE_URL?.trim() ||
    process.env
        .NEXT_PUBLIC_SITE_URL?.trim();

if (!rawBaseUrl) {
    console.error(
        "QA_BASE_URL atau NEXT_PUBLIC_SITE_URL belum diisi.",
    );

    process.exit(1);
}

let baseUrl;

try {
    baseUrl =
        new URL(
            rawBaseUrl,
        );

    baseUrl.pathname =
        baseUrl.pathname.replace(
            /\/+$/,
            "",
        );
} catch {
    console.error(
        "Base URL smoke test tidak valid.",
    );

    process.exit(1);
}

const failures = [];

function resolveUrl(pathname) {
    return new URL(
        pathname,
        `${baseUrl.toString().replace(
            /\/+$/,
            "",
        )}/`,
    ).toString();
}

async function fetchWithTimeout(
    url,
    options = {},
) {
    return fetch(url, {
        ...options,

        signal:
            AbortSignal.timeout(
                15_000,
            ),
    });
}

function fail(message) {
    failures.push(message);

    console.error(
        `✗ ${message}`,
    );
}

function success(message) {
    console.log(
        `✓ ${message}`,
    );
}

const publicRoutes = [
    "/",
    "/tentang-kami",
    "/layanan",
    "/daftar-client",
    "/retainer",
    "/tim",
    "/artikel",
    "/kontak",
];

for (const route of publicRoutes) {
    try {
        const response =
            await fetchWithTimeout(
                resolveUrl(route),
            );

        if (response.status !== 200) {
            fail(
                `${route} mengembalikan status ${response.status}.`,
            );

            continue;
        }

        const html =
            await response.text();

        if (
            !/<title>[\s\S]*?<\/title>/i.test(
                html,
            )
        ) {
            fail(
                `${route} tidak memiliki title.`,
            );

            continue;
        }

        if (
            /application error/i.test(
                html,
            )
        ) {
            fail(
                `${route} mengandung Application Error.`,
            );

            continue;
        }

        success(
            `${route} aktif.`,
        );
    } catch (error) {
        fail(
            `${route} tidak dapat diakses: ${error instanceof Error ? error.message : "unknown error"}`,
        );
    }
}

try {
    const response =
        await fetchWithTimeout(
            resolveUrl(
                "/api/health",
            ),
        );

    const payload =
        await response.json();

    if (
        response.status !== 200 ||
        payload.status !== "ok"
    ) {
        fail(
            `/api/health bermasalah: ${JSON.stringify(
                payload,
            )}`,
        );
    } else {
        success(
            "Health check normal.",
        );
    }
} catch (error) {
    fail(
        `Health check gagal: ${error instanceof Error ? error.message : "unknown error"}`,
    );
}

let sitemapText = "";

try {
    const response =
        await fetchWithTimeout(
            resolveUrl(
                "/sitemap.xml",
            ),
        );

    sitemapText =
        await response.text();

    if (
        response.status !== 200 ||
        !sitemapText.includes(
            "<urlset",
        )
    ) {
        fail(
            "Sitemap tidak valid.",
        );
    } else {
        success(
            "Sitemap aktif.",
        );
    }
} catch (error) {
    fail(
        `Sitemap gagal: ${error instanceof Error ? error.message : "unknown error"}`,
    );
}

try {
    const response =
        await fetchWithTimeout(
            resolveUrl(
                "/robots.txt",
            ),
        );

    const robotsText =
        await response.text();

    if (
        response.status !== 200 ||
        !/Sitemap:/i.test(
            robotsText,
        )
    ) {
        fail(
            "robots.txt tidak valid.",
        );
    } else {
        success(
            "robots.txt aktif.",
        );
    }
} catch (error) {
    fail(
        `robots.txt gagal: ${error instanceof Error ? error.message : "unknown error"}`,
    );
}

try {
    const response =
        await fetchWithTimeout(
            resolveUrl(
                `/qa-not-found-${Date.now()}`,
            ),
        );

    if (response.status !== 404) {
        fail(
            `404 test mengembalikan status ${response.status}.`,
        );
    } else {
        success(
            "404 bekerja.",
        );
    }
} catch (error) {
    fail(
        `404 test gagal: ${error instanceof Error ? error.message : "unknown error"}`,
    );
}

try {
    const response =
        await fetchWithTimeout(
            resolveUrl(
                "/admin",
            ),

            {
                redirect:
                    "manual",
            },
        );

    const validStatuses =
        new Set([
            302,
            303,
            307,
            308,
        ]);

    const location =
        response.headers.get(
            "location",
        );

    if (
        !validStatuses.has(
            response.status,
        ) ||
        !location?.includes(
            "/admin/login",
        )
    ) {
        fail(
            "Proteksi route /admin tidak bekerja seperti yang diharapkan.",
        );
    } else {
        success(
            "Proteksi admin aktif.",
        );
    }
} catch (error) {
    fail(
        `Proteksi admin gagal diuji: ${error instanceof Error ? error.message : "unknown error"}`,
    );
}

if (sitemapText) {
    const sitemapUrls = [
        ...sitemapText.matchAll(
            /<loc>(.*?)<\/loc>/g,
        ),
    ]
        .map(
            (match) =>
                match[1],
        )
        .filter(Boolean)
        .slice(0, 12);

    for (const sitemapUrl of sitemapUrls) {
        try {
            const parsedUrl =
                new URL(
                    sitemapUrl,
                );

            if (
                parsedUrl.origin !==
                baseUrl.origin
            ) {
                continue;
            }

            const response =
                await fetchWithTimeout(
                    parsedUrl.toString(),
                );

            if (
                response.status !==
                200
            ) {
                fail(
                    `URL sitemap ${parsedUrl.pathname} berstatus ${response.status}.`,
                );
            } else {
                success(
                    `URL sitemap ${parsedUrl.pathname} aktif.`,
                );
            }
        } catch (error) {
            fail(
                `URL sitemap gagal diuji: ${error instanceof Error ? error.message : "unknown error"}`,
            );
        }
    }
}

console.log("");

if (failures.length > 0) {
    console.error(
        `Smoke test gagal dengan ${failures.length} masalah.`,
    );

    process.exit(1);
}

console.log(
    "Semua smoke test lulus.",
);