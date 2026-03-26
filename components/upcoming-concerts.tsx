'use client'

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const concerts = [
  {
    artist: "Ed Shareen",
    location: "London",
    dateRange: "Sep10 - Sep13",
    date: "10 September 2024",
    imageUrl: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
  },
  {
    artist: "Shakira",
    location: "Manchester",
    dateRange: "Sep14 - Sep19",
    date: "14 September 2024",
    imageUrl: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg"
  },
  {
    artist: "Pitbull",
    location: "Bristol",
    dateRange: "Nov02 - Nov04",
    date: "02 November 2024",
    imageUrl: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg"
  },
  {
    artist: "Lady Gaga",
    location: "London",
    dateRange: "Sep24 - Sep29",
    date: "24 September 2024",
    imageUrl: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
  },
  {
    artist: "Omarion",
    location: "Bristol",
    dateRange: "Nov02 - Nov04",
    date: "02 November 2024",
    imageUrl: "https://images.pexels.com/photos/1687831/pexels-photo-1687831.jpeg"
  }
]

export function UpcomingConcerts() {
  return (
    <section className="w-full py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upcoming Concerts
          </h2>
          <p className="text-gray-400 text-lg">
            The best concerts will be held soon!
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
            {concerts.map((concert, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="bg-transparent border-0">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <Image
                        src={concert.imageUrl}
                        alt={concert.artist}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="text-2xl font-bold mb-2">Coming soon</div>
                          <div className="text-sm opacity-80">{concert.date}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start pt-4 px-0">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {concert.artist}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      {concert.dateRange} {concert.location}
                    </p>
                    <Link 
                      href="#" 
                      className="text-[#4338ca] hover:text-[#3730a3] font-medium"
                    >
                      View Details
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}

