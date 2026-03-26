import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/star-rating"
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'

const categories = [
  { name: 'Fresh Fruit', count: 134 },
  { name: 'Vegetables', count: 150 },
  { name: 'Cooking', count: 54 },
  { name: 'Snacks', count: 47 },
  { name: 'Beverages', count: 43 },
  { name: 'Beauty & Health', count: 38 },
  { name: 'Bread & Bakery', count: 15 },
]

const ratings = [
  { stars: 5, label: '5.0' },
  { stars: 4, label: '4.0 & up' },
  { stars: 3, label: '3.0 & up' },
  { stars: 2, label: '2.0 & up' },
  { stars: 1, label: '1.0 & up' },
]

const popularTags = [
  'Healthy', 'Low fat', 'Vegetarian', 'Kid foods', 'Vitamins', 'Bread',
  'Meat', 'Snacks', 'Tiffin', 'Launch', 'Dinner', 'Breakfast', 'Fruit'
]

const saleProducts = [
  { name: 'Red Capsicum', price: 32.00, originalPrice: 20.99, image: '/placeholder.svg', rating: 4 },
  { name: 'Chanise Cabbage', price: 24.00, originalPrice: 20.99, image: '/placeholder.svg', rating: 4 },
  { name: 'Green Capsicum', price: 32.00, originalPrice: 20.99, image: '/placeholder.svg', rating: 4 },
]

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([50, 1500])
  const [selectedCategory, setSelectedCategory] = useState('Vegetables')
  const [selectedRating, setSelectedRating] = useState(4)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="flex items-center justify-between text-lg font-semibold mb-2">
          All Categories
          <ChevronUp className="h-5 w-5" />
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name} className="flex items-center">
              <Checkbox
                id={category.name}
                checked={category.name === selectedCategory}
                onCheckedChange={() => setSelectedCategory(category.name)}
              />
              <label htmlFor={category.name} className="ml-2 flex-grow">
                {category.name}
              </label>
              <span className="text-sm text-gray-500">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="flex items-center justify-between text-lg font-semibold mb-2">
          Price
          <ChevronUp className="h-5 w-5" />
        </h3>
        <Slider
          defaultValue={priceRange}
          max={1500}
          step={1}
          onValueChange={setPriceRange}
        />
        <div className="mt-2 flex justify-between text-sm">
          <span>Price: ${priceRange[0]} — ${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="flex items-center justify-between text-lg font-semibold mb-2">
          Rating
          <ChevronUp className="h-5 w-5" />
        </h3>
        <ul className="space-y-2">
          {ratings.map((rating) => (
            <li key={rating.stars} className="flex items-center">
              <Checkbox
                id={`rating-${rating.stars}`}
                checked={rating.stars === selectedRating}
                onCheckedChange={() => setSelectedRating(rating.stars)}
              />
              <label htmlFor={`rating-${rating.stars}`} className="ml-2 flex items-center">
                <StarRating rating={rating.stars} />
                <span className="ml-2">{rating.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="flex items-center justify-between text-lg font-semibold mb-2">
          Popular Tag
          <ChevronUp className="h-5 w-5" />
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Button key={tag} variant="outline" size="sm">
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-[#FFF3E5] p-4">
        <h3 className="text-2xl font-bold text-[#FF8A00] mb-2">79% Discount</h3>
        <p className="text-sm mb-4">on your first order</p>
        <div className="relative h-32 mb-4">
          <Image
            src="/placeholder.svg"
            alt="Discount offer"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <Link href="/shop" className="inline-flex items-center text-[#00B207] hover:underline">
          Shop Now
          <ChevronDown className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Sale Products</h3>
        <ul className="space-y-4">
          {saleProducts.map((product) => (
            <li key={product.name} className="flex items-center gap-4">
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="font-medium">{product.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-[#00B207] font-semibold">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                </div>
                <StarRating rating={product.rating} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

