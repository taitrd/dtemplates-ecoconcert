'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock } from 'lucide-react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CountdownTimer } from "@/components/countdown-timer"
import { BookingSteps } from "@/components/booking-steps"

interface TicketItem {
  id: number
  title: string
  artist: string
  date: string
  time: string
  section: string
  row: string
  seat: number
  price: number
  ticketType: string
  image: string
}

const tickets: TicketItem[] = [
  {
    id: 1,
    title: "The Eras Tour",
    artist: "Taylor Swift",
    date: "June 04",
    time: "08:00 pm",
    section: "Section 1",
    row: "D",
    seat: 105,
    price: 399,
    ticketType: "VIP Ticket",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
  },
  {
    id: 2,
    title: "The Eras Tour",
    artist: "Taylor Swift",
    date: "June 04",
    time: "08:00 pm",
    section: "Section 1",
    row: "D",
    seat: 106,
    price: 399,
    ticketType: "VIP Ticket",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
  }
]

export default function CheckoutPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'venmo'>('card')
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      router.push('/checkout/success')
    } catch (error) {
      // Handle payment error
    } finally {
      setIsLoading(false)
    }
  }

  const subtotal = tickets.reduce((sum, ticket) => sum + ticket.price, 0)
  const serviceFee = tickets.length * 1 // $1 per ticket
  const total = subtotal + serviceFee

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <BookingSteps currentStep={3} />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground">Fill Out Necessary Information here.</p>
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mt-4">
            <Clock className="w-4 h-4 text-destructive" />
            <CountdownTimer days={0} className="text-destructive" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Ticket List */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Your Ticket List</h2>
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <Card key={ticket.id} className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24">
                        <Image
                          src={ticket.image}
                          alt={ticket.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{ticket.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {ticket.date}, {ticket.time} · {ticket.ticketType}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {ticket.section}, Row {ticket.row}, Seat {ticket.seat}
                        </p>
                        <p className="text-lg font-semibold mt-2">
                          ${ticket.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Service Fees</span>
                <span>${serviceFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-semibold pt-2 border-t border-border">
                <span>Total USD ({tickets.length} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Details */}
          <div>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Methods */}
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant={paymentMethod === 'paypal' ? 'default' : 'outline'}
                    className={`h-20 ${
                      paymentMethod === 'paypal' 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-muted border-border hover:bg-muted/80 text-foreground'
                    }`}
                    onClick={() => setPaymentMethod('paypal')}
                  >
                    <svg className="w-16 h-16" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M20.067 8.478c.492.315.844.825.983 1.421.545 2.338-.275 4.345-2.167 5.593-1.892 1.248-4.238 1.248-6.13 0-1.892-1.248-2.712-3.255-2.167-5.593.139-.596.491-1.106.983-1.421.492-.315 1.072-.473 1.654-.473h5.19c.582 0 1.162.158 1.654.473zM9.436 15.045c-.545 2.338.275 4.345 2.167 5.593 1.892 1.248 4.238 1.248 6.13 0 1.892-1.248 2.712-3.255 2.167-5.593-.139-.596-.491-1.106-.983-1.421-.492-.315-1.072-.473-1.654-.473h-5.19c-.582 0-1.162.158-1.654.473-.492.315-.844.825-.983 1.421z"
                      />
                    </svg>
                  </Button>
                  <Button
                    variant={paymentMethod === 'card' ? 'default' : 'outline'}
                    className={`h-20 ${
                      paymentMethod === 'card' 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-muted border-border hover:bg-muted/80 text-foreground'
                    }`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <svg className="w-16 h-16" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
                      />
                    </svg>
                  </Button>
                  <Button
                    variant={paymentMethod === 'venmo' ? 'default' : 'outline'}
                    className={`h-20 ${
                      paymentMethod === 'venmo' 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-muted border-border hover:bg-muted/80 text-foreground'
                    }`}
                    onClick={() => setPaymentMethod('venmo')}
                  >
                    <svg className="w-16 h-16" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-7.75 14.25l-3.5-7a.75.75 0 011.358-.633L12.5 15.5l3.892-5.883a.75.75 0 011.358.633l-3.5 7a.75.75 0 01-1.358 0z"
                      />
                    </svg>
                  </Button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="xxxx xxxx xxxx xxxx"
                        className="bg-muted border-border"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiration Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="bg-muted border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="xxx"
                          className="bg-muted border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Name On Card</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        className="bg-muted border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="discount">Discount Code</Label>
                      <Input
                        id="discount"
                        placeholder="Enter discount code"
                        className="bg-muted border-border"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    By clicking this, I agree to Ticketer{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={!agreedToTerms || isLoading}
                  onClick={handlePayment}
                >
                  {isLoading ? "Processing..." : `Pay $${total.toFixed(2)}`}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

