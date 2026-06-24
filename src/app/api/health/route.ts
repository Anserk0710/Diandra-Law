import { NextResponse } from "next/server";

import { prisma } from "@/lib/db/prisma";
import { cloudinary } from "@/lib/upload/cloudinary-client";

export const runtime = "nodejs";

export const dynamic = "force-dynamic";

type CheckResult = "ok" | "error";

export async function GET() {
    let database: CheckResult = "ok";
    let mediaStorage: CheckResult = "ok";

    try {
        await prisma.$queryRaw`SELECT 1`;
    } catch (error) {
        database = "error";
        console.error("Health check database gagal:", error);
    }

    try {
        // Verifikasi Cloudinary dapat dijangkau dengan ping ke API
        await cloudinary.api.ping();
    } catch (error) {
        mediaStorage = "error";
        console.error("Health check Cloudinary gagal:", error);
    }

    const healthy =
        database === "ok" &&
        mediaStorage === "ok";

    return NextResponse.json(
        {
            status: healthy ? "ok" : "degraded",
            checks: {
                application: "ok",
                database,
                mediaStorage,
            },
            timestamp: new Date().toISOString(),
        },
        {
            status: healthy ? 200 : 503,
            headers: {
                "Cache-Control": "no-store",
            },
        },
    );
}