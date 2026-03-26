import Link from "next/link"
import { Apple, Carrot, Fish, Drumstick, Coffee, IceCream, Cake, Cookie, ChefHat, Plus } from 'lucide-react'

const categories = [
  { name: "Fresh Fruit", icon: Apple, href: "/categories/fresh-fruit" },
  { name: "Vegetables", icon: Carrot, href: "/categories/vegetables", active: true },
  { name: "River Fish", icon: Fish, href: "/categories/river-fish" },
  { name: "Chicken & Meat", icon: Drumstick, href: "/categories/chicken-meat" },
  { name: "Drink & Water", icon: Coffee, href: "/categories/drink-water" },
  { name: "Yogurt & Ice Cream", icon: IceCream, href: "/categories/yogurt-ice-cream" },
  { name: "Cake & Bread", icon: Cake, href: "/categories/cake-bread" },
  { name: "Butter & Cream", icon: Cookie, href: "/categories/butter-cream" },
  { name: "Cooking", icon: ChefHat, href: "/categories/cooking" },
]

export function CategoriesSidebar() {
  return (
    <div className="w-full max-w-[280px] bg-white">
      <div className="space-y-1">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className={`flex items-center gap-3 px-4 py-3 hover:bg-[#00B207]/10 hover:text-[#00B207] transition-colors ${
              category.active ? 'bg-[#00B207] text-white hover:bg-[#00B207] hover:text-white' : ''
            }`}
          >
            <category.icon className="h-5 w-5" />
            <span>{category.name}</span>
          </Link>
        ))}
        <Link
          href="/categories"
          className="flex items-center gap-3 px-4 py-3 hover:bg-[#00B207]/10 hover:text-[#00B207] transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>View all Category</span>
        </Link>
      </div>
    </div>
  )
}

