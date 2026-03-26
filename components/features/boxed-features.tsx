import { Truck, Headphones, ShieldCheck, PackageCheck } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping with discount"
  },
  {
    icon: Headphones,
    title: "Great Support 24/7",
    description: "Instant access to Contact"
  },
  {
    icon: ShieldCheck,
    title: "100% Sucure Payment",
    description: "We ensure your money is save"
  },
  {
    icon: PackageCheck,
    title: "Money-Back Guarantee",
    description: "30 days money-back"
  }
]

export function BoxedFeatures() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-lg border bg-white p-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00B207]/10">
              <feature.icon className="h-6 w-6 text-[#00B207]" />
            </div>
            <div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

