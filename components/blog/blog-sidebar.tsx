import Image from "next/image"
import Link from "next/link"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Fresh Fruit", count: 134 },
  { name: "Vegetables", count: 150 },
  { name: "Cooking", count: 54 },
  { name: "Snacks", count: 47 },
  { name: "Beverages", count: 43 },
  { name: "Beauty & Health", count: 38 },
  { name: "Bread & Bakery", count: 15 }
]

const popularTags = [
  { name: "Healthy", active: false },
  { name: "Low fat", active: true },
  { name: "Vegetarian", active: false },
  { name: "Bread", active: false },
  { name: "Kid foods", active: false },
  { name: "Vitamins", active: false },
  { name: "Snacks", active: false },
  { name: "Tiffin", active: false },
  { name: "Meat", active: false },
  { name: "Launch", active: false },
  { name: "Dinner", active: false }
]

const galleryImages = [
  { src: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg", alt: "Fresh vegetables" },
  { src: "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg", alt: "Broccoli" },
  { src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", alt: "Healthy salad" },
  { src: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg", alt: "Fresh produce" },
  { src: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg", alt: "Carrots" },
  { src: "https://images.pexels.com/photos/42164/peas-vegetables-pea-pod-super-42164.jpeg", alt: "Peas" },
  { src: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg", alt: "Oranges" },
  { src: "https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg", alt: "Cucumber" }
]

const recentPosts = [
  {
    title: "Curabitur porttitor orci eget nequ accumsan.",
    date: "Apr 25, 2021",
    image: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg"
  },
  {
    title: "Donec mattis arcu faucibus suscipit viverra.",
    date: "Apr 25, 2021",
    image: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg"
  },
  {
    title: "Quisque posuere tempus rutrum. Integer velit ex.",
    date: "Apr 25, 2021",
    image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
  }
]

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      <div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10"
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold">Top Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={`/blog/category/${category.name.toLowerCase().replace(/ /g, '-')}`}
                className="flex items-center justify-between hover:text-[#00B207]"
              >
                <span>{category.name}</span>
                <span className="text-gray-500">({category.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold">Popular Tag</h2>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Button
              key={tag.name}
              variant={tag.active ? "default" : "secondary"}
              size="sm"
              className={tag.active ? "bg-[#00B207] hover:bg-[#00B207]/90" : ""}
            >
              {tag.name}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold">Our Gallery</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold">Recently Added</h2>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
              className="flex gap-4 hover:text-[#00B207]"
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

