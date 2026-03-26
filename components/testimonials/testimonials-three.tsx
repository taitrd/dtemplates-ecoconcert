"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/star-rating"

const testimonials = [
  {
    content: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    author: "Robert Fox",
    role: "Customer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5
  },
  {
    content: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    author: "Dianne Russell",
    role: "Customer",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    rating: 5
  },
  {
    content: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    author: "Eleanor Pena",
    role: "Customer",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    rating: 5
  }
]

export function TestimonialsThree() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-sm font-medium text-[#00B207]">TESTIMONIALS</span>
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <StarRating rating={testimonial.rating} />
                    <p className="my-6 text-gray-600">{testimonial.content}</p>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
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
    </section>
  )
}

