import {
  ArticleCard,
  EmptyState,
} from "@/components/public/ContentCards";
import { PageHero } from "@/components/public/PageHero";
import { getPublishedArticles } from "@/lib/public-site";

export default async function ArticlesPage() {
  const articles = await getPublishedArticles();

  return (
    <>
      <PageHero
        eyebrow="Artikel & Publikasi"
        title="Wawasan hukum untuk keputusan yang lebih baik"
        description="Pembahasan mengenai perusahaan, kontrak, ketenagakerjaan, dan penyelesaian sengketa."
      />

      <section className="container-app py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard
                key={article.id.toString()}
                article={article}
              />
            ))
          ) : (
            <EmptyState message="Belum ada artikel yang dipublikasikan." />
          )}
        </div>
      </section>
    </>
  );
}