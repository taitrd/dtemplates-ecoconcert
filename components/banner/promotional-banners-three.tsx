import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const banners = [
  {
    title: "100% Fresh",
    subtitle: "Cow Milk",
    price: "14.99",
    image: "https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg",
    link: "/shop/dairy",
    bgColor: "bg-[#0066FF]"
  },
  {
    title: "DRINK SALE",
    subtitle: "Water & Soft Drink",
    image: "https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg",
    link: "/shop/beverages",
    bgColor: "bg-[#E3F2FF]",
    textColor: "text-[#1A1A1A]"
  },
  {
    title: "100% ORGANIC",
    subtitle: "Quick Breakfast",
    image: "https://images.pexels.com/photos/4082392/pexels-photo-4082392.jpeg",
    link: "/shop/breakfast",
    bgColor: "bg-gray-100",
    textColor: "text-[#1A1A1A]"
  }
]

export function PromotionalBannersThree() {
  return (
    <section className="container py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl ${banner.bgColor} p-8`}
          >
            <div className="relative z-10">
              <div className={`space-y-2 ${banner.textColor || 'text-white'}`}>
                <h3 className="text-xl font-bold">{banner.title}</h3>
                <p className="text-3xl font-bold">{banner.subtitle}</p>
                {banner.price && (
                  <p className="text-lg">
                    Starting at ${banner.price}
                  </p>
                )}
              </div>
              <Button 
                asChild
                className="mt-4 bg-white text-[#00B207] hover:bg-white/90"
              >
                <Link href={banner.link}>
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

