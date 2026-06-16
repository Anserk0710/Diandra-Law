import type { Metadata } from "next";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { getGlobalSeoMeta } from "@/features/seo/seo.queries";
import { SeoSettingsForm } from "@/features/settings/SeoSettingsForm";
import { SettingsTabs } from "@/features/settings/SettingsTabs";
import { updateGlobalSeoAction } from "@/features/settings/settings.actions";
import { getAdminSiteSettings } from "@/features/settings/settings.queries";

export const metadata: Metadata = {
  title: "SEO Global",
};

export default async function GlobalSeoSettingsPage() {
  const [seo, settings] =
    await Promise.all([
      getGlobalSeoMeta(),
      getAdminSiteSettings(),
    ]);

  const siteName =
    settings?.siteName ??
    "Diandra Law Firm";

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="SEO Global"
        description="Metadata default untuk seluruh website."
      />

      <SettingsTabs />

      <SeoSettingsForm
        action={updateGlobalSeoAction}
        initialData={{
          metaTitle:
            seo?.metaTitle ?? siteName,
          metaDescription:
            seo?.metaDescription ??
            settings?.siteTagline ??
            "Pendamping hukum profesional untuk bisnis dan individu.",
          ogImage:
            seo?.ogImage ?? "",
          canonicalUrl:
            seo?.canonicalUrl ??
            "http://localhost:3000",
          robots:
            seo?.robots ===
              "index,nofollow" ||
            seo?.robots ===
              "noindex,follow" ||
            seo?.robots ===
              "noindex,nofollow"
              ? seo.robots
              : "index,follow",
          schemaType:
            seo?.schemaType ===
              "Organization" ||
            seo?.schemaType ===
              "ProfessionalService"
              ? seo.schemaType
              : "LegalService",
        }}
      />
    </div>
  );
}