"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const categories = [
  { name: "Fresh Fruit", href: "/categories/fresh-fruit" },
  { name: "Vegetables", href: "/categories/vegetables" },
  { name: "Cooking", href: "/categories/cooking" },
  { name: "Snacks", href: "/categories/snacks" },
  { name: "Beverages", href: "/categories/beverages" },
  { name: "Beauty & Health", href: "/categories/beauty-health" },
  { name: "Bread & Bakery", href: "/categories/bread-bakery" },
]

export function NavigationThree() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b bg-white">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button 
                className="bg-[#00B207] hover:bg-[#00B207]/90 text-white"
              >
                <Menu className="mr-2 h-4 w-4" />
                All Categories
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {categories.map((category) => (
                <DropdownMenuItem key={category.name} asChild>
                  <Link href={category.href}>{category.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="flex items-center gap-1 text-[#00B207] font-medium"
            >
              Home
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link 
              href="/shop" 
              className="flex items-center gap-1 hover:text-[#00B207]"
            >
              Shop
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link 
              href="/pages" 
              className="flex items-center gap-1 hover:text-[#00B207]"
            >
              Pages
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link 
              href="/blog" 
              className="flex items-center gap-1 hover:text-[#00B207]"
            >
              Blog
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="/about" className="hover:text-[#00B207]">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-[#00B207]">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5 text-[#00B207]" />
          <span>(219) 555-0114</span>
        </div>
      </div>
    </nav>
  )
}

