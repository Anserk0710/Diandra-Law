"use client";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import { useRouter } from "next/navigation";

import {
    fileToDataUrl,
    ImageCropModal,
} from "./ImageCropModal";
import {
    DEFAULT_MAX_IMAGE_SIZE_BYTES,
    MEDIA_MODULE_LABELS,
    MEDIA_MODULES,
    type MediaModule,
} from "./media.constants";
import type {
    MediaApiResponse,
    MediaItem,
} from "./media.types";

type MediaUploadFormProps = {
    defaultModule?: MediaModule;
    lockedModule?: MediaModule;
    compact?: boolean;

    onUploaded?: (
        media: MediaItem,
    ) => void;
};

export function MediaUploadForm({
    defaultModule = "pages",
    lockedModule,
    compact = false,
    onUploaded,
}: MediaUploadFormProps) {
    const router = useRouter();

    const fileInputRef =
        useRef<HTMLInputElement>(null);

    const [module, setModule] =
        useState<MediaModule>(
            lockedModule ??
            defaultModule,
        );

    // The raw file selected from disk
    const [rawFile, setRawFile] =
        useState<File | null>(null);

    // The final file (after optional crop) that will be uploaded
    const [file, setFile] =
        useState<File | null>(null);

    const [previewUrl, setPreviewUrl] =
        useState("");

    // Data-URL for the crop modal (doesn't need revoke)
    const [cropSrc, setCropSrc] =
        useState("");

    const [showCropper, setShowCropper] =
        useState(false);

    const [uploading, setUploading] =
        useState(false);

    const [error, setError] =
        useState("");

    const [success, setSuccess] =
        useState("");

    // Whenever `file` (the final, possibly-cropped file) changes, rebuild preview
    useEffect(() => {
        if (!file) {
            setPreviewUrl("");
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);

        return () => {
            URL.revokeObjectURL(objectUrl);
        };
    }, [file]);

    async function handleFileChange(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        setError("");
        setSuccess("");

        const selectedFile = event.target.files?.[0];

        if (!selectedFile) {
            setRawFile(null);
            setFile(null);
            setCropSrc("");
            return;
        }

        if (selectedFile.size > DEFAULT_MAX_IMAGE_SIZE_BYTES) {
            setError("Ukuran file lebih dari 10 MB.");
            event.target.value = "";
            setRawFile(null);
            setFile(null);
            return;
        }

        // Read as data-URL for the cropper (need full data, not object URL)
        const dataUrl = await fileToDataUrl(selectedFile);
        setCropSrc(dataUrl);
        setRawFile(selectedFile);

        // Also set file directly so user can upload without cropping
        setFile(selectedFile);
    }

    function handleOpenCropper() {
        if (!cropSrc) return;
        setShowCropper(true);
    }

    function handleCropConfirm(croppedFile: File) {
        setFile(croppedFile);
        setShowCropper(false);
    }

    function handleCropCancel() {
        setShowCropper(false);
    }

    async function handleSubmit() {
        if (!file) {
            setError("Pilih file terlebih dahulu.");
            return;
        }

        setUploading(true);
        setError("");
        setSuccess("");

        try {
            const formData = new FormData();

            formData.append(
                "module",
                lockedModule ?? module,
            );

            formData.append("file", file);

            const response = await fetch(
                "/api/media",
                {
                    method: "POST",
                    body: formData,
                },
            );

            const result =
                (await response.json()) as MediaApiResponse;

            if (!response.ok || !result.item) {
                setError(result.error ?? "Upload gagal.");
                return;
            }

            setSuccess("Media berhasil diupload.");
            onUploaded?.(result.item);

            // Reset
            setFile(null);
            setRawFile(null);
            setCropSrc("");

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

            router.refresh();
        } catch (uploadError) {
            console.error(uploadError);
            setError("Tidak dapat terhubung ke server upload.");
        } finally {
            setUploading(false);
        }
    }

    return (
        <>
            {/* ── Crop modal (portal-like overlay) ── */}
            {showCropper && rawFile && cropSrc ? (
                <ImageCropModal
                    imageSrc={cropSrc}
                    originalFile={rawFile}
                    onConfirm={handleCropConfirm}
                    onCancel={handleCropCancel}
                />
            ) : null}

            {/* ── Main form ── */}
            <div
                className={
                    compact
                        ? "space-y-4"
                        : "card-surface space-y-5 p-6"
                }
            >
                {!compact ? (
                    <div>
                        <h2 className="text-xl font-bold">
                            Unggah Media
                        </h2>

                        <p className="mt-1 text-sm text-slate-600">
                            Format JPG, PNG, atau WebP.
                            Ukuran maksimal 10 MB.
                        </p>
                    </div>
                ) : null}

                {error ? (
                    <div
                        role="alert"
                        className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                        {error}
                    </div>
                ) : null}

                {success ? (
                    <div
                        role="status"
                        className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                    >
                        {success}
                    </div>
                ) : null}

                {!lockedModule ? (
                    <div>
                        <label
                            htmlFor="media-module"
                            className="text-sm font-semibold"
                        >
                            Kategori Media
                        </label>

                        <select
                            id="media-module"
                            value={module}
                            onChange={(event) =>
                                setModule(
                                    event.target.value as MediaModule,
                                )
                            }
                            className="input-text mt-2"
                        >
                            {MEDIA_MODULES.map((item) => (
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {MEDIA_MODULE_LABELS[item]}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <p className="text-sm text-slate-600">
                        Module:{" "}
                        <strong>
                            {MEDIA_MODULE_LABELS[lockedModule]}
                        </strong>
                    </p>
                )}

                <div>
                    <label
                        htmlFor={
                            compact
                                ? `media-file-${lockedModule}`
                                : "media-file"
                        }
                        className="text-sm font-semibold"
                    >
                        Pilih gambar
                    </label>

                    <input
                        ref={fileInputRef}
                        id={
                            compact
                                ? `media-file-${lockedModule}`
                                : "media-file"
                        }
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={(e) => void handleFileChange(e)}
                        className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-slate-950 file:px-4 file:py-2 file:font-semibold file:text-white"
                    />
                </div>

                {/* Preview + crop button */}
                {previewUrl ? (
                    <div className="space-y-2">
                        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={previewUrl}
                                alt="Preview upload"
                                className="max-h-72 w-full object-contain"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleOpenCropper}
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-950 hover:bg-slate-950 hover:text-white transition-colors"
                        >
                            {/* Crop icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 2v14a2 2 0 002 2h14M2 6h14a2 2 0 012 2v14"
                                />
                            </svg>
                            Crop / Atur Gambar
                        </button>
                    </div>
                ) : null}

                <button
                    type="button"
                    disabled={uploading || !file}
                    onClick={() => void handleSubmit()}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {uploading
                        ? "Mengunggah..."
                        : "Unggah Gambar"}
                </button>
            </div>
        </>
    );
}