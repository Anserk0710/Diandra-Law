import type { Metadata } from "next";
import Link from "next/link";

import { buildNotFoundMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildNotFoundMetadata();

export default function NotFound() {
  return (
    <section className="container-app flex min-h-screen items-center justify-center py-20">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase text-teal-700">
          404
        </p>

        <h1 className="mt-4 text-4xl font-black">
          Halaman tidak ditemukan
        </h1>

        <p className="mt-4 leading-8 text-slate-600">
          Konten mungkin belum dipublikasikan,
          sudah dipindahkan, atau alamatnya tidak tepat.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/"
            className="btn-primary"
          >
            Kembali ke Home
          </Link>

          <Link
            href="/kontak"
            className="btn-secondary"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
