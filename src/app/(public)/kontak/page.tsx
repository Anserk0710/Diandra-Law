import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

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
            <p className="eyebrow-kicker">
              {getString(
                officeInfo,
                "eyebrow",
                defaults.officeInfo
                  .eyebrow,
              )}
            </p>

            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
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
                icon={
                  <MapPin
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                }
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
                icon={
                  <Phone
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                }
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
                icon={
                  <Mail
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                }
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
              <MessageCircle
                aria-hidden="true"
                className="h-4 w-4"
              />
              {getString(
                officeInfo,
                "whatsappButtonLabel",
                defaults.officeInfo
                  .whatsappButtonLabel,
              )}
            </a>
          </div>

          <div className="min-h-80 overflow-hidden rounded-lg border border-slate-200 bg-slate-200 shadow-2xl shadow-slate-950/10 md:min-h-[520px]">
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
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="card-surface interactive-lift p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
          {icon}
        </span>
        <div>
          <p className="text-sm text-slate-500">
            {label}
          </p>

          <p className="mt-2 whitespace-pre-line break-words font-semibold leading-7">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
