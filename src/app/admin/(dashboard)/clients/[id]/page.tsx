import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import { ClientForm } from "@/features/clients/ClientForm";
import { updateClientAction } from "@/features/clients/client.actions";
import { getAdminClientById } from "@/features/clients/client.queries";
import { parseEntityId } from "@/lib/cms/cms-utils";

export const metadata: Metadata = {
  title: "Edit Client",
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditClientPage({
  params,
}: Props) {
  const { id: rawId } = await params;
  const id = parseEntityId(rawId);

  if (!id) {
    notFound();
  }

  const client =
    await getAdminClientById(id);

  if (!client) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={`Edit: ${client.name}`}
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
        action={updateClientAction.bind(
          null,
          client.id.toString(),
        )}
        submitLabel="Simpan perubahan"
        initialData={{
          name: client.name,
          slug: client.slug ?? "",
          logo: client.logo ?? "",
          shortDescription:
            client.shortDescription ?? "",
          category: client.category ?? "",
          featured: client.featured,
          sortOrder: client.sortOrder,
          status: client.status,
        }}
      />
    </div>
  );
}