'use client'

import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TestimonialCard } from "./testimonial-card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    content: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Robert Fox",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5
  },
  {
    content: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Dianne Russell",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    rating: 5
  },
  {
    content: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Eleanor Pena",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    rating: 5
  },
  {
    content: "Excellent service and high-quality products. I'm thoroughly impressed with my experience shopping here.",
    name: "Alice Johnson",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5
  },
  {
    content: "The variety of organic products is amazing. I've become a regular customer and highly recommend this store.",
    name: "Michael Brown",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    rating: 5
  }
]

export function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    )
  }

  return (
    <section className="container py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Client Testimonials</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}

