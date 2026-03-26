"use client"

import Image from "next/image"
import { X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  unit: string
  image: string
}

interface CartPopupProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onRemoveItem: (id: string) => void
}

export function CartPopup({ isOpen, onClose, items, onRemoveItem }: CartPopupProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Shopping Cart ({items.length})</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[400px] pr-4">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.quantity} {item.unit} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => onRemoveItem(item.id)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove {item.name} from cart</span>
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Separator className="my-4" />
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-medium">
              {items.length} {items.length === 1 ? 'Product' : 'Products'}
            </span>
            <span className="text-lg font-semibold">${total.toFixed(2)}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Button className="w-full bg-[#00B207] hover:bg-[#00B207]/90">
              Checkout
            </Button>
            <Button
              variant="outline"
              className="w-full text-[#00B207] hover:bg-[#00B207]/10"
            >
              Go To Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

