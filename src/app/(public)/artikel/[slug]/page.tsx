import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MessageCircle,
  Newspaper,
  Scale,
} from "lucide-react";
import { getPublishedArticleBySlug } from "@/lib/public-site";
import { formatIndonesianDate } from "@/lib/site-utils";

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
      <header className="dark-section border-b border-white/10 text-white">
        <div className="container-app py-12 sm:py-16 md:py-20">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-accent-soft)] transition hover:text-white"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4"
            />
            Kembali ke artikel
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-300">
            <Newspaper
              aria-hidden="true"
              className="h-4 w-4 text-[var(--brand-accent-soft)]"
            />
            <span>
              {article.category?.name ?? "Umum"}
            </span>

            <span aria-hidden="true">&middot;</span>

            <time>
              {formatIndonesianDate(
                article.publishedAt,
              )}
            </time>
          </div>

          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            {article.title}
          </h1>

          {article.excerpt ? (
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
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
              className="mb-8 max-h-[520px] w-full rounded-lg object-cover shadow-2xl shadow-slate-950/10 sm:mb-12"
            />
          ) : (
            <div className="mb-8 flex h-56 items-center justify-center rounded-lg bg-[var(--brand)] text-white shadow-2xl shadow-slate-950/10 sm:mb-12 sm:h-72">
              <Scale
                aria-hidden="true"
                className="h-12 w-12 text-[var(--brand-accent-soft)]"
                strokeWidth={1.8}
              />
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
              <MessageCircle
                aria-hidden="true"
                className="h-4 w-4"
              />
              Konsultasikan Topik Ini
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
