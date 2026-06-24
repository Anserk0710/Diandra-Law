import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { CopyMediaUrlButton } from "@/components/admin/CopyMediaUrlButton";

import {
    MEDIA_MODULE_LABELS,
} from "./media.constants";
import {
    deleteMediaAction,
} from "./media.actions";
import type {
    MediaItem,
} from "./media.types";

function formatFileSize(
    size: number,
) {
    if (size < 1024) {
        return `${size} B`;
    }

    if (size < 1024 * 1024) {
        return `${(
            size / 1024
        ).toFixed(1)} KB`;
    }

    return `${(
        size /
        1024 /
        1024
    ).toFixed(2)} MB`;
}

const dateFormatter =
    new Intl.DateTimeFormat(
        "id-ID",
        {
            dateStyle: "medium",
            timeStyle: "short",
        },
    );

export function MediaLibraryGrid({
    items,
}: {
    items: MediaItem[];
}) {
    if (items.length === 0) {
        return (
            <div className="card-surface p-10 text-center">
                <h2 className="text-xl font-bold">
                    Media tidak ditemukan
                </h2>

                <p className="mt-2 text-slate-600">
                    Unggah gambar baru atau ubah filter
                    pencarian.
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {items.map((item) => (
                <article
                    key={item.id}
                    className="card-surface overflow-hidden"
                >
                    <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="block bg-slate-100"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={item.fileUrl}
                            alt={item.originalName}
                            className="h-52 w-full object-cover"
                        />
                    </a>

                    <div className="space-y-4 p-4">
                        <div>
                            <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                                {
                                    MEDIA_MODULE_LABELS[
                                    item.module
                                    ]
                                }
                            </span>

                            <h2
                                className="mt-3 truncate font-bold"
                                title={
                                    item.originalName
                                }
                            >
                                {item.originalName}
                            </h2>

                            <p
                                className="mt-1 truncate text-xs text-slate-500"
                                title={item.filePath}
                            >
                                {item.filePath}
                            </p>
                        </div>

                        <dl className="grid grid-cols-2 gap-3 text-xs">
                            <div>
                                <dt className="text-slate-500">
                                    Ukuran
                                </dt>

                                <dd className="mt-1 font-semibold">
                                    {formatFileSize(
                                        item.fileSize,
                                    )}
                                </dd>
                            </div>

                            <div>
                                <dt className="text-slate-500">
                                    Format
                                </dt>

                                <dd className="mt-1 font-semibold">
                                    {item.mimeType}
                                </dd>
                            </div>
                        </dl>

                        <p className="text-xs text-slate-500">
                            {dateFormatter.format(
                                new Date(
                                    item.createdAt,
                                ),
                            )}
                        </p>

                        {item.uploadedByAdmin ? (
                            <p className="text-xs text-slate-500">
                                Oleh{" "}
                                {
                                    item
                                        .uploadedByAdmin
                                        .fullName
                                }
                            </p>
                        ) : null}

                        <div className="flex flex-wrap gap-2 border-t border-slate-200 pt-4">
                            <CopyMediaUrlButton
                                url={item.fileUrl}
                            />

                            <a
                                href={item.fileUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-slate-400"
                            >
                                Buka
                            </a>

                            <form
                                action={deleteMediaAction.bind(
                                    null,
                                    item.id,
                                )}
                                className="ml-auto"
                            >
                                <ConfirmSubmitButton
                                    label="Hapus"
                                    confirmationMessage={`Hapus media "${item.originalName}"?`}
                                    className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-50 disabled:opacity-50"
                                />
                            </form>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}