"use client";

import { useState } from "react";

export function CopyMediaUrlButton({
    url,
}: {
    url: string;
}) {
    const [copied, setCopied] =
        useState(false);

    async function copyUrl() {
        try {
            await navigator.clipboard.writeText(
                url,
            );

            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 1800);
        } catch {
            setCopied(false);
        }
    }

    return (
        <button
            type="button"
            onClick={copyUrl}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400"
        >
            {copied
                ? "URL tersalin"
                : "Copy URL"}
        </button>
    );
}