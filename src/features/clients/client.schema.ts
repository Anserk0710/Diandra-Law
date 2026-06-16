import { z } from "zod";

import { isAssetReference } from "@/lib/cms/cms-utils";

export const clientSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama client minimal 2 karakter")
    .max(191, "Nama client maksimal 191 karakter"),

  slug: z
    .string()
    .trim()
    .max(191, "Slug maksimal 191 karakter")
    .transform((value) =>
      value.length > 0 ? value : undefined,
    ),

  logo: z
    .string()
    .trim()
    .max(255, "Path logo maksimal 255 karakter")
    .transform((value) =>
      value.length > 0 ? value : undefined,
    )
    .refine(
      (value) =>
        value === undefined ||
        isAssetReference(value),
      "Gunakan URL http/https atau path yang diawali /",
    ),

  shortDescription: z
    .string()
    .trim()
    .max(5000, "Deskripsi terlalu panjang")
    .transform((value) =>
      value.length > 0 ? value : undefined,
    ),

  category: z
    .string()
    .trim()
    .max(191, "Kategori maksimal 191 karakter")
    .transform((value) =>
      value.length > 0 ? value : undefined,
    ),

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