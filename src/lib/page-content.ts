export type JsonObject = Record<string, unknown>;

export function asObject(value: unknown): JsonObject {
    if (value && typeof value === "object" && !Array.isArray(value)) {
        return value as JsonObject;
    }

    return {};
}

export function getSection(
    content: JsonObject,
    key: string,
): JsonObject {
    return asObject(content[key]);
}

export function getString(
    content: JsonObject,
    key: string,
    fallback = "",
): string {
    const value = content[key];

    if (typeof value === "string" && value.trim().length > 0) {
        return value;
    }

    return fallback;
}

export function getStringArray(
    content: JsonObject,
    key: string,
    fallback: string[] = [],
): string[] {
    const value = content[key];

    if (!Array.isArray(value)) {
        return fallback;
    }

    const items = value.filter(
        (item): item is string =>
            typeof item === "string" && item.trim().length > 0,
    );

    return items.length > 0 ? items : fallback;
}
