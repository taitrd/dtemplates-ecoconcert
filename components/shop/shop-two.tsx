"use client"

import { useState } from "react"
import { ChevronDown, Grid, List } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ProductCardTwo } from "./product-card-two"
import { TopFilterBar } from "./top-filter-bar"
import { SaleBanner } from "./sale-banner"

const products = [
  {
    name: "Green Apple",
    price: 14.99,
    originalPrice: 20.99,
    image: "https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg",
    rating: 4,
    reviews: 23,
    category: "Fruits",
    inStock: true,
    onSale: true
  },
  {
    name: "Fresh Indian Malta",
    price: 20.00,
    image: "https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg",
    rating: 5,
    reviews: 12,
    category: "Fruits",
    inStock: true
  },
  {
    name: "Chinese Cabbage",
    price: 12.00,
    image: "https://images.pexels.com/photos/257259/pexels-photo-257259.jpeg",
    rating: 4,
    reviews: 8,
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Green Lettuce",
    price: 9.00,
    image: "https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg",
    rating: 3,
    reviews: 5,
    category: "Vegetables",
    inStock: false
  },
  {
    name: "Eggplant",
    price: 34.00,
    image: "https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg",
    rating: 5,
    reviews: 28,
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Big Potatoes",
    price: 20.00,
    image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg",
    rating: 4,
    reviews: 15,
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Fresh Cauliflower",
    price: 12.00,
    image: "https://images.pexels.com/photos/461245/pexels-photo-461245.jpeg",
    rating: 4,
    reviews: 9,
    category: "Vegetables",
    inStock: true
  },
  {
    name: "Green Capsicum",
    price: 9.00,
    originalPrice: 20.99,
    image: "https://images.pexels.com/photos/139751/pexels-photo-139751.jpeg",
    rating: 4,
    reviews: 6,
    category: "Vegetables",
    inStock: true,
    onSale: true
  }
]

type ViewMode = "grid" | "list"

export function ShopTwo() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")

  return (
    <div className="container py-16">
      <SaleBanner />
      <TopFilterBar />
      
      {/* Toolbar */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          Showing 1–{products.length} of 56 results
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-[#00B207] hover:bg-[#00B207]/90" : ""}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-[#00B207] hover:bg-[#00B207]/90" : ""}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          <Select defaultValue="default">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default sorting</SelectItem>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="popularity">Popularity</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      <div className={
        viewMode === "grid" 
          ? "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
          : "space-y-6"
      }>
        {products.map((product, index) => (
          <ProductCardTwo 
            key={index} 
            {...product} 
            viewMode={viewMode}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        <Button variant="outline" size="icon">
          1
        </Button>
        <Button 
          variant="default" 
          size="icon"
          className="bg-[#00B207] hover:bg-[#00B207]/90"
        >
          2
        </Button>
        <Button variant="outline" size="icon">
          3
        </Button>
        <Button variant="outline" size="icon">
          <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
        </Button>
      </div>
    </div>
  )
}

