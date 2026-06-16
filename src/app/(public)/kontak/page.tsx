import { notFound } from "next/navigation";

import { PageHero } from "@/components/public/PageHero";
import { CONTACT_PAGE_DEFAULTS } from "@/features/pages/page.types";
import {
  asObject,
  getSection,
  getString,
} from "@/lib/page-content";
import {
  getPublishedPage,
  getSiteSettings,
} from "@/lib/public-site";
import { buildWhatsAppUrl } from "@/lib/site-utils";

export default async function ContactPage() {
  const [page, settings] =
    await Promise.all([
      getPublishedPage("contact"),
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
  const officeInfo = getSection(
    content,
    "officeInfo",
  );
  const map = getSection(
    content,
    "map",
  );

  const defaults =
    CONTACT_PAGE_DEFAULTS;

  const whatsappHref =
    buildWhatsAppUrl(
      settings?.whatsappNumber,
      settings?.whatsappMessage,
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
      />

      <section className="container-app py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700 sm:text-sm sm:tracking-[0.2em]">
              {getString(
                officeInfo,
                "eyebrow",
                defaults.officeInfo
                  .eyebrow,
              )}
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
              {getString(
                officeInfo,
                "title",
                defaults.officeInfo.title,
              )}
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              {getString(
                officeInfo,
                "description",
                defaults.officeInfo
                  .description,
              )}
            </p>

            <div className="mt-8 grid gap-4">
              <ContactCard
                label={getString(
                  officeInfo,
                  "addressLabel",
                  defaults.officeInfo
                    .addressLabel,
                )}
                value={
                  settings?.officeAddress ??
                  "Alamat belum dikonfigurasi."
                }
              />

              <ContactCard
                label={getString(
                  officeInfo,
                  "phoneLabel",
                  defaults.officeInfo
                    .phoneLabel,
                )}
                value={
                  settings?.phone ??
                  "Telepon belum dikonfigurasi."
                }
              />

              <ContactCard
                label={getString(
                  officeInfo,
                  "emailLabel",
                  defaults.officeInfo
                    .emailLabel,
                )}
                value={
                  settings?.email ??
                  "Email belum dikonfigurasi."
                }
              />
            </div>

            <a
              href={whatsappHref}
              target={
                whatsappHref.startsWith(
                  "http",
                )
                  ? "_blank"
                  : undefined
              }
              rel={
                whatsappHref.startsWith(
                  "http",
                )
                  ? "noreferrer"
                  : undefined
              }
              className="btn-primary mt-6"
            >
              {getString(
                officeInfo,
                "whatsappButtonLabel",
                defaults.officeInfo
                  .whatsappButtonLabel,
              )}
            </a>
          </div>

          <div className="min-h-80 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:rounded-3xl md:min-h-[520px]">
            {settings?.mapEmbedUrl ? (
              <iframe
                src={settings.mapEmbedUrl}
                title={getString(
                  map,
                  "iframeTitle",
                  defaults.map.iframeTitle,
                )}
                className="h-full min-h-80 w-full border-0 md:min-h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="flex min-h-80 items-center justify-center px-5 text-center text-slate-600 md:min-h-[520px]">
                {getString(
                  map,
                  "emptyMessage",
                  defaults.map.emptyMessage,
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="card-surface p-5">
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-2 whitespace-pre-line break-words font-semibold leading-7">
        {value}
      </p>
    </div>
  );
}
