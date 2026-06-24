import {
    expect,
    test,
} from "@playwright/test";

const metadataRoutes = [
    "/",
    "/tentang-kami",
    "/layanan",
    "/retainer",
    "/tim",
    "/artikel",
    "/kontak",
];

test.describe(
    "SEO metadata",
    () => {
        for (const route of metadataRoutes) {
            test(
                `${route} mempunyai metadata utama`,
                async ({
                    page,
                }) => {
                    await page.goto(
                        route,
                    );

                    await expect(
                        page,
                    ).toHaveTitle(/\S+/);

                    await expect(
                        page.locator(
                            'meta[name="description"]',
                        ),
                    ).toHaveAttribute(
                        "content",
                        /\S+/,
                    );

                    await expect(
                        page.locator(
                            'link[rel="canonical"]',
                        ),
                    ).toHaveAttribute(
                        "href",
                        /^https?:\/\//,
                    );

                    await expect(
                        page.locator(
                            'meta[property="og:title"]',
                        ),
                    ).toHaveAttribute(
                        "content",
                        /\S+/,
                    );

                    const jsonLdCount =
                        await page
                            .locator(
                                'script[type="application/ld+json"]',
                            )
                            .count();

                    expect(
                        jsonLdCount,
                    ).toBeGreaterThan(0);
                },
            );
        }
    },
);

test(
    "sitemap aktif",
    async ({ request }) => {
        const response =
            await request.get(
                "/sitemap.xml",
            );

        expect(
            response.status(),
        ).toBe(200);

        const body =
            await response.text();

        expect(body).toContain(
            "<urlset",
        );

        expect(body).toContain(
            "<loc>",
        );
    },
);

test(
    "robots aktif",
    async ({ request }) => {
        const response =
            await request.get(
                "/robots.txt",
            );

        expect(
            response.status(),
        ).toBe(200);

        const body =
            await response.text();

        expect(body).toMatch(
            /User-Agent:/i,
        );

        expect(body).toMatch(
            /Sitemap:/i,
        );

        expect(body).toMatch(
            /Disallow:\s*\/admin/i,
        );
    },
);

test(
    "404 mengembalikan status 404 dan noindex",
    async ({ page }) => {
        const response =
            await page.goto(
                `/qa-page-not-found-${Date.now()}`,
            );

        expect(
            response?.status(),
        ).toBe(404);

        const robots =
            await page
                .locator(
                    'head meta[name="robots"]',
                )
                .getAttribute(
                    "content",
                );

        expect(
            robots?.toLowerCase(),
        ).toContain(
            "noindex",
        );
    },
);