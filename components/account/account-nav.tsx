"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, History, Heart, ShoppingCart, Settings, LogOut } from 'lucide-react'
import { Card } from "@/components/ui/card"

interface NavItem {
  icon: React.ElementType
  label: string
  href: string
}

const navigation: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/account" },
  { icon: History, label: "Order History", href: "/account/orders" },
  { icon: Heart, label: "Wishlist", href: "/account/wishlist" },
  { icon: ShoppingCart, label: "Shopping Cart", href: "/cart" },
  { icon: Settings, label: "Settings", href: "/account/settings" },
]

export function AccountNav() {
  const pathname = usePathname()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    // Handle logout logic here
    console.log('Logging out...')
    setIsLoggingOut(false)
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Navigation</h2>
      <nav className="space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
              pathname === item.href
                ? 'bg-[#00B207]/10 text-[#00B207]' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
        <button
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          <LogOut className="h-5 w-5" />
          <span>{isLoggingOut ? 'Logging out...' : 'Log-out'}</span>
        </button>
      </nav>
    </Card>
  )
}

