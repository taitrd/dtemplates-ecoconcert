'use client'

import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'

interface CountdownTimerProps {
  days: number
  className?: string
}

export function CountdownTimer({ days, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days,
    hours: 1,
    minutes: 25,
    seconds: 26
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(current => {
        if (current.days === 0 && current.hours === 0 &&
          current.minutes === 0 && current.seconds === 0) {
          clearInterval(timer)
          return current
        }

        let newTime = { ...current }

        if (current.seconds > 0) {
          newTime.seconds -= 1
        } else {
          newTime.seconds = 59
          if (current.minutes > 0) {
            newTime.minutes -= 1
          } else {
            newTime.minutes = 59
            if (current.hours > 0) {
              newTime.hours -= 1
            } else {
              newTime.hours = 23
              newTime.days = Math.max(0, current.days - 1)
            }
          }
        }

        return newTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      <Clock className="w-4 h-4" />
      <span>Time to end</span>
      <span className="font-mono">
        {timeLeft.days}D, {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
    </div>
  )
}

