"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageSquare, Tag, User, Grid, List } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const posts = [
  {
    title: "Curabitur porttitor orci eget neque accumsan venenatis",
    excerpt: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
    category: "Food",
    author: "Admin",
    date: "18 Nov",
    comments: 65,
    featured: true
  },
  {
    title: "Donec mattis arcu faucibus suscipit viverra",
    excerpt: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    image: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg",
    category: "Food",
    author: "Admin",
    date: "29 Jan",
    comments: 45
  },
  {
    title: "Maecenas blandit risus elementum mauris malesuada",
    excerpt: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    category: "Food",
    author: "Admin",
    date: "21 Feb",
    comments: 23
  },
  {
    title: "Quisque posuere tempus rutrum integer velit",
    excerpt: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
    category: "Food",
    author: "Admin",
    date: "15 Mar",
    comments: 32
  }
]

type ViewMode = "grid" | "list"
type SortOption = "newest" | "oldest" | "popular"

export function BlogPosts() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime()
    if (sortBy === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime()
    if (sortBy === "popular") return b.comments - a.comments
    return 0
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Sort by:</span>
          <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <p className="text-sm text-gray-500">Showing {sortedPosts.length} results</p>
      <div className={`grid gap-8 ${viewMode === "grid" ? "sm:grid-cols-2" : ""}`}>
        {sortedPosts.map((post, index) => (
          <Link 
            href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
            className="block"
          >
            <article 
              key={index} 
              className={`overflow-hidden rounded-lg border bg-white ${
                viewMode === "list" ? "flex flex-col sm:flex-row" : ""
              }`}
            >
              <div className={`relative ${viewMode === "list" ? "sm:w-1/3" : "aspect-[16/9]"}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 rounded bg-white px-2 py-1 text-center">
                  <span className="block text-lg font-bold">{post.date.split(' ')[0]}</span>
                  <span className="text-xs uppercase">{post.date.split(' ')[1]}</span>
                </div>
              </div>
              <div className={`p-6 ${viewMode === "list" ? "sm:w-2/3" : ""}`}>
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    By {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {post.comments} Comments
                  </span>
                </div>
                <h2 className="mb-4 text-xl font-semibold hover:text-[#00B207]">
                  <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <Button 
                  variant="outline" 
                  className="text-[#00B207] hover:bg-[#00B207] hover:text-white"
                  asChild
                >
                  <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>
                    Read More
                  </Link>
                </Button>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

