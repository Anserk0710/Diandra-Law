import {
  EmptyState,
  ServiceCard,
} from "@/components/public/ContentCards";
import { PageHero } from "@/components/public/PageHero";
import { getPublishedServices } from "@/lib/public-site";

export default async function ServicesPage() {
  const services = await getPublishedServices();

  return (
    <>
      <PageHero
        eyebrow="Layanan"
        title="Solusi hukum untuk bisnis dan individu"
        description="Pilih layanan yang sesuai dengan kebutuhan hukum Anda."
      />

      <section className="container-app py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.length > 0 ? (
            services.map((service) => (
              <ServiceCard
                key={service.id.toString()}
                service={service}
              />
            ))
          ) : (
            <EmptyState message="Belum ada layanan yang dipublikasikan." />
          )}
        </div>
      </section>
    </>
  );
}