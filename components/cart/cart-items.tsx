import Image from "next/image"
import Link from "next/link"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  subtotal: number
}

interface CartItemsProps {
  items: CartItem[]
  onQuantityChange: (id: string, quantity: number) => void
  onRemoveItem: (id: string) => void
  onUpdateCart: () => void
}

export function CartItems({ items, onQuantityChange, onRemoveItem, onUpdateCart }: CartItemsProps) {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-4 font-medium">PRODUCT</th>
              <th className="pb-4 font-medium">PRICE</th>
              <th className="pb-4 font-medium">QUANTITY</th>
              <th className="pb-4 font-medium">SUBTOTAL</th>
              <th className="pb-4 font-medium sr-only">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <Link 
                      href={`/product/${item.id}`}
                      className="relative h-20 w-20 overflow-hidden rounded-lg"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </Link>
                    <Link 
                      href={`/product/${item.id}`}
                      className="font-medium hover:text-[#00B207]"
                    >
                      {item.name}
                    </Link>
                  </div>
                </td>
                <td className="py-4">
                  <span className="font-medium">${item.price.toFixed(2)}</span>
                </td>
                <td className="py-4">
                  <div className="flex w-32 items-center rounded-lg border">
                    <button
                      className="flex h-8 w-8 items-center justify-center border-r hover:bg-gray-50"
                      onClick={() => onQuantityChange(item.id, Math.max(0, item.quantity - 1))}
                    >
                      −
                    </button>
                    <Input
                      type="number"
                      min="0"
                      value={item.quantity}
                      onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value) || 0)}
                      className="h-8 w-14 border-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                    <button
                      className="flex h-8 w-8 items-center justify-center border-l hover:bg-gray-50"
                      onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4">
                  <span className="font-medium">${item.subtotal.toFixed(2)}</span>
                </td>
                <td className="py-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove {item.name}</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/shop">Return to shop</Link>
        </Button>
        <Button variant="outline" onClick={onUpdateCart}>
          Update Cart
        </Button>
      </div>
    </div>
  )
}

