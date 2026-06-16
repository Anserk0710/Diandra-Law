import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { HomePageForm } from "@/features/pages/HomePageForm";
import { StaticPageTabs } from "@/features/pages/StaticPageTabs";
import { updateHomePageAction } from "@/features/pages/page.actions";
import { getHomePageEditorData } from "@/features/pages/page.queries";

export const metadata: Metadata = {
  title: "Editor Homepage",
};

export default async function AdminHomePageEditor() {
  const initialData =
    await getHomePageEditorData();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Phase 5"
        title="Editor Homepage"
        description="Kelola seluruh section utama pada homepage."
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