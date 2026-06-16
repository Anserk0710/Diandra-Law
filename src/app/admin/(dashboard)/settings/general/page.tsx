import type { Metadata } from "next";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { GeneralSettingsForm } from "@/features/settings/GeneralSettingsForm";
import { SettingsTabs } from "@/features/settings/SettingsTabs";
import { updateGeneralSettingsAction } from "@/features/settings/settings.actions";
import { getAdminSiteSettings } from "@/features/settings/settings.queries";

export const metadata: Metadata = {
  title: "General Settings",
};

export default async function GeneralSettingsPage() {
  const settings =
    await getAdminSiteSettings();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Phase 5"
        title="General Settings"
        description="Kelola identitas brand, kontak, alamat, map, dan footer."
      />

      <SettingsTabs />

      <GeneralSettingsForm
        action={
          updateGeneralSettingsAction
        }
        initialData={{
          siteName:
            settings?.siteName ??
            "Diandra Law",
          siteTagline:
            settings?.siteTagline ?? "",
          logoLight:
            settings?.logoLight ?? "",
          logoDark:
            settings?.logoDark ?? "",
          primaryColor:
            settings?.primaryColor ??
            "#0F172A",
          secondaryColor:
            settings?.secondaryColor ??
            "#D4AF37",
          email: settings?.email ?? "",
          phone: settings?.phone ?? "",
          officeAddress:
            settings?.officeAddress ?? "",
          mapEmbedUrl:
            settings?.mapEmbedUrl ?? "",
          footerText:
            settings?.footerText ?? "",
        }}
      />
    </div>
  );
}