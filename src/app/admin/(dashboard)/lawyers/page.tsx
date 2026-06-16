import type { Metadata } from "next";
import Link from "next/link";

import {
  AdminPageHeader,
  StatusBadge,
} from "@/components/admin/AdminCrudUi";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { deleteLawyerAction } from "@/features/lawyers/lawyer.actions";
import { getAdminLawyers } from "@/features/lawyers/lawyer.queries";

export const metadata: Metadata = {
  title: "Lawyers",
};

export default async function AdminLawyersPage() {
  const lawyers = await getAdminLawyers();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Phase 4"
        title="Lawyers"
        description="Kelola profil lawyer, publikasi, featured, dan urutan tampil."
        action={
          <Link
            href="/admin/lawyers/create"
            className="btn-primary"
          >
            Tambah lawyer
          </Link>
        }
      />

      <section className="card-surface overflow-hidden">
        {lawyers.length === 0 ? (
          <div className="p-8 text-center">
            Belum ada lawyer.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead className="border-b bg-slate-50">
                <tr>
                  <th className="px-5 py-4">
                    Lawyer
                  </th>
                  <th className="px-5 py-4">
                    Spesialisasi
                  </th>
                  <th className="px-5 py-4">
                    Status
                  </th>
                  <th className="px-5 py-4">
                    Urutan
                  </th>
                  <th className="px-5 py-4 text-right">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {lawyers.map((lawyer) => (
                  <tr key={lawyer.id.toString()}>
                    <td className="px-5 py-4">
                      <p className="font-bold">
                        {lawyer.name}
                      </p>

                      <p className="text-sm text-slate-500">
                        {lawyer.position}
                      </p>

                      <p className="text-sm text-slate-500">
                        /tim/{lawyer.slug}
                      </p>

                      {lawyer.featured ? (
                        <p className="text-xs font-semibold text-amber-700">
                          Featured
                        </p>
                      ) : null}
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {lawyer.specialty}
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge
                        status={lawyer.status}
                      />
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {lawyer.sortOrder}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/lawyers/${lawyer.id.toString()}`}
                          className="btn-secondary px-3 py-2 text-sm"
                        >
                          Edit
                        </Link>

                        <form
                          action={deleteLawyerAction.bind(
                            null,
                            lawyer.id.toString(),
                          )}
                        >
                          <ConfirmSubmitButton
                            confirmationMessage={`Hapus lawyer "${lawyer.name}"?`}
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
