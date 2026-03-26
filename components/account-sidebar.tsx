'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, User, ClipboardList, ListChecks, ArrowRightLeft, CreditCard, Wallet, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"

const user = {
  name: "Elnaz Bolkhari",
  email: "elnazbolkhari@gmail.com",
  image: "/placeholder.svg"
}

const navigation = [
  {
    name: "My Account",
    href: "/account",
    icon: User
  },
  {
    name: "Orders",
    href: "/account/orders",
    icon: ClipboardList
  },
  {
    name: "Listings",
    href: "/account/listings",
    icon: ListChecks
  },
  {
    name: "Sales",
    href: "/account/sales",
    icon: ArrowRightLeft
  },
  {
    name: "Payments",
    href: "/account/payments",
    icon: CreditCard
  },
  {
    name: "Ticketer Wallet",
    href: "/account/wallet",
    icon: Wallet
  },
  {
    name: "Settings",
    href: "/account/settings",
    icon: Settings
  }
]

export function AccountSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-[300px] min-h-screen bg-white p-6">
      <div className="flex flex-col h-full">
        {/* Profile Section */}
        <div className="flex flex-col items-start space-y-6 pb-6 border-b">
          <div className="flex items-center justify-between w-full">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-gray-100"
            >
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 pt-6">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-[#ebebf9] text-gray-900" 
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

