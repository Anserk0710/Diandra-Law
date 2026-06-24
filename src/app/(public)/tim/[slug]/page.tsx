import { notFound } from "next/navigation";
import {
  BriefcaseBusiness,
  MessageCircle,
  Scale,
} from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import {
  getPublishedLawyerBySlug,
  getSiteSettings,
} from "@/lib/public-site";
import {
  buildWhatsAppUrl,
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
      <PageHero compact
        eyebrow={lawyer.position}
        title={lawyer.name}
        description={lawyer.shortBio}
        actions={
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <MessageCircle
              aria-hidden="true"
              className="h-4 w-4"
            />
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
                <div className="flex h-80 items-center justify-center bg-[var(--brand)] text-white sm:h-[420px]">
                  <Scale
                    aria-hidden="true"
                    className="h-12 w-12 text-[var(--brand-accent-soft)]"
                    strokeWidth={1.8}
                  />
                </div>
              )}

              <div className="p-6">
                <p className="inline-flex items-center gap-1.5 text-sm font-bold uppercase text-teal-700">
                  <BriefcaseBusiness
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                  Spesialisasi
                </p>

                <p className="mt-2 text-lg font-semibold">
                  {lawyer.specialty}
                </p>
              </div>
            </div>
          </aside>

          <article>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Profil Profesional
            </h2>

            <div className="prose-public mt-6">
              {lawyer.fullBio}
            </div>

            <div className="card-surface mt-10 p-5 sm:p-7">
              <h3 className="text-xl font-black">
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
                <MessageCircle
                  aria-hidden="true"
                  className="h-4 w-4"
                />
                Hubungi via WhatsApp
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
