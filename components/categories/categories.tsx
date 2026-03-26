import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from 'lucide-react'

const categories = [
  {
    title: "Fresh Fruit",
    image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    href: "/categories/fresh-fruit"
  },
  {
    title: "Fresh Vegetables",
    image: "https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg",
    href: "/categories/fresh-vegetables",
    active: true
  },
  {
    title: "Meat & Fish",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
    href: "/categories/meat-and-fish"
  },
  {
    title: "Snacks",
    image: "https://images.pexels.com/photos/1618574/pexels-photo-1618574.jpeg",
    href: "/categories/snacks"
  },
  {
    title: "Beverages",
    image: "https://images.pexels.com/photos/1937743/pexels-photo-1937743.jpeg",
    href: "/categories/beverages"
  },
  {
    title: "Beauty & Health",
    image: "https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg",
    href: "/categories/beauty-and-health"
  },
  {
    title: "Bread & Bakery",
    image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg",
    href: "/categories/bread-and-bakery"
  },
  {
    title: "Baking Needs",
    image: "https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg",
    href: "/categories/baking-needs"
  },
  {
    title: "Cooking",
    image: "https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg",
    href: "/categories/cooking"
  },
  {
    title: "Diabetic Food",
    image: "https://images.pexels.com/photos/5645034/pexels-photo-5645034.jpeg",
    href: "/categories/diabetic-food"
  },
  {
    title: "Dish Detergents",
    image: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg",
    href: "/categories/dish-detergents"
  },
  {
    title: "Oil",
    image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg",
    href: "/categories/oil"
  }
]

export function Categories() {
  return (
    <section className="container py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Popular Categories</h2>
        <Link 
          href="/categories" 
          className="flex items-center gap-2 text-[#00b207] hover:underline"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.href}
            className={`group relative flex aspect-square flex-col items-center justify-center rounded-lg bg-white p-4 text-center shadow-sm transition-all hover:shadow-md ${
              category.active ? 'ring-2 ring-[#00b207]' : ''
            }`}
          >
            <div className="relative mb-4 h-24 w-24">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-900">{category.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

