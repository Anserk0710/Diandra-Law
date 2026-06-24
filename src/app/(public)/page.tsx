import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import {
  ArticleCard,
  EmptyState,
  LawyerCard,
  ServiceCard,
} from "@/components/public/ContentCards";
import { CmsActionLink } from "@/components/public/CmsActionLink";
import { SectionHeading } from "@/components/public/SectionHeading";
import { HOME_PAGE_DEFAULTS } from "@/features/pages/page.types";
import {
  asObject,
  getSection,
  getString,
  getStringArray,
} from "@/lib/page-content";
import {
  getPublishedArticles,
  getPublishedLawyers,
  getPublishedPage,
  getPublishedServices,
  getSiteSettings,
} from "@/lib/public-site";
import {
  buildWhatsAppUrl,
  resolveCmsLink,
} from "@/lib/site-utils";

export default async function HomePage() {
  const [
    page,
    settings,
    services,
    lawyers,
    articles,
  ] = await Promise.all([
    getPublishedPage("home"),
    getSiteSettings(),
    getPublishedServices({
      featured: true,
      take: 6,
    }),
    getPublishedLawyers({
      featured: true,
      take: 3,
    }),
    getPublishedArticles({
      take: 3,
    }),
  ]);

  if (!page) {
    notFound();
  }

  const content = asObject(page.contentJson);

  const hero = getSection(content, "hero");
  const focus = getSection(content, "focus");
  const aboutIntro = getSection(
    content,
    "aboutIntro",
  );
  const servicesSection = getSection(
    content,
    "servicesSection",
  );
  const lawyersSection = getSection(
    content,
    "lawyersSection",
  );
  const articlesSection = getSection(
    content,
    "articlesSection",
  );
  const contactCta = getSection(
    content,
    "contactCta",
  );

  const defaults = HOME_PAGE_DEFAULTS;

  const focusItems = getStringArray(
    focus,
    "items",
    defaults.focus.items,
  );

  const whatsappHref = buildWhatsAppUrl(
    settings?.whatsappNumber,
    settings?.whatsappMessage,
  );
  const primaryCtaHref = resolveCmsLink(
    getString(
      hero,
      "primaryCtaLink",
      defaults.hero.primaryCtaLink,
    ),
    whatsappHref,
  );
  const secondaryCtaHref = resolveCmsLink(
    getString(
      hero,
      "secondaryCtaLink",
      defaults.hero.secondaryCtaLink,
    ),
    whatsappHref,
  );
  const heroImageUrl =
    "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&fm=jpg&q=80&w=2400";

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[var(--brand)] text-white">
        <div
          className="absolute inset-0 -z-30 bg-cover bg-center"
          style={{
            backgroundImage: `url("${heroImageUrl}")`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-20 bg-[linear-gradient(95deg,rgba(23,32,46,0.98)_0%,rgba(23,32,46,0.9)_48%,rgba(13,111,104,0.58)_100%)]"
          aria-hidden="true"
        />

        <div className="container-app flex min-h-[calc(78svh-5rem)] flex-col justify-center py-12 sm:py-16 md:py-20">
          <div className="reveal-in max-w-4xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[var(--brand-accent-soft)] sm:text-sm">
              <span className="h-px w-8 bg-[var(--brand-accent)]" />
              {getString(
                hero,
                "eyebrow",
                defaults.hero.eyebrow,
              )}
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              {getString(
                hero,
                "title",
                defaults.hero.title,
              )}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8 md:text-xl">
              {getString(
                hero,
                "description",
                defaults.hero.description,
              )}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CmsActionLink
                href={primaryCtaHref}
                className="btn-primary"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="h-4 w-4"
                />
                {getString(
                  hero,
                  "primaryCtaLabel",
                  defaults.hero.primaryCtaLabel,
                )}
              </CmsActionLink>

              <CmsActionLink
                href={secondaryCtaHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                {getString(
                  hero,
                  "secondaryCtaLabel",
                  defaults.hero.secondaryCtaLabel,
                )}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </CmsActionLink>
            </div>
          </div>

        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white py-10 md:py-12">
        <div className="container-app">
          <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="eyebrow-kicker">
                {getString(
                  focus,
                  "eyebrow",
                  defaults.focus.eyebrow,
                )}
              </p>

              <h2 className="mt-2 text-xl font-black leading-tight text-slate-950 sm:text-2xl">
                {getString(
                  focus,
                  "title",
                  defaults.focus.title,
                )}
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {focusItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="card-surface interactive-lift p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    </span>
                    <p className="leading-7 text-slate-700">
                    {item}
                  </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-app py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow={getString(
              aboutIntro,
              "eyebrow",
              defaults.aboutIntro.eyebrow,
            )}
            title={getString(
              aboutIntro,
              "title",
              defaults.aboutIntro.title,
            )}
          />

          <div>
            <p className="text-lg leading-8 text-slate-600">
              {getString(
                aboutIntro,
                "description",
                defaults.aboutIntro.description,
              )}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Analisis terarah",
                "Respons transparan",
                "Dokumen rapi",
              ].map((item) => (
                <div
                  key={item}
                  className="card-surface interactive-lift p-4"
                >
                  <p className="flex items-center gap-2 text-sm font-black text-slate-950">
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 text-teal-700"
                    />
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <CmsActionLink
              href={resolveCmsLink(
                getString(
                  aboutIntro,
                  "buttonLink",
                  defaults.aboutIntro.buttonLink,
                ),
                whatsappHref,
              )}
              className="btn-secondary mt-7"
            >
              {getString(
                aboutIntro,
                "buttonLabel",
                defaults.aboutIntro.buttonLabel,
              )}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </CmsActionLink>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/80 py-16 md:py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow={getString(
              servicesSection,
              "eyebrow",
              defaults.servicesSection.eyebrow,
            )}
            title={getString(
              servicesSection,
              "title",
              defaults.servicesSection.title,
            )}
            description={getString(
              servicesSection,
              "description",
              defaults.servicesSection.description,
            )}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

          <CmsActionLink
            href={resolveCmsLink(
              getString(
                servicesSection,
                "buttonLink",
                defaults.servicesSection.buttonLink,
              ),
              whatsappHref,
            )}
            className="btn-secondary mt-8"
          >
            {getString(
              servicesSection,
              "buttonLabel",
              defaults.servicesSection.buttonLabel,
            )}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4"
            />
          </CmsActionLink>
        </div>
      </section>

      <section className="container-app py-16 md:py-24">
        <SectionHeading
          eyebrow={getString(
            lawyersSection,
            "eyebrow",
            defaults.lawyersSection.eyebrow,
          )}
          title={getString(
            lawyersSection,
            "title",
            defaults.lawyersSection.title,
          )}
          description={getString(
            lawyersSection,
            "description",
            defaults.lawyersSection.description,
          )}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {lawyers.length > 0 ? (
            lawyers.map((lawyer) => (
              <LawyerCard
                key={lawyer.id.toString()}
                lawyer={lawyer}
              />
            ))
          ) : (
            <EmptyState message="Belum ada profil lawyer yang dipublikasikan." />
          )}
        </div>

        <CmsActionLink
          href={resolveCmsLink(
            getString(
              lawyersSection,
              "buttonLink",
              defaults.lawyersSection.buttonLink,
            ),
            whatsappHref,
          )}
          className="btn-secondary mt-8"
        >
          {getString(
            lawyersSection,
            "buttonLabel",
            defaults.lawyersSection.buttonLabel,
          )}
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4"
          />
        </CmsActionLink>
      </section>

      <section className="border-y border-slate-200/80 bg-white/80 py-16 md:py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow={getString(
              articlesSection,
              "eyebrow",
              defaults.articlesSection.eyebrow,
            )}
            title={getString(
              articlesSection,
              "title",
              defaults.articlesSection.title,
            )}
            description={getString(
              articlesSection,
              "description",
              defaults.articlesSection.description,
            )}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

          <CmsActionLink
            href={resolveCmsLink(
              getString(
                articlesSection,
                "buttonLink",
                defaults.articlesSection.buttonLink,
              ),
              whatsappHref,
            )}
            className="btn-secondary mt-8"
          >
            {getString(
              articlesSection,
              "buttonLabel",
              defaults.articlesSection.buttonLabel,
            )}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4"
            />
          </CmsActionLink>
        </div>
      </section>

      <section className="container-app py-16 md:py-24">
        <div className="dark-section grid overflow-hidden rounded-lg text-white shadow-2xl shadow-slate-950/20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-6 sm:p-8 md:p-12">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[var(--brand-accent-soft)] sm:text-sm">
              <span className="h-px w-8 bg-[var(--brand-accent)]" />
              {getString(
                contactCta,
                "eyebrow",
                defaults.contactCta.eyebrow,
              )}
            </p>

            <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
              {getString(
                contactCta,
                "title",
                defaults.contactCta.title,
              )}
            </h2>

            <p className="mt-4 leading-8 text-slate-200">
              {getString(
                contactCta,
                "description",
                defaults.contactCta.description,
              )}
            </p>

            <CmsActionLink
              href={resolveCmsLink(
                getString(
                  contactCta,
                  "buttonLink",
                  defaults.contactCta.buttonLink,
                ),
                whatsappHref,
              )}
              className="btn-primary mt-7"
            >
              <MessageCircle
                aria-hidden="true"
                className="h-4 w-4"
              />
              {getString(
                contactCta,
                "buttonLabel",
                defaults.contactCta.buttonLabel,
              )}
            </CmsActionLink>
          </div>

          <div className="min-h-72 bg-slate-200 md:min-h-96">
            {settings?.mapEmbedUrl ? (
              <iframe
                src={settings.mapEmbedUrl}
                title={getString(
                  contactCta,
                  "mapTitle",
                  defaults.contactCta.mapTitle,
                )}
                className="h-full min-h-80 w-full border-0 md:min-h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="flex min-h-80 items-center justify-center px-5 text-center text-slate-600 md:min-h-96">
                {getString(
                  contactCta,
                  "mapEmptyMessage",
                  defaults.contactCta.mapEmptyMessage,
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
