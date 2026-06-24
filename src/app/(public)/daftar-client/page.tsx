import {
  ClientCard,
  EmptyState,
} from "@/components/public/ContentCards";
import { PageHero } from "@/components/public/PageHero";
import { getPublishedClients } from "@/lib/public-site";

export default async function ClientsPage() {
  const clients = await getPublishedClients();

  const groupedClients = clients.reduce<
    Record<string, typeof clients>
  >((groups, client) => {
    const category =
      client.category ?? "Lainnya";

    groups[category] ??= [];
    groups[category].push(client);

    return groups;
  }, {});

  return (
    <>
      <PageHero
        eyebrow="Daftar Client"
        title="Kepercayaan dari berbagai sektor"
        description="Kami mendampingi kebutuhan hukum klien dari beragam bidang usaha."
      />

      <section className="container-app py-16 md:py-24">
        {clients.length === 0 ? (
          <div className="grid">
            <EmptyState message="Belum ada client yang dipublikasikan." />
          </div>
        ) : (
          <div className="space-y-14">
            {Object.entries(groupedClients).map(
              ([category, items]) => (
                <section key={category}>
                  <h2 className="text-2xl font-black">
                    {category}
                  </h2>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    {items.map((client) => (
                      <ClientCard
                        key={client.id.toString()}
                        client={client}
                      />
                    ))}
                  </div>
                </section>
              ),
            )}
          </div>
        )}
      </section>
    </>
  );
}
