import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { RetainerPageForm } from "@/features/pages/RetainerPageForm";
import { StaticPageTabs } from "@/features/pages/StaticPageTabs";
import { updateRetainerPageAction } from "@/features/pages/page.actions";
import { getRetainerPageEditorData } from "@/features/pages/page.queries";

export const metadata: Metadata = {
  title: "Editor Retainer",
};

export default async function AdminRetainerPageEditor() {
  const initialData =
    await getRetainerPageEditorData();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Editor Retainer"
        description="Kelola pengantar, manfaat, dan tahapan layanan retainer."
        action={
          <Link
            href="/retainer"
            target="_blank"
            className="btn-secondary"
          >
            Lihat halaman
          </Link>
        }
      />

      <StaticPageTabs />

      <RetainerPageForm
        action={updateRetainerPageAction}
        initialData={initialData}
      />
    </div>
  );
}