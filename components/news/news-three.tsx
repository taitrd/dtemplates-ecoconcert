import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageSquare, Tag, User } from 'lucide-react'

const news = [
  {
    title: "Curabitur porttitor orci eget neque accumsan venenatis",
    excerpt: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
    category: "Food",
    author: "Admin",
    date: "18 Nov",
    comments: 65,
    slug: "curabitur-porttitor-orci"
  },
  {
    title: "Donec mattis arcu faucibus suscipit viverra",
    excerpt: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum.",
    image: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg",
    category: "Food",
    author: "Admin",
    date: "29 Jan",
    comments: 45,
    slug: "donec-mattis-arcu"
  },
  {
    title: "Maecenas blandit risus elementum mauris malesuada",
    excerpt: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    category: "Food",
    author: "Admin",
    date: "21 Feb",
    comments: 23,
    slug: "maecenas-blandit-risus"
  }
]

export function NewsThree() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-sm font-medium text-[#00B207]">NEWS</span>
          <h2 className="text-3xl font-bold">Latest News & Articles</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article, index) => (
            <article key={index} className="group overflow-hidden rounded-lg bg-white shadow-sm">
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded bg-white px-2 py-1 text-center">
                    <span className="block text-lg font-bold">{article.date.split(' ')[0]}</span>
                    <span className="text-xs uppercase">{article.date.split(' ')[1]}</span>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    By {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {article.comments} Comments
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold group-hover:text-[#00B207]">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="mb-4 text-gray-600">{article.excerpt}</p>
                <Link 
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-[#00B207] hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

