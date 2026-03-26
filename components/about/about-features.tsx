import { Check, Leaf, ShieldCheck, Truck } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: "100% Organic Food",
    description: "Morbi porttitor ligula in nunc varius sagittis proin dui nisi."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Morbi porttitor ligula in nunc varius sagittis proin dui nisi."
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description: "Morbi porttitor ligula in nunc varius sagittis proin dui nisi."
  },
  {
    icon: Check,
    title: "Best Price",
    description: "Morbi porttitor ligula in nunc varius sagittis proin dui nisi."
  }
]

export function AboutFeatures() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#00B207]/10">
                <feature.icon className="h-8 w-8 text-[#00B207]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

