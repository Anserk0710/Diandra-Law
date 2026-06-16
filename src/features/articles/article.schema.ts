import { z } from "zod";

import { isAssetReference } from "@/lib/cms/cms-utils";

export const articleSchema = z
  .object({
    categoryId: z
      .string()
      .trim()
      .transform((value) =>
        value.length > 0 ? value : undefined,
      )
      .refine(
        (value) =>
          value === undefined ||
          /^[1-9]\d*$/.test(value),
        "Kategori tidak valid",
      ),

    title: z
      .string()
      .trim()
      .min(3, "Judul minimal 3 karakter")
      .max(255, "Judul maksimal 255 karakter"),

    slug: z
      .string()
      .trim()
      .max(255, "Slug maksimal 255 karakter")
      .transform((value) =>
        value.length > 0 ? value : undefined,
      ),

    excerpt: z
      .string()
      .trim()
      .max(3000, "Excerpt terlalu panjang")
      .transform((value) =>
        value.length > 0 ? value : undefined,
      ),

    thumbnail: z
      .string()
      .trim()
      .max(255, "Path thumbnail maksimal 255 karakter")
      .transform((value) =>
        value.length > 0 ? value : undefined,
      )
      .refine(
        (value) =>
          value === undefined ||
          isAssetReference(value),
        "Gunakan URL http/https atau path yang diawali /",
      ),

    content: z
      .string()
      .trim()
      .min(20, "Isi artikel minimal 20 karakter")
      .max(100000, "Isi artikel terlalu panjang"),

    featured: z.boolean(),

    publishedAt: z
      .string()
      .trim()
      .transform((value) =>
        value.length > 0 ? value : undefined,
      )
      .refine(
        (value) =>
          value === undefined ||
          /^\d{4}-\d{2}-\d{2}$/.test(value),
        "Tanggal publikasi tidak valid",
      ),

    status: z.enum([
      "draft",
      "published",
      "archived",
    ]),
  })
  .superRefine((value, context) => {
    if (
      value.status === "published" &&
      !value.publishedAt
    ) {
      context.addIssue({
        code: "custom",
        path: ["publishedAt"],
        message:
          "Tanggal publikasi wajib diisi untuk artikel published",
      });
    }
  });

export const articleCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama kategori minimal 2 karakter")
    .max(191, "Nama kategori maksimal 191 karakter"),

  slug: z
    .string()
    .trim()
    .max(191, "Slug maksimal 191 karakter")
    .transform((value) =>
      value.length > 0 ? value : undefined,
    ),
});