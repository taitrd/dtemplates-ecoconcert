"use client"

import Image from "next/image"
import Link from "next/link"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SocialShare } from "./social-share"

interface WishlistItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  inStock: boolean
  slug: string
}

const wishlistItems: WishlistItem[] = [
  {
    id: "1",
    name: "Green Capsicum",
    price: 14.99,
    originalPrice: 20.99,
    image: "https://images.pexels.com/photos/139751/pexels-photo-139751.jpeg",
    inStock: true,
    slug: "green-capsicum"
  },
  {
    id: "2",
    name: "Chinese Cabbage",
    price: 45.00,
    image: "https://images.pexels.com/photos/257259/pexels-photo-257259.jpeg",
    inStock: true,
    slug: "chinese-cabbage"
  },
  {
    id: "3",
    name: "Fresh Sujapuri Mango",
    price: 99.00,
    image: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg",
    inStock: false,
    slug: "fresh-sujapuri-mango"
  }
]

export function WishlistProducts() {
  const handleRemoveItem = (id: string) => {
    console.log('Remove item:', id)
  }

  const handleAddToCart = (id: string) => {
    console.log('Add to cart:', id)
  }

  return (
    <div className="space-y-8">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-4 font-medium">PRODUCT</th>
              <th className="pb-4 font-medium">PRICE</th>
              <th className="pb-4 font-medium">STOCK STATUS</th>
              <th className="pb-4 font-medium sr-only">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {wishlistItems.map((item) => (
              <tr key={item.id} className="group">
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <Link 
                      href={`/product/${item.slug}`}
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
                      href={`/product/${item.slug}`}
                      className="font-medium hover:text-[#00B207]"
                    >
                      {item.name}
                    </Link>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">${item.price.toFixed(2)}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                      item.inStock
                        ? "bg-[#00B207]/10 text-[#00B207]"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      onClick={() => handleAddToCart(item.id)}
                      className="bg-[#00B207] hover:bg-[#00B207]/90"
                      disabled={!item.inStock}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove {item.name}</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-2 pt-4">
        <span className="text-sm font-medium">Share:</span>
        <SocialShare />
      </div>
    </div>
  )
}

