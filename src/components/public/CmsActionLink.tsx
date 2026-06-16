import Link from "next/link";
import type { ReactNode } from "react";

type CmsActionLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function CmsActionLink({
  href,
  className,
  children,
}: CmsActionLinkProps) {
  const isHttp =
    href.startsWith("http://") ||
    href.startsWith("https://");

  const isSpecialProtocol =
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isHttp || isSpecialProtocol) {
    return (
      <a
        href={href}
        target={
          isHttp ? "_blank" : undefined
        }
        rel={
          isHttp
            ? "noreferrer"
            : undefined
        }
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}