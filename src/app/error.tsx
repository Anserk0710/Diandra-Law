"use client";

import {
    useEffect,
} from "react";

export default function RootError({
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
            "Application error:",
            error,
        );
    }, [error]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
            <section className="card-surface w-full max-w-xl p-7 text-center sm:p-10">
                <p className="eyebrow-kicker justify-center">
                    Terjadi Kendala
                </p>

                <h1 className="mt-4 text-3xl font-black text-slate-950">
                    Halaman tidak dapat
                    dimuat
                </h1>

                <p className="mt-4 leading-7 text-slate-600">
                    Sistem mengalami kendala
                    sementara. Silakan mencoba
                    kembali.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={reset}
                        className="btn-primary"
                    >
                        Coba Lagi
                    </button>

                    <a
                        href="/"
                        className="btn-secondary"
                    >
                        Kembali ke Beranda
                    </a>
                </div>

                {error.digest ? (
                    <p className="mt-6 text-xs text-slate-400">
                        Kode error:{" "}
                        {error.digest}
                    </p>
                ) : null}
            </section>
        </main>
    );
}