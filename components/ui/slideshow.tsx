"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&h=900&fit=crop",
    text: ["BEYOND SOUND", "PURE ENERGY"],
    location: "Tomorrowland Mainstage",
    date: "July 2026",
  },
  {
    img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&h=900&fit=crop",
    text: ["UNITE IN", "THE RHYTHM"],
    location: "Wembley Stadium, London",
    date: "August 2026",
  },
  {
    img: "/concerts/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg",
    text: ["ELECTRIC", "NIGHTFALL"],
    location: "Madison Square Garden, NY",
    date: "September 2026",
  },
  {
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&h=900&fit=crop",
    text: ["ECHOES OF", "ETERNITY"],
    location: "Sydney Opera House",
    date: "October 2026",
  },
  {
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1600&h=900&fit=crop",
    text: ["RAW POWER", "SOULFUL VIBE"],
    location: "Red Rocks Amphitheater",
    date: "November 2026",
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden rounded-[3rem] group">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${slides[current].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-black/20" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-2 md:gap-4 lg:gap-6 mb-8"
            >
              {slides[current].text.map((t, j) => (
                <span
                  key={j}
                  className="text-4xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-none italic drop-shadow-2xl"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="h-1 w-24 bg-primary rounded-full mb-4" />
              <p className="text-primary-foreground/90 font-bold uppercase tracking-[0.3em] text-sm md:text-base">
                {slides[current].location} • {slides[current].date}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="outline"
          size="icon"
          className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white hover:text-black transition-all"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white hover:text-black transition-all"
          onClick={nextSlide}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-12 rounded-full bg-white/20 overflow-hidden cursor-pointer hover:bg-white/30 transition-colors"
            onClick={() => setCurrent(i)}
          >
            {i === current && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full bg-primary"
              />
            )}
          </div>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-12 right-12 z-30 font-black text-xl text-white/40 tracking-tighter">
        0{current + 1} <span className="text-white/20">/</span> 0{slides.length}
      </div>
    </div>
  );
}
