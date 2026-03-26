import Image from "next/image"
import { StarRating } from "@/components/ui/star-rating"

interface TestimonialCardProps {
  content: string
  name: string
  image: string
  rating: number
}

export function TestimonialCard({ content, name, image, rating }: TestimonialCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 text-4xl text-[#00b207]">"</div>
      <p className="mb-6 text-gray-600">{content}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">Customer</p>
          </div>
        </div>
        <StarRating rating={rating} />
      </div>
    </div>
  )
}

