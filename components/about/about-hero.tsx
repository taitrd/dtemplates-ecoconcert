import Image from "next/image"
import { Headphones, Leaf, ShoppingBag, Star, Truck, Package } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: "100% Organic food",
    description: "100% healthy & Fresh food."
  },
  {
    icon: Headphones,
    title: "Great Support 24/7",
    description: "Instant access to Contact"
  },
  {
    icon: Star,
    title: "Customer Feedback",
    description: "Our happy customer"
  },
  {
    icon: ShoppingBag,
    title: "100% Sucure Payment",
    description: "We ensure your money is save"
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping with discount"
  },
  {
    icon: Package,
    title: "100% Organic Food",
    description: "100% healthy & Fresh food."
  }
]

export function AboutHero() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg"
              alt="Farmer with fresh produce"
              width={800}
              height={600}
              className="rounded-lg"
              priority
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-[#002603] lg:text-5xl">
                100% Trusted Organic Food Store
              </h1>
              <p className="text-gray-600">
                Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et
                rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu
                eros consequat tortor tincidunt feugiat.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00B207]/10">
                    <feature.icon className="h-6 w-6 text-[#00B207]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

