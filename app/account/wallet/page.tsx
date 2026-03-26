'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, Ticket, Download, Share2 } from 'lucide-react'

interface TicketWallet {
  id: string
  event: string
  date: string
  venue: string
  section: string
  row: string
  seat: string
  status: 'valid' | 'used' | 'expired'
  image: string
}

const tickets: TicketWallet[] = [
  {
    id: "TKT-001",
    event: "Taylor Swift: The Eras Tour",
    date: "June 4, 2024",
    venue: "Royal Albert Hall",
    section: "A",
    row: "12",
    seat: "24",
    status: "valid",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
  },
  {
    id: "TKT-002",
    event: "Beyoncé Renaissance Tour",
    date: "July 22, 2024",
    venue: "Wembley Stadium",
    section: "B",
    row: "15",
    seat: "10",
    status: "valid",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
  }
]

export default function WalletPage() {
  const getStatusColor = (status: TicketWallet['status']) => {
    switch (status) {
      case 'valid':
        return 'text-green-600 bg-green-50'
      case 'used':
        return 'text-gray-600 bg-gray-50'
      case 'expired':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="p-8">
      <div className="max-w-6xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold">Ticketer Wallet</h1>
        </div>

        {/* Wallet Balance */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-[#4338ca]/10">
                <Wallet className="h-6 w-6 text-[#4338ca]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Available Balance</p>
                <p className="text-2xl font-bold">$1,234.56</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Tickets */}
        <Card>
          <CardHeader>
            <CardTitle>My Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {tickets.map((ticket) => (
                <Card key={ticket.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={ticket.image}
                      alt={ticket.event}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-semibold text-white">{ticket.event}</h3>
                        <p className="text-sm text-gray-200">{ticket.date}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Venue</span>
                        <span>{ticket.venue}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Section</span>
                        <span>{ticket.section}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Row / Seat</span>
                        <span>{ticket.row} / {ticket.seat}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

