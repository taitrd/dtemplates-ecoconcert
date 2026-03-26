import Image from "next/image"
import Link from "next/link"
import { Eye, Heart, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/star-rating"

interface ProductCardTwoProps {
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: string
  inStock: boolean
  onSale?: boolean
  viewMode: "grid" | "list"
}

export function ProductCardTwo({
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  category,
  inStock,
  onSale,
  viewMode
}: ProductCardTwoProps) {
  if (viewMode === "list") {
    return (
      <div className="group relative flex gap-6 rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-square w-48 flex-shrink-0 overflow-hidden rounded-lg">
          {onSale && (
            <span className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs text-white">
              Sale
            </span>
          )}
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-sm text-gray-500">{category}</p>
            <h3 className="font-medium">{name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <StarRating rating={rating} />
            <span className="text-sm text-gray-500">({reviews} Reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-2">
            <Button 
              className="bg-[#00B207] hover:bg-[#00B207]/90"
              disabled={!inStock}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              {inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
        {onSale && (
          <span className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs text-white">
            Sale
          </span>
        )}
        <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center gap-2">
          <StarRating rating={rating} />
          <span className="text-sm text-gray-500">({reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-[#00B207] text-white hover:bg-[#00B207]/90"
            disabled={!inStock}
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

