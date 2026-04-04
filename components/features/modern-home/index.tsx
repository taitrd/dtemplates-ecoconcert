"use client";

import { ConcertHero } from "@/components/ui/concert-hero";
import { Toolbar } from "../home/toolbar";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { BackgroundSnippet } from "@/components/ui/background-snippet";

const ConcertCarousel = dynamic(
  () =>
    import("@/components/concert-carousel").then((mod) => mod.ConcertCarousel),
  { ssr: false },
);
const BenefitsSection = dynamic(
  () =>
    import("@/components/benefits-section").then((mod) => mod.BenefitsSection),
  { ssr: true },
);
const UpcomingConcerts = dynamic(
  () =>
    import("@/components/upcoming-concerts").then(
      (mod) => mod.UpcomingConcerts,
    ),
  { ssr: true },
);
const NewsletterSection = dynamic(
  () =>
    import("@/components/newsletter-section").then(
      (mod) => mod.NewsletterSection,
    ),
  { ssr: true },
);
const TestimonialsSection = dynamic(
  () =>
    import("@/components/testimonials-2-section").then(
      (mod) => mod.TestimonialsSection,
    ),
  { ssr: true },
);
const FaqSection = dynamic(
  () => import("@/components/faq-section").then((mod) => mod.FaqSection),
  { ssr: true },
);
const Logos3 = dynamic(
  () => import("@/components/ui/logos3").then((mod) => mod.Logos3),
  { ssr: false },
);
import Slideshow from "@/components/ui/slideshow";
import { useLayout } from "@/components/providers/layout-provider";
import { useEffect } from "react";

export function ModernHomeFeature() {
  const { showBackground, setFloatOnHero, setNavTransparent } = useLayout();
  useEffect(() => {
    setFloatOnHero(true);
    setNavTransparent(true);
    return () => {
      setFloatOnHero(false);
      setNavTransparent(false);
    };
  }, [setFloatOnHero]);
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <ConcertHero />

      <div className="relative z-30 -mt-24 mb-24 max-w-7xl mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Toolbar />
        </motion.div>
      </div>

      <main className="space-y-40 pb-32">
        <section className="container mx-auto px-4 overflow-hidden">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
              Featured <span className="text-primary italic">Sessions</span>
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>
          <ConcertCarousel />
        </section>

        <section className="container mx-auto px-4">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
              Live <span className="text-primary italic">Moments</span>
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>
          <Slideshow />
        </section>

        <BenefitsSection />

        {showBackground && <BackgroundSnippet className="py-40" />}
        <section className="container mx-auto px-4">
          <div className="flex flex-col gap-4 mb-12 items-center text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
              Live <span className="text-primary italic">Lineup</span>
            </h2>
            <p className="text-muted-foreground/80 max-w-xl">
              Dont miss out on the most anticipated performances of the season.
              Secure your spot now.
            </p>
          </div>
          <UpcomingConcerts />
        </section>
        <Logos3 />

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className=" py-32"
        >
          <NewsletterSection />
        </motion.section>

        <TestimonialsSection />
        <FaqSection />
      </main>
    </div>
  );
}
