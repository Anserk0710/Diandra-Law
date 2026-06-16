"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/admin",
    label: "Dashboard",
    exact: true,
  },
  {
    href: "/admin/services",
    label: "Services",
  },
  {
    href: "/admin/lawyers",
    label: "Lawyers",
  },
  {
    href: "/admin/articles",
    label: "Articles",
  },
  {
    href: "/admin/clients",
    label: "Clients",
  },
  {
    href: "/admin/pages/home",
    label: "Pages",
    activePrefix: "/admin/pages",
  },
  {
    href: "/admin/settings/general",
    label: "Settings",
    activePrefix: "/admin/settings",
  },
  {
    href: "/admin/media",
    label: "Media",
  },
];

export function AdminNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigasi CMS"
      className="space-y-1"
    >
      {navItems.map((item) => {
        const isActive = item.exact
          ? pathname === item.href
          : pathname === item.href ||
            pathname.startsWith(
              `${item.activePrefix ?? item.href}/`,
            );

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={
              isActive ? "page" : undefined
            }
            className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
              isActive
                ? "bg-slate-950 !text-white shadow-sm hover:bg-slate-900 hover:!text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
