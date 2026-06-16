import { z } from "zod";

import { isAssetReference } from "@/lib/cms/cms-utils";

export const lawyerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Nama minimal 3 karakter")
    .max(191, "Nama maksimal 191 karakter"),

  slug: z
    .string()
    .trim()
    .max(191, "Slug maksimal 191 karakter")
    .transform((value) =>
      value.length > 0 ? value : undefined,
    ),

  photo: z
    .string()
    .trim()
    .max(255, "Path foto maksimal 255 karakter")
    .transform((value) =>
      value.length > 0 ? value : undefined,
    )
    .refine(
      (value) =>
        value === undefined ||
        isAssetReference(value),
      "Gunakan URL http/https atau path yang diawali /",
    ),

  position: z
    .string()
    .trim()
    .min(2, "Jabatan minimal 2 karakter")
    .max(191, "Jabatan maksimal 191 karakter"),

  shortBio: z
    .string()
    .trim()
    .min(10, "Bio singkat minimal 10 karakter")
    .max(3000, "Bio singkat terlalu panjang"),

  fullBio: z
    .string()
    .trim()
    .min(10, "Bio lengkap minimal 10 karakter")
    .max(50000, "Bio lengkap terlalu panjang"),

  specialty: z
    .string()
    .trim()
    .min(2, "Spesialisasi minimal 2 karakter")
    .max(255, "Spesialisasi maksimal 255 karakter"),

  featured: z.boolean(),

  sortOrder: z.coerce
    .number()
    .int()
    .min(0, "Urutan minimal 0")
    .max(9999, "Urutan maksimal 9999"),

  status: z.enum([
    "draft",
    "published",
    "inactive",
  ]),
});