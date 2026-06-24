import type { Metadata } from "next";
import Link from "next/link";

import {
  AdminPageHeader,
  StatusBadge,
} from "@/components/admin/AdminCrudUi";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { deleteClientAction } from "@/features/clients/client.actions";
import { getAdminClients } from "@/features/clients/client.queries";

export const metadata: Metadata = {
  title: "Daftar Klien",
};

export default async function AdminClientsPage() {
  const clients = await getAdminClients();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Kelola Konten"
        title="Daftar Klien"
        description="Kelola daftar klien, kategori, deskripsi, status, dan urutan tampil."
        action={
          <Link
            href="/admin/clients/create"
            className="btn-primary"
          >
            Tambah Klien
          </Link>
        }
      />

      <section className="card-surface overflow-hidden">
        {clients.length === 0 ? (
          <div className="p-8 text-center">
            Belum ada klien yang ditambahkan.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left">
              <thead className="border-b bg-slate-50">
                <tr>
                  <th className="px-5 py-4">
                    Klien
                  </th>
                  <th className="px-5 py-4">
                    Kategori
                  </th>
                  <th className="px-5 py-4">
                    Status
                  </th>
                  <th className="px-5 py-4">
                    Urutan
                  </th>
                  <th className="px-5 py-4 text-right">
                    Tindakan
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {clients.map((client) => (
                  <tr key={client.id.toString()}>
                    <td className="px-5 py-4">
                      <p className="font-bold">
                        {client.name}
                      </p>

                      {client.featured ? (
                        <p className="text-xs font-semibold text-amber-700">
                          Featured
                        </p>
                      ) : null}
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {client.category ?? "-"}
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge
                        status={client.status}
                      />
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {client.sortOrder}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/clients/${client.id.toString()}`}
                          className="btn-secondary px-3 py-2 text-sm"
                        >
                          Edit
                        </Link>

                        <form
                          action={deleteClientAction.bind(
                            null,
                            client.id.toString(),
                          )}
                        >
                          <ConfirmSubmitButton
                            confirmationMessage={`Hapus klien "${client.name}"?`}
                          />
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}