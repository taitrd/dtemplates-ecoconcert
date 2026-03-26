'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Crown, Users, Ticket } from 'lucide-react'
import { SeatingChart } from './seating-chart'
import { TicketSummary } from './ticket-summary'
import { LoginDialog } from './login-dialog'
import type { Seat } from './seating-chart'

interface TicketTier {
  type: 'VIP' | 'Standard' | 'Economic'
  price: number
  icon: typeof Crown
  description: string
  features: string[]
}

const ticketTiers: TicketTier[] = [
  {
    type: 'VIP',
    price: 399,
    icon: Crown,
    description: 'Best seats with exclusive benefits',
    features: [
      'Premium front-row seating',
      'Exclusive VIP lounge access',
      'Commemorative VIP laminate',
      'Priority entry to venue'
    ]
  },
  {
    type: 'Standard',
    price: 299,
    icon: Users,
    description: 'Great seats with good value',
    features: [
      'Reserved seating in main area',
      'Standard entry access',
      'Regular amenities access'
    ]
  },
  {
    type: 'Economic',
    price: 199,
    icon: Ticket,
    description: 'Affordable seats to enjoy the show',
    features: [
      'General admission seating',
      'Standard amenities access'
    ]
  }
]

interface SeatSelectionProps {
  onSelectTier: (tier: TicketTier) => void
  selectedTier?: TicketTier
  concertInfo: {
    title: string
    date: string
    time: string
    venue: string
  }
}

export function SeatSelection({ onSelectTier, selectedTier, concertInfo }: SeatSelectionProps) {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])
  const [showLoginDialog, setShowLoginDialog] = useState(false)

  const handleCheckout = () => {
    setShowLoginDialog(true)
  }

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{concertInfo.title}</h2>
        <p className="text-xl text-gray-400">
          {concertInfo.date} · {concertInfo.time} · {concertInfo.venue}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        <div>
          {/* Seating Chart */}
          <div className="mb-12">
            <SeatingChart 
              onSeatSelect={setSelectedSeats}
              selectedSeats={selectedSeats}
            />
          </div>

          {/* Ticket Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ticketTiers.map((tier) => (
              <div
                key={tier.type}
                className={`relative rounded-xl overflow-hidden transition-all duration-200 ${
                  selectedTier?.type === tier.type 
                    ? 'bg-[#4338ca]/20 border-[#4338ca]' 
                    : 'bg-black/20 hover:bg-black/40 border-transparent'
                } border p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#4338ca]/20">
                    <tier.icon className="w-6 h-6 text-[#4338ca]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{tier.type}</h3>
                    <p className="text-sm text-gray-400">{tier.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold">
                    ${tier.price}
                    <span className="text-sm font-normal text-gray-400"> / ticket</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4338ca]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => onSelectTier(tier)}
                  className={`w-full ${
                    selectedTier?.type === tier.type
                      ? 'bg-[#4338ca] hover:bg-[#3730a3] text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {selectedTier?.type === tier.type ? 'Selected' : 'Select Tickets'}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Summary */}
        <div className="lg:sticky lg:top-4 lg:h-fit">
          <TicketSummary
            tickets={selectedSeats.map(seat => ({
              section: seat.section,
              row: String.fromCharCode(65 + seat.row), // Convert number to letter (0 = A, 1 = B, etc.)
              seat: seat.number,
              price: selectedTier?.price || 0
            }))}
            onCheckout={handleCheckout}
            concertInfo={{
              title: "Taylor Swift: The Eras Tour",
              date: concertInfo.date,
              time: concertInfo.time,
              ticketType: selectedTier?.type || 'Standard'
            }}
          />
        </div>
      </div>
      {/* Login Dialog */}
      <LoginDialog 
        open={showLoginDialog} 
        onOpenChange={setShowLoginDialog}
      />
    </div>
  )
}

