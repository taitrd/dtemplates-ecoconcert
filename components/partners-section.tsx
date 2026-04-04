import { cn } from "@/lib/utils";
import Image from "next/image";

const partners = [
  {
    name: "Spotify",
    logo: "/partners/spotify.svg",
    className:
      "h-12 w-auto dark:invert-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all",
  },
  {
    name: "Live Nation",
    logo: "/partners/live-nation.svg",
    className:
      "h-14 w-auto dark:invert grayscale opacity-70 dark:hover:invert-0 hover:opacity-100 hover:grayscale-0 transition-all",
  },
  {
    name: "Ticketmaster",
    logo: "/partners/ticketmaster.svg",
    className:
      "h-20 w-auto dark:invert grayscale opacity-70  dark:hover:invert-0 hover:opacity-100 hover:grayscale-0 transition-all",
  },
  {
    name: "Apple Music",
    logo: "/partners/apple-music.png",
    className:
      "h-17 rounded-lg w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all",
  },
  {
    name: "SoundCloud",
    logo: "/partners/soundcloud.svg",
    className:
      "h-24 w-auto dark:invert grayscale opacity-70  dark:hover:invert-0 hover:opacity-100 hover:grayscale-0 transition-all",
  },
  {
    name: "YouTube Music",
    logo: "/partners/youtube-music.svg",
    className:
      "h-22 w-auto dark:invert grayscale opacity-70 hover:opacity-100 dark:hover:grayscale hover:grayscale-0 transition-all",
  },
  {
    name: "Warner Music Group",
    logo: "/partners/wmg.png",
    className:
      "h-10 w-auto dark:invert grayscale opacity-70 dark:hover:grayscale hover:opacity-100 hover:grayscale-0 transition-all",
  },
  {
    name: "Universal Music Group",
    logo: "/partners/umg.svg",
    className:
      "h-18 w-auto dark:invert p-2 rounded-lg opacity-70 hover:opacity-100 hover:grayscale-0 transition-all",
  },
];

export function PartnersSection() {
  return (
    <section className="w-full py-20 px-4 md:px-6 bg-accent">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
            Our Trusted Partners
          </p>
          <h2 className="text-2xl font-bold text-muted-foreground/60">
            Collaborating with the Best in the Industry
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center p-4 rounded-xl hover:bg-background/40 transition-all duration-500 hover:scale-110 cursor-pointer group"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={200}
                height={150}
                className={cn(partner.className)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
