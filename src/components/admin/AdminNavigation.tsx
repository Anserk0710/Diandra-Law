"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/admin",
    label: "Beranda",
    exact: true,
  },
  {
    href: "/admin/services",
    label: "Layanan",
  },
  {
    href: "/admin/lawyers",
    label: "Tim Lawyer",
  },
  {
    href: "/admin/articles",
    label: "Artikel",
  },
  {
    href: "/admin/clients",
    label: "Klien",
  },
  {
    href: "/admin/pages/home",
    label: "Halaman",
    activePrefix: "/admin/pages",
  },
  {
    href: "/admin/settings/general",
    label: "Pengaturan",
    activePrefix: "/admin/settings",
  },
  {
    href: "/admin/media",
    label: "Koleksi Media",
  },
];

export function AdminNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Menu navigasi admin"
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
