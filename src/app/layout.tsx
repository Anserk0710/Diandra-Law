import type { Metadata } from "next";

import { buildGlobalMetadata } from "@/lib/seo/global-metadata";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return buildGlobalMetadata();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}