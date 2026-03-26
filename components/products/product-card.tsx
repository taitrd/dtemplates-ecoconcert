import Image from "next/image"
import { Heart, ShoppingBag } from 'lucide-react'
import { StarRating } from "@/components/ui/star-rating"
import { Button } from "@/components/ui/button"
import { QuickView } from "./quick-view"

interface ProductCardProps {
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  onSale?: boolean
  active?: boolean
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  rating,
  onSale,
  active
}: ProductCardProps) {
  const product = {
    name,
    price,
    image,
    rating,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sku: "PRD-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    category: "Fruits & Vegetables",
    tags: ["Organic", "Fresh", "Healthy"],
    variants: [
      { name: "Size", options: ["Small", "Medium", "Large"] },
      { name: "Package", options: ["Single", "Pack of 3", "Pack of 5"] }
    ]
  }

  return (
    <div className={`group relative rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md ${
      active ? 'ring-2 ring-[#00b207]' : ''
    }`}>
      <div className="relative aspect-square mb-4">
        {onSale && (
          <span className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs text-white">
            Sale 50%
          </span>
        )}
        <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Button size="icon" variant="secondary" className="h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
          <QuickView product={product} />
        </div>
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <StarRating rating={rating} />
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <ShoppingBag className="h-4 w-4" />
          </Button>
          <QuickView product={product} />
        </div>
      </div>
    </div>
  )
}

