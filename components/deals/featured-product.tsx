'use client'

import Image from "next/image"
import { useState } from "react"
import { Heart, Eye, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/star-rating"

interface FeaturedProductProps {
  name: string
  price: number
  originalPrice: number
  image: string
  rating: number
  feedback: number
  onSale?: boolean
  bestSale?: boolean
}

export function FeaturedProduct({
  name,
  price,
  originalPrice,
  image,
  rating,
  feedback,
  onSale,
  bestSale
}: FeaturedProductProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: '01',
    hours: '23',
    minutes: '34',
    seconds: '57'
  })

  return (
    <div className="relative rounded-lg bg-white p-4 shadow-sm">
      <div className="absolute left-4 top-4 flex flex-col gap-2">
        {onSale && (
          <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
            Sale 50%
          </span>
        )}
        {bestSale && (
          <span className="rounded bg-blue-500 px-2 py-1 text-xs text-white">
            Best Sale
          </span>
        )}
      </div>
      <div className="relative aspect-square mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-center font-medium text-gray-900">{name}</h3>
        <div className="flex items-center justify-center gap-2">
          <span className="font-semibold">${price.toFixed(2)}</span>
          <span className="text-sm text-gray-500 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <StarRating rating={rating} />
          <span className="text-sm text-gray-500">
            ({feedback} Feedback)
          </span>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Hurry up! Offer ends in:</p>
          <div className="mt-2 flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-lg font-semibold">{timeLeft.days}</div>
              <div className="text-xs text-gray-500">DAYS</div>
            </div>
            <div className="text-lg">:</div>
            <div className="text-center">
              <div className="text-lg font-semibold">{timeLeft.hours}</div>
              <div className="text-xs text-gray-500">HOURS</div>
            </div>
            <div className="text-lg">:</div>
            <div className="text-center">
              <div className="text-lg font-semibold">{timeLeft.minutes}</div>
              <div className="text-xs text-gray-500">MINS</div>
            </div>
            <div className="text-lg">:</div>
            <div className="text-center">
              <div className="text-lg font-semibold">{timeLeft.seconds}</div>
              <div className="text-xs text-gray-500">SECS</div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-[#00b207] hover:bg-[#00b207]/90"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
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

