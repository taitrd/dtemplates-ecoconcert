'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Calendar, Filter } from 'lucide-react'

interface Order {
  id: string
  event: string
  date: string
  status: 'upcoming' | 'completed' | 'cancelled'
  price: number
  quantity: number
  image: string
}

const orders: Order[] = [
  {
    id: "ORD-001",
    event: "Taylor Swift: The Eras Tour",
    date: "June 4, 2024",
    status: "upcoming",
    price: 399.99,
    quantity: 2,
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
  },
  {
    id: "ORD-002",
    event: "Beyoncé Renaissance Tour",
    date: "July 22, 2024",
    status: "upcoming",
    price: 299.99,
    quantity: 1,
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
  },
  {
    id: "ORD-003",
    event: "Ed Sheeran Concert",
    date: "March 15, 2024",
    status: "completed",
    price: 150.00,
    quantity: 2,
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
  }
]

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [dateFilter, setDateFilter] = useState<string>('all')

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.event.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'upcoming':
        return 'text-blue-500 bg-blue-500/10'
      case 'completed':
        return 'text-green-500 bg-green-500/10'
      case 'cancelled':
        return 'text-destructive bg-destructive/10'
      default:
        return 'text-muted-foreground bg-muted'
    }
  }

  return (
    <div className="p-8">
      <div className="max-w-6xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold">Orders</h1>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full md:w-[200px]"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="past">Past 30 Days</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-32">
                    <img
                      src={order.image}
                      alt={order.event}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">{order.event}</h3>
                        <p className="text-sm text-muted-foreground">Order ID: {order.id}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{order.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Quantity:</span>
                        <span>{order.quantity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Total:</span>
                        <span className="font-semibold">${(order.price * order.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline">View Details</Button>
                      {order.status === 'upcoming' && (
                        <>
                          <Button variant="outline">Download Ticket</Button>
                          <Button variant="outline" className="text-red-600 hover:text-red-700">
                            Cancel Order
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

