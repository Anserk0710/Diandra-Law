export function buildWhatsAppUrl(
  number?: string | null,
  message?: string | null,
): string {
  const normalizedNumber = (
    number ?? ""
  ).replace(/\D/g, "");

  if (!normalizedNumber) {
    return "/kontak";
  }

  const query = message?.trim()
    ? `?text=${encodeURIComponent(
        message.trim(),
      )}`
    : "";

  return `https://wa.me/${normalizedNumber}${query}`;
}

export function resolveCmsLink(
  value: string,
  whatsappHref: string,
  fallback = "/kontak",
) {
  const normalizedValue = value.trim();

  if (normalizedValue === "whatsapp") {
    return whatsappHref;
  }

  return normalizedValue || fallback;
}

export function formatIndonesianDate(
    date?: Date | null,
): string {
    if (!date) {
        return "Tanggal belum tersedia";
    }

    return new Intl.DateTimeFormat("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
}

export function getInitials(value: string): string {
    return value
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("");
}

export function isExternalUrl(value: string): boolean {
    return (
        value.startsWith("http://") ||
        value.startsWith("https://")
    );
}