import { notFound } from "next/navigation";
import { PageHero } from "@/components/public/PageHero";
import {
  getPublishedLawyerBySlug,
  getSiteSettings,
} from "@/lib/public-site";
import {
  buildWhatsAppUrl,
  getInitials,
} from "@/lib/site-utils";

type LawyerDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LawyerDetailPage({
  params,
}: LawyerDetailPageProps) {
  const { slug } = await params;

  const [lawyer, settings] =
    await Promise.all([
      getPublishedLawyerBySlug(slug),
      getSiteSettings(),
    ]);

  if (!lawyer) {
    notFound();
  }

  const whatsappHref = buildWhatsAppUrl(
    settings?.whatsappNumber,
    `Halo, saya ingin berkonsultasi dengan ${lawyer.name}.`,
  );

  return (
    <>
      <PageHero
        eyebrow={lawyer.position}
        title={lawyer.name}
        description={lawyer.shortBio}
        actions={
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
          >
            Jadwalkan Konsultasi
          </a>
        }
      />

      <section className="container-app py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
          <aside>
            <div className="card-surface overflow-hidden">
              {lawyer.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={lawyer.photo}
                  alt={lawyer.name}
                className="h-80 w-full object-cover sm:h-[420px]"
                />
              ) : (
                <div className="flex h-80 items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-5xl font-bold text-amber-300 sm:h-[420px] sm:text-6xl">
                  {getInitials(lawyer.name)}
                </div>
              )}

              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
                  Spesialisasi
                </p>

                <p className="mt-2 text-lg font-semibold">
                  {lawyer.specialty}
                </p>
              </div>
            </div>
          </aside>

          <article>
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
              Profil Profesional
            </h2>

            <div className="prose-public mt-6">
              {lawyer.fullBio}
            </div>

            <div className="mt-10 rounded-2xl bg-amber-50 p-5 sm:rounded-3xl sm:p-7">
              <h3 className="text-xl font-bold">
                Konsultasikan kebutuhan hukum Anda
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Hubungi firma untuk menentukan lawyer
                yang sesuai dengan kebutuhan Anda.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-5"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
