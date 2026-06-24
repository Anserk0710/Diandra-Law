"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/lib/auth/require-admin";
import type { ActionState } from "@/lib/cms/action-state";
import {
  actionStateFromZod,
  getFormString,
  parseEntityId,
} from "@/lib/cms/cms-utils";
import { prisma } from "@/lib/db/prisma";

import { entitySeoSchema } from "./seo.schema";
import {
  isSeoEntityType,
  type SeoEntityType,
} from "./seo.types";

async function seoEntityExists(
  entityType: SeoEntityType,
  entityId: bigint,
) {
  switch (entityType) {
    case "page":
      return Boolean(
        await prisma.page.findUnique({
          where: {
            id: entityId,
          },
          select: {
            id: true,
          },
        }),
      );

    case "service":
      return Boolean(
        await prisma.service.findUnique({
          where: {
            id: entityId,
          },
          select: {
            id: true,
          },
        }),
      );

    case "lawyer":
      return Boolean(
        await prisma.lawyer.findUnique({
          where: {
            id: entityId,
          },
          select: {
            id: true,
          },
        }),
      );

    case "article":
      return Boolean(
        await prisma.article.findUnique({
          where: {
            id: entityId,
          },
          select: {
            id: true,
          },
        }),
      );

    case "client":
      return Boolean(
        await prisma.client.findUnique({
          where: {
            id: entityId,
          },
          select: {
            id: true,
          },
        }),
      );
  }
}

export async function updateEntitySeoAction(
  rawEntityType: string,
  rawEntityId: string,
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  if (
    !isSeoEntityType(rawEntityType)
  ) {
    return {
      status: "error",
      message:
        "Tipe konten SEO tidak valid.",
    };
  }

  const entityId =
    parseEntityId(rawEntityId);

  if (!entityId) {
    return {
      status: "error",
      message:
        "ID konten SEO tidak valid.",
    };
  }

  const parsed =
    entitySeoSchema.safeParse({
      metaTitle: getFormString(
        formData,
        "metaTitle",
      ),

      metaDescription: getFormString(
        formData,
        "metaDescription",
      ),

      ogImage: getFormString(
        formData,
        "ogImage",
      ),

      canonicalUrl: getFormString(
        formData,
        "canonicalUrl",
      ),

      robots: getFormString(
        formData,
        "robots",
      ),

      schemaType: getFormString(
        formData,
        "schemaType",
      ),
    });

  if (!parsed.success) {
    return actionStateFromZod(
      parsed.error,
    );
  }

  const exists =
    await seoEntityExists(
      rawEntityType,
      entityId,
    );

  if (!exists) {
    return {
      status: "error",
      message:
        "Konten yang akan diberi metadata SEO tidak ditemukan.",
    };
  }

  try {
    await prisma.seoMeta.upsert({
      where: {
        entityType_entityId: {
          entityType:
            rawEntityType,
          entityId,
        },
      },

      update: {
        metaTitle:
          parsed.data.metaTitle ??
          null,

        metaDescription:
          parsed.data
            .metaDescription ??
          null,

        ogImage:
          parsed.data.ogImage ??
          null,

        canonicalUrl:
          parsed.data.canonicalUrl ??
          null,

        robots:
          parsed.data.robots,

        schemaType:
          parsed.data.schemaType,
      },

      create: {
        entityType:
          rawEntityType,

        entityId,

        metaTitle:
          parsed.data.metaTitle ??
          null,

        metaDescription:
          parsed.data
            .metaDescription ??
          null,

        ogImage:
          parsed.data.ogImage ??
          null,

        canonicalUrl:
          parsed.data.canonicalUrl ??
          null,

        robots:
          parsed.data.robots,

        schemaType:
          parsed.data.schemaType,
      },
    });
  } catch (error) {
    console.error(
      "Gagal menyimpan metadata SEO:",
      error,
    );

    return {
      status: "error",
      message:
        "Metadata SEO gagal disimpan.",
    };
  }

  revalidatePath("/", "layout");
  revalidatePath("/sitemap.xml");

  return {
    status: "success",
    message:
      "Metadata SEO berhasil disimpan.",
  };
}