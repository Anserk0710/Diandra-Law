import {
    defineConfig,
} from "@playwright/test";
import {
    config as loadEnv,
} from "dotenv";

const initialNodeEnv =
    process.env.NODE_ENV ??
    "development";

const environmentFiles = [
    ".env.test.local",
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

const configuredBaseUrl =
    process.env.QA_BASE_URL?.trim();

const baseURL =
    configuredBaseUrl
        ? configuredBaseUrl.replace(
            /\/+$/,
            "",
        )
        : "http://127.0.0.1:3000";

const useExternalServer =
    Boolean(
        configuredBaseUrl,
    );

const useProductionServer =
    process.env
        .PLAYWRIGHT_USE_PRODUCTION ===
    "true";

export default defineConfig({
    testDir:
        "./tests/e2e",

    fullyParallel:
        false,

    forbidOnly:
        Boolean(process.env.CI),

    retries:
        process.env.CI
            ? 2
            : 1,

    workers:
        process.env.CI
            ? 1
            : undefined,

    reporter: [
        ["list"],

        [
            "html",
            {
                open:
                    "never",
            },
        ],
    ],

    use: {
        baseURL,

        trace:
            "on-first-retry",

        screenshot:
            "only-on-failure",

        video:
            "retain-on-failure",
    },

    webServer:
        useExternalServer
            ? undefined
            : {
                command:
                    useProductionServer
                        ? "npm run start"
                        : "npm run dev",

                url:
                    baseURL,

                reuseExistingServer:
                    !useProductionServer &&
                    !process.env.CI,

                timeout:
                    180_000,
            },

    projects: [
        {
            name:
                "desktop-chromium",

            use: {
                browserName:
                    "chromium",

                viewport: {
                    width:
                        1440,

                    height:
                        900,
                },
            },
        },

        {
            name:
                "mobile-chromium",

            use: {
                browserName:
                    "chromium",

                viewport: {
                    width:
                        390,

                    height:
                        844,
                },

                isMobile:
                    true,

                hasTouch:
                    true,
            },
        },
    ],
});