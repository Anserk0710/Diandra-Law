import { z } from "zod";

import {
  isAbsoluteHttpUrl,
  isAssetReference,
} from "@/lib/cms/cms-utils";

import {
  SEO_ROBOTS_OPTIONS,
  SEO_SCHEMA_TYPES,
} from "./seo.types";

const optionalText = (maximum: number) =>
  z
    .string()
    .trim()
    .max(
      maximum,
      `Maksimal ${maximum} karakter`,
    )
    .transform((value) =>
      value.length > 0
        ? value
        : undefined,
    );

const optionalAsset = optionalText(
  255,
).refine(
  (value) =>
    value === undefined ||
    isAssetReference(value),
  "Gunakan URL http/https atau path file yang diawali /",
);

const optionalCanonicalUrl =
  optionalText(500).refine(
    (value) =>
      value === undefined ||
      isAbsoluteHttpUrl(value),
    "Canonical URL harus berupa URL http atau https",
  );

export const entitySeoSchema = z.object({
  metaTitle: optionalText(255),

  metaDescription: optionalText(500),

  ogImage: optionalAsset,

  canonicalUrl:
    optionalCanonicalUrl.transform(
      (value) =>
        value?.replace(/\/+$/, ""),
    ),

  robots: z.enum(
    SEO_ROBOTS_OPTIONS,
  ),

  schemaType: z.enum(
    SEO_SCHEMA_TYPES,
  ),
});

export type EntitySeoInput = z.infer<
  typeof entitySeoSchema
>;