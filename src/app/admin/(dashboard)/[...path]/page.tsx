import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Modul Admin",
};

type ModuleDefinition = {
  title: string;
  description: string;
  phase: string;
};

const moduleDefinitions: Record<
  string,
  ModuleDefinition
> = {
  services: {
    title: "Services",
    description:
      "Pengelolaan layanan, FAQ layanan, dan CTA layanan.",
    phase: "Phase 4",
  },

  "services/create": {
    title: "Tambah Service",
    description:
      "Form pembuatan layanan akan dibangun bersama CRUD Services.",
    phase: "Phase 4",
  },

  lawyers: {
    title: "Lawyers",
    description:
      "Pengelolaan profil lawyer dan urutan tampil.",
    phase: "Phase 4",
  },

  "lawyers/create": {
    title: "Tambah Lawyer",
    description:
      "Form pembuatan profil lawyer akan dibangun bersama CRUD Lawyers.",
    phase: "Phase 4",
  },

  articles: {
    title: "Articles",
    description:
      "Pengelolaan artikel, publikasi, dan kategori artikel.",
    phase: "Phase 4",
  },

  "articles/create": {
    title: "Tulis Artikel",
    description:
      "Form artikel akan dibangun bersama CRUD Articles.",
    phase: "Phase 4",
  },

  "articles/categories": {
    title: "Article Categories",
    description:
      "Pengelolaan kategori artikel.",
    phase: "Phase 4",
  },

  clients: {
    title: "Clients",
    description:
      "Pengelolaan client dan testimoni.",
    phase: "Phase 4",
  },

  "clients/create": {
    title: "Tambah Client",
    description:
      "Form client akan dibangun bersama CRUD Clients.",
    phase: "Phase 4",
  },

  "pages/home": {
    title: "Home Page",
    description:
      "Editor halaman Home.",
    phase: "Phase 5",
  },

  "pages/about": {
    title: "About Page",
    description:
      "Editor halaman Tentang Kami.",
    phase: "Phase 5",
  },

  "pages/retainer": {
    title: "Retainer Page",
    description:
      "Editor halaman Retainer.",
    phase: "Phase 5",
  },

  "pages/contact": {
    title: "Contact Page",
    description:
      "Editor halaman Kontak.",
    phase: "Phase 5",
  },

  "settings/general": {
    title: "General Settings",
    description:
      "Identitas situs, kontak, alamat, map, dan brand dasar.",
    phase: "Phase 5",
  },

  "settings/whatsapp": {
    title: "WhatsApp Settings",
    description:
      "Nomor dan pesan awal WhatsApp.",
    phase: "Phase 5",
  },

  "settings/seo": {
    title: "SEO Settings",
    description:
      "Metadata SEO global sebagai fallback.",
    phase: "Phase 5",
  },

  media: {
    title: "Media",
    description:
      "Upload, validasi, preview, dan metadata media.",
    phase: "Phase 6",
  },
};

type PlannedAdminModulePageProps = {
  params: Promise<{
    path: string[];
  }>;
};

export default async function PlannedAdminModulePage({
  params,
}: PlannedAdminModulePageProps) {
  const { path } = await params;

  const routeKey = path.join("/");

  const moduleDefinition =
    moduleDefinitions[routeKey];

  if (!moduleDefinition) {
    notFound();
  }

  return (
    <section className="card-surface p-6 md:p-8">
      <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
        {moduleDefinition.phase}
      </span>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
        {moduleDefinition.title}
      </h1>

      <p className="mt-3 max-w-2xl text-slate-600">
        {moduleDefinition.description}
      </p>

      <p className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        Route dan navigasi modul ini sudah
        dipersiapkan pada Phase 3. Fitur
        pengelolaan datanya akan dibangun pada
        phase yang tercantum di atas.
      </p>

      <Link
        href="/admin"
        className="btn-secondary mt-6"
      >
        Kembali ke dashboard
      </Link>
    </section>
  );
}