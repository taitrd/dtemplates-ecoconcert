import Image from "next/image"
import { StarRating } from "@/components/ui/star-rating"

const testimonials = [
  {
    content: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    author: "Robert Fox",
    role: "Customer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5
  },
  {
    content: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    author: "Dianne Russell",
    role: "Customer",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    rating: 5
  },
  {
    content: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    author: "Eleanor Pena",
    role: "Customer",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    rating: 5
  }
]

export function AboutTestimonials() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">What Our Customers Say</h2>
          <p className="mb-12 text-gray-500">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 mb-6 text-gray-600">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

