import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  max?: number
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? 'fill-[#FF8A00] text-[#FF8A00]'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

