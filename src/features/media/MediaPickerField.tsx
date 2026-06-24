"use client";

import {
    useCallback,
    useEffect,
    useState,
} from "react";

import {
    MEDIA_MODULE_LABELS,
    type MediaModule,
} from "./media.constants";
import { MediaUploadForm } from "./MediaUploadForm";
import type {
    MediaApiResponse,
    MediaItem,
} from "./media.types";

type MediaPickerFieldProps = {
    name: string;
    label: string;
    module: MediaModule;
    defaultValue?: string;
    help?: string;
    required?: boolean;
};

export function MediaPickerField({
    name,
    label,
    module,
    defaultValue = "",
    help,
    required = false,
}: MediaPickerFieldProps) {
    const [value, setValue] =
        useState(defaultValue);

    const [opened, setOpened] =
        useState(false);

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const [items, setItems] =
        useState<MediaItem[]>([]);

    const loadMedia =
        useCallback(async () => {
            setLoading(true);
            setError("");

            try {
                const params =
                    new URLSearchParams({
                        module,
                        page: "1",
                        pageSize: "18",
                    });

                const response = await fetch(
                    `/api/media?${params.toString()}`,
                    {
                        method: "GET",
                        cache: "no-store",
                    },
                );

                const result =
                    (await response.json()) as MediaApiResponse;

                if (!response.ok) {
                    setError(
                        result.error ??
                        "Media tidak dapat dimuat.",
                    );

                    return;
                }

                setItems(
                    result.items ?? [],
                );
            } catch {
                setError(
                    "Media tidak dapat dimuat.",
                );
            } finally {
                setLoading(false);
            }
        }, [module]);

    useEffect(() => {
        if (opened) {
            void loadMedia();
        }
    }, [opened, loadMedia]);

    function handleUploaded(
        media: MediaItem,
    ) {
        setValue(media.fileUrl);

        setItems((current) => [
            media,
            ...current.filter(
                (item) =>
                    item.id !== media.id,
            ),
        ]);

        setOpened(false);
    }

    return (
        <div className="space-y-3">
            <label
                htmlFor={name}
                className="text-sm font-semibold"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                value={value}
                onChange={(event) =>
                    setValue(
                        event.target.value,
                    )
                }
                required={required}
                maxLength={255}
                className="input-text"
                placeholder="/cms/uploads/..."
            />

            {help ? (
                <p className="text-xs text-slate-500">
                    {help}
                </p>
            ) : null}

            {value ? (
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={value}
                        alt={`Preview ${label}`}
                        className="max-h-72 w-full object-contain"
                    />
                </div>
            ) : null}

            <div className="flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={() =>
                        setOpened(
                            (current) => !current,
                        )
                    }
                    className="btn-secondary text-sm"
                >
                    {opened
                        ? "Tutup media"
                        : "Pilih dari media"}
                </button>

                {value ? (
                    <button
                        type="button"
                        onClick={() =>
                            setValue("")
                        }
                        className="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
                    >
                        Hapus pilihan
                    </button>
                ) : null}
            </div>

            {opened ? (
                <section className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div>
                        <h3 className="font-bold">
                            Media{" "}
                            {
                                MEDIA_MODULE_LABELS[
                                module
                                ]
                            }
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                            Unggah gambar baru atau pilih
                            gambar yang sudah tersedia.
                        </p>
                    </div>

                    <MediaUploadForm
                        lockedModule={module}
                        compact
                        onUploaded={
                            handleUploaded
                        }
                    />

                    <div className="border-t border-slate-200 pt-4">
                        {loading ? (
                            <p className="text-sm text-slate-600">
                                Memuat media...
                            </p>
                        ) : null}

                        {error ? (
                            <p className="text-sm text-red-700">
                                {error}
                            </p>
                        ) : null}

                        {!loading &&
                            !error &&
                            items.length === 0 ? (
                            <p className="text-sm text-slate-600">
                                Belum ada gambar tersedia
                                untuk kategori ini.
                            </p>
                        ) : null}

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => {
                                        setValue(
                                            item.fileUrl,
                                        );

                                        setOpened(false);
                                    }}
                                    className="overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition hover:border-slate-500"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={item.fileUrl}
                                        alt={
                                            item.originalName
                                        }
                                        className="h-28 w-full object-cover"
                                    />

                                    <span className="block truncate px-3 py-2 text-xs font-semibold">
                                        {item.originalName}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}