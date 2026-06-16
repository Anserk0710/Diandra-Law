import { z } from "zod";

import {
  isAbsoluteHttpUrl,
  isAllowedMapEmbedUrl,
  isAssetReference,
} from "@/lib/cms/cms-utils";

const optionalText = (
  maximum: number,
) =>
  z
    .string()
    .trim()
    .max(
      maximum,
      `Maksimal ${maximum} karakter`,
    )
    .transform((value) =>
      value.length > 0 ? value : undefined,
    );

const optionalAsset = optionalText(
  500,
).refine(
  (value) =>
    value === undefined ||
    isAssetReference(value),
  "Gunakan URL http/https atau path yang diawali /",
);

const colorSchema = z
  .string()
  .trim()
  .regex(
    /^#[0-9a-fA-F]{6}$/,
    "Gunakan format hex 6 digit, contohnya #0F172A",
  );

export const generalSettingsSchema =
  z.object({
    siteName: z
      .string()
      .trim()
      .min(2, "Nama website wajib diisi")
      .max(
        191,
        "Nama website maksimal 191 karakter",
      ),

    siteTagline: optionalText(255),
    logoLight: optionalAsset,
    logoDark: optionalAsset,
    primaryColor: colorSchema,
    secondaryColor: colorSchema,

    email: optionalText(191).refine(
      (value) =>
        value === undefined ||
        z.string().email().safeParse(value)
          .success,
      "Format email tidak valid",
    ),

    phone: optionalText(50).refine(
      (value) =>
        value === undefined ||
        /^[+\d\s().-]{7,50}$/.test(value),
      "Format nomor telepon tidak valid",
    ),

    officeAddress: optionalText(5000),

    mapEmbedUrl: optionalText(
      3000,
    ).refine(
      (value) =>
        value === undefined ||
        isAllowedMapEmbedUrl(value),
      "Gunakan URL embed Google Maps dengan protokol HTTPS",
    ),

    footerText: optionalText(5000),
  });

export const whatsappSettingsSchema =
  z.object({
    whatsappNumber: z
      .string()
      .trim()
      .transform((value) =>
        value.replace(/\D/g, ""),
      )
      .refine(
        (value) =>
          value.length >= 8 &&
          value.length <= 15,
        "Nomor WhatsApp harus berisi 8 sampai 15 digit",
      ),

    whatsappMessage: optionalText(255),
  });

export const globalSeoSchema = z.object({
  metaTitle: z
    .string()
    .trim()
    .min(3, "Meta title wajib diisi")
    .max(
      255,
      "Meta title maksimal 255 karakter",
    ),

  metaDescription: z
    .string()
    .trim()
    .min(
      20,
      "Meta description minimal 20 karakter",
    )
    .max(
      500,
      "Meta description maksimal 500 karakter",
    ),

  ogImage: optionalAsset,

  canonicalUrl: z
    .string()
    .trim()
    .refine(
      isAbsoluteHttpUrl,
      "Canonical URL harus berupa URL http atau https",
    )
    .transform((value) =>
      value.replace(/\/+$/, ""),
    ),

  robots: z.enum([
    "index,follow",
    "index,nofollow",
    "noindex,follow",
    "noindex,nofollow",
  ]),

  schemaType: z.enum([
    "LegalService",
    "Organization",
    "ProfessionalService",
  ]),
});

export type GeneralSettingsInput =
  z.infer<typeof generalSettingsSchema>;

export type WhatsAppSettingsInput =
  z.infer<typeof whatsappSettingsSchema>;

export type GlobalSeoInput =
  z.infer<typeof globalSeoSchema>;