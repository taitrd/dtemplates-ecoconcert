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

export function DealsThree() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  })

  useEffect(() => {
    // Set the target date to 30 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
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

      if (distance < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#F7F7F7] py-16">
      <div className="container">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg"
              alt="Fresh vegetables and fruits"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="text-center">
            <span className="text-sm font-medium text-[#00B207]">BEST DEALS</span>
            <h2 className="mb-8 mt-2 text-3xl font-bold">
              Our Special Products
              <br />
              Deal of the Month
            </h2>
            <div className="mb-8 flex justify-center gap-4">
              <div className="text-center">
                <div className="rounded-lg bg-white px-4 py-2">
                  <span className="text-2xl font-bold text-[#00B207]">{timeLeft.days}</span>
                </div>
                <span className="mt-1 text-sm text-gray-600">DAYS</span>
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="rounded-lg bg-white px-4 py-2">
                  <span className="text-2xl font-bold text-[#00B207]">{timeLeft.hours}</span>
                </div>
                <span className="mt-1 text-sm text-gray-600">HOURS</span>
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="rounded-lg bg-white px-4 py-2">
                  <span className="text-2xl font-bold text-[#00B207]">{timeLeft.minutes}</span>
                </div>
                <span className="mt-1 text-sm text-gray-600">MINS</span>
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="rounded-lg bg-white px-4 py-2">
                  <span className="text-2xl font-bold text-[#00B207]">{timeLeft.seconds}</span>
                </div>
                <span className="mt-1 text-sm text-gray-600">SECS</span>
              </div>
            </div>
            <Button 
              asChild
              className="bg-[#00B207] hover:bg-[#00B207]/90"
            >
              <Link href="/shop">
                Shop now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://images.pexels.com/photos/2226895/pexels-photo-2226895.jpeg"
              alt="Farmer with fresh produce"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

