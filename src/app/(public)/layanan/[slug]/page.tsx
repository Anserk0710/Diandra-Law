import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import {
  getPublishedServiceBySlug,
  getSiteSettings,
} from "@/lib/public-site";
import {
  buildWhatsAppUrl,
  isExternalUrl,
} from "@/lib/site-utils";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;

  const [service, settings] =
    await Promise.all([
      getPublishedServiceBySlug(slug),
      getSiteSettings(),
    ]);

  if (!service) {
    notFound();
  }

  const whatsappHref = buildWhatsAppUrl(
    settings?.whatsappNumber,
    `Halo, saya ingin berkonsultasi mengenai layanan ${service.title}.`,
  );

  function resolveCtaHref(
    type: string,
    link: string,
  ) {
    if (type === "whatsapp") {
      return whatsappHref;
    }

    if (type === "contact") {
      return "/kontak";
    }

    return link;
  }

  return (
    <>
      <PageHero compact
        eyebrow="Detail Layanan"
        title={service.title}
        description={service.summary}
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
            Konsultasikan Layanan Ini
          </a>
        }
      />

      <section className="container-app py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article>
            {service.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={service.coverImage}
                alt={service.title}
                className="mb-8 max-h-[520px] w-full rounded-lg object-cover shadow-2xl shadow-slate-950/10 sm:mb-10"
              />
            ) : null}

            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Tentang layanan
            </h2>

            <div className="prose-public mt-6">
              {service.content}
            </div>

            {service.faqs.length > 0 ? (
              <section className="mt-14">
                <h2 className="text-2xl font-black leading-tight sm:text-3xl">
                  Pertanyaan yang sering diajukan
                </h2>

                <div className="mt-6 space-y-4">
                  {service.faqs.map((faq) => (
                    <details
                      key={faq.id.toString()}
                      className="card-surface interactive-lift p-5"
                    >
                      <summary className="cursor-pointer font-bold text-slate-950">
                        <HelpCircle
                          aria-hidden="true"
                          className="mr-2 inline h-4 w-4 text-teal-700"
                        />
                        {faq.question}
                      </summary>

                      <p className="mt-4 leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-surface p-6">
              <p className="eyebrow-kicker">
                Langkah Berikutnya
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Diskusikan kebutuhan Anda
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Hubungi tim kami untuk mengetahui
                ruang lingkup pendampingan.
              </p>

              <div className="mt-6 grid gap-3">
                {service.ctas.length > 0 ? (
                  service.ctas.map((cta) => {
                    const href = resolveCtaHref(
                      cta.type,
                      cta.link,
                    );

                    const className =
                      cta.type === "whatsapp"
                        ? "btn-primary w-full"
                        : "btn-secondary w-full";

                    return isExternalUrl(href) ? (
                      <a
                        key={cta.id.toString()}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className={className}
                      >
                        {cta.type === "whatsapp" ? (
                          <MessageCircle
                            aria-hidden="true"
                            className="h-4 w-4"
                          />
                        ) : null}
                        {cta.label}
                      </a>
                    ) : (
                      <Link
                        key={cta.id.toString()}
                        href={href}
                        className={className}
                      >
                        {cta.type === "whatsapp" ? (
                          <MessageCircle
                            aria-hidden="true"
                            className="h-4 w-4"
                          />
                        ) : null}
                        {cta.label}
                      </Link>
                    );
                  })
                ) : (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full"
                  >
                    <MessageCircle
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                    Konsultasi WhatsApp
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
