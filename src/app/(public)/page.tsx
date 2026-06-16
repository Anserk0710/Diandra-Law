import { notFound } from "next/navigation";

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
  const focus = getSection(
    content,
    "focus",
  );
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

  const defaults =
    HOME_PAGE_DEFAULTS;

  const focusItems = getStringArray(
    focus,
    "items",
    defaults.focus.items,
  );

  const whatsappHref = buildWhatsAppUrl(
    settings?.whatsappNumber,
    settings?.whatsappMessage,
  );
  const primaryCtaHref =
    resolveCmsLink(
      getString(
        hero,
        "primaryCtaLink",
        defaults.hero.primaryCtaLink,
      ),
      whatsappHref,
    );
  const secondaryCtaHref =
    resolveCmsLink(
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
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: `url("${heroImageUrl}")`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,6,23,0.96)_0%,rgba(15,23,42,0.84)_42%,rgba(15,23,42,0.45)_72%,rgba(15,23,42,0.68)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-slate-950 to-transparent"
          aria-hidden="true"
        />

        <div className="container-app flex min-h-[calc(100svh-4rem)] flex-col justify-center py-12 sm:py-16 md:min-h-[720px] md:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex border-l-4 border-amber-300 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-200 backdrop-blur sm:px-4 sm:tracking-[0.22em]">
              {getString(
                hero,
                "eyebrow",
                defaults.hero.eyebrow,
              )}
            </p>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl md:leading-[1.06]">
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
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 hover:bg-amber-300"
              >
                {getString(
                  hero,
                  "primaryCtaLabel",
                  defaults.hero.primaryCtaLabel,
                )}
              </CmsActionLink>

              <CmsActionLink
                href={secondaryCtaHref}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-600 px-5 py-3 font-bold text-white hover:bg-white/5"
              >
                {getString(
                  hero,
                  "secondaryCtaLabel",
                  defaults.hero.secondaryCtaLabel,
                )}
              </CmsActionLink>
            </div>
          </div>

          <div className="mt-10 border-y border-white/15 bg-slate-950/35 py-6 backdrop-blur sm:mt-14 sm:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300 sm:text-sm sm:tracking-[0.2em]">
              {getString(
                focus,
                "eyebrow",
                defaults.focus.eyebrow,
              )}
            </p>

            <h2 className="mt-3 text-xl font-bold sm:text-2xl">
              {getString(
                focus,
                "title",
                defaults.focus.title,
              )}
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {focusItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-4 sm:gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-950">
                    {index + 1}
                  </span>

                  <p className="leading-7 text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-app py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
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

            <CmsActionLink
              href={resolveCmsLink(
                getString(
                  aboutIntro,
                  "buttonLink",
                  defaults.aboutIntro.buttonLink,
                ),
                whatsappHref,
              )}
              className="btn-secondary mt-6"
            >
              {getString(
                aboutIntro,
                "buttonLabel",
                defaults.aboutIntro.buttonLabel,
              )}
            </CmsActionLink>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 md:py-24">
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
        </CmsActionLink>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 md:py-24">
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
          </CmsActionLink>
        </div>
      </section>

      <section className="container-app py-16 md:py-24">
        <div className="grid overflow-hidden rounded-2xl bg-slate-950 text-white sm:rounded-3xl lg:grid-cols-2">
          <div className="p-6 sm:p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300 sm:text-sm sm:tracking-[0.2em]">
              {getString(
                contactCta,
                "eyebrow",
                defaults.contactCta.eyebrow,
              )}
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              {getString(
                contactCta,
                "title",
                defaults.contactCta.title,
              )}
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
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
              className="mt-7 inline-flex rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
            >
              {getString(
                contactCta,
                "buttonLabel",
                defaults.contactCta.buttonLabel,
              )}
            </CmsActionLink>
          </div>

          <div className="min-h-72 bg-slate-200 sm:min-h-80">
            {settings?.mapEmbedUrl ? (
              <iframe
                src={settings.mapEmbedUrl}
                title={getString(
                  contactCta,
                  "mapTitle",
                  defaults.contactCta.mapTitle,
                )}
                className="h-full min-h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="flex min-h-80 items-center justify-center text-slate-600">
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
