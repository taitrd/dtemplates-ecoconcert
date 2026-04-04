"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { Icons } from "@/components/ui/icons";
import { Sparkles } from "lucide-react";

export function HeroSunset() {
  return (
    <HeroSection
      badge={{
        text: "New Live Experiences",
        action: {
          text: "Explore Now",
          href: "/concerts",
        },
      }}
      title="Experience Music in a New Light"
      description="Join thousands of fans in the most immersive concert experiences. Secure your tickets today and witness history in the making."
      actions={[
        {
          text: "Get Started",
          href: "/concerts",
          variant: "default",
          icon: <Sparkles className="h-5 w-5" />,
        },
        {
          text: "GitHub",
          href: "#",
          variant: "outline",
          icon: <Icons.gitHub className="h-5 w-5" />,
        },
      ]}
      image={{
        light: "/concerts/austin-neill-hgO1wFPXl3I-unsplash.jpg",
        dark: "/concerts/photo-1501386761578-eac5c94b800a.jpeg",
        alt: "Concert Live Experience Preview",
      }}
    />
  );
}
