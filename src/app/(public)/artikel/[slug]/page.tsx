import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedArticleBySlug } from "@/lib/public-site";
import {
  formatIndonesianDate,
  getInitials,
} from "@/lib/site-utils";

type ArticleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;

  const article =
    await getPublishedArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article>
      <header className="border-b border-slate-200 bg-white">
        <div className="container-app py-12 sm:py-16 md:py-20">
          <Link
            href="/artikel"
            className="text-sm font-semibold text-amber-700"
          >
            ← Kembali ke artikel
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span>
              {article.category?.name ?? "Umum"}
            </span>

            <span aria-hidden="true">•</span>

            <time>
              {formatIndonesianDate(
                article.publishedAt,
              )}
            </time>
          </div>

          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {article.title}
          </h1>

          {article.excerpt ? (
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {article.excerpt}
            </p>
          ) : null}
        </div>
      </header>

      <div className="container-app py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          {article.thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.thumbnail}
              alt={article.title}
              className="mb-8 max-h-[520px] w-full rounded-2xl object-cover sm:mb-12 sm:rounded-3xl"
            />
          ) : (
            <div className="mb-8 flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 text-4xl font-bold text-amber-300 sm:mb-12 sm:h-72 sm:rounded-3xl sm:text-5xl">
              {getInitials(article.title)}
            </div>
          )}

          <div className="prose-public">
            {article.content}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link
              href="/kontak"
              className="btn-primary"
            >
              Konsultasikan Topik Ini
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
