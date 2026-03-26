import { Truck, Headphones, ShoppingBag, Package } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping with discount",
    highlighted: true
  },
  {
    icon: Headphones,
    title: "Great Support 24/7",
    description: "Instant access to Contact"
  },
  {
    icon: ShoppingBag,
    title: "100% Sucure Payment",
    description: "We ensure your money is save"
  },
  {
    icon: Package,
    title: "Money-Back Guarantee",
    description: "30 days money-back guarantee"
  }
]

export function FeaturesThree() {
  return (
    <div className="container -mt-16 relative z-10">
      <div className="grid gap-6 rounded-xl bg-white p-8 shadow-lg md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 rounded-lg p-4 transition-colors ${
              feature.highlighted ? "bg-[#00B207] text-white" : ""
            }`}
          >
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
              feature.highlighted 
                ? "bg-white/20" 
                : "bg-[#00B207]/10"
            }`}>
              <feature.icon className={`h-6 w-6 ${
                feature.highlighted 
                  ? "text-white" 
                  : "text-[#00B207]"
              }`} />
            </div>
            <div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className={`text-sm ${
                feature.highlighted 
                  ? "text-white/90" 
                  : "text-gray-500"
              }`}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

