"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/auth/require-admin";
import type { ActionState } from "@/lib/cms/action-state";
import {
  actionStateFromZod,
  fieldErrorState,
  getFormString,
  getOptionalFormString,
  isPrismaErrorCode,
  parseEntityId,
  slugify,
} from "@/lib/cms/cms-utils";
import { prisma } from "@/lib/db/prisma";

import { lawyerSchema } from "./lawyer.schema";

function readLawyerFormData(
  formData: FormData,
) {
  return {
    name: getFormString(formData, "name"),
    slug: getFormString(formData, "slug"),
    photo: getOptionalFormString(
      formData,
      "photo",
    ),
    position: getFormString(
      formData,
      "position",
    ),
    shortBio: getFormString(
      formData,
      "shortBio",
    ),
    fullBio: getFormString(
      formData,
      "fullBio",
    ),
    specialty: getFormString(
      formData,
      "specialty",
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

function revalidateLawyerPaths(
  ...slugs: Array<string | undefined>
) {
  revalidatePath("/");
  revalidatePath("/tim");
  revalidatePath("/admin/lawyers");

  for (const slug of slugs) {
    if (slug) {
      revalidatePath(`/tim/${slug}`);
    }
  }
}

export async function createLawyerAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed = lawyerSchema.safeParse(
    readLawyerFormData(formData),
  );

  if (!parsed.success) {
    return actionStateFromZod(parsed.error);
  }

  const slug = slugify(
    parsed.data.slug ?? parsed.data.name,
  );

  if (!slug) {
    return fieldErrorState(
      "slug",
      "Slug lawyer tidak valid",
    );
  }

  const duplicate = await prisma.lawyer.findUnique({
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
      "Slug sudah digunakan oleh lawyer lain",
    );
  }

  let createdId: bigint;

  try {
    const lawyer = await prisma.lawyer.create({
      data: {
        name: parsed.data.name,
        slug,
        photo: parsed.data.photo ?? null,
        position: parsed.data.position,
        shortBio: parsed.data.shortBio,
        fullBio: parsed.data.fullBio,
        specialty: parsed.data.specialty,
        featured: parsed.data.featured,
        sortOrder: parsed.data.sortOrder,
        status: parsed.data.status,
      },
      select: {
        id: true,
      },
    });

    createdId = lawyer.id;
  } catch (error) {
    if (
      isPrismaErrorCode(error, "P2002")
    ) {
      return fieldErrorState(
        "slug",
        "Slug sudah digunakan oleh lawyer lain",
      );
    }

    console.error(
      "Gagal membuat lawyer:",
      error,
    );

    return {
      status: "error",
      message:
        "Lawyer gagal dibuat karena kesalahan database.",
    };
  }

  revalidateLawyerPaths(slug);

  redirect(
    `/admin/lawyers/${createdId.toString()}`,
  );
}

export async function updateLawyerAction(
  lawyerId: string,
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const id = parseEntityId(lawyerId);

  if (!id) {
    return {
      status: "error",
      message: "ID lawyer tidak valid.",
    };
  }

  const existing = await prisma.lawyer.findUnique({
    where: {
      id,
    },
    select: {
      slug: true,
    },
  });

  if (!existing) {
    return {
      status: "error",
      message: "Lawyer tidak ditemukan.",
    };
  }

  const parsed = lawyerSchema.safeParse(
    readLawyerFormData(formData),
  );

  if (!parsed.success) {
    return actionStateFromZod(parsed.error);
  }

  const slug = slugify(
    parsed.data.slug ?? parsed.data.name,
  );

  if (!slug) {
    return fieldErrorState(
      "slug",
      "Slug lawyer tidak valid",
    );
  }

  const duplicate = await prisma.lawyer.findFirst({
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
      "Slug sudah digunakan oleh lawyer lain",
    );
  }

  try {
    await prisma.lawyer.update({
      where: {
        id,
      },
      data: {
        name: parsed.data.name,
        slug,
        photo: parsed.data.photo ?? null,
        position: parsed.data.position,
        shortBio: parsed.data.shortBio,
        fullBio: parsed.data.fullBio,
        specialty: parsed.data.specialty,
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
        "Slug sudah digunakan oleh lawyer lain",
      );
    }

    console.error(
      "Gagal memperbarui lawyer:",
      error,
    );

    return {
      status: "error",
      message:
        "Lawyer gagal diperbarui karena kesalahan database.",
    };
  }

  revalidateLawyerPaths(
    existing.slug,
    slug,
  );

  redirect(`/admin/lawyers/${lawyerId}`);
}

export async function deleteLawyerAction(
  lawyerId: string,
) {
  await requireAdmin();

  const id = parseEntityId(lawyerId);

  if (!id) {
    return;
  }

  const lawyer =
    await prisma.lawyer.findUnique({
      where: {
        id,
      },
      select: {
        slug: true,
      },
    });

  if (!lawyer) {
    return;
  }

  await prisma.lawyer.delete({
    where: {
      id,
    },
  });

  revalidateLawyerPaths(lawyer.slug);
}