import { AdminTabs } from "@/components/admin/AdminTabs";

const settingsTabs = [
  {
    href: "/admin/settings/general",
    label: "Umum",
  },
  {
    href: "/admin/settings/whatsapp",
    label: "WhatsApp",
  },
  {
    href: "/admin/settings/seo",
    label: "SEO Global",
  },
] as const;

export function SettingsTabs() {
  return (
    <AdminTabs items={settingsTabs} />
  );
}