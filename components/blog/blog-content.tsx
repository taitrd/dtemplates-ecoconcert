"use client"

import Image from "next/image"
import { MessageSquare, Share2, Tag, ThumbsUp, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface BlogPost {
  title: string
  content: string
  image: string
  category: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  date: string
  comments: number
  tags: string[]
}

interface BlogContentProps {
  post: BlogPost
}

export function BlogContent({ post }: BlogContentProps) {
  const [comment, setComment] = useState("")

  return (
    <article className="space-y-8">
      <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            By {post.author.name}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            {post.comments} Comments
          </span>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-500">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>

      <h1 className="text-3xl font-bold">{post.title}</h1>

      <div 
        className="prose prose-gray max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Button key={tag} variant="secondary" size="sm">
            {tag}
          </Button>
        ))}
      </div>

      <Separator />

      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{post.author.name}</h3>
          <p className="text-sm text-gray-500">{post.author.bio}</p>
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="mb-6 text-2xl font-bold">Comments ({post.comments})</h2>
        <div className="space-y-6">
          <div className="rounded-lg border p-4">
            <div className="mb-4 flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <p className="text-gray-600">
              Great article! The information about organic products is very helpful.
              I'll definitely try some of these recommendations.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-500">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Like
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500">
                Reply
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Leave a Comment</h3>
            <Textarea
              placeholder="Write your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[100px]"
            />
            <Button className="bg-[#00B207] hover:bg-[#00B207]/90">
              Post Comment
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

