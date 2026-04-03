"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  User,
  ClipboardList,
  ListChecks,
  ArrowRightLeft,
  CreditCard,
  Wallet,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function AccountDropdown() {
  const [isLoggedIn] = useState(true); // Replace with actual auth state
  const user = {
    name: "Elnaz Bolkhari",
    email: "elnazbolkhari@gmail.com",
    image: "/assets/asset_1c7cdce5.jpeg",
  };

  const [notifications, setNotifications] = useState([
    { id: 1, message: "New event added in your area!" },
    { id: 2, message: "Your ticket for Taylor Swift concert is ready." },
  ]);

  const clearNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  if (!isLoggedIn) {
    return (
      <Button
        variant="outline"
        className="bg-card text-foreground hover:bg-muted"
      >
        <Link href="/login" className="flex items-center space-x-2">
          Login/Register
        </Link>
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-muted/50"
          >
            <Bell className="h-5 w-5" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-destructive" />
            )}
            <span className="sr-only">Notifications</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Notifications</h4>
              <p className="text-sm text-muted-foreground">
                You have {notifications.length} unread messages.
              </p>
            </div>
            <div className="grid gap-2">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-center">
                  <p className="text-sm">{notification.message}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto"
                    onClick={() => clearNotification(notification.id)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Dismiss</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8 rounded-full hover:bg-muted/50"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={user.image}
                alt={user.name}
                className="object-cover"
              />
              <AvatarFallback className="text-secondary-foreground">
                {user.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/account" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>My Account</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/account/orders" className="flex items-center">
              <ClipboardList className="mr-2 h-4 w-4" />
              <span>Orders</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/account/listings" className="flex items-center">
              <ListChecks className="mr-2 h-4 w-4" />
              <span>Listings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/account/sales" className="flex items-center">
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              <span>Sales</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/account/payments" className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Payments</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/account/wallet" className="flex items-center">
              <Wallet className="mr-2 h-4 w-4" />
              <span>Ticketer Wallet</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/account/settings" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
