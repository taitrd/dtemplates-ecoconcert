import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export function SummerSaleBanner() {
  return (
    <section className="container py-16">
      <div className="relative overflow-hidden rounded-2xl bg-black">
        <div className="relative z-10 flex flex-col justify-center p-8 md:min-h-[300px] md:p-16 lg:w-1/2">
          <span className="mb-4 text-sm font-medium text-white">SUMMER SALE</span>
          <h2 className="mb-4 text-5xl font-bold">
            <span className="text-[#FF8A00]">37%</span>
            <span className="text-white"> OFF</span>
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Free on all your order. Free Shipping and 30 days money-back guarantee
          </p>
          <Link 
            href="/shop" 
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#00b207] px-8 py-4 font-medium text-white transition-transform hover:translate-x-2"
          >
            Shop Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <Image
          src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg"
          alt="Fresh vegetables on dark background"
          fill
          className="object-cover object-center md:object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>
    </section>
  )
}

