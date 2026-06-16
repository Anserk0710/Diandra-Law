/* eslint-disable @next/next/no-img-element */

type BrandLogoProps = {
  src?: string | null;
  siteName: string;
  variant?: "light" | "dark";
};

export function BrandLogo({
  src,
  siteName,
  variant = "dark",
}: BrandLogoProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${siteName} logo`}
        className="h-10 max-w-40 object-contain"
      />
    );
  }

  const initials = siteName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) =>
      part.charAt(0).toUpperCase(),
    )
    .join("");

  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-xl font-bold"
      style={{
        backgroundColor:
          variant === "dark"
            ? "var(--brand)"
            : "white",
        color:
          "var(--brand-accent)",
      }}
    >
      {initials || "DL"}
    </span>
  );
}