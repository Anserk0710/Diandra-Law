import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { ServiceForm } from "@/features/services/ServiceForm";
import { updateServiceAction } from "@/features/services/service.actions";
import { getAdminServiceById } from "@/features/services/service.queries";
import { parseEntityId } from "@/lib/cms/cms-utils";

export const metadata: Metadata = {
  title: "Edit Service",
};

type EditServicePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditServicePage({
  params,
}: EditServicePageProps) {
  const { id: rawId } = await params;
  const id = parseEntityId(rawId);

  if (!id) {
    notFound();
  }

  const service =
    await getAdminServiceById(id);

  if (!service) {
    notFound();
  }

  const action =
    updateServiceAction.bind(
      null,
      service.id.toString(),
    );

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Services"
        title={`Edit: ${service.title}`}
        description="Perubahan published akan diterapkan pada website publik."
        action={
          <div className="flex gap-2">
            {service.status ===
            "published" ? (
              <Link
                href={`/layanan/${service.slug}`}
                target="_blank"
                className="btn-secondary"
              >
                Lihat publik
              </Link>
            ) : null}

            <Link
              href="/admin/services"
              className="btn-secondary"
            >
              Kembali
            </Link>
          </div>
        }
      />

      <ServiceForm
        action={action}
        submitLabel="Simpan perubahan"
        initialData={{
          title: service.title,
          slug: service.slug,
          summary: service.summary,
          content: service.content,
          coverImage:
            service.coverImage ?? "",
          featured: service.featured,
          sortOrder: service.sortOrder,
          status: service.status,

          faqs: service.faqs.map(
            (faq) => ({
              question: faq.question,
              answer: faq.answer,
              sortOrder: faq.sortOrder,
            }),
          ),

          ctas: service.ctas.map(
            (cta) => ({
              label: cta.label,
              link:
                cta.link === "#"
                  ? ""
                  : cta.link,
              type: cta.type,
              isActive: cta.isActive,
            }),
          ),
        }}
      />
    </div>
  );
}