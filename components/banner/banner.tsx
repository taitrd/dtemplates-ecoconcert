import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Banner() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/3629537/pexels-photo-3629537.jpeg"
        alt="Fresh organic vegetables and fruits"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative h-full">
        <div className="flex h-full max-w-xl flex-col justify-center gap-6">
          <span className="inline-block rounded-full bg-[#84d187] px-4 py-1 text-sm font-medium text-[#002603]">
            Welcome to Ecobazar
          </span>
          <h1 className="text-5xl font-bold text-white">
            Fresh & Healthy 
            <br />
            Organic Food
          </h1>
          <p className="text-lg text-white/90">
            Free shipping on all your order. we deliver, you enjoy
          </p>
          <Button 
            size="lg"
            className="w-fit bg-[#00b207] hover:bg-[#00b207]/90"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  )
}

