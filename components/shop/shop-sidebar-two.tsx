"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { StarRating } from "@/components/ui/star-rating"

const categories = [
  { name: "Fresh Fruit", count: 134 },
  { name: "Vegetables", count: 150 },
  { name: "Cooking", count: 54 },
  { name: "Snacks", count: 47 },
  { name: "Beverages", count: 43 },
  { name: "Beauty & Health", count: 38 },
  { name: "Bread & Bakery", count: 15 }
]

const ratings = [
  { stars: 5, count: 135 },
  { stars: 4, count: 74 },
  { stars: 3, count: 32 },
  { stars: 2, count: 10 },
  { stars: 1, count: 5 }
]

export function ShopSidebarTwo() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      {/* Search */}
      <div>
        <h3 className="mb-4 font-semibold">Search</h3>
        <div className="relative">
          <Input 
            type="search" 
            placeholder="Search products..." 
            className="pr-10"
          />
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="mb-4 font-semibold">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <button
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-gray-100 ${
                  selectedCategory === category.name ? "bg-gray-100" : ""
                }`}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )}
              >
                <span>{category.name}</span>
                <span className="text-sm text-gray-500">({category.count})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-4 font-semibold">Price Range</h3>
        <Slider
          defaultValue={priceRange}
          max={1000}
          step={1}
          onValueChange={setPriceRange}
        />
        <div className="mt-2 flex items-center justify-between text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Ratings */}
      <div>
        <h3 className="mb-4 font-semibold">Rating</h3>
        <ul className="space-y-2">
          {ratings.map(({ stars, count }) => (
            <li key={stars}>
              <button
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-gray-100 ${
                  selectedRating === stars ? "bg-gray-100" : ""
                }`}
                onClick={() => setSelectedRating(
                  selectedRating === stars ? null : stars
                )}
              >
                <div className="flex items-center gap-2">
                  <StarRating rating={stars} />
                  <span className="text-sm">& Up</span>
                </div>
                <span className="text-sm text-gray-500">({count})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Filters Button */}
      <Button className="w-full bg-[#00B207] hover:bg-[#00B207]/90">
        Apply Filters
      </Button>
    </div>
  )
}

