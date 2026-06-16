import type { ZodError } from "zod";

import type { ActionState, FieldErrors, } from "@/lib/cms/action-state";

export function getFormString(
    formData: FormData,
    key: string,
) {
    const value = formData.get(key);

    return typeof value === "string"
        ? value.trim()
        : "";
}

export function getOptionalFormString(
    formData: FormData,
    key: string,
) {
    const value = getFormString(formData, key);

    return value.length > 0 ? value : undefined;
}

export function slugify(value: string) {
    return value
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/-{2,}/g, "-");
}

export function parseEntityId(
    value: string,
): bigint | null {
    if (!/^[1-9]\d*$/.test(value)) {
        return null;
    }

    try {
        return BigInt(value);
    } catch {
        return null;
    }
}

export function isPrismaErrorCode(
    error: unknown,
    code: string,
) {
    return (
        typeof error === "object" && error !== null && "code" in error && error.code === code
    );
}

export function actionStateFromZod(
  error: ZodError,
  message = "Periksa kembali data yang Anda masukkan.",
): ActionState {
  const fieldErrors: FieldErrors = {};

  for (const issue of error.issues) {
    const fieldName =
      issue.path.length > 0
        ? issue.path.join(".")
        : "_form";

    const existing =
      fieldErrors[fieldName] ?? [];

    fieldErrors[fieldName] = [
      ...existing,
      issue.message,
    ];
  }

  return {
    status: "error",
    message,
    fieldErrors,
  };
}

export function fieldErrorState(
    field: string,
    message: string,
): ActionState {
    return {
        status: "error",
        message: "Periksa kembali data yang Anda masukkan.",
        fieldErrors: {
            [field]: [message],
        },
    };
}

export type IndexedFormRow = {
    index: number;
    values: Record<string, string>;
};

function escapeRegExp(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function readIndexedFormRows(
    formData: FormData,
    prefix: string,
    fields: string[],
): IndexedFormRow[] {
    const rows = new Map<
        number,
        Record<string, string>
    >();

    const fieldPattern = fields
        .map(escapeRegExp)
        .join("|");

    const pattern = new RegExp(
        `^${escapeRegExp(prefix)}\\.(\\d+)\\.(${fieldPattern})$`,
    );

    for (const [key, rawValue] of formData.entries()) {
        if (typeof rawValue !== "string") {
            continue;
        }

        const match = key.match(pattern);

        if (!match) {
            continue;
        }

        const index = Number(match[1]);
        const field = match[2];

        const currentRow = rows.get(index) ?? {};

        currentRow[field] = rawValue.trim();
        rows.set(index, currentRow);
    }

    return Array.from(rows.entries())
        .sort(([first], [second]) => first - second)
        .map(([index, values]) => ({
            index,
            values,
        }));
}

export function isAssetReference(value: string) {
    return (
        value.startsWith("/") ||
        value.startsWith("http://") ||
        value.startsWith("https://")
    );
}

export function isLinkReference(value: string) {
    return (
        value.startsWith("/") ||
        value.startsWith("#") ||
        value.startsWith("mailto:") ||
        value.startsWith("tel:") ||
        value.startsWith("http://") ||
        value.startsWith("https://")
    );
}

export function formatDateInput(
    date: Date | null | undefined,
) {
    if (!date) {
        return "";
    }

    return date.toISOString().slice(0, 10);
}

export function isCmsLinkReference(
  value: string,
) {
  return (
    value === "whatsapp" ||
    isLinkReference(value)
  );
}

export function isAbsoluteHttpUrl(
  value: string,
) {
  try {
    const url = new URL(value);

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    );
  } catch {
    return false;
  }
}

export function isAllowedMapEmbedUrl(
  value: string,
) {
  try {
    const url = new URL(value);

    if (url.protocol !== "https:") {
      return false;
    }

    const hostname =
      url.hostname.toLowerCase();

    const isGoogleDomain =
      hostname === "google.com" ||
      hostname === "www.google.com" ||
      hostname === "maps.google.com" ||
      hostname === "google.co.id" ||
      hostname === "www.google.co.id";

    if (!isGoogleDomain) {
      return false;
    }

    return (
      url.pathname.includes("/maps") ||
      url.searchParams.get("output") ===
        "embed"
    );
  } catch {
    return false;
  }
}