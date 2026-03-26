"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg",
    tagline: "WELCOME TO SHOPERY",
    title: "Fresh & Healthy Organic Food",
    description: "Free shipping on all your order. we deliver, you enjoy",
    discount: "30% OFF",
    link: "/shop"
  },
  {
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
    tagline: "SUMMER SALE",
    title: "100% Natural Fresh Food",
    description: "Save up to 50% on your first order",
    discount: "50% OFF",
    link: "/shop"
  },
  {
    image: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg",
    tagline: "BEST DEALS",
    title: "Organic Vegetables & Fruits",
    description: "Free shipping on orders over $50",
    discount: "25% OFF",
    link: "/shop"
  }
]

export function HeroFour() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-[600px] overflow-hidden bg-[#F7F7F7]">
      <div 
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-full w-full flex-shrink-0"
          >
            <div className="container relative z-10 flex h-full items-center">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col justify-center gap-4">
                  <span className="text-sm font-medium text-[#00B207]">
                    {slide.tagline}
                  </span>
                  <h1 className="text-4xl font-bold text-[#1A1A1A] md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600">
                      {slide.description}
                    </p>
                    <p className="text-2xl font-bold">
                      Sale up to <span className="text-[#FF8A00]">{slide.discount}</span>
                    </p>
                  </div>
                  <Button 
                    asChild
                    className="w-fit bg-[#00B207] hover:bg-[#00B207]/90"
                    size="lg"
                  >
                    <Link href={slide.link}>
                      Shop now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="hidden md:block">
                  <div className="relative h-[500px] w-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentSlide === index
                ? "w-8 bg-[#00B207]"
                : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

