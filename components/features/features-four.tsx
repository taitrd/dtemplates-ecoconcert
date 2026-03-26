import { Truck, Headphones, ShoppingBag, Package } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping with discount",
    variant: "light"
  },
  {
    icon: Headphones,
    title: "Great Support 24/7",
    description: "Instant access to Contact",
    variant: "light"
  },
  {
    icon: ShoppingBag,
    title: "100% Sucure Payment",
    description: "We ensure your money is save",
    variant: "solid"
  },
  {
    icon: Package,
    title: "Money-Back Guarantee",
    description: "30 days money-back",
    variant: "light"
  }
]

export function FeaturesFour() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full ${
                feature.variant === "solid" 
                  ? "bg-[#00B207]" 
                  : "bg-[#00B207]/10"
              }`}>
                <feature.icon className={`h-8 w-8 ${
                  feature.variant === "solid" 
                    ? "text-white" 
                    : "text-[#00B207]"
                }`} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

