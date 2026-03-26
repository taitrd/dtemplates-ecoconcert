import { Truck, Headphones, ShieldCheck, PackageCheck } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all your order"
  },
  {
    icon: Headphones,
    title: "Customer Support 24/7",
    description: "Instant access to Support"
  },
  {
    icon: ShieldCheck,
    title: "100% Secure Payment",
    description: "We ensure your money is save"
  },
  {
    icon: PackageCheck,
    title: "Money-Back Guarantee",
    description: "30 Days Money-Back Guarantee"
  }
]

export function Features() {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 gap-8 rounded-xl bg-white p-8 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00b207]/10">
              <feature.icon className="h-6 w-6 text-[#00b207]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

