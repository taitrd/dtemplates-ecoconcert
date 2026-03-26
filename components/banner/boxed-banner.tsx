import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function BoxedBanner() {
  return (
    <div className="relative h-[500px] overflow-hidden bg-[#002603]">
      <div className="relative h-full">
        <div className="container flex h-full items-center">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl font-bold text-white">
              Fresh & Healthy
              <br />
              Organic Food
            </h1>
            <div className="space-y-2">
              <div className="text-lg text-white/80">SALE UP TO</div>
              <div className="text-4xl font-bold text-[#00B207]">48% OFF</div>
            </div>
            <Button 
              size="lg" 
              className="group bg-[#00B207] hover:bg-[#00B207]/90"
            >
              Shop now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2">
          <Image
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
            alt="Fresh organic food"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}

