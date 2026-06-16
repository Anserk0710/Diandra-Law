"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/lib/auth/require-admin";
import type { ActionState } from "@/lib/cms/action-state";
import {
  actionStateFromZod,
  getFormString,
} from "@/lib/cms/cms-utils";
import { prisma } from "@/lib/db/prisma";

import {
  GLOBAL_SEO_ENTITY_ID,
  GLOBAL_SEO_ENTITY_TYPE,
} from "@/features/seo/seo.queries";

import {
  generalSettingsSchema,
  globalSeoSchema,
  whatsappSettingsSchema,
} from "./settings.schema";

async function getSettingsId() {
  const settings =
    await prisma.siteSetting.findFirst({
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
      },
    });

  return settings?.id;
}

export async function updateGeneralSettingsAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed =
    generalSettingsSchema.safeParse({
      siteName: getFormString(
        formData,
        "siteName",
      ),
      siteTagline: getFormString(
        formData,
        "siteTagline",
      ),
      logoLight: getFormString(
        formData,
        "logoLight",
      ),
      logoDark: getFormString(
        formData,
        "logoDark",
      ),
      primaryColor: getFormString(
        formData,
        "primaryColor",
      ),
      secondaryColor: getFormString(
        formData,
        "secondaryColor",
      ),
      email: getFormString(
        formData,
        "email",
      ),
      phone: getFormString(
        formData,
        "phone",
      ),
      officeAddress: getFormString(
        formData,
        "officeAddress",
      ),
      mapEmbedUrl: getFormString(
        formData,
        "mapEmbedUrl",
      ),
      footerText: getFormString(
        formData,
        "footerText",
      ),
    });

  if (!parsed.success) {
    return actionStateFromZod(
      parsed.error,
    );
  }

  try {
    const id = await getSettingsId();

    const data = {
      siteName: parsed.data.siteName,
      siteTagline:
        parsed.data.siteTagline ?? null,
      logoLight:
        parsed.data.logoLight ?? null,
      logoDark:
        parsed.data.logoDark ?? null,
      primaryColor:
        parsed.data.primaryColor,
      secondaryColor:
        parsed.data.secondaryColor,
      email: parsed.data.email ?? null,
      phone: parsed.data.phone ?? null,
      officeAddress:
        parsed.data.officeAddress ?? null,
      mapEmbedUrl:
        parsed.data.mapEmbedUrl ?? null,
      footerText:
        parsed.data.footerText ?? null,
    };

    if (id) {
      await prisma.siteSetting.update({
        where: {
          id,
        },
        data,
      });
    } else {
      await prisma.siteSetting.create({
        data,
      });
    }
  } catch (error) {
    console.error(
      "Gagal menyimpan general settings:",
      error,
    );

    return {
      status: "error",
      message:
        "General settings gagal disimpan.",
    };
  }

  revalidatePath("/", "layout");
  revalidatePath("/kontak");

  return {
    status: "success",
    message:
      "General settings berhasil disimpan.",
  };
}

export async function updateWhatsAppSettingsAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed =
    whatsappSettingsSchema.safeParse({
      whatsappNumber: getFormString(
        formData,
        "whatsappNumber",
      ),
      whatsappMessage: getFormString(
        formData,
        "whatsappMessage",
      ),
    });

  if (!parsed.success) {
    return actionStateFromZod(
      parsed.error,
    );
  }

  try {
    const id = await getSettingsId();

    const data = {
      whatsappNumber:
        parsed.data.whatsappNumber,
      whatsappMessage:
        parsed.data.whatsappMessage ??
        null,
    };

    if (id) {
      await prisma.siteSetting.update({
        where: {
          id,
        },
        data,
      });
    } else {
      await prisma.siteSetting.create({
        data,
      });
    }
  } catch (error) {
    console.error(
      "Gagal menyimpan WhatsApp settings:",
      error,
    );

    return {
      status: "error",
      message:
        "WhatsApp settings gagal disimpan.",
    };
  }

  revalidatePath("/", "layout");
  revalidatePath("/kontak");

  return {
    status: "success",
    message:
      "WhatsApp settings berhasil disimpan.",
  };
}

export async function updateGlobalSeoAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed =
    globalSeoSchema.safeParse({
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

  try {
    await prisma.seoMeta.upsert({
      where: {
        entityType_entityId: {
          entityType:
            GLOBAL_SEO_ENTITY_TYPE,
          entityId:
            GLOBAL_SEO_ENTITY_ID,
        },
      },
      update: {
        metaTitle:
          parsed.data.metaTitle,
        metaDescription:
          parsed.data.metaDescription,
        ogImage:
          parsed.data.ogImage ?? null,
        canonicalUrl:
          parsed.data.canonicalUrl,
        robots: parsed.data.robots,
        schemaType:
          parsed.data.schemaType,
      },
      create: {
        entityType:
          GLOBAL_SEO_ENTITY_TYPE,
        entityId:
          GLOBAL_SEO_ENTITY_ID,
        metaTitle:
          parsed.data.metaTitle,
        metaDescription:
          parsed.data.metaDescription,
        ogImage:
          parsed.data.ogImage ?? null,
        canonicalUrl:
          parsed.data.canonicalUrl,
        robots: parsed.data.robots,
        schemaType:
          parsed.data.schemaType,
      },
    });
  } catch (error) {
    console.error(
      "Gagal menyimpan global SEO:",
      error,
    );

    return {
      status: "error",
      message:
        "Global SEO gagal disimpan.",
    };
  }

  revalidatePath("/", "layout");

  return {
    status: "success",
    message:
      "Global SEO berhasil disimpan.",
  };
}