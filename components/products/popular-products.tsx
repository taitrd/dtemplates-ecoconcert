import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { ProductCard } from "./product-card"

const products = [
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
  },
  {
    name: "Big Potatoes",
    price: 20.00,
    image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg",
    rating: 4
  },
  {
    name: "Corn",
    price: 20.00,
    image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg",
    rating: 4
  },
  {
    name: "Fresh Cauliflower",
    price: 12.00,
    image: "https://images.pexels.com/photos/461245/pexels-photo-461245.jpeg",
    rating: 4
  },
  {
    name: "Green Capsicum",
    price: 9.00,
    originalPrice: 20.99,
    image: "https://images.pexels.com/photos/139751/pexels-photo-139751.jpeg",
    rating: 4,
    onSale: true
  },
  {
    name: "Green Chili",
    price: 34.00,
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
    rating: 4
  }
]

export function PopularProducts() {
  return (
    <section className="container py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Popular Products</h2>
        <Link 
          href="/products" 
          className="flex items-center gap-2 text-[#00b207] hover:underline"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

