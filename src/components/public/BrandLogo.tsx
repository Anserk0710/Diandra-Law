/* eslint-disable @next/next/no-img-element */
import { Scale } from "lucide-react";

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
        className="h-[3.75rem] max-w-48 object-contain"
      />
    );
  }

  return (
    <span
      className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-2xl border shadow-sm"
      style={{
        backgroundColor:
          variant === "dark"
            ? "#ffffff"
            : "rgba(255, 255, 255, 0.08)",
        color:
          variant === "dark"
            ? "var(--brand)"
            : "#f3d7a6",
        borderColor:
          variant === "dark"
            ? "rgba(23, 32, 46, 0.14)"
            : "rgba(255, 255, 255, 0.16)",
      }}
    >
      <Scale
        aria-hidden="true"
        className="h-8 w-8"
        strokeWidth={2.2}
      />
    </span>
  );
}
