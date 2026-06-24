import type { Metadata } from "next";

import { buildRootMetadata } from "@/lib/seo/metadata";

export async function buildGlobalMetadata(): Promise<Metadata> {
  return buildRootMetadata();
}