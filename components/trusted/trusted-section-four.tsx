import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function TrustedSectionFour() {
  return (
    <section className="relative bg-black py-24 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 w-1/3 h-full">
        <div className="absolute inset-0 bg-white/10 transform -skew-x-12" />
      </div>
      
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Images Grid */}
          <div className="grid gap-4 grid-cols-2">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg"
                alt="Farmer with fresh apples"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2889013/pexels-photo-2889013.jpeg"
                alt="Man harvesting fruits"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center lg:pl-12">
            <h2 className="mb-8 text-4xl font-bold">
              100% Trusted
              <br />
              Organic Food Store
            </h2>
            
            <ul className="mb-8 space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00B207]">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Healthy & natural food for lovers of healthy food.</h3>
                  <p className="text-gray-400">
                    Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00B207]">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Fresh vegetables & fruits at your doorstep.</h3>
                  <p className="text-gray-400">
                    Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed arci et, rhoncus lobortis felis. Sed vestibulum nisi sit amet sapien.
                  </p>
                </div>
              </li>
            </ul>

            <Button 
              asChild
              className="w-fit bg-[#00B207] hover:bg-[#00B207]/90"
              size="lg"
            >
              <Link href="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Illustration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <Image
          src="/placeholder.svg"
          alt=""
          width={256}
          height={256}
          className="object-contain"
          role="presentation"
        />
      </div>
    </section>
  )
}

