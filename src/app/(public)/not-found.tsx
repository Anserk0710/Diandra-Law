import Link from "next/link";

export default function PublicNotFound() {
  return (
    <section className="container-app flex min-h-[60vh] items-center justify-center py-20">
      <div className="max-w-xl text-center">
        <p className="text-xs font-black uppercase text-teal-700 sm:text-sm">
          404
        </p>

        <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
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
