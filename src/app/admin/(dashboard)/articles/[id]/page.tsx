import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { ArticleForm } from "@/features/articles/ArticleForm";
import { updateArticleAction } from "@/features/articles/article.actions";
import {
  getAdminArticleById,
  getArticleCategories,
} from "@/features/articles/article.queries";
import {
  formatDateInput,
  parseEntityId,
} from "@/lib/cms/cms-utils";

export const metadata: Metadata = {
  title: "Edit Artikel",
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditArticlePage({
  params,
}: Props) {
  const { id: rawId } = await params;
  const id = parseEntityId(rawId);

  if (!id) {
    notFound();
  }

  const [article, categories] =
    await Promise.all([
      getAdminArticleById(id),
      getArticleCategories(),
    ]);

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={`Edit: ${article.title}`}
        action={
          <div className="flex gap-2">
            {article.status ===
            "published" ? (
              <Link
                href={`/artikel/${article.slug}`}
                target="_blank"
                className="btn-secondary"
              >
                Lihat publik
              </Link>
            ) : null}

            <Link
              href="/admin/articles"
              className="btn-secondary"
            >
              Kembali
            </Link>
          </div>
        }
      />

      <ArticleForm
        action={updateArticleAction.bind(
          null,
          article.id.toString(),
        )}
        submitLabel="Simpan perubahan"
        categories={categories.map(
          (category) => ({
            id: category.id.toString(),
            name: category.name,
          }),
        )}
        initialData={{
          categoryId:
            article.categoryId?.toString() ??
            "",
          title: article.title,
          slug: article.slug,
          excerpt: article.excerpt ?? "",
          thumbnail:
            article.thumbnail ?? "",
          content: article.content,
          featured: article.featured,
          publishedAt: formatDateInput(
            article.publishedAt,
          ),
          status: article.status,
        }}
      />
    </div>
  );
}