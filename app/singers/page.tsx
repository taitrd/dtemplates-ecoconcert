'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { User } from 'lucide-react'

const singers = [
  {
    id: 1,
    name: "Taylor Swift",
    dateRange: "Sep10 - Sep13",
    location: "London",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
  },
  {
    id: 2,
    name: "Dua Lipa",
    dateRange: "Sep14 - Sep19",
    location: "Manchester",
    image: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg"
  },
  {
    id: 3,
    name: "Olivia Rodrigo",
    dateRange: "Sep24 - Sep29",
    location: "London",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
  },
  {
    id: 4,
    name: "Adele",
    dateRange: "Nov02 - Nov04",
    location: "Bristol",
    image: "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg"
  },
  {
    id: 5,
    name: "Ed Sheeran",
    dateRange: "Oct15 - Oct20",
    location: "Manchester",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
  },
  {
    id: 6,
    name: "Beyoncé",
    dateRange: "Oct22 - Oct27",
    location: "London",
    image: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg"
  },
  {
    id: 7,
    name: "Lady Gaga",
    dateRange: "Nov05 - Nov10",
    location: "Birmingham",
    image: "https://images.pexels.com/photos/1687831/pexels-photo-1687831.jpeg"
  },
  {
    id: 8,
    name: "Justin Bieber",
    dateRange: "Nov12 - Nov17",
    location: "London",
    image: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg"
  },
  {
    id: 9,
    name: "Ariana Grande",
    dateRange: "Nov19 - Nov24",
    location: "Manchester",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
  },
  {
    id: 10,
    name: "The Weeknd",
    dateRange: "Nov26 - Dec01",
    location: "London",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
  },
  {
    id: 11,
    name: "Billie Eilish",
    dateRange: "Dec03 - Dec08",
    location: "Glasgow",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
  },
  {
    id: 12,
    name: "Harry Styles",
    dateRange: "Dec10 - Dec15",
    location: "London",
    image: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg"
  }
]

export default function SingersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredSingers = singers.filter(singer =>
    singer.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="max-w-md mx-auto mb-16">
          <div className="relative">
            <Input
              type="text"
              placeholder="Type a singer name"
              className="w-full pl-10 h-12 bg-white text-black rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Singers Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Singers</h1>
          <p className="text-gray-400">You can meet all singers here</p>
        </div>

        {/* Singers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSingers.map((singer) => (
            <div 
              key={singer.id} 
              className="group relative bg-white/5 rounded-2xl overflow-hidden transition-transform hover:scale-105"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={singer.image}
                  alt={singer.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h2 className="text-xl font-semibold text-white mb-1">
                  {singer.name}
                </h2>
                <p className="text-sm text-gray-300 mb-3">
                  {singer.dateRange} {singer.location}
                </p>
                <Link 
                  href={`/concerts/${singer.id}`}
                  className="inline-block text-[#4338ca] hover:text-[#3730a3] font-medium transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredSingers.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-400">No singers found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  )
}

