'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, DollarSign, TrendingUp, Users } from 'lucide-react'

interface Sale {
  id: string
  event: string
  date: string
  buyer: string
  price: number
  quantity: number
  status: 'completed' | 'pending' | 'refunded'
  image: string
}

const sales: Sale[] = [
  {
    id: "SL-001",
    event: "Taylor Swift: The Eras Tour",
    date: "June 4, 2024",
    buyer: "John Doe",
    price: 399.99,
    quantity: 2,
    status: "completed",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
  },
  {
    id: "SL-002",
    event: "Beyoncé Renaissance Tour",
    date: "July 22, 2024",
    buyer: "Jane Smith",
    price: 299.99,
    quantity: 1,
    status: "pending",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
  }
]

const stats = [
  {
    title: "Total Sales",
    value: "$2,389.98",
    icon: DollarSign,
    change: "+12.5%",
    timespan: "from last month"
  },
  {
    title: "Active Listings",
    value: "23",
    icon: TrendingUp,
    change: "+8.2%",
    timespan: "from last month"
  },
  {
    title: "Total Buyers",
    value: "48",
    icon: Users,
    change: "+15.3%",
    timespan: "from last month"
  }
]

export default function SalesPage() {
  const getStatusColor = (status: Sale['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-500/10'
      case 'pending':
        return 'text-yellow-500 bg-yellow-500/10'
      case 'refunded':
        return 'text-destructive bg-destructive/10'
      default:
        return 'text-muted-foreground bg-muted'
    }
  }

  return (
    <div className="p-8">
      <div className="max-w-6xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold">Sales Overview</h1>
          <Select defaultValue="thisMonth">
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="thisWeek">This Week</SelectItem>
              <SelectItem value="thisMonth">This Month</SelectItem>
              <SelectItem value="lastMonth">Last Month</SelectItem>
              <SelectItem value="thisYear">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="mt-2">
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="text-green-500">{stat.change}</span> {stat.timespan}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sales History */}
        <Card>
          <CardHeader>
            <CardTitle>Sales History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sales.map((sale) => (
                <div
                  key={sale.id}
                  className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-lg border"
                >
                  <div className="relative w-full md:w-32 h-24">
                    <img
                      src={sale.image}
                      alt={sale.event}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{sale.event}</h4>
                    <p className="text-sm text-muted-foreground">Order ID: {sale.id}</p>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm">
                      <span>Buyer: {sale.buyer}</span>
                      <span>Quantity: {sale.quantity}</span>
                      <span className="font-semibold">
                        Total: ${(sale.price * sale.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(sale.status)}`}>
                      {sale.status}
                    </span>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

