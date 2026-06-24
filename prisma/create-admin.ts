import "dotenv/config";

import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";

import {
    PrismaClient,
} from "../src/generated/prisma";

if (!process.env.DATABASE_URL) {
    throw new Error(
        "DATABASE_URL belum diisi.",
    );
}

const email =
    (process.env.ADMIN_EMAIL ?? "")
        .trim()
        .toLowerCase();

const password =
    process.env.ADMIN_PASSWORD;

const fullName =
    process.env.ADMIN_NAME
        ?.trim() ||
    "Administrator";

if (!email) {
    throw new Error(
        "ADMIN_EMAIL belum diisi.",
    );
}

if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email,
    )
) {
    throw new Error(
        "ADMIN_EMAIL tidak valid.",
    );
}

if (!password) {
    throw new Error(
        "ADMIN_PASSWORD belum diisi.",
    );
}

if (password.length < 12) {
    throw new Error(
        "ADMIN_PASSWORD minimal 12 karakter.",
    );
}

if (fullName.length > 191) {
    throw new Error(
        "ADMIN_NAME maksimal 191 karakter.",
    );
}

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "" });
const prisma = new PrismaClient({ adapter });

async function main() {
    const passwordHash =
        await bcrypt.hash(
            password!,
            12,
        );

    const admin =
        await prisma.admin.upsert({
            where: {
                email,
            },

            update: {
                fullName,
                passwordHash,
                isActive:
                    true,
            },

            create: {
                email,
                fullName,
                passwordHash,
                isActive:
                    true,
            },

            select: {
                id:
                    true,

                email:
                    true,

                fullName:
                    true,
            },
        });

    console.log(
        "Admin berhasil dibuat atau diperbarui:",
    );

    console.log({
        id:
            admin.id.toString(),

        email:
            admin.email,

        fullName:
            admin.fullName,
    });
}

main()
    .catch((error) => {
        console.error(
            "Gagal membuat admin:",
            error,
        );

        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });