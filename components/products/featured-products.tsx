import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { ProductCard } from "./product-card"

const featuredProducts = [
  {
    name: "Green Apple",
    price: 14.99,
    originalPrice: 20.99,
    image: "https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg",
    rating: 4,
    onSale: true
  },
  {
    name: "Fresh Indian Malta",
    price: 20.00,
    image: "https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg",
    rating: 4
  },
  {
    name: "Chinese Cabbage",
    price: 12.00,
    image: "https://images.pexels.com/photos/257259/pexels-photo-257259.jpeg",
    rating: 4,
    active: true
  },
  {
    name: "Green Lettuce",
    price: 9.00,
    image: "https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg",
    rating: 4
  },
  {
    name: "Eggplant",
    price: 34.00,
    image: "https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg",
    rating: 4
  }
]

export function FeaturedProducts() {
  return (
    <section className="container py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Link 
          href="/products" 
          className="flex items-center gap-2 text-[#00b207] hover:underline"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

