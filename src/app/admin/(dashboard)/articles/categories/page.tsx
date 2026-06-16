import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import {
  ArticleCategoryCreateForm,
  ArticleCategoryEditForm,
} from "@/features/articles/ArticleCategoryForms";
import {
  createArticleCategoryAction,
  deleteArticleCategoryAction,
  updateArticleCategoryAction,
} from "@/features/articles/article.actions";
import { getArticleCategories } from "@/features/articles/article.queries";

export const metadata: Metadata = {
  title: "Kategori Artikel",
};

export default async function ArticleCategoriesPage() {
  const categories =
    await getArticleCategories();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Kategori Artikel"
        description="Kategori digunakan pada form artikel."
        action={
          <Link
            href="/admin/articles"
            className="btn-secondary"
          >
            Kembali ke articles
          </Link>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
        <ArticleCategoryCreateForm
          action={
            createArticleCategoryAction
          }
        />

        <section className="card-surface p-5">
          <h2 className="text-xl font-bold">
            Daftar kategori
          </h2>

          <div className="mt-5 space-y-4">
            {categories.length === 0 ? (
              <p className="text-slate-600">
                Belum ada kategori.
              </p>
            ) : (
              categories.map((category) => (
                <article
                  key={category.id.toString()}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <ArticleCategoryEditForm
                    action={updateArticleCategoryAction.bind(
                      null,
                      category.id.toString(),
                    )}
                    name={category.name}
                    slug={category.slug}
                  />

                  <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3">
                    <p className="text-sm text-slate-500">
                      {
                        category._count
                          .articles
                      }{" "}
                      artikel
                    </p>

                    <form
                      action={deleteArticleCategoryAction.bind(
                        null,
                        category.id.toString(),
                      )}
                    >
                      <ConfirmSubmitButton
                        confirmationMessage={`Hapus kategori "${category.name}"? Artikel di kategori ini akan menjadi tanpa kategori.`}
                      />
                    </form>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}