"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Vegetables",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15C12 15 14 13 18 13C22 13 24 15 24 15" stroke="#00B207" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 22C15 22 16 20 18 20C20 20 21 22 21 22" stroke="#00B207" strokeWidth="2" strokeLinecap="round"/>
        <rect x="8" y="8" width="24" height="24" rx="12" stroke="#00B207" strokeWidth="2"/>
      </svg>
    ),
    products: 165,
    href: "/shop/vegetables",
    active: true
  },
  {
    name: "Fresh Fruit",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="12" stroke="#1A1A1A" strokeWidth="2"/>
        <path d="M20 14C20 14 17 14 15 16C13 18 13 21 13 21" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    products: 137,
    href: "/shop/fresh-fruit"
  },
  {
    name: "Fish",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20Z" stroke="#1A1A1A" strokeWidth="2"/>
        <path d="M20 24C22.2091 24 24 22.2091 24 20C24 17.7909 22.2091 16 20 16C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24Z" stroke="#1A1A1A" strokeWidth="2"/>
      </svg>
    ),
    products: 34,
    href: "/shop/fish"
  },
  {
    name: "Meat",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20Z" stroke="#1A1A1A" strokeWidth="2"/>
        <path d="M20 24L24 20L20 16L16 20L20 24Z" stroke="#1A1A1A" strokeWidth="2"/>
      </svg>
    ),
    products: 165,
    href: "/shop/meat"
  },
  {
    name: "Water and Drinks",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 14C16 12.8954 16.8954 12 18 12H22C23.1046 12 24 12.8954 24 14V28H16V14Z" stroke="#1A1A1A" strokeWidth="2"/>
        <path d="M16 18H24" stroke="#1A1A1A" strokeWidth="2"/>
        <path d="M16 23H24" stroke="#1A1A1A" strokeWidth="2"/>
      </svg>
    ),
    products: 48,
    href: "/shop/drinks"
  },
  {
    name: "Snacks",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="16" height="16" rx="2" stroke="#1A1A1A" strokeWidth="2"/>
        <path d="M16 16L24 24" stroke="#1A1A1A" strokeWidth="2"/>
        <path d="M24 16L16 24" stroke="#1A1A1A" strokeWidth="2"/>
      </svg>
    ),
    products: 165,
    href: "/shop/snacks"
  }
]

export function CategoriesFour() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, categories.length - 5))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Shop by Top Categories</h2>
          <Link 
            href="/categories" 
            className="text-[#00B207] hover:underline inline-flex items-center gap-2"
          >
            View All
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 20}%)` }}
            >
              {categories.map((category, index) => (
                <div key={index} className="w-1/5 flex-shrink-0 px-3">
                  <Link
                    href={category.href}
                    className={`flex flex-col items-center rounded-lg border p-6 text-center transition-colors hover:border-[#00B207] ${
                      category.active ? 'border-[#00B207]' : 'border-gray-200'
                    }`}
                  >
                    <div className={`mb-4 ${category.active ? 'text-[#00B207]' : 'text-gray-900'}`}>
                      {category.icon}
                    </div>
                    <h3 className="mb-1 font-medium">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.products} Products</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={nextSlide}
            disabled={currentIndex >= categories.length - 5}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

