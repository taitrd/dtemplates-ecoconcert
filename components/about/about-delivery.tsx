import Image from "next/image"
import { ArrowRight, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

const deliveryFeatures = [
  "Sed in metus pellentesque.",
  "Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.",
  "Maecenas ut nunc fringilla erat varius."
]

export function AboutDelivery() {
  return (
    <section className="bg-black py-24">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              We Delivered, You
              <br />
              Enjoy Your Order.
            </h2>
            <p className="mb-8 text-lg text-gray-400">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
              diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>
            <ul className="mb-8 space-y-4">
              {deliveryFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-400">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00B207]">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
              className="group bg-[#00B207] hover:bg-[#00B207]/90"
              size="lg"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/delivery-person.jpg"
              alt="Delivery person with groceries"
              width={600}
              height={700}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

