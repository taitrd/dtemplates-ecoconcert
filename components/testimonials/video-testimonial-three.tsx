"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from 'lucide-react'

export function VideoTestimonialThree() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // In a real implementation, this would trigger the video player
    console.log('Play video')
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/2893919/pexels-photo-2893919.jpeg"
        alt="Organic farmers working in orchard"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <span className="mb-4 text-sm font-medium">VIDEO</span>
        <h2 className="mb-8 max-w-2xl text-4xl font-bold md:text-5xl">
          We're the Best Organic Farm in the World
        </h2>
        <button
          onClick={handlePlay}
          className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#00B207]">
            <Play className="h-8 w-8" />
          </div>
        </button>
      </div>
    </section>
  )
}

