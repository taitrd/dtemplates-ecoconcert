"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { ConcertCard } from "@/components/concert-card";
import { toggleConcertSelection } from "@/lib/tickets-slice";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export function UpcomingConcerts() {
  const dispatch = useDispatch<AppDispatch>();
  const { concerts, loading, selectedConcertIds } = useSelector(
    (state: RootState) => state.tickets,
  );

  return (
    <section className="w-full py-20 px-4 md:px-6 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Upcoming Concerts
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The best concerts will be held soon! Don't miss out on your chance
            to see your favorite artists live.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[3/4] w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : concerts.length > 0 ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-4">
              {concerts.map((concert) => (
                <CarouselItem
                  key={concert.id}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                >
                  <ConcertCard
                    id={concert.id}
                    artist={concert.singer}
                    location={concert.location}
                    dateRange={new Date(concert.date).toLocaleDateString()}
                    price={concert.price}
                    imageUrl={concert.image}
                    isSelected={selectedConcertIds.includes(concert.id)}
                    onToggleSelection={(id) =>
                      dispatch(toggleConcertSelection(id))
                    }
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-2xl border border-dashed border-border">
            <p className="text-muted-foreground italic">
              No concerts found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
