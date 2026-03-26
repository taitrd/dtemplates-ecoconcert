"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartPopup } from "@/components/cart/cart-popup"
import { AccountDropdown } from "./account-dropdown"

// Example cart items - in a real app, this would come from your cart state management
const cartItems = [
  {
    id: "1",
    name: "Fresh Indian Orange",
    price: 12.00,
    quantity: 1,
    unit: "kg",
    image: "https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg"
  },
  {
    id: "2",
    name: "Green Apple",
    price: 14.00,
    quantity: 1,
    unit: "kg",
    image: "https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg"
  }
]

export function MainHeader() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleRemoveItem = (id: string) => {
    // Handle removing item from cart
    console.log('Remove item:', id)
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/placeholder.svg" alt="Ecobazar" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold">Ecobazar</span>
        </Link>
        
        <div className="flex flex-1 max-w-xl">
          <Input
            type="search"
            placeholder="Search"
            className="rounded-r-none border-r-0"
          />
          <Button className="rounded-l-none bg-[#00B207] hover:bg-[#00B207]/90">
            Search
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Heart className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#00B207] text-xs text-white">
                2
              </span>
            </Button>
            <div className="text-sm">
              <div className="text-muted-foreground">Shopping cart:</div>
              <div className="font-medium">$26.00</div>
            </div>
          </div>
          <AccountDropdown />
        </div>
      </div>

      <CartPopup 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  )
}

