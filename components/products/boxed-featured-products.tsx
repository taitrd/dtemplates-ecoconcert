"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"

const products = [
  {
    name: "Chanise Cabbage",
    price: 14.99,
    image: "https://images.pexels.com/photos/257259/pexels-photo-257259.jpeg",
    rating: 4
  },
  {
    name: "Green Lettuce",
    price: 14.99,
    image: "https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg",
    rating: 4
  },
  {
    name: "Green Chili",
    price: 14.99,
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
    rating: 4
  },
  {
    name: "Corn",
    price: 14.99,
    image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg",
    rating: 4
  }
]

const hotDeals = [
  {
    name: "Green Apple",
    price: 14.99,
    image: "https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg",
    rating: 4
  },
  {
    name: "Eggplant",
    price: 14.99,
    image: "https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg",
    rating: 4
  },
  {
    name: "Big Potatos",
    price: 14.99,
    image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg",
    rating: 4
  },
  {
    name: "Indian Malta",
    price: 14.99,
    originalPrice: 20.99,
    image: "https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg",
    rating: 4
  },
  {
    name: "Red Capsicum",
    price: 14.99,
    originalPrice: 20.99,
    image: "https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg",
    rating: 4
  },
  {
    name: "Corn",
    price: 14.99,
    originalPrice: 20.99,
    image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg",
    rating: 4
  },
  {
    name: "Red Tomatos",
    price: 14.99,
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
    rating: 4
  },
  {
    name: "Fresh Cauliflower",
    price: 14.99,
    image: "https://images.pexels.com/photos/461245/pexels-photo-461245.jpeg",
    rating: 4
  }
]

export function BoxedFeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (products.length - 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (products.length - 3)) % (products.length - 3))
  }

  return (
    <div className="py-16">
      {/* Featured Products Slider */}
      <div className="container mb-16">
        <div className="mb-8 text-center">
          <span className="text-sm font-medium text-[#00B207]">PRODUCTS</span>
          <h2 className="text-3xl font-bold">Our Featured Products</h2>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full min-w-[25%] px-3">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Hot Deals Section */}
      <div className="container">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-9">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Hot Deals</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {hotDeals.slice(0, 6).map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="h-full rounded-lg bg-[#FFD800] p-8">
              <div className="mb-4 text-2xl font-bold">
                Save 37% on Every Order
              </div>
              <Button 
                className="bg-white text-black hover:bg-white/90"
                size="lg"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

