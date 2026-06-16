import type { Metadata } from "next";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { SettingsTabs } from "@/features/settings/SettingsTabs";
import { WhatsAppSettingsForm } from "@/features/settings/WhatsAppSettingsForm";
import { updateWhatsAppSettingsAction } from "@/features/settings/settings.actions";
import { getAdminSiteSettings } from "@/features/settings/settings.queries";

export const metadata: Metadata = {
  title: "WhatsApp Settings",
};

export default async function WhatsAppSettingsPage() {
  const settings =
    await getAdminSiteSettings();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="WhatsApp Settings"
        description="Kelola nomor dan pesan awal WhatsApp global."
      />

      <SettingsTabs />

      <WhatsAppSettingsForm
        action={
          updateWhatsAppSettingsAction
        }
        initialData={{
          whatsappNumber:
            settings?.whatsappNumber ?? "",
          whatsappMessage:
            settings?.whatsappMessage ?? "",
        }}
      />
    </div>
  );
}