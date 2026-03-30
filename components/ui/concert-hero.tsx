"use client";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Ticket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

function ConcertHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Electric", "Atmospheric", "Unforgettable"],
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans bg-background">
      {/* Background Video with subtle zoom effect */}
      <motion.video
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        src="https://videos.pexels.com/video-files/18526841/uhd_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/40 to-primary/20 z-10 animate-pulse duration-[8000ms]" />

      {/* Scanline Effect */}
      <div className="absolute inset-0 z-15 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />

      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-10 items-center max-w-5xl"
        >
          {/* Top Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              <Zap className="w-3 h-3 fill-primary" /> Live Experience 2026
            </span>
          </motion.div>

          <div className="flex flex-col gap-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground drop-shadow-sm">
              Experience the
              <div className="h-[1.2em] relative overflow-hidden mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleNumber}
                    initial={{ y: 80, opacity: 0, rotateX: -45 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -80, opacity: 0, rotateX: 45 }}
                    transition={{ type: "spring", damping: 12, stiffness: 100 }}
                    className="absolute inset-0 block italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/60 to-accent drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]"
                  >
                    {titles[titleNumber]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-2xl text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
            >
              Step into a realm where music transcends reality. High-fidelity
              sound, stunning visuals, and the energy of a thousand souls
              perfectly synchronized.
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 mt-4">
            <Button
              size="lg"
              className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-300 transform hover:-translate-y-1 rounded-xl font-bold"
              asChild
            >
              <Link href="/concerts">
                Obtain Passes <Ticket className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-md rounded-xl font-bold"
              asChild
            >
              <Link href="/concerts/1">
                View Lineup <Music className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Floating Icons background effect */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/4 left-1/4"
          >
            <Music className="w-12 h-12 text-primary" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4"
          >
            <Zap className="w-16 h-16 text-primary" />
          </motion.div>
        </div>
      </div>

      {/* Footer hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-primary/40 text-[10px] uppercase tracking-[0.3em]">
          Scroll for Details
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </div>
    </div>
  );
}

export { ConcertHero };
