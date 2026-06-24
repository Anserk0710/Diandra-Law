import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { LawyerForm } from "@/features/lawyers/LawyerForm";
import { createLawyerAction } from "@/features/lawyers/lawyer.actions";

export const metadata: Metadata = {
  title: "Tambah Anggota Tim",
};

export default function CreateLawyerPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Tambah Anggota Tim"
        description="Tambahkan profil anggota tim baru ke dalam website."
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
        submitLabel="Simpan Profil"
      />
    </div>
  );
}