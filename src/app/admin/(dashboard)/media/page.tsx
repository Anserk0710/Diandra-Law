import type { Metadata } from "next";
import Link from "next/link";

import { AdminPageHeader } from "@/components/admin/AdminCrudUi";
import {
    isMediaModule,
    MEDIA_MODULE_LABELS,
    MEDIA_MODULES,
    type MediaModule,
} from "@/features/media/media.constants";
import { MediaLibraryGrid } from "@/features/media/MediaLibraryGrid";
import { MediaUploadForm } from "@/features/media/MediaUploadForm";
import { getAdminMediaLibrary } from "@/features/media/media.queries";

export const metadata: Metadata = {
    title: "Koleksi Media",
};

type MediaPageSearchParams = {
    module?: string | string[];
    search?: string | string[];
    page?: string | string[];
    deleted?: string | string[];
    error?: string | string[];
    usage?: string | string[];
};

type MediaPageProps = {
    searchParams: Promise<MediaPageSearchParams>;
};

function firstValue(
    value:
        | string
        | string[]
        | undefined,
) {
    return Array.isArray(value)
        ? value[0]
        : value;
}

function buildPageUrl({
    module,
    search,
    page,
}: {
    module?: MediaModule;
    search: string;
    page: number;
}) {
    const params =
        new URLSearchParams();

    if (module) {
        params.set("module", module);
    }

    if (search) {
        params.set("search", search);
    }

    params.set(
        "page",
        String(page),
    );

    return `/admin/media?${params.toString()}`;
}

export default async function AdminMediaPage({
    searchParams,
}: MediaPageProps) {
    const params =
        await searchParams;

    const rawModule =
        firstValue(params.module);

    const module =
        isMediaModule(rawModule)
            ? rawModule
            : undefined;

    const search =
        firstValue(params.search)?.trim() ??
        "";

    const parsedPage = Number(
        firstValue(params.page) ?? "1",
    );

    const page =
        Number.isInteger(parsedPage) &&
            parsedPage > 0
            ? parsedPage
            : 1;

    const deleted =
        firstValue(params.deleted);

    const error =
        firstValue(params.error);

    const usage =
        firstValue(params.usage);

    const media =
        await getAdminMediaLibrary({
            module,
            search,
            page,
            pageSize: 24,
        });

    return (
        <div className="space-y-6">
            <AdminPageHeader
                eyebrow="Kelola Gambar"
                title="Koleksi Media"
                description="Unggah, cari, pratinjau, pilih, dan hapus gambar untuk website."
            />

            {deleted === "1" ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                    Media berhasil dihapus.
                </div>
            ) : null}

            {error === "in-use" ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Media tidak dapat dihapus karena
                    sedang digunakan
                    {usage
                        ? ` oleh ${usage}.`
                        : "."}
                </div>
            ) : null}

            {error &&
                error !== "in-use" ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Gagal menghapus media. Silakan coba lagi.
                </div>
            ) : null}

            <div className="grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
                <MediaUploadForm
                    defaultModule={
                        module ?? "pages"
                    }
                />

                <section className="card-surface p-6">
                    <h2 className="text-xl font-bold">
                        Filter Media
                    </h2>

                    <form
                        method="GET"
                        className="mt-5 grid gap-4 md:grid-cols-[1fr_1fr_auto]"
                    >
                        <div>
                            <label
                                htmlFor="module"
                                className="text-sm font-semibold"
                            >
                                Kategori
                            </label>

                            <select
                                id="module"
                                name="module"
                                defaultValue={
                                    module ?? ""
                                }
                                className="input-text mt-2"
                            >
                                <option value="">
                                    Semua kategori
                                </option>

                                {MEDIA_MODULES.map(
                                    (item) => (
                                        <option
                                            key={item}
                                            value={item}
                                        >
                                            {
                                                MEDIA_MODULE_LABELS[
                                                item
                                                ]
                                            }
                                        </option>
                                    ),
                                )}
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="search"
                                className="text-sm font-semibold"
                            >
                                Cari nama file
                            </label>

                            <input
                                id="search"
                                name="search"
                                defaultValue={search}
                                maxLength={100}
                                className="input-text mt-2"
                                placeholder="Contoh: logo"
                            />
                        </div>

                        <div className="flex items-end gap-2">
                            <button
                                type="submit"
                                className="btn-primary"
                            >
                                Filter
                            </button>

                            <Link
                                href="/admin/media"
                                className="btn-secondary"
                            >
                                Reset
                            </Link>
                        </div>
                    </form>

                    <p className="mt-5 text-sm text-slate-600">
                        Menampilkan{" "}
                        {media.items.length} dari{" "}
                        {
                            media.pagination
                                .totalItems
                        }{" "}
                        gambar.
                    </p>
                </section>
            </div>

            <MediaLibraryGrid
                items={media.items}
            />

            {media.pagination.totalPages >
                1 ? (
                <nav
                    aria-label="Navigasi halaman media"
                    className="flex flex-wrap items-center justify-center gap-2"
                >
                    {media.pagination.page >
                        1 ? (
                        <Link
                            href={buildPageUrl({
                                module,
                                search,
                                page:
                                    media.pagination
                                        .page - 1,
                            })}
                            className="btn-secondary"
                        >
                            Sebelumnya
                        </Link>
                    ) : null}

                    <span className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold">
                        Halaman{" "}
                        {media.pagination.page} dari{" "}
                        {
                            media.pagination
                                .totalPages
                        }
                    </span>

                    {media.pagination.page <
                        media.pagination
                            .totalPages ? (
                        <Link
                            href={buildPageUrl({
                                module,
                                search,
                                page:
                                    media.pagination
                                        .page + 1,
                            })}
                            className="btn-secondary"
                        >
                            Berikutnya
                        </Link>
                    ) : null}
                </nav>
            ) : null}
        </div>
    );
}