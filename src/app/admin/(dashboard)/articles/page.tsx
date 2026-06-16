import type { Metadata } from "next";
import Link from "next/link";

import {
  AdminPageHeader,
  StatusBadge,
} from "@/components/admin/AdminCrudUi";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { deleteArticleAction } from "@/features/articles/article.actions";
import { getAdminArticles } from "@/features/articles/article.queries";

export const metadata: Metadata = {
  title: "Articles",
};

export default async function AdminArticlesPage() {
  const articles = await getAdminArticles();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Phase 4"
        title="Articles"
        description="Kelola artikel, kategori, publikasi, dan featured content."
        action={
          <div className="flex gap-2">
            <Link
              href="/admin/articles/categories"
              className="btn-secondary"
            >
              Kategori
            </Link>

            <Link
              href="/admin/articles/create"
              className="btn-primary"
            >
              Tulis artikel
            </Link>
          </div>
        }
      />

      <section className="card-surface overflow-hidden">
        {articles.length === 0 ? (
          <div className="p-8 text-center">
            Belum ada artikel.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead className="border-b bg-slate-50">
                <tr>
                  <th className="px-5 py-4">
                    Artikel
                  </th>
                  <th className="px-5 py-4">
                    Kategori
                  </th>
                  <th className="px-5 py-4">
                    Status
                  </th>
                  <th className="px-5 py-4">
                    Tanggal
                  </th>
                  <th className="px-5 py-4 text-right">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {articles.map((article) => (
                  <tr key={article.id.toString()}>
                    <td className="px-5 py-4">
                      <p className="font-bold">
                        {article.title}
                      </p>

                      <p className="text-sm text-slate-500">
                        /artikel/{article.slug}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {article.category?.name ??
                        "Tanpa kategori"}
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge
                        status={article.status}
                      />
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {article.publishedAt
                        ? article.publishedAt.toLocaleDateString(
                            "id-ID",
                          )
                        : "-"}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/articles/${article.id.toString()}`}
                          className="btn-secondary px-3 py-2 text-sm"
                        >
                          Edit
                        </Link>

                        <form
                          action={deleteArticleAction.bind(
                            null,
                            article.id.toString(),
                          )}
                        >
                          <ConfirmSubmitButton
                            confirmationMessage={`Hapus artikel "${article.title}"?`}
                          />
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}