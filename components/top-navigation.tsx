"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AccountDropdown } from "@/components/account-dropdown";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useLayout } from "@/components/providers/layout-provider";
import { MobileSheet } from "@/components/features/nav/mobile-sheet";
import { NAV_CATEGORIES } from "@/lib/constants/navigation";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function TopNavigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { floatOnHero } = useLayout();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
        floatOnHero
          ? "fixed top-0 left-0 right-0"
          : "sticky top-0 border-b border-border bg-background/80 backdrop-blur-md",
        floatOnHero &&
          (isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border text-foreground "
            : "bg-transparent backdrop-blur-none border-b-transparent text-background dark:text-muted-foreground "),
      )}
    >
      {/* Mobile Menu Trigger (Sheet) */}
      <MobileSheet />

      {/* Desktop Links (shadcn NavigationMenu) */}
      <div className="hidden lg:flex flex-1">
        <NavigationMenu>
          <NavigationMenuList>
            {NAV_CATEGORIES.map((category) => (
              <NavigationMenuItem key={category.title}>
                <NavigationMenuTrigger className="bg-transparent hover:text-primary hover:bg-transparent data-[state=open]:bg-primary/10 data-[active]:bg-primary/10 transition-colors">
                  {category.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {category.items.map((item) => (
                      <ListItem
                        key={item.href}
                        href={item.href}
                        title={item.title}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Logo */}
      <div className="flex-1 md:flex-none flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wider text-primary"
        >
          <Image
            src={"/ticketer.png"}
            height={80}
            width={130}
            className="object-cover min-h-6 max-h-10"
            alt="Ticketer"
            fetchPriority="high"
          />
        </Link>
      </div>

      {/* Account / User Menu */}
      <div className="flex items-center space-x-4 flex-1 justify-end">
        <AccountDropdown />
      </div>
    </nav>
  );
}
