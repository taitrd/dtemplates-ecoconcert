'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LoginDialog } from "@/components/login-dialog"
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'

interface CartItem {
  id: number
  title: string
  artist: string
  date: string
  time: string
  venue: string
  section: string
  row: string
  seat: number
  price: number
  image: string
  quantity: number
}

const cartItems: CartItem[] = [
  {
    id: 1,
    title: "The Eras Tour",
    artist: "Taylor Swift",
    date: "June 4, 2024",
    time: "8:00 PM",
    venue: "Royal Albert Hall",
    section: "Section 1",
    row: "A",
    seat: 12,
    price: 399,
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    quantity: 1
  },
  {
    id: 2,
    title: "Renaissance World Tour",
    artist: "Beyoncé",
    date: "July 22, 2024",
    time: "7:30 PM",
    venue: "Wembley Stadium",
    section: "Section 2",
    row: "C",
    seat: 5,
    price: 299,
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    quantity: 1
  }
]

export default function CartPage() {
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [items, setItems] = useState<CartItem[]>(cartItems)

  const subtotal = items.reduce((sum, item) => sum + item.price, 0)
  const serviceFee = items.length * 5 // $5 per ticket
  const total = subtotal + serviceFee

  const handleQuantityChange = (id: number, increment: boolean) => {
    setItems(currentItems => 
      currentItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: increment ? (item.quantity || 1) + 1 : Math.max(1, (item.quantity || 1) - 1)
          }
        }
        return item
      })
    )
  }

  const handleRemoveItem = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id))
  }

  const handleCheckout = () => {
    setShowLoginDialog(true)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any tickets yet.</p>
          <Link href="/concerts">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Browse Concerts
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Cart Items */}
          <div className="space-y-6">
            {items.map((item) => (
              <div 
                key={item.id}
                className="bg-card border border-border rounded-xl p-6 flex gap-6"
              >
                <div className="relative w-32 h-32">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.artist}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <p>{item.date} · {item.time}</p>
                    <p>{item.venue}</p>
                    <p>{item.section}, Row {item.row}, Seat {item.seat}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-muted border-border hover:bg-muted/80"
                        onClick={() => handleQuantityChange(item.id, false)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-muted border-border hover:bg-muted/80"
                        onClick={() => handleQuantityChange(item.id, true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-4 lg:h-fit">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-3 border-b border-border pb-4 mb-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({items.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Service Fees</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-semibold mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>

              <p className="mt-4 text-sm text-muted-foreground text-center">
                By proceeding, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>

      <LoginDialog 
        open={showLoginDialog}
        onOpenChange={setShowLoginDialog}
      />
    </div>
  )
}

