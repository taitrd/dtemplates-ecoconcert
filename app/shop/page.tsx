import { ProductCard } from "@/components/products/product-card"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { FilterSidebar } from "@/components/shop/filter-sidebar"
import { ChevronDown, Search } from 'lucide-react'

const products = [
  {
    name: "Fresh Organic Apples",
    price: 4.99,
    image: "https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg",
    rating: 4.5
  },
  {
    name: "Ripe Bananas",
    price: 2.99,
    image: "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg",
    rating: 4.2
  },
  {
    name: "Fresh Strawberries",
    price: 3.99,
    image: "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg",
    rating: 4.8
  },
  {
    name: "Organic Carrots",
    price: 1.99,
    image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg",
    rating: 4.0
  },
  {
    name: "Fresh Tomatoes",
    price: 2.49,
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
    rating: 4.3
  },
  {
    name: "Organic Broccoli",
    price: 3.49,
    image: "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg",
    rating: 4.1
  },
  {
    name: "Red Bell Peppers",
    price: 2.99,
    image: "https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg",
    rating: 4.4
  },
  {
    name: "Fresh Lettuce",
    price: 1.79,
    image: "https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg",
    rating: 4.2
  },
  {
    name: "Organic Cucumbers",
    price: 2.29,
    image: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg",
    rating: 4.0
  },
  {
    name: "Fresh Blueberries",
    price: 4.99,
    image: "https://images.pexels.com/photos/70862/pexels-photo-70862.jpeg",
    rating: 4.7
  },
  {
    name: "Organic Spinach",
    price: 2.99,
    image: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg",
    rating: 4.3
  },
  {
    name: "Fresh Lemons",
    price: 1.99,
    image: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg",
    rating: 4.1
  }
]

export default function ShopPage() {
  return (
    <div className="container py-8">
      <Breadcrumb items={[{ label: 'Shop', href: '/shop' }]} />
      <h1 className="my-8 text-3xl font-bold">Shop</h1>
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <FilterSidebar />
        </div>
        <div className="md:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Input 
                type="search" 
                placeholder="Search products..." 
                className="w-64"
              />
              <Button size="icon">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <Select>
              <option value="">Sort by</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Rating</option>
            </Select>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline">
              Load More
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

