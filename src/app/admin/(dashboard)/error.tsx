"use client";

import {
    useEffect,
} from "react";

export default function AdminDashboardError({
    error,
    reset,
}: {
    error: Error & {
        digest?: string;
    };

    reset: () => void;
}) {
    useEffect(() => {
        console.error(
            "Admin dashboard error:",
            error,
        );
    }, [error]);

    return (
        <section className="card-surface p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-red-700">
                Error Admin
            </p>

            <h1 className="mt-2 text-2xl font-black text-slate-950">
                Halaman admin tidak
                dapat dimuat
            </h1>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Data tidak berhasil
                ditampilkan. Periksa koneksi
                database atau coba muat ulang.
            </p>

            <button
                type="button"
                onClick={reset}
                className="btn-primary mt-6"
            >
                Muat Ulang
            </button>

            {error.digest ? (
                <p className="mt-5 text-xs text-slate-400">
                    Kode error:{" "}
                    {error.digest}
                </p>
            ) : null}
        </section>
    );
}