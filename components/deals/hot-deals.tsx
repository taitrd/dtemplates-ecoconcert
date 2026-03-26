import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { ProductCard } from "../products/product-card"
import { FeaturedProduct } from "./featured-product"

const products = [
  {
    name: "Chinese Cabbage",
    price: 12.00,
    image: "https://images.pexels.com/photos/257259/pexels-photo-257259.jpeg",
    rating: 4
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
  },
  {
    name: "Big Potatoes",
    price: 12.00,
    image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg",
    rating: 4
  },
  {
    name: "Corn",
    price: 12.00,
    image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg",
    rating: 4
  },
  {
    name: "Red Chili",
    price: 12.00,
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
    rating: 4
  },
  {
    name: "Red Tomatos",
    price: 9.00,
    originalPrice: 20.99,
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
    rating: 4,
    onSale: true
  },
  {
    name: "Surjapur Mango",
    price: 34.00,
    image: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg",
    rating: 4
  }
]

export function HotDeals() {
  return (
    <section className="container py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Hot Deals</h2>
        <Link 
          href="/deals" 
          className="flex items-center gap-2 text-[#00b207] hover:underline"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <div className="md:col-span-2 xl:col-span-2">
          <FeaturedProduct
            name="Green Apple"
            price={12.00}
            originalPrice={24.00}
            image="https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg"
            rating={5}
            feedback={524}
            onSale={true}
            bestSale={true}
          />
        </div>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

