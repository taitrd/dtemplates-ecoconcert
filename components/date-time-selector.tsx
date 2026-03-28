'use client'

import { Button } from "@/components/ui/button"
import { MapPin, Ticket } from 'lucide-react'

export interface ShowTime {
  date: string
  day: string
  month: string
  time: string
  ticketsAvailable: number
  price: number
}

const showTimes: ShowTime[] = [
  {
    date: "03",
    day: "SUN",
    month: "June",
    time: "08:00",
    ticketsAvailable: 20,
    price: 100
  },
  {
    date: "03",
    day: "SUN",
    month: "June",
    time: "10:00",
    ticketsAvailable: 18,
    price: 100
  },
  {
    date: "04",
    day: "MON",
    month: "June",
    time: "08:00",
    ticketsAvailable: 40,
    price: 100
  },
  {
    date: "04",
    day: "MON",
    month: "June",
    time: "10:00",
    ticketsAvailable: 60,
    price: 100
  },
  {
    date: "05",
    day: "TUES",
    month: "June",
    time: "08:00",
    ticketsAvailable: 76,
    price: 100
  },
  {
    date: "05",
    day: "TUES",
    month: "June",
    time: "10:00",
    ticketsAvailable: 78,
    price: 100
  },
  {
    date: "06",
    day: "WED",
    month: "June",
    time: "08:00",
    ticketsAvailable: 98,
    price: 100
  },
  {
    date: "06",
    day: "WED",
    month: "June",
    time: "10:00",
    ticketsAvailable: 102,
    price: 100
  }
]

interface DateTimeSelectorProps {
  onSelectTime: (time: ShowTime) => void
  selectedTime?: ShowTime
}

export function DateTimeSelector({ onSelectTime, selectedTime }: DateTimeSelectorProps) {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Choose Date And Time</h2>
        <p className="text-muted-foreground">All Available Tickets Are here.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {showTimes.map((time, index) => (
          <div
            key={index}
            className={`group relative rounded-xl overflow-hidden transition-all duration-200 ${selectedTime === time
                ? 'bg-primary/20 border-primary'
                : 'bg-muted border-border hover:bg-muted/80'
              } border`}
          >
            <div className="flex items-stretch">
              {/* Date Column */}
              <div className="bg-primary text-primary-foreground p-4 flex flex-col items-center justify-center min-w-[120px]">
                <span className="text-2xl font-bold">{time.date}</span>
                <span className="text-sm">{time.month}</span>
                <span className="text-sm mt-2">{time.day}</span>
                <span className="text-xl font-bold mt-2">
                  {time.time}
                  <span className="text-sm font-normal">PM</span>
                </span>
              </div>

              {/* Details Column */}
              <div className="flex-1 p-4 flex justify-between items-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Taylor Swift</h3>
                  <p className="text-muted-foreground">The Eras Tour</p>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    Royal Albert Hall
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Ticket className="w-4 h-4 mr-1" />
                    {time.ticketsAvailable} Tickets Available!
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between h-full">
                  <div className="text-muted-foreground text-sm">
                    From {time.price}$ / person
                  </div>
                  <Button
                    onClick={() => onSelectTime(time)}
                    variant="ghost"
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

