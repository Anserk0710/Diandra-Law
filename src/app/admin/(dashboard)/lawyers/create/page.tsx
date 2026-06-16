import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { LawyerForm } from "@/features/lawyers/LawyerForm";
import { createLawyerAction } from "@/features/lawyers/lawyer.actions";

export const metadata: Metadata = {
  title: "Tambah Lawyer",
};

export default function CreateLawyerPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Tambah Lawyer"
        description="Buat profil lawyer baru."
        action={
          <Link
            href="/admin/lawyers"
            className="btn-secondary"
          >
            Kembali
          </Link>
        }
      />

      <LawyerForm
        action={createLawyerAction}
        submitLabel="Simpan lawyer"
      />
    </div>
  );
}