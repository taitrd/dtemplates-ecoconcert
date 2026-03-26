import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ConcertCardProps {
  artist: string
  location: string
  dateRange: string
  price: number
  imageUrl: string
}

export function ConcertCard({ artist, location, dateRange, price, imageUrl }: ConcertCardProps) {
  return (
    <Card className="w-[280px] bg-white/5 backdrop-blur-sm border-0">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt={artist}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{artist}</h3>
          <p className="text-sm text-gray-300 mb-2">
            {location} <span className="opacity-75">{dateRange}</span>
          </p>
          <p className="text-xl font-bold text-white">${price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-[#4338ca] hover:bg-[#3730a3] text-white" 
          variant="secondary"
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  )
}

