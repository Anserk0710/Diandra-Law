import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { ServiceForm } from "@/features/services/ServiceForm";
import { createServiceAction } from "@/features/services/service.actions";

export const metadata: Metadata = {
  title: "Tambah Layanan",
};

export default function CreateServicePage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Layanan Hukum"
        title="Tambah Layanan Baru"
        description="Buat layanan baru beserta FAQ dan tombol tindakan."
        action={
          <Link
            href="/admin/services"
            className="btn-secondary"
          >
            Kembali
          </Link>
        }
      />

      <ServiceForm
        action={createServiceAction}
        submitLabel="Simpan Layanan"
      />
    </div>
  );
}