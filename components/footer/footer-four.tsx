"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  "My Account": [
    { label: "My Account", href: "/account" },
    { label: "Order History", href: "/account/orders" },
    { label: "Shopping Cart", href: "/cart" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Settings", href: "/account/settings" }
  ],
  "Helps": [
    { label: "Contact", href: "/contact" },
    { label: "Faqs", href: "/faq" },
    { label: "Terms & Condition", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" }
  ],
  "Proxy": [
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" },
    { label: "Product", href: "/products" },
    { label: "Track Order", href: "/track-order" }
  ]
}

export function FooterFour() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Info Cards */}
      <div className="container py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white/5 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00B207]/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#00B207]">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold">OUR LOCATION</h3>
            <p className="text-gray-400">1901 Thornridge Cir. Shiloh, Washington DC 20020, United States</p>
          </div>

          <div className="rounded-lg bg-white/5 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00B207]/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#00B207]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold">CALL US 24/7</h3>
            <p className="text-[#00B207] text-xl">(303) 555-0105</p>
          </div>

          <div className="rounded-lg bg-white/5 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00B207]/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#00B207]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold">SUBSCRIBE NEWSLETTER</h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/10"
              />
              <Button className="bg-[#00B207] hover:bg-[#00B207]/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-12">
            {/* About Section */}
            <div className="md:col-span-3">
              <Link href="/" className="mb-6 flex items-center gap-2">
                <Image src="/placeholder.svg" alt="Ecobazar" width={32} height={32} />
                <span className="text-2xl font-bold text-[#00B207]">Ecobazar</span>
              </Link>
              <p className="mb-6 text-gray-400">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magn.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-[#00B207]">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#00B207]">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#00B207]">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="md:col-span-2">
                <h3 className="mb-6 text-lg font-semibold">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-400 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Download App Section */}
            <div className="md:col-span-3">
              <h3 className="mb-6 text-lg font-semibold">Download Mobile App</h3>
              <div className="flex flex-col gap-4">
                <Link href="#" className="transition-opacity hover:opacity-80">
                  <Image
                    src="/placeholder.svg"
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                    className="h-[42px] w-auto"
                  />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-80">
                  <Image
                    src="/placeholder.svg"
                    alt="Get it on Google Play"
                    width={140}
                    height={42}
                    className="h-[42px] w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Payment Methods */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-gray-400">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg" alt="Apple Pay" width={32} height={20} className="h-5 w-auto" />
            <Image src="/placeholder.svg" alt="Visa" width={32} height={20} className="h-5 w-auto" />
            <Image src="/placeholder.svg" alt="Discover" width={32} height={20} className="h-5 w-auto" />
            <Image src="/placeholder.svg" alt="Mastercard" width={32} height={20} className="h-5 w-auto" />
            <Image src="/placeholder.svg" alt="Secure Payment" width={32} height={20} className="h-5 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  )
}

