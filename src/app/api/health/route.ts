import {
    constants,
} from "node:fs";
import {
    access,
} from "node:fs/promises";

import {
    NextResponse,
} from "next/server";

import {
    prisma,
} from "@/lib/db/prisma";
import {
    getMediaUploadRoot,
} from "@/lib/upload/media-storage";

export const runtime =
    "nodejs";

export const dynamic =
    "force-dynamic";

type CheckResult =
    "ok" | "error";

export async function GET() {
    let database:
        CheckResult = "ok";

    let mediaStorage:
        CheckResult = "ok";

    try {
        await prisma.$queryRaw`
      SELECT 1
    `;
    } catch (error) {
        database = "error";

        console.error(
            "Health check database gagal:",
            error,
        );
    }

    try {
        await access(
            getMediaUploadRoot(),
            constants.R_OK |
            constants.W_OK,
        );
    } catch (error) {
        mediaStorage =
            "error";

        console.error(
            "Health check media storage gagal:",
            error,
        );
    }

    const healthy =
        database === "ok" &&
        mediaStorage === "ok";

    return NextResponse.json(
        {
            status:
                healthy
                    ? "ok"
                    : "degraded",

            checks: {
                application:
                    "ok",

                database,

                mediaStorage,
            },

            timestamp:
                new Date().toISOString(),
        },

        {
            status:
                healthy
                    ? 200
                    : 503,

            headers: {
                "Cache-Control":
                    "no-store",
            },
        },
    );
}