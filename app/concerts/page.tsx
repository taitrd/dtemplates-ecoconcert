'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, MapPin, Search, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ThisWeekConcerts } from '@/components/this-week-concerts'

const concerts = [
  {
    id: 1,
    artist: "Taylor Swift",
    date: "August 15, 2024",
    location: "New York, NY",
    venue: "Madison Square Garden",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    price: 150
  },
  {
    id: 2,
    artist: "Ed Sheeran",
    date: "September 3, 2024",
    location: "Los Angeles, CA",
    venue: "SoFi Stadium",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    price: 120
  },
  {
    id: 3,
    artist: "Beyoncé",
    date: "July 22, 2024",
    location: "London, UK",
    venue: "Wembley Stadium",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    price: 200
  },
  {
    id: 4,
    artist: "Coldplay",
    date: "October 10, 2024",
    location: "Paris, France",
    venue: "Stade de France",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    price: 130
  },
  {
    id: 5,
    artist: "Adele",
    date: "November 5, 2024",
    location: "Berlin, Germany",
    venue: "Mercedes-Benz Arena",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    price: 180
  },
  {
    id: 6,
    artist: "Drake",
    date: "August 28, 2024",
    location: "Toronto, Canada",
    venue: "Scotiabank Arena",
    image: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg",
    price: 140
  }
]

interface SearchParams {
  artist: string
  date: string
  location: string
}

export default function ConcertsPage() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    artist: '',
    date: '',
    location: ''
  })
  const [filteredConcerts, setFilteredConcerts] = useState(concerts)
  const [hasSearched, setHasSearched] = useState(false)

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setHasSearched(true)

    const filtered = concerts.filter(concert => {
      const artistMatch = !searchParams.artist ||
        concert.artist.toLowerCase().includes(searchParams.artist.toLowerCase())
      const dateMatch = !searchParams.date ||
        concert.date.toLowerCase().includes(searchParams.date.toLowerCase())
      const locationMatch = !searchParams.location ||
        concert.location.toLowerCase().includes(searchParams.location.toLowerCase())

      return artistMatch && dateMatch && locationMatch
    })

    setFilteredConcerts(filtered)
  }

  const handleReset = () => {
    setSearchParams({
      artist: '',
      date: '',
      location: ''
    })
    setFilteredConcerts(concerts)
    setHasSearched(false)
  }

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Upcoming Concerts</h1>

        {/* Filter Section */}
        <form onSubmit={handleFilter} className="mb-12 p-6 bg-white/5 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Input
                name="artist"
                type="text"
                placeholder="Artist name"
                value={searchParams.artist}
                onChange={(e) => setSearchParams(prev => ({ ...prev, artist: e.target.value }))}
                className="pl-10 text-white placeholder:text-gray-400"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative">
              <Select
                value={searchParams.date}
                onValueChange={(value) => setSearchParams(prev => ({ ...prev, date: value }))}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Select date" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="july">July 2024</SelectItem>
                  <SelectItem value="august">August 2024</SelectItem>
                  <SelectItem value="september">September 2024</SelectItem>
                  <SelectItem value="october">October 2024</SelectItem>
                  <SelectItem value="november">November 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <Select
                value={searchParams.location}
                onValueChange={(value) => setSearchParams(prev => ({ ...prev, location: value }))}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Select location" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-york">New York, NY</SelectItem>
                  <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                  <SelectItem value="london">London, UK</SelectItem>
                  <SelectItem value="paris">Paris, France</SelectItem>
                  <SelectItem value="berlin">Berlin, Germany</SelectItem>
                  <SelectItem value="toronto">Toronto, Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="flex-1 bg-[#4338ca] hover:bg-[#3730a3]">
                Apply Filters
              </Button>
              {hasSearched && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                >
                  Reset
                </Button>
              )}
            </div>
          </div>
        </form>

        {/* This Week Section */}
        {!hasSearched && <ThisWeekConcerts />}

        {/* No Results State */}
        {hasSearched && filteredConcerts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-2">
              Sorry, there aren't any search results for: {searchParams.artist || "your search"}
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We couldn't find any results matching your criteria
            </p>
            <div className="max-w-md mx-auto">
              <h3 className="font-semibold mb-4">Tips for improving the results:</h3>
              <ul className="text-gray-400 text-left space-y-2 mb-8">
                <li>• Check your spelling</li>
                <li>• Use different keywords and try again</li>
                <li>• Visit our Homepage to browse other events</li>
              </ul>
              <Link href="/">
                <Button className="bg-[#4338ca] hover:bg-[#3730a3]">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Home Page
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Concerts Grid */}
        {filteredConcerts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredConcerts.map((concert) => (
              <div key={concert.id} className="bg-white/5 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={concert.image}
                    alt={concert.artist}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{concert.artist}</h2>
                  <p className="text-gray-300 mb-1">{concert.date}</p>
                  <p className="text-gray-300 mb-1">{concert.location}</p>
                  <p className="text-gray-300 mb-4">{concert.venue}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${concert.price}</span>
                    <Link href={`/concerts/${concert.id}`}>
                      <Button className="bg-[#4338ca] hover:bg-[#3730a3]">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

