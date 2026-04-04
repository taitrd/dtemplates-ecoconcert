"use client";

import { Home3Feature } from "@/components/features/home-3";
import { isStaticExport } from "@/lib/constants/app";
import { notFound } from "next/navigation";

export default function Home3Page() {
  if (isStaticExport) {
    notFound();
  }
  return <Home3Feature />;
}
