'use client'

import { useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { subscribeToNewsletter } from "@/app/actions"

const news = [
  {
    title: "Taylor Swift in Biggest World Tour",
    description: "Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    author: {
      name: "Jonathan Willis",
      avatar: "/placeholder.svg",
      date: "July 17, 2024",
      readTime: "5 min"
    }
  },
  {
    title: "Royal Albert Hall New Events",
    description: "Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...",
    image: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg",
    author: {
      name: "Marian Ed",
      avatar: "/placeholder.svg",
      date: "June 13, 2024",
      readTime: "10 min"
    }
  },
  {
    title: "Yanni Will Be in London",
    description: "Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...",
    image: "https://images.pexels.com/photos/1687831/pexels-photo-1687831.jpeg",
    author: {
      name: "Jack Nikelson",
      avatar: "/placeholder.svg",
      date: "May 08, 2024",
      readTime: "7 min"
    }
  }
]

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await subscribeToNewsletter(email)
      setEmail('')
      // You could add a success toast here
    } catch (error) {
      // You could add an error toast here
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-20 px-4 md:px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[400px_1fr] gap-12">
          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe our news letter
            </h2>
            <p className="text-gray-400 mb-6">
              For weekly later news and offers about music world, Join us here.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 h-12 bg-white/10 border-white/20 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <svg
                  className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-[#4338ca] hover:bg-[#3730a3]"
                disabled={isSubmitting}
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* News Carousel */}
          <div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {news.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="grid md:grid-cols-[1.5fr_1fr] gap-6">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={item.author.avatar} />
                            <AvatarFallback>{item.author.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-white">
                              {item.author.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {item.author.date}. {item.author.readTime}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8">
                  <ChevronLeft className="h-4 w-4" />
                </CarouselPrevious>
                <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                </CarouselNext>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

