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

import {
  articleCategorySchema,
  articleSchema,
} from "./article.schema";

function readArticleFormData(
  formData: FormData,
) {
  return {
    categoryId: getFormString(
      formData,
      "categoryId",
    ),
    title: getFormString(formData, "title"),
    slug: getFormString(formData, "slug"),
    excerpt: getFormString(
      formData,
      "excerpt",
    ),
    thumbnail: getFormString(
      formData,
      "thumbnail",
    ),
    content: getFormString(
      formData,
      "content",
    ),
    featured: formData.has("featured"),
    publishedAt: getFormString(
      formData,
      "publishedAt",
    ),
    status: getFormString(
      formData,
      "status",
    ),
  };
}

function parsePublishedDate(
  value: string | undefined,
) {
  if (!value) {
    return null;
  }

  return new Date(
    `${value}T00:00:00.000Z`,
  );
}

async function resolveCategoryId(
  categoryId: string | undefined,
): Promise<bigint | null | "invalid"> {
  if (!categoryId) {
    return null;
  }

  const id = parseEntityId(categoryId);

  if (!id) {
    return "invalid";
  }

  const category =
    await prisma.articleCategory.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

  return category ? category.id : "invalid";
}

function revalidateArticlePaths(
  ...slugs: Array<string | undefined>
) {
  revalidatePath("/");
  revalidatePath("/artikel");
  revalidatePath("/admin/articles");

  for (const slug of slugs) {
    if (slug) {
      revalidatePath(`/artikel/${slug}`);
    }
  }
}

export async function createArticleAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed = articleSchema.safeParse(
    readArticleFormData(formData),
  );

  if (!parsed.success) {
    return actionStateFromZod(parsed.error);
  }

  const categoryId = await resolveCategoryId(
    parsed.data.categoryId,
  );

  if (categoryId === "invalid") {
    return fieldErrorState(
      "categoryId",
      "Kategori artikel tidak ditemukan",
    );
  }

  const slug = slugify(
    parsed.data.slug ?? parsed.data.title,
  );

  if (!slug) {
    return fieldErrorState(
      "slug",
      "Slug artikel tidak valid",
    );
  }

  const duplicate = await prisma.article.findUnique({
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
      "Slug sudah digunakan artikel lain",
    );
  }

  let createdId: bigint;

  try {
    const article = await prisma.article.create({
      data: {
        categoryId,
        title: parsed.data.title,
        slug,
        excerpt:
          parsed.data.excerpt ?? null,
        thumbnail:
          parsed.data.thumbnail ?? null,
        content: parsed.data.content,
        featured: parsed.data.featured,
        publishedAt: parsePublishedDate(
          parsed.data.publishedAt,
        ),
        status: parsed.data.status,
      },
      select: {
        id: true,
      },
    });

    createdId = article.id;
  } catch (error) {
    if (
      isPrismaErrorCode(error, "P2002")
    ) {
      return fieldErrorState(
        "slug",
        "Slug sudah digunakan artikel lain",
      );
    }

    console.error(
      "Gagal membuat artikel:",
      error,
    );

    return {
      status: "error",
      message:
        "Artikel gagal dibuat karena kesalahan database.",
    };
  }

  revalidateArticlePaths(slug);

  redirect(
    `/admin/articles/${createdId.toString()}`,
  );
}

