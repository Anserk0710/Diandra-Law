import {
    expect,
    test,
    type Page,
} from "@playwright/test";

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

async function assertNoHorizontalOverflow(
    page: Page,
) {
    const overflow =
        await page.evaluate(() => {
            return (
                document.documentElement
                    .scrollWidth -
                document.documentElement
                    .clientWidth
            );
        });

    expect(
        overflow,
    ).toBeLessThanOrEqual(2);
}

test.describe(
    "Public routes",
    () => {
        for (const route of publicRoutes) {
            test(
                `${route} dapat dibuka`,
                async ({ page }) => {
                    const response =
                        await page.goto(
                            route,
                            {
                                waitUntil:
                                    "domcontentloaded",
                            },
                        );

                    expect(
                        response?.status(),
                    ).toBe(200);

                    await expect(
                        page.locator("main"),
                    ).toBeVisible();

                    await expect(
                        page,
                    ).toHaveTitle(/\S+/);

                    await expect(
                        page.locator("body"),
                    ).not.toContainText(
                        "Application error",
                    );

                    await assertNoHorizontalOverflow(
                        page,
                    );
                },
            );
        }
    },
);

const dynamicCollections = [
    {
        name:
            "layanan",

        listRoute:
            "/layanan",

        linkSelector:
            'a[href^="/layanan/"]',
    },

    {
        name:
            "lawyer",

        listRoute:
            "/tim",

        linkSelector:
            'a[href^="/tim/"]',
    },

    {
        name:
            "artikel",

        listRoute:
            "/artikel",

        linkSelector:
            'a[href^="/artikel/"]',
    },
];

test.describe(
    "Dynamic detail routes",
    () => {
        for (const collection of dynamicCollections) {
            test(
                `detail ${collection.name} dapat dibuka`,
                async ({
                    page,
                }) => {
                    await page.goto(
                        collection.listRoute,
                    );

                    const link =
                        page
                            .locator(
                                collection.linkSelector,
                            )
                            .first();

                    if (
                        (await link.count()) ===
                        0
                    ) {
                        test.skip(
                            true,
                            `Belum ada ${collection.name} published.`,
                        );

                        return;
                    }

                    const href =
                        await link.getAttribute(
                            "href",
                        );

                    expect(href).toBeTruthy();

                    const response =
                        await page.goto(
                            href!,
                            {
                                waitUntil:
                                    "domcontentloaded",
                            },
                        );

                    expect(
                        response?.status(),
                    ).toBe(200);

                    await expect(
                        page.locator("h1"),
                    ).toBeVisible();

                    await assertNoHorizontalOverflow(
                        page,
                    );
                },
            );
        }
    },
);