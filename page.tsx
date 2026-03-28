import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ShoppingCart, User } from 'lucide-react'
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ConcertCarousel } from "@/components/concert-carousel"
import { BenefitsSection } from "@/components/benefits-section"
import { TimeRunningOut } from "@/components/time-running-out"
import { StepsSection } from "@/components/steps-section"
import { UpcomingConcerts } from "@/components/upcoming-concerts"
import { NewsletterSection } from "@/components/newsletter-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { PartnersSection } from "@/components/partners-section"
import { SiteFooter } from "@/components/site-footer"

export default function TicketBooking() {
  return (
    <div className="min-h-screen bg-[#0a0b2e] text-foreground">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-gray-300">
            Home
          </Link>
          <Link href="/concerts" className="text-sm font-medium hover:text-gray-300">
            Concerts
          </Link>
          <Link href="/singers" className="text-sm font-medium hover:text-gray-300">
            Singers
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Link href="/" className="text-2xl font-bold tracking-wider">
            TICKETER
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="hover:text-gray-300">
            <ShoppingCart className="h-6 w-6" />
          </Link>
          <Button variant="outline" className="bg-white text-[#0a0b2e] hover:bg-gray-200">
            <Link href="/login" className="flex items-center space-x-2">
              Login/Register
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Book Tickets Of Your Favorite Singers!
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Make Sure Don't Miss These 5 Up Coming's Concerts!
        </p>

        {/* Search Section */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Type a singer name"
              className="w-full pl-10 h-12 bg-white text-black"
            />
            <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
          </div>
          <Select>
            <SelectTrigger className="h-12 bg-white text-black flex-1">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <SelectValue placeholder="Date" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-12 bg-white text-black flex-1">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <SelectValue placeholder="Location" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
              <SelectItem value="miami">Miami</SelectItem>
            </SelectContent>
          </Select>
          <Button className="h-12 px-8 bg-[#4338ca] hover:bg-[#3730a3]">
            Find Ticket
          </Button>
        </div>
      </main>

      {/* Concert Carousel */}
      <ConcertCarousel />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Time Running Out Section */}
      <TimeRunningOut />

      {/* Steps Section */}
      <StepsSection />

      {/* Upcoming Concerts Section */}
      <UpcomingConcerts />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

