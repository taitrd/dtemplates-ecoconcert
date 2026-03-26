import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { NewsCard } from "./news-card"

const latestNews = [
  {
    image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
    date: "18",
    month: "Nov",
    category: "Food",
    author: "Admin",
    comments: 65,
    title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    slug: "curabitur-porttitor-orci"
  },
  {
    image: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg",
    date: "29",
    month: "Jan",
    category: "Food",
    author: "Admin",
    comments: 65,
    title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    slug: "eget-lobortis-lorem-lacinia"
  },
  {
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    date: "21",
    month: "Feb",
    category: "Food",
    author: "Admin",
    comments: 65,
    title: "Maecenas blandit risus elementum mauris malesuada.",
    slug: "maecenas-blandit-risus"
  }
]

export function LatestNews() {
  return (
    <section className="container py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Latest News</h2>
        <Link 
          href="/blog" 
          className="flex items-center gap-2 text-[#00b207] hover:underline"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latestNews.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </section>
  )
}

