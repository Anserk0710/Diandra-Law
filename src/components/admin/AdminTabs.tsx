"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminTabItem = {
  href: string;
  label: string;
};

type AdminTabsProps = {
  items: readonly AdminTabItem[];
};

export function AdminTabs({
  items,
}: AdminTabsProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Subnavigasi admin"
      className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2"
    >
      {items.map((item) => {
        const active =
          pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={
              active ? "page" : undefined
            }
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              active
                ? "bg-slate-950 text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}