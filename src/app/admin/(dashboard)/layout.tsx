import type { Metadata } from "next";
import Link from "next/link";

import { signOut } from "@/auth";
import { AdminNavigation } from "@/components/admin/AdminNavigation";
import { requireAdmin } from "@/lib/auth/require-admin";

export const metadata: Metadata = {
  title: {
    default: "Beranda Admin",
    template: "%s | Diandra Law Admin",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default async function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await requireAdmin();

  async function handleSignOut() {
    "use server";

    await signOut({
      redirectTo: "/admin/login",
    });
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen w-full md:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="border-b border-slate-200 bg-white p-5 md:border-b-0 md:border-r md:p-6">
          <div className="flex items-start justify-between gap-4 md:block">
            <div>
              <Link
                href="/admin"
                className="block"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Panel Admin
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-950">
                  Diandra Law Firm
                </h2>
              </Link>

              <p className="mt-2 max-w-52 truncate text-sm text-slate-600">
                {session.user.name ??
                  session.user.email}
              </p>
            </div>

            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 md:mt-5 md:inline-flex"
            >
              Lihat website
            </Link>
          </div>

          <div className="mt-5 md:mt-8">
            <AdminNavigation />
          </div>

          <form
            action={handleSignOut}
            className="mt-5 md:mt-8"
          >
            <button
              type="submit"
              className="btn-secondary w-full"
            >
              Keluar
            </button>
          </form>
        </aside>

        <main className="min-w-0 p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
