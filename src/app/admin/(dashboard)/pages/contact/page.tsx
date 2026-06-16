import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { ContactPageForm } from "@/features/pages/ContactPageForm";
import { StaticPageTabs } from "@/features/pages/StaticPageTabs";
import { updateContactPageAction } from "@/features/pages/page.actions";
import { getContactPageEditorData } from "@/features/pages/page.queries";

export const metadata: Metadata = {
  title: "Editor Kontak",
};

export default async function AdminContactPageEditor() {
  const initialData =
    await getContactPageEditorData();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Editor Kontak"
        description="Kelola teks halaman kontak dan label informasi kantor."
        action={
          <Link
            href="/kontak"
            target="_blank"
            className="btn-secondary"
          >
            Lihat halaman
          </Link>
        }
      />

      <StaticPageTabs />

      <ContactPageForm
        action={updateContactPageAction}
        initialData={initialData}
      />
    </div>
  );
}