import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { ServiceForm } from "@/features/services/ServiceForm";
import { createServiceAction } from "@/features/services/service.actions";

export const metadata: Metadata = {
  title: "Tambah Service",
};

export default function CreateServicePage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Services"
        title="Tambah Service"
        description="Buat layanan baru beserta FAQ dan CTA."
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
        submitLabel="Simpan service"
      />
    </div>
  );
}