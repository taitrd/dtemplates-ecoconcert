"use client"

import { useState } from "react"
import Link from "next/link"
import { User, LogOut, Settings, ShoppingBag, LayoutDashboard } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AccountDropdown() {
  const [isLoggedIn, setIsLoggedIn] = useState(true) // This should be replaced with actual auth state

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
          <span className="sr-only">Account menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {isLoggedIn ? (
          <>
            <DropdownMenuItem asChild>
              <Link href="/account" className="flex w-full items-center">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/account/details" className="flex w-full items-center">
                <User className="mr-2 h-4 w-4" />
                Account Details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/account/orders" className="flex w-full items-center">
                <ShoppingBag className="mr-2 h-4 w-4" />
                My Orders
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/account/settings" className="flex w-full items-center">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href="/sign-in" className="flex w-full items-center">
                Sign In
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/register" className="flex w-full items-center">
                Create Account
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

