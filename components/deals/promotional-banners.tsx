import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { CountdownTimer } from "./countdown-timer"

export function PromotionalBanners() {
  // Set target date to 30 days from now
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 30)

  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Sale of the Month Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-[#2B96CC] p-8">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <span className="mb-4 inline-block text-sm font-medium text-white">BEST DEALS</span>
              <h3 className="mb-6 text-4xl font-bold text-white">Sale of the Month</h3>
              <CountdownTimer targetDate={targetDate} />
            </div>
            <Link 
              href="/shop" 
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#00b207] transition-transform hover:translate-x-2"
            >
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <Image
            src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg"
            alt="Fresh vegetables and fruits"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Low-Fat Meat Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-black p-8">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <span className="mb-4 inline-block text-sm font-medium text-white">85% FAT FREE</span>
              <h3 className="mb-6 text-4xl font-bold text-white">Low-Fat Meat</h3>
              <p className="text-white">
                Started at <span className="text-[#FF8A00] text-2xl font-bold">$79.99</span>
              </p>
            </div>
            <Link 
              href="/shop" 
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#00b207] transition-transform hover:translate-x-2"
            >
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <Image
            src="https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg"
            alt="Fresh meat"
            fill
            className="object-cover opacity-60"
          />
        </div>

        {/* Fresh Fruit Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-[#FCC700] p-8">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <span className="mb-4 inline-block text-sm font-medium text-black">SUMMER SALE</span>
              <h3 className="mb-6 text-4xl font-bold text-black">100% Fresh Fruit</h3>
              <p className="flex items-center gap-2 text-black">
                Up to <span className="rounded-lg bg-black px-3 py-1 text-white">64% OFF</span>
              </p>
            </div>
            <Link 
              href="/shop" 
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#00b207] transition-transform hover:translate-x-2"
            >
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <Image
            src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg"
            alt="Fresh fruits"
            fill
            className="object-cover opacity-20"
          />
        </div>
      </div>
    </section>
  )
}

