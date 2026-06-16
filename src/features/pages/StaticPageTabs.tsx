import { AdminTabs } from "@/components/admin/AdminTabs";

const pageTabs = [
  {
    href: "/admin/pages/home",
    label: "Home",
  },
  {
    href: "/admin/pages/about",
    label: "Tentang Kami",
  },
  {
    href: "/admin/pages/retainer",
    label: "Retainer",
  },
  {
    href: "/admin/pages/contact",
    label: "Kontak",
  },
] as const;

export function StaticPageTabs() {
  return <AdminTabs items={pageTabs} />;
}