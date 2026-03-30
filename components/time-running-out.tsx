"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CountdownTimer } from "./countdown-timer";

export function TimeRunningOut() {
  const upcomingConcerts = [
    {
      artist: "Nate Ruess",
      location: "Manchester",
      dateRange: "June 13 - June 15",
      price: 299.99,
      days: 15,
      imageUrl:
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    },
    {
      artist: "Taylor Swift",
      location: "London",
      dateRange: "June 14 - June 19",
      price: 799.99,
      days: 15,
      imageUrl:
        "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    },
    {
      artist: "Ariana Grande",
      location: "Bristol",
      dateRange: "June 15 - June 18",
      price: 199.99,
      days: 14,
      imageUrl:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    },
    {
      artist: "Adele",
      location: "London",
      dateRange: "June 19 - June 21",
      price: 499.99,
      days: 12,
      imageUrl:
        "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg",
    },
    {
      artist: "Khalid",
      location: "London",
      dateRange: "June 19 - June 21",
      price: 499.99,
      days: 10,
      imageUrl:
        "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg",
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Time is Running Out!
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore nearby concerts and events here.
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
            {upcomingConcerts.map((concert, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-card border border-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                      <Image
                        src={concert.imageUrl}
                        alt={concert.artist}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
                        <CountdownTimer
                          days={concert.days}
                          className="text-white"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {concert.artist}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {concert.dateRange} {concert.location}
                      </p>
                      <p className="text-xl font-bold">
                        ${concert.price.toFixed(2)}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      variant="default"
                    >
                      Book Now
                    </Button>
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
  );
}
