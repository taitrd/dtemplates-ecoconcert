'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const popularPosts = [
  {
    id: 1,
    title: "Tomorrowland's Epic Stage Design",
    excerpt: "Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...",
    date: "July 17, 2024",
    readTime: "9 min",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    author: {
      name: "Jonathan Wills",
      image: "/placeholder.svg"
    }
  },
  {
    id: 2,
    title: "Royal Albert Hall New Concerts",
    excerpt: "Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...",
    date: "July 17, 2024",
    readTime: "3 min",
    image: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg",
    author: {
      name: "Emily Parker",
      image: "/placeholder.svg"
    }
  },
  {
    id: 3,
    title: "Summer Music Festival",
    excerpt: "Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...",
    date: "June 03, 2024",
    readTime: "7 min",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    author: {
      name: "Alex Smith",
      image: "/placeholder.svg"
    }
  },
  {
    id: 4,
    title: "Germany's Festivals On Fire",
    excerpt: "Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...",
    date: "July 04, 2024",
    readTime: "8 min",
    image: "https://images.pexels.com/photos/1687831/pexels-photo-1687831.jpeg",
    author: {
      name: "Sophie Chen",
      image: "/placeholder.svg"
    }
  },
  {
    id: 5,
    title: "K-Pop Band Are Coming",
    excerpt: "Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...",
    date: "June 05, 2024",
    readTime: "3 min",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    author: {
      name: "David Kim",
      image: "/placeholder.svg"
    }
  }
]

const blogPosts = [
  // Previous blog posts...
  {
    id: 1,
    title: "Taylor Swift's Record-Breaking Eras Tour",
    excerpt: "Breaking down the numbers and impact of one of the most successful concert tours in history.",
    date: "July 12, 2024",
    category: "Concert News",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    readTime: "8 min",
    author: {
      name: "Jonathan Willis",
      image: "/placeholder.svg",
      role: "Music Journalist"
    }
  },
  // Add 11 more posts to create a 4x3 grid
  {
    id: 2,
    title: "The Evolution of Concert Technology",
    excerpt: "How modern technology is revolutionizing the live music experience for artists and fans alike.",
    date: "July 10, 2024",
    category: "Industry Insights",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    readTime: "6 min",
    author: {
      name: "Sarah Chen",
      image: "/placeholder.svg",
      role: "Tech Analyst"
    }
  },
  // ... Add more posts to fill the grid
  {
    id: 12,
    title: "The Future of Virtual Concerts",
    excerpt: "Exploring how virtual reality is changing the way we experience live music.",
    date: "July 1, 2024",
    category: "Technology",
    image: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg",
    readTime: "7 min",
    author: {
      name: "Alex Thompson",
      image: "/placeholder.svg",
      role: "Tech Writer"
    }
  }
]

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('latest')

  const filteredPosts = blogPosts
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return 0
    })

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground">
            Our place to share news about concerts, events and singers all around the world
          </p>
        </div>
      </div>

      {/* Popular Posts Section */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Popular Posts</h2>
            <Link 
              href="/blogs/popular" 
              className="text-primary hover:text-primary/90 flex items-center gap-2"
            >
              All News
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {popularPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Link href={`/blogs/${post.id}`}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.image} />
                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <time>{post.date}</time>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Search and Filter Section */}
      <div className="border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-[400px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search any blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] bg-muted/50 border-border text-foreground">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:bg-muted/50 transition-colors"
            >
              <Link href={`/blogs/${post.id}`}>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={post.author.image} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{post.author.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <time>{post.date}</time>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}

