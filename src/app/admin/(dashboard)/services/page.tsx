import type { Metadata } from "next";
import Link from "next/link";

import {
  AdminPageHeader,
  StatusBadge,
} from "@/components/admin/AdminCrudUi";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { deleteServiceAction } from "@/features/services/service.actions";
import { getAdminServices } from "@/features/services/service.queries";

export const metadata: Metadata = {
  title: "Services",
};

export default async function AdminServicesPage() {
  const services = await getAdminServices();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Phase 4"
        title="Services"
        description="Kelola layanan, FAQ, CTA, status, featured, dan urutan tampil."
        action={
          <Link
            href="/admin/services/create"
            className="btn-primary"
          >
            Tambah service
          </Link>
        }
      />

      <section className="card-surface overflow-hidden">
        {services.length === 0 ? (
          <div className="p-8 text-center">
            Belum ada service.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead className="border-b bg-slate-50">
                <tr>
                  <th className="px-5 py-4">
                    Service
                  </th>
                  <th className="px-5 py-4">
                    Status
                  </th>
                  <th className="px-5 py-4">
                    Konten
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
                {services.map((service) => (
                  <tr key={service.id.toString()}>
                    <td className="px-5 py-4">
                      <p className="font-bold">
                        {service.title}
                      </p>

                      <p className="text-sm text-slate-500">
                        /layanan/{service.slug}
                      </p>

                      {service.featured ? (
                        <p className="text-xs font-semibold text-amber-700">
                          Featured
                        </p>
                      ) : null}
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge
                        status={service.status}
                      />
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {service._count.faqs} FAQ,{" "}
                      {service._count.ctas} CTA
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {service.sortOrder}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/services/${service.id.toString()}`}
                          className="btn-secondary px-3 py-2 text-sm"
                        >
                          Edit
                        </Link>

                        <form
                          action={deleteServiceAction.bind(
                            null,
                            service.id.toString(),
                          )}
                        >
                          <ConfirmSubmitButton
                            confirmationMessage={`Hapus service "${service.title}"?`}
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
