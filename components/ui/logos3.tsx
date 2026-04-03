"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Powering the world's biggest stages",
  logos = [
    {
      id: "logo-1",
      description: "Spotify",
      image: "/partners/spotify.svg",
      className:
        "h-12 w-auto dark:invert-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all",
    },
    {
      id: "logo-2",
      description: "Live Nation",
      image: "/partners/live-nation.svg",
      className:
        "h-14 w-auto dark:invert grayscale opacity-70 dark:hover:invert-0 hover:opacity-100 hover:grayscale-0 transition-all",
    },
    {
      id: "logo-3",
      description: "Ticketmaster",
      image: "/partners/ticketmaster.svg",
      className:
        "h-20 w-auto dark:invert grayscale opacity-70  dark:hover:invert-0 hover:opacity-100 hover:grayscale-0 transition-all",
    },
    {
      id: "logo-4",
      description: "Apple Music",
      image: "/partners/apple-music.png",
      className:
        "h-17 rounded-lg w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all",
    },
    {
      id: "logo-5",
      description: "SoundCloud",
      image: "/partners/soundcloud.svg",
      className:
        "h-24 w-auto dark:invert grayscale opacity-70  dark:hover:invert-0 hover:opacity-100 hover:grayscale-0 transition-all",
    },
    {
      id: "logo-6",
      description: "YouTube Music",
      image: "/partners/youtube-music.svg",
      className:
        "h-22 w-auto dark:invert grayscale opacity-70 hover:opacity-100 dark:hover:grayscale hover:grayscale-0 transition-all",
    },
    {
      id: "logo-7",
      description: "Warner Music Group",
      image: "/partners/wmg.svg",
      className:
        "h-12 w-auto dark:invert grayscale opacity-70 dark:hover:grayscale hover:opacity-100 hover:grayscale-0 transition-all",
    },
    {
      id: "logo-8",
      description: "Universal Music Group",
      image: "/partners/umg.svg",
      className:
        "h-18 w-auto dark:invert p-2 rounded-lg opacity-70 hover:opacity-100 hover:grayscale-0 transition-all",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-8 bg-background relative overflow-hidden group">
      <div className="container px-4 flex flex-col items-center text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary/40 mb-12">
          {heading}
        </h2>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary/30 to-transparent z-10 pointer-events-none" />

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 1,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full bg-secondary py-24"
          aria-label="Partner logos ticker"
        >
          <CarouselContent className="flex items-center">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 flex justify-center items-center "
              >
                <Image
                  src={logo.image}
                  alt={`${logo.description} logo`}
                  className={logo.className}
                  loading="lazy"
                  height={100}
                  width={200}
                />
              </CarouselItem>
            ))}
            {/* Duplicate for seamless infinite scroll if logos list is short */}
            {logos.map((logo) => (
              <CarouselItem
                key={`${logo.id}-dup`}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 flex justify-center items-center px-12"
              >
                <Image
                  src={logo.image}
                  alt={`${logo.description} logo`}
                  className={logo.className}
                  loading="lazy"
                  height={100}
                  width={200}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Logos3 };
