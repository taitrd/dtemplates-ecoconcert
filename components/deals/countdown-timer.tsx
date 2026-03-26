'use client'

import { useEffect, useState } from 'react'

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
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
  }, [targetDate])

  return (
    <div className="flex gap-4 text-white">
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.days}</div>
        <div className="text-sm">DAYS</div>
      </div>
      <div className="text-3xl font-bold">:</div>
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm">HOURS</div>
      </div>
      <div className="text-3xl font-bold">:</div>
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm">MINS</div>
      </div>
      <div className="text-3xl font-bold">:</div>
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm">SECS</div>
      </div>
    </div>
  )
}

