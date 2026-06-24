import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { HomePageForm } from "@/features/pages/HomePageForm";
import { StaticPageTabs } from "@/features/pages/StaticPageTabs";
import { updateHomePageAction } from "@/features/pages/page.actions";
import { getHomePageEditorData } from "@/features/pages/page.queries";

export const metadata: Metadata = {
  title: "Editor Beranda",
};

export default async function AdminHomePageEditor() {
  const initialData =
    await getHomePageEditorData();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Kelola Halaman"
        title="Editor Beranda"
        description="Kelola seluruh seksi utama pada halaman beranda website."
        action={
          <Link
            href="/"
            target="_blank"
            className="btn-secondary"
          >
            Lihat halaman
          </Link>
        }
      />

      <StaticPageTabs />

      <HomePageForm
        action={updateHomePageAction}
        initialData={initialData}
      />
    </div>
  );
}