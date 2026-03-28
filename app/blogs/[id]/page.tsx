'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Popular posts data
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

export default function BlogDetailsPage() {
  const params = useParams()
  const id = params.id
  const [email, setEmail] = useState('')

  // This would typically fetch the blog post data based on the ID
  const post = {
    id: Number(id),
    title: "Festival Watch: Your Guide to Summer 2024",
    content: "Lorem ipsum dolor sit amet consectetur. Nullam ac nunc urna vulputate cras dolor sed sit purus...",
    date: "July 17, 2024",
    category: "Concert News",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    readTime: "5 min",
    author: {
      name: "Jonathan Wills",
      image: "/placeholder.svg",
      role: "Music Journalist"
    },
    sections: [
      {
        title: "Introduction",
        content: "Lorem ipsum dolor sit amet consectetur. Nullam ac nunc urna vulputate cras dolor sed sit purus. Elit dignissim nunc eget orci. Tortor rhoncus adipiscing at mus luctus in in. Congue arcu turpis aliquet purus odio erat hendrerit tristique."
      },
      {
        title: "UK - (15-18 May 2024)",
        content: "The UK festival scene kicks off with some of the biggest names in music. From sprawling countryside venues to urban celebrations, there's something for every music lover."
      },
      {
        title: "Netherland - (7-9 June 2024)",
        content: "Dutch festivals are known for their incredible production values and diverse lineups. Experience the best of electronic and contemporary music in stunning locations."
      },
      {
        title: "Belgium - (4-7 July 2024)",
        content: "Belgium's rich festival tradition continues with world-class events that bring together international artists and local talents in historic settings."
      },
      {
        title: "Portugal - (11-13 July 2024)",
        content: "Portugal's summer festivals combine perfect weather with beautiful coastal locations and an eclectic mix of musical styles."
      }
    ]
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing:', email)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/blogs">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Blogs
          </Button>
        </Link>

        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <article>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.author.image} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[2/1] mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground mb-8">
                {post.content}
              </p>

              {/* Festival Watch Section */}
              <section className="my-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Festival Watch</h2>
                    <h3 className="text-2xl font-semibold mb-6">
                      Here are the Unmissable European music festival of 2024
                    </h3>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur. Nullam ac nunc urna vulputate cras dolor sed sit purus. Elit dignissim nunc eget orci. Tortor rhoncus adipiscing at mus luctus in in. Congue arcu turpis aliquet purus odio erat hendrerit tristique.
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
                      alt="Festival crowd in front of colorful stage"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </section>

              {/* Collapsible Sections */}
              <Accordion type="single" collapsible className="w-full">
                {post.sections.map((section, index) => (
                  <AccordionItem key={index} value={`section-${index}`}>
                    <AccordionTrigger className="text-xl font-semibold py-4">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {section.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Author Card */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={post.author.image} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold text-lg">{post.author.name}</h2>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Music journalist with over 10 years of experience covering festivals and live events across Europe.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Follow
              </Button>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-2">Subscribe our news letter</h2>
              <p className="text-muted-foreground text-sm mb-6">
                For weekly later news and offers, Join us here.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-muted border-border"
                  required
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Related Posts */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-semibold mb-4">Related Posts</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Link key={i} href={`/blogs/${i}`} className="block group">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={`https://images.pexels.com/photos/${1699161 + i}/pexels-photo-${1699161 + i}.jpeg`}
                          alt="Related post thumbnail"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          Another Festival Article {i}
                        </h3>
                        <p className="text-sm text-muted-foreground">July {15 + i}, 2024</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Popular Posts Section */}
        <section className="mt-16 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Popular Posts</h2>
            <Link 
              href="/blogs" 
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
                <CarouselItem key={post.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Link href={`/blogs/${post.id}`}>
                    <div className="group">
                      <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
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
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </section>
      </div>
    </div>
  )
}

