"use client"

import { useState } from 'react'
import { StarRating } from "@/components/ui/star-rating"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImageGallery } from "@/components/products/image-gallery"
import { Heart, Minus, Plus, ShoppingBag, Share2 } from 'lucide-react'

interface ProductDetailsProps {
  product: {
    name: string
    price: number
    originalPrice?: number
    discount?: number
    rating: number
    reviewCount: number
    description: string
    features: string[]
    images: string[]
    category: string
    sku: string
    stock: number
    variants?: { name: string; options: string[] }[]
  }
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({})

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const handleVariantChange = (variantName: string, option: string) => {
    setSelectedVariants(prev => ({ ...prev, [variantName]: option }))
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <ImageGallery images={product.images} />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-4">
          <StarRating rating={product.rating} />
          <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#00B207]">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
          {product.discount && (
            <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
              {product.discount}% OFF
            </span>
          )}
        </div>
        <p className="text-gray-600">{product.description}</p>
        <ul className="list-inside list-disc space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="text-gray-600">{feature}</li>
          ))}
        </ul>
        {product.variants && (
          <div className="space-y-4">
            {product.variants.map((variant) => (
              <div key={variant.name}>
                <h3 className="mb-2 font-semibold">{variant.name}</h3>
                <div className="flex flex-wrap gap-2">
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
            <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between border-t border-b py-4">
          <span className="text-sm text-gray-500">Category: {product.category}</span>
          <span className="text-sm text-gray-500">SKU: {product.sku}</span>
          <Button variant="ghost" size="sm">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
        <div className="text-sm text-gray-500">
          {product.stock > 0 ? (
            <span className="text-[#00B207]">{product.stock} in stock</span>
          ) : (
            <span className="text-red-500">Out of stock</span>
          )}
        </div>
      </div>
    </div>
  )
}

