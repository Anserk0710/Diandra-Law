import { notFound } from "next/navigation";

import { CmsActionLink } from "@/components/public/CmsActionLink";
import { PageHero } from "@/components/public/PageHero";
import { SectionHeading } from "@/components/public/SectionHeading";
import { RETAINER_PAGE_DEFAULTS } from "@/features/pages/page.types";
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

export default async function RetainerPage() {
  const [page, settings] =
    await Promise.all([
      getPublishedPage("retainer"),
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
  const intro = getSection(
    content,
    "intro",
  );
  const benefits = getSection(
    content,
    "benefits",
  );
  const process = getSection(
    content,
    "process",
  );

  const defaults =
    RETAINER_PAGE_DEFAULTS;

  const benefitItems = getStringArray(
    benefits,
    "items",
    defaults.benefits.items,
  );

  const processItems = getStringArray(
    process,
    "items",
    defaults.process.items,
  );

  const whatsappHref =
    buildWhatsAppUrl(
      settings?.whatsappNumber,
      settings?.whatsappMessage,
    );

  const buttonHref = resolveCmsLink(
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
            href={buttonHref}
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
              intro,
              "eyebrow",
              defaults.intro.eyebrow,
            )}
            title={getString(
              intro,
              "title",
              defaults.intro.title,
            )}
          />

          <div className="prose-public">
            {getString(
              intro,
              "content",
              defaults.intro.content,
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 md:py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow={getString(
              benefits,
              "eyebrow",
              defaults.benefits.eyebrow,
            )}
            title={getString(
              benefits,
              "title",
              defaults.benefits.title,
            )}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {benefitItems.map(
              (item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="card-surface flex gap-3 p-5 sm:gap-4 sm:p-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 font-bold text-amber-800">
                    {index + 1}
                  </span>

                  <p className="leading-7">
                    {item}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="container-app py-16 md:py-24">
        <SectionHeading
          eyebrow={getString(
            process,
            "eyebrow",
            defaults.process.eyebrow,
          )}
          title={getString(
            process,
            "title",
            defaults.process.title,
          )}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {processItems.map(
            (item, index) => (
              <div
                key={`${item}-${index}`}
                className="card-surface p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700 sm:text-sm sm:tracking-[0.2em]">
                  Tahap {index + 1}
                </p>

                <p className="mt-4 leading-7">
                  {item}
                </p>
              </div>
            ),
          )}
        </div>
      </section>
    </>
  );
}
