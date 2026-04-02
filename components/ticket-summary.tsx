'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

interface SelectedTicket {
  section: number
  row: string
  seat: number
  price: number
}

interface TicketSummaryProps {
  tickets: SelectedTicket[]
  onCheckout: () => void
  concertInfo: {
    title: string
    date: string
    time: string
    ticketType: string
  }
}

export function TicketSummary({ tickets, onCheckout, concertInfo }: TicketSummaryProps) {
  const subtotal = tickets.reduce((sum, ticket) => sum + ticket.price, 0)
  const serviceFee = tickets.length * 1 // $1 per ticket
  const total = subtotal + serviceFee

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      {/* Selected Tickets */}
      <div className="space-y-4 mb-6">
        {tickets.map((ticket, index) => (
          <div key={index} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="relative w-20 h-20">
              <Image
                src="/assets/asset_d1774d39.jpeg"
                alt="Taylor Swift"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{concertInfo.title}</h3>
              <p className="text-sm text-muted-foreground">
                {concertInfo.date}, {concertInfo.time} · {concertInfo.ticketType}
              </p>
              <p className="text-sm text-muted-foreground">
                Section {ticket.section}, Row {ticket.row}, Seat {ticket.seat}
              </p>
              <p className="text-lg font-semibold mt-1">
                ${ticket.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cost Summary */}
      <div className="space-y-3 border-t border-border pt-4 mb-6">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Service Fees</span>
          <span>${serviceFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold pt-3 border-t border-border">
          <span>Total USD ({tickets.length} item{tickets.length !== 1 ? 's' : ''})</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Button 
        onClick={onCheckout}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        Checkout
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

