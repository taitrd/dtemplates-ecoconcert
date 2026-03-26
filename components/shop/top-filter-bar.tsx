"use client"

import { useState } from "react"
import { ChevronDown, Search, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StarRating } from "@/components/ui/star-rating"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Filter {
  id: string
  label: string
  value: string
}

const categories = [
  { value: "fruits", label: "Fresh Fruits" },
  { value: "vegetables", label: "Vegetables" },
  { value: "meat", label: "Meat & Fish" },
  { value: "snacks", label: "Snacks" },
  { value: "beverages", label: "Beverages" },
  { value: "beauty", label: "Beauty & Health" },
  { value: "bread", label: "Bread & Bakery" }
]

const priceRanges = [
  { value: "0-100", label: "Under $100" },
  { value: "100-300", label: "Min $100 - Max $300" },
  { value: "300-500", label: "Min $300 - Max $500" },
  { value: "500-1000", label: "Min $500 - Max $1000" },
  { value: "1000+", label: "Over $1000" }
]

const ratings = [
  { value: "5", label: "5 Stars" },
  { value: "4", label: "4 Stars & Up" },
  { value: "3", label: "3 Stars & Up" },
  { value: "2", label: "2 Stars & Up" },
  { value: "1", label: "1 Star & Up" }
]

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "popularity", label: "Popularity" },
  { value: "rating", label: "Rating" }
]

const itemsPerPage = [
  { value: "16", label: "Show: 16" },
  { value: "32", label: "Show: 32" },
  { value: "48", label: "Show: 48" },
  { value: "64", label: "Show: 64" }
]

export function TopFilterBar() {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([])
  const [totalResults, setTotalResults] = useState(2547)

  const addFilter = (id: string, label: string, value: string) => {
    setActiveFilters(prev => {
      const exists = prev.some(filter => filter.id === id)
      if (exists) {
        return prev.map(filter => 
          filter.id === id ? { id, label, value } : filter
        )
      }
      return [...prev, { id, label, value }]
    })
  }

  const removeFilter = (id: string) => {
    setActiveFilters(prev => prev.filter(filter => filter.id !== id))
  }

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <Select onValueChange={(value) => addFilter("category", "Category", value)}>
            <SelectTrigger className="w-[200px] border-gray-800 bg-black text-white">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => addFilter("price", "Price Range", value)}>
            <SelectTrigger className="w-[200px] border-gray-800 bg-black text-white">
              <SelectValue placeholder="Select Price" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => addFilter("rating", "Rating", value)}>
            <SelectTrigger className="w-[200px] border-gray-800 bg-black text-white">
              <SelectValue placeholder="Select Rating" />
            </SelectTrigger>
            <SelectContent>
              {ratings.map((rating) => (
                <SelectItem key={rating.value} value={rating.value}>
                  {rating.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <Select defaultValue="latest">
            <SelectTrigger className="w-[200px] border-gray-800 bg-black text-white">
              <SelectValue placeholder="Sort by: Latest" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select defaultValue="16">
            <SelectTrigger className="w-[150px] border-gray-800 bg-black text-white">
              <SelectValue placeholder="Show: 16" />
            </SelectTrigger>
            <SelectContent>
              {itemsPerPage.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {activeFilters.length > 0 && (
            <span className="text-sm text-gray-500">Active Filters:</span>
          )}
          {activeFilters.map((filter) => (
            <Button
              key={filter.id}
              variant="outline"
              size="sm"
              className="h-8 gap-2"
              onClick={() => removeFilter(filter.id)}
            >
              {filter.value}
              <X className="h-4 w-4" />
            </Button>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-medium text-black">{totalResults}</span> Results found
        </div>
      </div>
    </div>
  )
}