export async function updateArticleAction(
  articleId: string,
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const id = parseEntityId(articleId);

  if (!id) {
    return {
      status: "error",
      message: "ID artikel tidak valid.",
    };
  }

  const existing =
    await prisma.article.findUnique({
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
      message: "Artikel tidak ditemukan.",
    };
  }

  const parsed = articleSchema.safeParse(
    readArticleFormData(formData),
  );

  if (!parsed.success) {
    return actionStateFromZod(parsed.error);
  }

  const categoryId = await resolveCategoryId(
    parsed.data.categoryId,
  );

  if (categoryId === "invalid") {
    return fieldErrorState(
      "categoryId",
      "Kategori artikel tidak ditemukan",
    );
  }

  const slug = slugify(
    parsed.data.slug ?? parsed.data.title,
  );

  const duplicate = await prisma.article.findFirst({
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
      "Slug sudah digunakan artikel lain",
    );
  }

  try {
    await prisma.article.update({
      where: {
        id,
      },
      data: {
        categoryId,
        title: parsed.data.title,
        slug,
        excerpt:
          parsed.data.excerpt ?? null,
        thumbnail:
          parsed.data.thumbnail ?? null,
        content: parsed.data.content,
        featured: parsed.data.featured,
        publishedAt: parsePublishedDate(
          parsed.data.publishedAt,
        ),
        status: parsed.data.status,
      },
    });
  } catch (error) {
    if (
      isPrismaErrorCode(error, "P2002")
    ) {
      return fieldErrorState(
        "slug",
        "Slug sudah digunakan artikel lain",
      );
    }

    console.error(
      "Gagal memperbarui artikel:",
      error,
    );

    return {
      status: "error",
      message:
        "Artikel gagal diperbarui karena kesalahan database.",
    };
  }

  revalidateArticlePaths(
    existing.slug,
    slug,
  );

  redirect(`/admin/articles/${articleId}`);
}

export async function deleteArticleAction(
  articleId: string,
) {
  await requireAdmin();

  const id = parseEntityId(articleId);

  if (!id) {
    return;
  }

  const article =
    await prisma.article.findUnique({
      where: {
        id,
      },
      select: {
        slug: true,
      },
    });

  if (!article) {
    return;
  }

  await prisma.article.delete({
    where: {
      id,
    },
  });

  revalidateArticlePaths(article.slug);
}

export async function createArticleCategoryAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed =
    articleCategorySchema.safeParse({
      name: getFormString(formData, "name"),
      slug: getFormString(formData, "slug"),
    });

  if (!parsed.success) {
    return actionStateFromZod(parsed.error);
  }

  const slug = slugify(
    parsed.data.slug ?? parsed.data.name,
  );

  if (!slug) {
    return fieldErrorState(
      "slug",
      "Slug kategori tidak valid",
    );
  }

  try {
    await prisma.articleCategory.create({
      data: {
        name: parsed.data.name,
        slug,
      },
    });
  } catch (error) {
    if (
      isPrismaErrorCode(error, "P2002")
    ) {
      return fieldErrorState(
        "slug",
        "Slug kategori sudah digunakan",
      );
    }

    return {
      status: "error",
      message: "Kategori gagal dibuat.",
    };
  }

  revalidatePath(
    "/admin/articles/categories",
  );
  revalidatePath("/admin/articles");

  redirect("/admin/articles/categories");
}

export async function updateArticleCategoryAction(
  categoryId: string,
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const id = parseEntityId(categoryId);

  if (!id) {
    return {
      status: "error",
      message: "ID kategori tidak valid.",
    };
  }

  const parsed =
    articleCategorySchema.safeParse({
      name: getFormString(formData, "name"),
      slug: getFormString(formData, "slug"),
    });

  if (!parsed.success) {
    return actionStateFromZod(parsed.error);
  }

  const slug = slugify(
    parsed.data.slug ?? parsed.data.name,
  );

  try {
    await prisma.articleCategory.update({
      where: {
        id,
      },
      data: {
        name: parsed.data.name,
        slug,
      },
    });
  } catch (error) {
    if (
      isPrismaErrorCode(error, "P2002")
    ) {
      return fieldErrorState(
        "slug",
        "Slug kategori sudah digunakan",
      );
    }

    return {
      status: "error",
      message: "Kategori gagal diperbarui.",
    };
  }

  revalidatePath(
    "/admin/articles/categories",
  );
  revalidatePath("/admin/articles");
  revalidatePath("/artikel");

  redirect("/admin/articles/categories");
}

export async function deleteArticleCategoryAction(
  categoryId: string,
) {
  await requireAdmin();

  const id = parseEntityId(categoryId);

  if (!id) {
    return;
  }

  await prisma.articleCategory.delete({
    where: {
      id,
    },
  });

  revalidatePath(
    "/admin/articles/categories",
  );
  revalidatePath("/admin/articles");
  revalidatePath("/artikel");
}