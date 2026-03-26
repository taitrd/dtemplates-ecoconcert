"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Eye, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/star-rating"

type Category = "all" | "vegetable" | "fruit" | "meat-fish"

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "vegetable", label: "Vegetable" },
  { value: "fruit", label: "Fruit" },
  { value: "meat-fish", label: "Meat & Fish" },
]

const products = [
  {
    name: "Green Apple",
    price: 14.99,
    originalPrice: 20.99,
    image: "https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg",
    rating: 4,
    category: "fruit",
    onSale: true
  },
  {
    name: "Surjapur Mango",
    price: 14.99,
    image: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg",
    rating: 4,
    category: "fruit"
  },
  {
    name: "Red Tomatos",
    price: 14.99,
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
    rating: 4,
    category: "vegetable"
  },
  {
    name: "Fresh Cauliflower",
    price: 14.99,
    image: "https://images.pexels.com/photos/461245/pexels-photo-461245.jpeg",
    rating: 4,
    category: "vegetable"
  },
  {
    name: "Green Lettuce",
    price: 14.99,
    image: "https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg",
    rating: 4,
    category: "vegetable"
  },
  {
    name: "Eggplant",
    price: 14.99,
    image: "https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg",
    rating: 4,
    category: "vegetable"
  },
  {
    name: "Green Chilli",
    price: 14.99,
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
    rating: 4,
    category: "vegetable"
  },
  {
    name: "Eggplant",
    price: 14.99,
    image: "https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg",
    rating: 4,
    category: "vegetable"
  }
]

export function ProductsThree() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <span className="text-sm font-medium text-[#00B207]">PRODUCTS</span>
          <h2 className="text-3xl font-bold">Introducing Our Products</h2>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`rounded-full px-6 py-2 text-sm transition-colors ${
                activeCategory === category.value
                  ? "bg-[#00B207] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
          <button
            className="rounded-full px-6 py-2 text-sm text-[#00B207] hover:bg-gray-100"
          >
            View All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <div key={index} className="group relative rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
              {product.onSale && (
                <span className="absolute left-6 top-6 rounded bg-red-500 px-2 py-1 text-xs text-white">
                  Sale 50%
                </span>
              )}
              <div className="absolute right-6 top-6 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                <Button variant="secondary" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="h-8 w-8">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative mb-4 aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <StarRating rating={product.rating} />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full bg-[#00B207] text-white hover:bg-[#00B207]/90"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

