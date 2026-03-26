'use client'

import Image from "next/image"
import Link from "next/link"
import { Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CountdownTimer } from "./countdown-timer"

const thisWeekConcerts = [
  {
    artist: "Adele",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    dateRange: "Sep10 - Sep13",
    location: "London",
    days: 12
  },
  {
    artist: "Windy Soe",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    dateRange: "Sep10 - Sep13",
    location: "London",
    days: 10
  },
  {
    artist: "Taylor Swift",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    dateRange: "Sep14 - Sep19",
    location: "Manchester",
    days: 8
  },
  {
    artist: "Enrique Iglesias",
    image: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg",
    dateRange: "Sep24 - Sep29",
    location: "London",
    days: 6
  },
  {
    artist: "Mark Anthony",
    image: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg",
    dateRange: "Sep26 - Sep29",
    location: "Bristol",
    days: 4
  }
]

export function ThisWeekConcerts() {
  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">This week</h2>
        <p className="text-gray-400">
          check out concerts that will hold in the next week
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {thisWeekConcerts.map((concert, index) => (
            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="relative bg-white/5 rounded-2xl overflow-hidden">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={concert.image}
                    alt={concert.artist}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#4a1818] bg-opacity-90 px-4 py-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">Time to end</span>
                    <CountdownTimer days={concert.days} className="text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{concert.artist}</h3>
                  <p className="text-gray-400 mb-4">
                    {concert.dateRange} {concert.location}
                  </p>
                  <Link 
                    href="#" 
                    className="text-[#4338ca] hover:text-[#3730a3] font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  )
}

