import type { Metadata } from "next";
import Link from "next/link";

import { prisma } from "@/lib/db/prisma";
import { requireAdmin } from "@/lib/auth/require-admin";

export const metadata: Metadata = {
  title: "Dashboard",
};

const moduleCards = [
  {
    key: "services",
    label: "Services",
    description: "Layanan hukum yang tersedia.",
    href: "/admin/services",
  },
  {
    key: "lawyers",
    label: "Lawyers",
    description: "Profil tim dan lawyer.",
    href: "/admin/lawyers",
  },
  {
    key: "articles",
    label: "Articles",
    description: "Artikel dan publikasi.",
    href: "/admin/articles",
  },
  {
    key: "clients",
    label: "Clients",
    description: "Daftar client atau testimoni.",
    href: "/admin/clients",
  },
] as const;

const quickActions = [
  {
    href: "/admin/services/create",
    label: "Tambah service",
  },
  {
    href: "/admin/lawyers/create",
    label: "Tambah lawyer",
  },
  {
    href: "/admin/articles/create",
    label: "Tulis artikel",
  },
  {
    href: "/admin/clients/create",
    label: "Tambah client",
  },
  {
    href: "/admin/settings/general",
    label: "Buka settings",
  },
  {
    href: "/admin/media",
    label: "Buka media",
  },
];

export default async function AdminDashboardPage() {
  const session = await requireAdmin();

  const [
    servicesCount,
    lawyersCount,
    articlesCount,
    clientsCount,
  ] = await Promise.all([
    prisma.service.count(),
    prisma.lawyer.count(),
    prisma.article.count(),
    prisma.client.count(),
  ]);

  const counts = {
    services: servicesCount,
    lawyers: lawyersCount,
    articles: articlesCount,
    clients: clientsCount,
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <section className="card-surface p-6 md:p-8">
        <p className="text-sm font-semibold text-amber-700">
          Dashboard
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Selamat datang,{" "}
          {session.user.name ?? "Admin"}
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Pantau ringkasan konten dan gunakan
          shortcut untuk menuju modul CMS.
        </p>
      </section>

      <section aria-labelledby="content-summary-heading">
        <div className="mb-4">
          <p className="text-sm font-medium text-slate-500">
            Ringkasan
          </p>

          <h2
            id="content-summary-heading"
            className="text-xl font-bold text-slate-950"
          >
            Konten CMS
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {moduleCards.map((card) => (
            <Link
              key={card.key}
              href={card.href}
              className="card-surface group p-5 transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-600">
                    {card.label}
                  </p>

                  <p className="mt-2 text-3xl font-bold text-slate-950">
                    {counts[card.key]}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-slate-400 transition group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-500">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="card-surface p-6"
        aria-labelledby="quick-actions-heading"
      >
        <h2
          id="quick-actions-heading"
          className="text-xl font-bold text-slate-950"
        >
          Shortcut
        </h2>

        <p className="mt-1 text-sm text-slate-600">
          Akses cepat menuju modul CMS.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}