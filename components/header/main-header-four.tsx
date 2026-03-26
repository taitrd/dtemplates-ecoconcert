"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Phone, Search, ShoppingCart, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartPopup } from "@/components/cart/cart-popup"

export function MainHeaderFour() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="border-b py-6">
      <div className="container flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image 
              src="/placeholder.svg" 
              alt="Ecobazar" 
              fill 
              className="object-contain" 
            />
          </div>
          <span className="text-xl font-bold">Ecobazar</span>
        </Link>

        <div className="flex flex-1 max-w-xl">
          <Input
            type="search"
            placeholder="Search"
            className="rounded-r-none border-r-0"
          />
          <Button className="rounded-l-none bg-[#00B207] hover:bg-[#00B207]/90">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>(219) 555-0114</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#00B207] text-xs text-white">
                  2
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CartPopup 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={[]}
        onRemoveItem={() => {}}
      />
    </div>
  )
}

