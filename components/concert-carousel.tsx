'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ConcertCard } from "./concert-card"

const concerts = [
  {
    artist: "Beyonce",
    location: "London",
    dateRange: "Oct 14- Oct 18",
    price: 399.99,
    imageUrl: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
  },
  {
    artist: "Enrique Iglesias",
    location: "Manchester",
    dateRange: "Oct 17- Oct 21",
    price: 299.99,
    imageUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
  },
  {
    artist: "Ariana Grande",
    location: "London",
    dateRange: "Oct 22- Oct 24",
    price: 199.99,
    imageUrl: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
  },
  {
    artist: "Justin Bieber",
    location: "Manchester",
    dateRange: "Oct 24- Oct 29",
    price: 199.99,
    imageUrl: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg"
  },
  {
    artist: "Celen Dion",
    location: "Bristol",
    dateRange: "Oct 28- Oct 30",
    price: 499.99,
    imageUrl: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg"
  },
  {
    artist: "Celena Gomez",
    location: "London",
    dateRange: "Oct 30- Oct 31",
    price: 299.99,
    imageUrl: "https://images.pexels.com/photos/1649692/pexels-photo-1649692.jpeg"
  },
  {
    artist: "Celena Gomez",
    location: "Manchester",
    dateRange: "Dec 01- Dec 05",
    price: 499.99,
    imageUrl: "https://images.pexels.com/photos/1864642/pexels-photo-1864642.jpeg"
  },
  {
    artist: "Rihanna",
    location: "Bristol",
    dateRange: "Dec 02- Dec 05",
    price: 599.99,
    imageUrl: "https://images.pexels.com/photos/1687831/pexels-photo-1687831.jpeg"
  }
]

export function ConcertCarousel() {
  return (
    <section className="w-full py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Upcoming Concerts
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 gap-2">
            {concerts.map((concert, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <ConcertCard {...concert} />
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

