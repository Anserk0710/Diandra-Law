import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { ArticleForm } from "@/features/articles/ArticleForm";
import { createArticleAction } from "@/features/articles/article.actions";
import { getArticleCategories } from "@/features/articles/article.queries";

export const metadata: Metadata = {
  title: "Tulis Artikel",
};

export default async function CreateArticlePage() {
  const categories =
    await getArticleCategories();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Tulis Artikel"
        action={
          <Link
            href="/admin/articles"
            className="btn-secondary"
          >
            Kembali
          </Link>
        }
      />

      <ArticleForm
        action={createArticleAction}
        submitLabel="Simpan artikel"
        categories={categories.map(
          (category) => ({
            id: category.id.toString(),
            name: category.name,
          }),
        )}
      />
    </div>
  );
}