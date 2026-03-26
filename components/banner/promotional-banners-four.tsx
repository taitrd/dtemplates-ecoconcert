"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface TimeLeft {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export function PromotionalBannersFour() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const targetDate = new Date()
      targetDate.setDate(targetDate.getDate() + 7) // Set to 7 days from now
      
      const distance = targetDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="container py-16">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Organic Fruits & Vegetables Banner */}
        <div className="relative overflow-hidden rounded-lg bg-gray-900">
          <div className="relative z-10 p-8">
            <span className="mb-2 inline-block text-sm font-medium text-white">100% ORGANIC</span>
            <h2 className="mb-4 text-3xl font-bold text-white">Fruit & Vegetable</h2>
            <p className="mb-6 text-white/90">
              Starting at: <span className="text-[#FF8A00]">$11.99</span>
            </p>
            <Button 
              asChild
              className="bg-[#00B207] hover:bg-[#00B207]/90"
            >
              <Link href="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Image
            src="https://images.pexels.com/photos/3370704/pexels-photo-3370704.jpeg"
            alt="Fresh organic fruits and vegetables"
            fill
            className="object-cover opacity-50"
          />
        </div>

        {/* Sales of the Year Banner */}
        <div className="relative overflow-hidden rounded-lg bg-[#2B96CC]">
          <div className="relative z-10 p-8">
            <span className="mb-2 inline-block text-sm font-medium text-white">SALE OFF THE WEEK</span>
            <h2 className="mb-6 text-3xl font-bold text-white">Sales of the Year</h2>
            
            <div className="mb-6 flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-sm text-white/80">DAYS</div>
              </div>
              <div className="text-2xl font-bold text-white">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-sm text-white/80">HOURS</div>
              </div>
              <div className="text-2xl font-bold text-white">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-sm text-white/80">MINS</div>
              </div>
              <div className="text-2xl font-bold text-white">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-sm text-white/80">SECS</div>
              </div>
            </div>

            <Button 
              asChild
              className="bg-[#00B207] hover:bg-[#00B207]/90"
            >
              <Link href="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Image
            src="https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg"
            alt="Fresh fruits and vegetables"
            fill
            className="object-cover opacity-50"
          />
        </div>
      </div>
    </section>
  )
}

