import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata: Metadata = {
  title: "Login Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLoginPage() {
  const session = await auth();

  // Admin yang sudah login tidak perlu melihat login lagi.
  if (session?.user?.role === "admin") {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
            Diandra Law Firm
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            CMS Admin
          </h1>

          <p className="mt-2 text-sm text-slate-300">
            Masuk menggunakan akun admin yang aktif.
          </p>
        </div>

        <section
          className="card-surface p-6 shadow-2xl sm:p-8"
          aria-label="Form login admin"
        >
          <AdminLoginForm />

          <div className="mt-6 border-t border-slate-200 pt-5 text-center">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Kembali ke website
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}