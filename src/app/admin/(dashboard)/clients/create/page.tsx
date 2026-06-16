import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { ClientForm } from "@/features/clients/ClientForm";
import { createClientAction } from "@/features/clients/client.actions";

export const metadata: Metadata = {
  title: "Tambah Client",
};

export default function CreateClientPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Tambah Client"
        action={
          <Link
            href="/admin/clients"
            className="btn-secondary"
          >
            Kembali
          </Link>
        }
      />

      <ClientForm
        action={createClientAction}
        submitLabel="Simpan client"
      />
    </div>
  );
}