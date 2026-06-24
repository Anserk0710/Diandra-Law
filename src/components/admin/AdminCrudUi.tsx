import type { ReactNode } from "react";
import { getFirstFieldError, type ActionState } from "@/lib/cms/action-state"

type AdminPageHeaderProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    action?: ReactNode;
};

export function AdminPageHeader({
    eyebrow,
    title,
    description,
    action,
}: AdminPageHeaderProps) {
    return (
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
                {eyebrow ? (
                <p className="text-sm font-semibold text-amber-700">
                    {eyebrow}
                </p>
                ) : null}

                <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
                {title}
                </h1>

                {description ? (
                <p className="mt-2 max-w-2xl text-slate-600">
                    {description}
                </p>
                ) : null}
            </div>

            {action ? (
                <div className="shrink-0">{action}</div>
            ) : null}
        </header>
    );
}

export function FormMessage({
  state,
}: {
  state: ActionState;
}) {
  if (!state.message) {
    return null;
  }

  const isSuccess =
    state.status === "success";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`rounded-xl border px-4 py-3 text-sm ${
        isSuccess
          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
          : "border-red-200 bg-red-50 text-red-700"
      }`}
    >
      {state.message}

      {state.fieldErrors?._form?.map(
        (message) => (
          <p key={message} className="mt-1">
            {message}
          </p>
        ),
      )}
    </div>
  );
}

export function FieldError({
    state,
    name,
}: {
    state: ActionState;
    name: string;
}) {
    const message = getFirstFieldError(
        state,
        name,
    );

    if (!message) {
        return null;
    }

    return (
        <p className="mt-1 text-sm text-red-600">{message}</p>
    );
}

export function StatusBadge({
    status,
}: {
    status: string;
}) {
    const className =
        status === "published"
            ? "bg-emerald-100 text-emerald-800"
            : status === "draft"
                ? "bg-amber-100 text-amber-800"
                : "bg-slate-200 text-slate-700";

    const label =
        status === "published"
            ? "Dipublikasikan"
            : status === "draft"
                ? "Draf"
                : status === "inactive"
                    ? "Tidak Aktif"
                    : status === "archived"
                        ? "Diarsipkan"
                        : status;

    return (
        <span
            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${className}`}
        >
            {label}
        </span>
    );
}