"use client";

import { useFormStatus } from "react-dom";

type ConfirmSubmitButtonProps = {
    label?: string;
    pendingLabel?: string;
    confirmationMessage: string;
    className?: string;
};

export function ConfirmSubmitButton({
    label = "Hapus",
    pendingLabel = "Menghapus...",
    confirmationMessage,
    className = "rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red 50 disabled:opacity-50",
}: ConfirmSubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className={className}
            disabled={pending}
            onClick={(event) => {
                if (!window.confirm(confirmationMessage)) {
                    event.preventDefault();
                }
            }}
        >{pending ? pendingLabel : label}</button>
    );
}