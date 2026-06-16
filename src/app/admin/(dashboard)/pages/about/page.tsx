import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { AboutPageForm } from "@/features/pages/AboutPageForm";
import { StaticPageTabs } from "@/features/pages/StaticPageTabs";
import { updateAboutPageAction } from "@/features/pages/page.actions";
import { getAboutPageEditorData } from "@/features/pages/page.queries";

export const metadata: Metadata = {
  title: "Editor Tentang Kami",
};

export default async function AdminAboutPageEditor() {
  const initialData =
    await getAboutPageEditorData();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Editor Tentang Kami"
        description="Kelola profil firma, visi, dan nilai kerja."
        action={
          <Link
            href="/tentang-kami"
            target="_blank"
            className="btn-secondary"
          >
            Lihat halaman
          </Link>
        }
      />

      <StaticPageTabs />

      <AboutPageForm
        action={updateAboutPageAction}
        initialData={initialData}
      />
    </div>
  );
}