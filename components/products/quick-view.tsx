"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StarRating } from "@/components/ui/star-rating"
import { Eye, Minus, Plus, ShoppingCart } from 'lucide-react'

interface QuickViewProps {
  product: {
    name: string
    price: number
    image: string
    rating: number
    description: string
    sku: string
    category: string
    tags: string[]
    variants?: { name: string; options: string[] }[]
  }
}

export function QuickView({ product }: QuickViewProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({})

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const handleVariantChange = (variantName: string, option: string) => {
    setSelectedVariants(prev => ({ ...prev, [variantName]: option }))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="absolute right-2 top-2" >
          <Eye className="h-4 w-4" />
          <span className="sr-only">Quick view</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <div className="flex items-center gap-2">
              <StarRating rating={product.rating} />
              <span className="text-sm text-gray-500">(50 reviews)</span>
            </div>
            <p className="text-xl font-semibold text-[#00B207]">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
            {product.variants && (
              <div className="space-y-2">
                {product.variants.map((variant) => (
                  <div key={variant.name}>
                    <label className="text-sm font-medium">{variant.name}</label>
                    <div className="flex gap-2 mt-1">
                      {variant.options.map((option) => (
                        <Button
                          key={option}
                          variant={selectedVariants[variant.name] === option ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleVariantChange(variant.name, option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)}>
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 text-center border-0"
                />
                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="flex-1">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
            <div className="text-sm text-gray-500">
              <p>SKU: {product.sku}</p>
              <p>Category: {product.category}</p>
              <p>Tags: {product.tags.join(', ')}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

