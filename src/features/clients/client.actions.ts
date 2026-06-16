"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/auth/require-admin";
import type { ActionState } from "@/lib/cms/action-state";
import {
  actionStateFromZod,
  fieldErrorState,
  getFormString,
  isPrismaErrorCode,
  parseEntityId,
  slugify,
} from "@/lib/cms/cms-utils";
import { prisma } from "@/lib/db/prisma";

import { clientSchema } from "./client.schema";

function readClientFormData(
  formData: FormData,
) {
  return {
    name: getFormString(formData, "name"),
    slug: getFormString(formData, "slug"),
    logo: getFormString(formData, "logo"),
    shortDescription: getFormString(
      formData,
      "shortDescription",
    ),
    category: getFormString(
      formData,
      "category",
    ),
    featured: formData.has("featured"),
    sortOrder: getFormString(
      formData,
      "sortOrder",
    ),
    status: getFormString(
      formData,
      "status",
    ),
  };
}

function revalidateClientPaths() {
  revalidatePath("/");
  revalidatePath("/daftar-client");
  revalidatePath("/admin/clients");
}

export async function createClientAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed = clientSchema.safeParse(
    readClientFormData(formData),
  );

  if (!parsed.success) {
    return actionStateFromZod(parsed.error);
  }

  const slug = parsed.data.slug
    ? slugify(parsed.data.slug)
    : null;

  if (parsed.data.slug && !slug) {
    return fieldErrorState(
      "slug",
      "Slug client tidak valid",
    );
  }

  if (slug) {
    const duplicate =
      await prisma.client.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
        },
      });

    if (duplicate) {
      return fieldErrorState(
        "slug",
        "Slug sudah digunakan client lain",
      );
    }
  }

  let createdId: bigint;

  try {
    const client = await prisma.client.create({
      data: {
        name: parsed.data.name,
        slug,
        logo: parsed.data.logo ?? null,
        shortDescription:
          parsed.data.shortDescription ??
          null,
        category:
          parsed.data.category ?? null,
        featured: parsed.data.featured,
        sortOrder: parsed.data.sortOrder,
        status: parsed.data.status,
      },
      select: {
        id: true,
      },
    });

    createdId = client.id;
  } catch (error) {
    if (
      isPrismaErrorCode(error, "P2002")
    ) {
      return fieldErrorState(
        "slug",
        "Slug sudah digunakan client lain",
      );
    }

    console.error(
      "Gagal membuat client:",
      error,
    );

    return {
      status: "error",
      message:
        "Client gagal dibuat karena kesalahan database.",
    };
  }

  revalidateClientPaths();

  redirect(
    `/admin/clients/${createdId.toString()}`,
  );
}

export async function updateClientAction(
  clientId: string,
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const id = parseEntityId(clientId);

  if (!id) {
    return {
      status: "error",
      message: "ID client tidak valid.",
    };
  }

  const parsed = clientSchema.safeParse(
    readClientFormData(formData),
  );

  if (!parsed.success) {
    return actionStateFromZod(parsed.error);
  }

  const slug = parsed.data.slug
    ? slugify(parsed.data.slug)
    : null;

  if (parsed.data.slug && !slug) {
    return fieldErrorState(
      "slug",
      "Slug client tidak valid",
    );
  }

  if (slug) {
    const duplicate =
      await prisma.client.findFirst({
        where: {
          slug,
          id: {
            not: id,
          },
        },
        select: {
          id: true,
        },
      });

    if (duplicate) {
      return fieldErrorState(
        "slug",
        "Slug sudah digunakan client lain",
      );
    }
  }

  try {
    await prisma.client.update({
      where: {
        id,
      },
      data: {
        name: parsed.data.name,
        slug,
        logo: parsed.data.logo ?? null,
        shortDescription:
          parsed.data.shortDescription ??
          null,
        category:
          parsed.data.category ?? null,
        featured: parsed.data.featured,
        sortOrder: parsed.data.sortOrder,
        status: parsed.data.status,
      },
    });
  } catch (error) {
    if (
      isPrismaErrorCode(error, "P2002")
    ) {
      return fieldErrorState(
        "slug",
        "Slug sudah digunakan client lain",
      );
    }

    console.error(
      "Gagal memperbarui client:",
      error,
    );

    return {
      status: "error",
      message:
        "Client gagal diperbarui karena kesalahan database.",
    };
  }

  revalidateClientPaths();

  redirect(`/admin/clients/${clientId}`);
}

export async function deleteClientAction(
  clientId: string,
) {
  await requireAdmin();

  const id = parseEntityId(clientId);

  if (!id) {
    return;
  }

  await prisma.client.delete({
    where: {
      id,
    },
  });

  revalidateClientPaths();
}