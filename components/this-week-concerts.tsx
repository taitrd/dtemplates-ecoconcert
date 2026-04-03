"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Clock, MapPin, Calendar as CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CountdownTimer } from "./countdown-timer";
import { Skeleton } from "@/components/ui/skeleton";

export function ThisWeekConcerts() {
  const { concerts, loading } = useSelector(
    (state: RootState) => state.tickets,
  );

  // For demo, we'll just take the first 5 concerts
  const thisWeekConcerts = concerts.slice(0, 5).map((c, i) => ({
    ...c,
    days: 12 - i * 2, // Demo countdown
  }));

  return (
    <section className="py-20 bg-background/30 px-4 md:px-6 rounded-3xl border border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            This Week's Highlights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Check out the most anticipated concerts happening in the next 7
            days.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="aspect-[3/4] w-full rounded-2xl" />
            ))}
          </div>
        ) : thisWeekConcerts.length > 0 ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {thisWeekConcerts.map((concert) => (
                <CarouselItem
                  key={concert.id}
                  className="pl-4 py-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
                      <Image
                        src={concert.image}
                        alt={concert.singer}
                        fill
                        className="object-cover group-hover:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-md px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-primary-foreground">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">
                            Ends in:
                          </span>
                        </div>
                        <CountdownTimer
                          days={concert.days}
                          className="text-primary-foreground font-mono font-bold"
                        />
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold leading-tight">
                          {concert.singer}
                        </h3>
                        <Badge variant="outline">${concert.price}</Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{concert.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CalendarIcon className="w-3.5 h-3.5" />
                          <span>
                            {new Date(concert.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/concerts/${concert.id}`}
                        className="inline-flex items-center text-sm font-semibold text-primary hover:underline mt-2"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-2xl border border-dashed border-border">
            <p className="text-muted-foreground italic">
              No highlights for this week.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
