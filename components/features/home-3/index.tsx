"use client";

import React, { useEffect } from "react";
import { HeroSunset } from "../home/hero-sunset";
import dynamic from "next/dynamic";
import { useLayout } from "@/components/providers/layout-provider";
import { BackgroundSnippet } from "@/components/ui/background-snippet";

const ThisWeekConcerts = dynamic(() =>
  import("@/components/this-week-concerts").then((m) => m.ThisWeekConcerts),
);
const BenefitsSection = dynamic(() =>
  import("@/components/benefits-section").then((m) => m.BenefitsSection),
);
const NewsletterSection = dynamic(() =>
  import("@/components/newsletter-section").then((m) => m.NewsletterSection),
);
const FaqSection = dynamic(() =>
  import("@/components/faq-section").then((m) => m.FaqSection),
);
const PartnersSection = dynamic(() =>
  import("@/components/partners-section").then((m) => m.PartnersSection),
);
const Logos3 = dynamic(
  () => import("@/components/ui/logos3").then((m) => m.Logos3),
  { ssr: false },
);

export function Home3Feature() {
  const { showBackground, setFloatOnHero, setNavTransparent } = useLayout();

  useEffect(() => {
    setFloatOnHero(true);
    setNavTransparent(false);
    return () => {
      setFloatOnHero(false);
      setNavTransparent(true);
    };
  }, [setFloatOnHero]);

  return (
    <div className="flex flex-col min-h-screen space-y-4">
      <HeroSunset />

      {showBackground && <BackgroundSnippet className="py-24" />}

      <main className="space-y-40 pb-40 overflow-hidden">
        <section className="container mx-auto px-4">
          <ThisWeekConcerts />
        </section>

        <Logos3 />

        <BenefitsSection />

        <section className="container mx-auto px-4">
          <FaqSection />
        </section>

        <PartnersSection />

        <NewsletterSection />
      </main>
    </div>
  );
}
