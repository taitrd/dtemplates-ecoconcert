import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageSquare, Tag, User } from 'lucide-react'

interface NewsCardProps {
  image: string
  date: string
  month: string
  category: string
  author: string
  comments: number
  title: string
  slug: string
}

export function NewsCard({
  image,
  date,
  month,
  category,
  author,
  comments,
  title,
  slug
}: NewsCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded bg-white px-2 py-1 text-center">
          <span className="block text-lg font-bold">{date}</span>
          <span className="text-xs uppercase">{month}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            {category}
          </span>
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            By {author}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            {comments} Comments
          </span>
        </div>
        <h3 className="mb-4 text-xl font-semibold text-gray-900 group-hover:text-[#00b207]">
          {title}
        </h3>
        <Link 
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-[#00b207] hover:underline"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

