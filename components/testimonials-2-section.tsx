"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Getting tickets for the Eras Tour seemed impossible, but this platform made it a breeze. The transfer was instant!",
    image:
      "/assets/asset_c988083a.jpeg",
    name: "Briana Patton",
    role: "Pop Fanatic",
  },
  {
    text: "The most user-friendly ticketing site I've used. I especially love the venue maps and real-time availability updates.",
    image:
      "/assets/asset_905f7255.jpeg",
    name: "Bilal Ahmed",
    role: "Live Music Lover",
  },
  {
    text: "Customer support actually replies! They helped me resolve a seat double-booking in minutes. Truly impressed.",
    image:
      "/assets/asset_0669cd1a.jpeg",
    name: "Saman Malik",
    role: "Concert Regular",
  },
  {
    text: "I've tried many resellers, but the verified ticket guarantee here is what keeps me coming back. No more fake tickets!",
    image:
      "/assets/asset_7231d0de.jpeg",
    name: "Omar Raza",
    role: "Event Organizer",
  },
  {
    text: "The selection of indie concerts is phenomenal. I've discovered so many local artists through their upcoming events list.",
    image:
      "/assets/asset_1c7cdce5.jpeg",
    name: "Zainab Hussain",
    role: "Indie Rocker",
  },
  {
    text: "Fast, reliable, and smooth. Booking wholesale tickets for our corporate retreat was easier than I expected.",
    image:
      "/assets/asset_9d68de8d.jpeg",
    name: "Aliza Khan",
    role: "HR Director",
  },
  {
    text: "The layout is gorgeous and looks great on my iPhone. Buying tickets while on the bus worked perfectly.",
    image:
      "/assets/asset_0308a933.jpeg",
    name: "Farhan Siddiqui",
    role: "Tech Enthusiast",
  },
  {
    text: "I love the 'Verified View' feature. Knowing exactly what look my daughter would have at the stadium gave me peace of mind.",
    image:
      "/assets/asset_5526ac63.jpeg",
    name: "Sana Sheikh",
    role: "Parent",
  },
  {
    text: "Finally a ticketing site that doesn't crash during major drops! Their server handling is top-tier.",
    image:
      "/assets/asset_ba42c62d.jpeg",
    name: "Hassan Ali",
    role: "E-sports Fan",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-primary/20 bg-primary/5 text-primary py-1.5 px-6 rounded-full text-sm font-bold tracking-widest uppercase">
              Fan Stories
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-none uppercase">
            What our <span className="text-primary italic">Fans</span> say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-medium">
            Join thousands of happy concert-goers who found their perfect night
            out with us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
