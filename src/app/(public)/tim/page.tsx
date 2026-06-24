import {
  EmptyState,
  LawyerCard,
} from "@/components/public/ContentCards";
import { PageHero } from "@/components/public/PageHero";
import { getPublishedLawyers } from "@/lib/public-site";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return buildSeoMetadata({
    fallbackTitle:
      "Tim Lawyer",

    fallbackDescription:
      "Kenali tim profesional hukum yang mendampingi kebutuhan klien dengan analisis dan komunikasi yang terarah.",

    path:
      "/tim",
  });
}

export default async function LawyersPage() {
  const lawyers =
    await getPublishedLawyers();

  return (
    <>
      <PageHero
        eyebrow="Tim Lawyer"
        title="Profesional hukum yang siap mendampingi"
        description="Kenali tim yang menangani kebutuhan klien dengan analisis dan komunikasi profesional."
      />

      <section className="container-app py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {lawyers.length > 0 ? (
            lawyers.map(
              (lawyer) => (
                <LawyerCard
                  key={
                    lawyer.id.toString()
                  }
                  lawyer={
                    lawyer
                  }
                />
              ),
            )
          ) : (
            <EmptyState message="Belum ada profil lawyer yang dipublikasikan." />
          )}
        </div>
      </section>
    </>
  );
}