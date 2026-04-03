"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Send, Ticket } from "lucide-react";
import ThemeSwitcher from "./theme-switcher";

const footerLinks = {
  ticketer: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Blogs", href: "/blogs" },
  ],
  help: [
    { label: "Concert Ticketing", href: "/concert-ticketing" },
    { label: "Account Support", href: "/support" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Reset Password", href: "/reset-password" },
    { label: "404 Test", href: "/404-test" },
  ],
  legal: [
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Acceptable Use Policy", href: "/acceptable-use" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookies Policy", href: "/cookies" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Ticket className="h-8 w-8" />
              <span className="text-2xl font-bold">TICKETER</span>
            </Link>
            <h2 className="text-xl font-semibold mb-4">Who we are?</h2>
            <p className="text-muted-foreground mb-6">
              Ticketer is a global ticketing platform for live experiences that
              allows anyone to create, share, find and attend events that fuel
              their passions and enrich their lives.
            </p>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <a
                href="mailto:Ticketercontacts@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Ticketercontacts@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">TICKETER</h3>
            <ul className="space-y-2">
              {footerLinks.ticketer.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold mb-4">
              Join our mailing list to stay in the loop with our...
            </h3>
            <div className="relative">
              <label htmlFor="newsletter-email" className="sr-only">
                Newsletter Email
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-muted border-border placeholder:text-muted-foreground"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 bg-primary hover:bg-primary/90"
                aria-label="Subscribe to newsletter"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <ThemeSwitcher inputOnly />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              @2024 Ticketer All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow Ticketer on Twitter"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow Ticketer on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Audio Wave Decoration */}
        <div className="h-16 mt-8">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1200,0 L1200,120 L0,120 Z"
              fill="url(#wave-gradient)"
              fillOpacity="0.1"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z;
                        M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z;
                        M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z"
              />
            </path>
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--primary) / 0.8)" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
  );
}
