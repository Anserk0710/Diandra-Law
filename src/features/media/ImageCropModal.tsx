"use client";

import {
    useCallback,
    useState,
} from "react";

import Cropper, {
    type Area,
} from "react-easy-crop";

// ─── helpers ─────────────────────────────────────────────────────────────────

/**
 * Read a File as a data-URL string (for react-easy-crop).
 */
export function fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error("Gagal membaca file."));
        reader.readAsDataURL(file);
    });
}

/**
 * Draw the cropped area onto a canvas and return it as a Blob.
 */
async function getCroppedBlob(
    imageSrc: string,
    pixelCrop: Area,
    mimeType: string,
): Promise<Blob> {
    const image = await new Promise<HTMLImageElement>((res, rej) => {
        const img = new Image();
        img.onload = () => res(img);
        img.onerror = () => rej(new Error("Gagal memuat gambar."));
        img.src = imageSrc;
    });

    const canvas = document.createElement("canvas");
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas 2D tidak tersedia.");

    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height,
    );

    return new Promise<Blob>((res, rej) => {
        canvas.toBlob(
            (blob) => (blob ? res(blob) : rej(new Error("Gagal membuat blob."))),
            mimeType,
            0.92,
        );
    });
}

// ─── aspect ratio presets ────────────────────────────────────────────────────

const ASPECT_PRESETS = [
    { label: "Bebas", value: null },
    { label: "1 : 1", value: 1 },
    { label: "4 : 3", value: 4 / 3 },
    { label: "16 : 9", value: 16 / 9 },
    { label: "3 : 2", value: 3 / 2 },
    { label: "2 : 3", value: 2 / 3 },
] as const;

// ─── component ───────────────────────────────────────────────────────────────

type ImageCropModalProps = {
    /** Data-URL of the original image */
    imageSrc: string;
    /** Original file (used to preserve MIME type and file name) */
    originalFile: File;
    onConfirm: (croppedFile: File) => void;
    onCancel: () => void;
};

export function ImageCropModal({
    imageSrc,
    originalFile,
    onConfirm,
    onCancel,
}: ImageCropModalProps) {
    const [crop, setCrop] =
        useState({ x: 0, y: 0 });

    const [zoom, setZoom] =
        useState(1);

    const [aspectPreset, setAspectPreset] =
        useState<number | null>(null);

    const [croppedAreaPixels, setCroppedAreaPixels] =
        useState<Area | null>(null);

    const [processing, setProcessing] =
        useState(false);

    const onCropComplete = useCallback(
        (_: Area, pixelArea: Area) => {
            setCroppedAreaPixels(pixelArea);
        },
        [],
    );

    async function handleConfirm() {
        if (!croppedAreaPixels) return;

        setProcessing(true);
        try {
            const blob = await getCroppedBlob(
                imageSrc,
                croppedAreaPixels,
                originalFile.type,
            );

            const croppedFile = new File(
                [blob],
                originalFile.name,
                { type: originalFile.type },
            );

            onConfirm(croppedFile);
        } catch (err) {
            console.error("Crop error:", err);
        } finally {
            setProcessing(false);
        }
    }

    return (
        /* Backdrop */
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) onCancel();
            }}
        >
            {/* Modal card */}
            <div className="flex w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                    <div>
                        <h3 className="font-bold text-slate-900">
                            Crop &amp; Atur Gambar
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                            Seret untuk menggeser · Scroll/pinch untuk zoom
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onCancel}
                        aria-label="Tutup"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Cropper area */}
                <div className="relative h-80 bg-slate-900">
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={aspectPreset ?? undefined}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropComplete}
                        style={{
                            containerStyle: { borderRadius: 0 },
                        }}
                    />
                </div>

                {/* Controls */}
                <div className="space-y-4 border-t border-slate-200 bg-slate-50 px-5 py-4">

                    {/* Zoom slider */}
                    <div className="flex items-center gap-3">
                        <span className="w-10 text-xs font-semibold text-slate-600 shrink-0">
                            Zoom
                        </span>
                        <input
                            type="range"
                            min={1}
                            max={3}
                            step={0.05}
                            value={zoom}
                            onChange={(e) =>
                                setZoom(Number(e.target.value))
                            }
                            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-slate-900"
                            aria-label="Zoom gambar"
                        />
                        <span className="w-10 text-right text-xs text-slate-500 shrink-0">
                            {zoom.toFixed(1)}×
                        </span>
                    </div>

                    {/* Aspect ratio presets */}
                    <div className="flex items-center gap-3">
                        <span className="w-10 text-xs font-semibold text-slate-600 shrink-0">
                            Rasio
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                            {ASPECT_PRESETS.map((preset) => (
                                <button
                                    key={preset.label}
                                    type="button"
                                    onClick={() =>
                                        setAspectPreset(
                                            preset.value as number | null,
                                        )
                                    }
                                    className={`rounded-lg border px-3 py-1 text-xs font-medium transition-colors ${
                                        aspectPreset === preset.value
                                            ? "border-slate-900 bg-slate-900 text-white"
                                            : "border-slate-300 bg-white text-slate-700 hover:border-slate-900 hover:bg-slate-50"
                                    }`}
                                >
                                    {preset.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer actions */}
                <div className="flex items-center justify-end gap-3 border-t border-slate-200 px-5 py-4">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="rounded-xl border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                        Batal
                    </button>

                    <button
                        type="button"
                        onClick={() => void handleConfirm()}
                        disabled={processing}
                        className="rounded-xl bg-slate-950 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 transition-colors"
                    >
                        {processing ? "Memproses..." : "Gunakan Gambar Ini"}
                    </button>
                </div>
            </div>
        </div>
    );
}
