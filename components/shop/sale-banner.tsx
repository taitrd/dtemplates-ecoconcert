"use client"

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface TimeLeft {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export function SaleBanner() {
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
      targetDate.setDate(targetDate.getDate() + 2) // Set to 2 days from now
      
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
    <div className="relative mb-8 overflow-hidden rounded-lg bg-[#1A1A1A] p-8">
      <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div className="space-y-4">
          <span className="text-sm font-medium text-white">BEST DEALS</span>
          <h2 className="text-4xl font-bold text-white">Sale of the Month</h2>
          <div className="flex gap-4 text-[#00B207]">
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-xs">DAYS</div>
            </div>
            <div className="text-3xl font-bold">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs">HOURS</div>
            </div>
            <div className="text-3xl font-bold">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs">MINS</div>
            </div>
            <div className="text-3xl font-bold">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs">SECS</div>
            </div>
          </div>
          <Button 
            className="bg-[#00B207] hover:bg-[#00B207]/90"
            size="lg"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="absolute right-0 top-0 -mr-40 h-full w-2/3 lg:block">
          <img
            src="https://images.pexels.com/photos/3370704/pexels-photo-3370704.jpeg"
            alt="Fresh organic vegetables and fruits"
            className="h-full w-full object-cover"
          />
          <div className="absolute right-44 top-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#FF8A00] text-center text-white">
            <div>
              <div className="text-2xl font-bold">56%</div>
              <div className="text-sm">OFF</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

