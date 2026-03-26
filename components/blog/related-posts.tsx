import Image from "next/image"
import Link from "next/link"
import { MessageSquare, Tag, User } from 'lucide-react'

const relatedPosts = [
  {
    title: "Donec mattis arcu faucibus suscipit viverra",
    excerpt: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.",
    image: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg",
    category: "Food",
    author: "Admin",
    date: "29 Jan",
    comments: 45,
    slug: "donec-mattis-arcu-faucibus-suscipit-viverra"
  },
  {
    title: "Maecenas blandit risus elementum mauris",
    excerpt: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    category: "Food",
    author: "Admin",
    date: "21 Feb",
    comments: 23,
    slug: "maecenas-blandit-risus-elementum-mauris"
  }
]

export function RelatedPosts() {
  return (
    <div className="mt-16">
      <h2 className="mb-8 text-2xl font-bold">Related Posts</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {relatedPosts.map((post, index) => (
          <article key={index} className="overflow-hidden rounded-lg border bg-white">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-4">
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
              <h3 className="mb-2 font-semibold hover:text-[#00B207]">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

