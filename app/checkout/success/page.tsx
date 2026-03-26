'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Download, Share2 } from 'lucide-react'
import { BookingSteps } from "@/components/booking-steps"

interface TicketDetails {
  concertName: string
  artist: string
  date: string
  time: string
  section: string
  seats: string[]
  quantity: number
  amount: number
  customerName: string
  contactNumber: string
  emailAddress: string
  image: string
}

const ticketDetails: TicketDetails = {
  concertName: "Eras Tour",
  artist: "Taylor Swift",
  date: "4 June",
  time: "8 pm",
  section: "D",
  seats: ["23", "24"],
  quantity: 2,
  amount: 800,
  customerName: "Elnaz Bolkhari",
  contactNumber: "98 935-498 28 65",
  emailAddress: "elnazbolkhari@gmail",
  image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
}

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <BookingSteps currentStep={4} />
        </div>

        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-green-500 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-400">
            You got your ticket. Download it here.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Purchase Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
              <p className="text-gray-400 text-lg">
                You've Successfully purchased the ticket for:
              </p>
              <p className="text-xl mt-2">
                {ticketDetails.concertName} {ticketDetails.artist} Concert.
              </p>
            </div>

            {/* Item Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Item Details</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Item:</span>
                  <span>{ticketDetails.concertName} {ticketDetails.artist} Concert</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity:</span>
                  <span>{ticketDetails.quantity} Tickets</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span>${ticketDetails.amount}</span>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Customer details</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Name:</span>
                  <span>{ticketDetails.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Contact Number:</span>
                  <span>{ticketDetails.contactNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Email Address:</span>
                  <span>{ticketDetails.emailAddress}</span>
                </div>
              </div>
            </div>

            {/* Special Rewards */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Thank you for choosing to buy from Ticketer!
              </h3>
              <p className="text-gray-400 mb-4">You've unlocked special rewards:</p>
              <div className="space-y-3">
                <div className="bg-green-500/10 text-green-500 p-4 rounded-lg">
                  20% Discount on your next ticket!
                </div>
                <div className="bg-green-500/10 text-green-500 p-4 rounded-lg">
                  Earned 50 points for your purchase!
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Ticket Preview */}
          <div>
            <Card className="bg-zinc-900 text-white overflow-hidden">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={ticketDetails.image}
                  alt={ticketDetails.artist}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold">Download Your Tickets!</h2>
                    <p className="text-xl">
                      '{ticketDetails.concertName}' {ticketDetails.artist} Concert
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-t border-white/20 pt-4">
                      <div>
                        <div className="text-sm text-gray-400">Section: {ticketDetails.section}</div>
                        <div>Seat: {ticketDetails.seats.join(', ')}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Date: {ticketDetails.date}</div>
                        <div>Time: {ticketDetails.time}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        className="bg-[#4338ca] hover:bg-[#3730a3] w-full"
                        onClick={() => window.print()}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Ticket
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-[#4338ca] text-[#4338ca] hover:bg-[#4338ca] hover:text-white w-full"
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: `${ticketDetails.concertName} Tickets`,
                              text: `Check out my tickets for ${ticketDetails.artist}'s concert!`,
                              url: window.location.href,
                            })
                          }
                        }}
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Ticket
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

