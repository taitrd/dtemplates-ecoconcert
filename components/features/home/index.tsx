'use client';

import * as React from 'react';
import { Hero } from './hero';
import { Toolbar } from './toolbar';
import { ConcertCarousel } from '@/components/concert-carousel';
import { BenefitsSection } from '@/components/benefits-section';
import { TimeRunningOut } from '@/components/time-running-out';
import { StepsSection } from '@/components/steps-section';
import { UpcomingConcerts } from '@/components/upcoming-concerts';
import { NewsletterSection } from '@/components/newsletter-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FaqSection } from '@/components/faq-section';
import { PartnersSection } from '@/components/partners-section';

export function HomeFeature() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Hero />
      <div className="container mx-auto px-4 -mt-16 mb-16 relative z-10">
        <Toolbar />
      </div>
      
      <div className="space-y-24 pb-20">
        <section className="container mx-auto px-4">
          <ConcertCarousel />
        </section>

        <BenefitsSection />
        
        <section className="container mx-auto px-4">
          <TimeRunningOut />
        </section>

        <StepsSection />

        <section className="container mx-auto px-4">
          <UpcomingConcerts />
        </section>

        <NewsletterSection />
        <TestimonialsSection />
        <FaqSection />
        <PartnersSection />
      </div>
    </div>
  );
}
