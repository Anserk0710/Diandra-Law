import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { LawyerForm } from "@/features/lawyers/LawyerForm";
import { updateLawyerAction } from "@/features/lawyers/lawyer.actions";
import { getAdminLawyerById } from "@/features/lawyers/lawyer.queries";
import { parseEntityId } from "@/lib/cms/cms-utils";

export const metadata: Metadata = {
  title: "Edit Lawyer",
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditLawyerPage({
  params,
}: Props) {
  const { id: rawId } = await params;
  const id = parseEntityId(rawId);

  if (!id) {
    notFound();
  }

  const lawyer =
    await getAdminLawyerById(id);

  if (!lawyer) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={`Edit: ${lawyer.name}`}
        action={
          <div className="flex gap-2">
            {lawyer.status ===
            "published" ? (
              <Link
                href={`/tim/${lawyer.slug}`}
                target="_blank"
                className="btn-secondary"
              >
                Lihat publik
              </Link>
            ) : null}

            <Link
              href="/admin/lawyers"
              className="btn-secondary"
            >
              Kembali
            </Link>
          </div>
        }
      />

      <LawyerForm
        action={updateLawyerAction.bind(
          null,
          lawyer.id.toString(),
        )}
        submitLabel="Simpan perubahan"
        initialData={{
          name: lawyer.name,
          slug: lawyer.slug,
          photo: lawyer.photo ?? "",
          position: lawyer.position,
          shortBio: lawyer.shortBio,
          fullBio: lawyer.fullBio,
          specialty: lawyer.specialty,
          featured: lawyer.featured,
          sortOrder: lawyer.sortOrder,
          status: lawyer.status,
        }}
      />
    </div>
  );
}