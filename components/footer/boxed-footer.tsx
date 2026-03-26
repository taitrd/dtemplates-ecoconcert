"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, PinIcon as Pinterest } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  "My Account": [
    { label: "My Account", href: "/account" },
    { label: "Order History", href: "/account/orders" },
    { label: "Shopping Cart", href: "/cart" },
    { label: "Wishlist", href: "/account/wishlist" },
  ],
  "Helps": [
    { label: "Contact", href: "/contact" },
    { label: "Faqs", href: "/faq" },
    { label: "Terms & Condition", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  "Proxy": [
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" },
    { label: "Product", href: "/products" },
    { label: "Track Order", href: "/track-order" },
  ],
}

export function BoxedFooter() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="text-[#00B207]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">Subscribe our Newsletter</h2>
                <p className="text-gray-400">Pellentesque eu nibh eget mauris congue mattis matti.</p>
              </div>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/10 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#00B207] hover:bg-[#00B207]/90 text-white">
                Subscribe
              </Button>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-[#00B207] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#00B207] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#00B207] transition-colors">
                <Pinterest className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#00B207] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link href="/" className="mb-6 flex items-center">
              <Image src="/placeholder.svg" alt="Ecobazar" width={32} height={32} />
              <span className="ml-2 text-xl font-bold">Ecobazar</span>
            </Link>
            <p className="mb-6 text-gray-400">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>(219) 555-0114</p>
              <p>or</p>
              <p>Proxy@gmail.com</p>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="mb-6 text-lg font-semibold">{title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Download App Section */}
          <div className="lg:col-span-3">
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

