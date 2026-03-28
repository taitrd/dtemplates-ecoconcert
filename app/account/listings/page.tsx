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
import { Search, Calendar, Filter, Plus } from 'lucide-react'

interface Listing {
  id: string
  event: string
  date: string
  status: 'active' | 'sold' | 'expired'
  price: number
  quantity: number
  image: string
  views: number
}

const listings: Listing[] = [
  {
    id: "LST-001",
    event: "Taylor Swift: The Eras Tour",
    date: "June 4, 2024",
    status: "active",
    price: 399.99,
    quantity: 2,
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    views: 245
  },
  {
    id: "LST-002",
    event: "Beyoncé Renaissance Tour",
    date: "July 22, 2024",
    status: "sold",
    price: 299.99,
    quantity: 1,
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    views: 189
  },
  {
    id: "LST-003",
    event: "Ed Sheeran Concert",
    date: "March 15, 2024",
    status: "expired",
    price: 150.00,
    quantity: 2,
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    views: 132
  }
]

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [dateFilter, setDateFilter] = useState<string>('all')

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.event.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || listing.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: Listing['status']) => {
    switch (status) {
      case 'active':
        return 'text-green-500 bg-green-500/10'
      case 'sold':
        return 'text-blue-500 bg-blue-500/10'
      case 'expired':
        return 'text-muted-foreground bg-muted'
      default:
        return 'text-muted-foreground bg-muted'
    }
  }

  return (
    <div className="p-8">
      <div className="max-w-6xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold">My Listings</h1>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Plus className="mr-2 h-4 w-4" />
              Create New Listing
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search listings..."
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredListings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-32">
                    <img
                      src={listing.image}
                      alt={listing.event}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">{listing.event}</h3>
                        <p className="text-sm text-muted-foreground">Listing ID: {listing.id}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(listing.status)}`}>
                          {listing.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{listing.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-semibold">${listing.price.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Quantity:</span>
                        <span>{listing.quantity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Views:</span>
                        <span>{listing.views}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline">Edit Listing</Button>
                      {listing.status === 'active' && (
                        <>
                          <Button variant="outline">Promote</Button>
                          <Button variant="outline" className="text-destructive">
                            Delete Listing
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

