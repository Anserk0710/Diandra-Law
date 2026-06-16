import { notFound } from "next/navigation";

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
            className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
          >
            {getString(
              hero,
              "buttonLabel",
              defaults.hero.buttonLabel,
            )}
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

      <section className="border-y border-slate-200 bg-white py-16 md:py-24">
        <div className="container-app grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-2xl bg-slate-950 p-6 text-white sm:rounded-3xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300 sm:text-sm sm:tracking-[0.2em]">
              {getString(
                vision,
                "eyebrow",
                defaults.vision.eyebrow,
              )}
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
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

          <div className="card-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700 sm:text-sm sm:tracking-[0.2em]">
              {getString(
                values,
                "eyebrow",
                defaults.values.eyebrow,
              )}
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
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
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                      {index + 1}
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
