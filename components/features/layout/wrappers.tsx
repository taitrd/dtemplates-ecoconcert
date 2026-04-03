"use client";
// Client-side wrappers to respect Layout Context toggles
import { BottomNavigation } from "@/components/bottom-navigation";
import { useLayout } from "@/components/providers/layout-provider";
import { SiteFooter } from "@/components/site-footer";

export function FooterWrapper() {
  const { showFooter } = useLayout();
  if (!showFooter) return null;
  return <SiteFooter />;
}

export function BottomNavWrapper() {
  const { showBottomNav } = useLayout();
  if (!showBottomNav) return null;
  return <BottomNavigation />;
}
