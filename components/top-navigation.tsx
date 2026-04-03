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
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const floatOnHero = false;

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
      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden hover:text-foreground p-2 -ml-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Links (shadcn NavigationMenu) */}
      <div className="hidden lg:flex flex-1">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Discover */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:text-primary hover:bg-transparent data-[state=open]:bg-primary/10 data-[active]:bg-primary/10 transition-colors">
                Discover
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/concerts" title="Concerts">
                    Explore upcoming concerts and events around the world.
                  </ListItem>
                  <ListItem href="/singers" title="Singers">
                    Find tours and tickets for your favorite artists.
                  </ListItem>
                  <ListItem href="/blogs" title="Blogs">
                    Read the latest news, reviews, and stories from the music
                    world.
                  </ListItem>
                  <ListItem href="/cart" title="Shopping Cart">
                    Review your selected tickets before checkout.
                  </ListItem>
                  <ListItem href="/" title="Modern Home Page">
                    Home page (Modern).
                  </ListItem>
                  <ListItem href="/home-2" title="Legacy Home Page">
                    Home page 2.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Help & Info */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:text-primary hover:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent transition-colors">
                Help & Info
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/about" title="About Us">
                    Learn about our mission to make ticketing secure and simple.
                  </ListItem>
                  <ListItem href="/contact" title="Contact Us">
                    Get in touch with our customer support team.
                  </ListItem>
                  <ListItem href="/faqs" title="FAQs">
                    Find answers to commonly asked questions.
                  </ListItem>
                  <ListItem href="/support" title="Support">
                    Need help? Explore our help center.
                  </ListItem>
                  <ListItem href="/concert-ticketing" title="Concert Ticketing">
                    Information about our ticketing process and services.
                  </ListItem>
                  <ListItem href="/reset-password" title="Reset Password">
                    Need to change your password? Start here.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Legal */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:text-accent-foreground hover:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent transition-colors">
                Legal
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/privacy" title="Privacy Policy">
                    How we handle your data and privacy.
                  </ListItem>
                  <ListItem href="/terms" title="Terms & Conditions">
                    Our general terms and conditions.
                  </ListItem>
                  <ListItem href="/terms-of-use" title="Terms of Use">
                    Rules for using our platform.
                  </ListItem>
                  <ListItem href="/cookies" title="Cookies Policy">
                    Information about our cookie usage.
                  </ListItem>
                  <ListItem href="/acceptable-use" title="Acceptable Use">
                    Guidelines on acceptable platform usage.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
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

      {/* Mobile Hamburger Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 flex flex-col space-y-4 lg:hidden overflow-y-auto max-h-[80vh]">
          <div className="space-y-4">
            <h4 className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">
              Discover
            </h4>
            <div className="flex flex-col space-y-3 pl-2 border-l-2 border-border/50">
              <Link
                href="/concerts"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Concerts
              </Link>
              <Link
                href="/singers"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Singers
              </Link>
              <Link
                href="/blogs"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/cart"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Shopping Cart
              </Link>
            </div>

            <h4 className="font-semibold text-muted-foreground uppercase text-xs tracking-wider mt-6">
              Help & Info
            </h4>
            <div className="flex flex-col space-y-3 pl-2 border-l-2 border-border/50">
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/faqs"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>
              <Link
                href="/support"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
              <Link
                href="/concert-ticketing"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Concert Ticketing
              </Link>
              <Link
                href="/reset-password"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Reset Password
              </Link>
            </div>

            <h4 className="font-semibold text-muted-foreground uppercase text-xs tracking-wider mt-6">
              Legal
            </h4>
            <div className="flex flex-col space-y-3 pl-2 border-l-2 border-border/50">
              <Link
                href="/privacy"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Terms & Conditions
              </Link>
              <Link
                href="/terms-of-use"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Terms of Use
              </Link>
              <Link
                href="/cookies"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cookies Policy
              </Link>
              <Link
                href="/acceptable-use"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Acceptable Use
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
