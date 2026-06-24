import {
    expect,
    test,
} from "@playwright/test";

test(
    "admin tanpa session diarahkan ke login",
    async ({ page }) => {
        await page.goto(
            "/admin",
        );

        await expect(
            page,
        ).toHaveURL(
            /\/admin\/login/,
        );

        await expect(
            page.getByRole(
                "heading",
                {
                    name:
                        "Panel Admin",
                },
            ),
        ).toBeVisible();
    },
);

test(
    "login salah menampilkan pesan error",
    async ({ page }) => {
        await page.goto(
            "/admin/login",
        );

        await page
            .getByLabel(
                "Email",
            )
            .fill(
                "invalid@example.com",
            );

        await page
            .getByLabel(
                "Password",
            )
            .fill(
                "password-yang-salah",
            );

        await page
            .getByRole(
                "button",
                {
                    name:
                        "Masuk",
                },
            )
            .click();

        await expect(
            page.getByRole(
                "alert",
            ),
        ).toContainText(
            /Email atau password salah|bermasalah/i,
        );
    },
);

test(
    "admin dapat login dan membuka modul CMS",
    async ({
        page,
    }) => {
        const email =
            process.env
                .QA_ADMIN_EMAIL;

        const password =
            process.env
                .QA_ADMIN_PASSWORD;

        test.skip(
            !email ||
            !password,
            "QA_ADMIN_EMAIL dan QA_ADMIN_PASSWORD belum diisi.",
        );

        await page.goto(
            "/admin/login",
        );

        await page
            .getByLabel(
                "Email",
            )
            .fill(email!);

        await page
            .getByLabel(
                "Password",
            )
            .fill(password!);

        await Promise.all([
            page.waitForURL(
                /\/admin\/?$/,
            ),

            page
                .getByRole(
                    "button",
                    {
                        name:
                            "Masuk",
                    },
                )
                .click(),
        ]);

        await expect(
            page.getByRole(
                "heading",
                {
                    name:
                        /Selamat datang/i,
                },
            ),
        ).toBeVisible();

        const adminRoutes = [
            "/admin/services",
            "/admin/lawyers",
            "/admin/articles",
            "/admin/clients",
            "/admin/media",
            "/admin/settings/general",
            "/admin/settings/seo",
        ];

        for (const route of adminRoutes) {
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
                page,
            ).not.toHaveURL(
                /\/admin\/login/,
            );
        }
    },
);