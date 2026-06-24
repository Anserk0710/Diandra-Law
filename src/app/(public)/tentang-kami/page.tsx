import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { CmsActionLink } from "@/components/public/CmsActionLink";
import { PageHero } from "@/components/public/PageHero";
import { SectionHeading } from "@/components/public/SectionHeading";
import { ABOUT_PAGE_DEFAULTS } from "@/features/pages/page.types";
import {
  asObject,
  getSection,
  getString,
  getStringArray,
} from "@/lib/page-content";
import {
  getPublishedPage,
  getSiteSettings,
} from "@/lib/public-site";
import {
  buildWhatsAppUrl,
  resolveCmsLink,
} from "@/lib/site-utils";

export default async function AboutPage() {
  const [page, settings] =
    await Promise.all([
      getPublishedPage("about"),
      getSiteSettings(),
    ]);

  if (!page) {
    notFound();
  }

  const content = asObject(
    page.contentJson,
  );

  const hero = getSection(
    content,
    "hero",
  );
  const profile = getSection(
    content,
    "companyProfile",
  );
  const vision = getSection(
    content,
    "vision",
  );
  const values = getSection(
    content,
    "values",
  );

  const defaults =
    ABOUT_PAGE_DEFAULTS;

  const valueItems = getStringArray(
    values,
    "items",
    defaults.values.items,
  );

  const whatsappHref =
    buildWhatsAppUrl(
      settings?.whatsappNumber,
      settings?.whatsappMessage,
    );

  const heroButtonHref =
    resolveCmsLink(
      getString(
        hero,
        "buttonLink",
        defaults.hero.buttonLink,
      ),
      whatsappHref,
    );

  return (
    <>
      <PageHero
        eyebrow={getString(
          hero,
          "eyebrow",
          defaults.hero.eyebrow,
        )}
        title={getString(
          hero,
          "title",
          defaults.hero.title,
        )}
        description={getString(
          hero,
          "description",
          defaults.hero.description,
        )}
        actions={
          <CmsActionLink
            href={heroButtonHref}
            className="btn-primary"
          >
            {getString(
              hero,
              "buttonLabel",
              defaults.hero.buttonLabel,
            )}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4"
            />
          </CmsActionLink>
        }
      />

      <section className="container-app py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow={getString(
              profile,
              "eyebrow",
              defaults.companyProfile
                .eyebrow,
            )}
            title={getString(
              profile,
              "title",
              defaults.companyProfile
                .title,
            )}
          />

          <div className="prose-public">
            {getString(
              profile,
              "content",
              defaults.companyProfile
                .content,
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/80 py-16 md:py-24">
        <div className="container-app grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="dark-section rounded-lg p-6 text-white shadow-2xl shadow-slate-950/15 sm:p-8">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[var(--brand-accent-soft)] sm:text-sm">
              <span className="h-px w-8 bg-[var(--brand-accent)]" />
              {getString(
                vision,
                "eyebrow",
                defaults.vision.eyebrow,
              )}
            </p>

            <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
              {getString(
                vision,
                "title",
                defaults.vision.title,
              )}
            </h2>

            <p className="mt-5 whitespace-pre-line leading-8 text-slate-300">
              {getString(
                vision,
                "content",
                defaults.vision.content,
              )}
            </p>
          </div>

          <div className="card-surface interactive-lift p-6 sm:p-8">
            <p className="eyebrow-kicker">
              {getString(
                values,
                "eyebrow",
                defaults.values.eyebrow,
              )}
            </p>

            <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
              {getString(
                values,
                "title",
                defaults.values.title,
              )}
            </h2>

            <div className="mt-6 grid gap-4">
              {valueItems.map(
                (item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex gap-3 sm:gap-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    </span>

                    <p className="leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
