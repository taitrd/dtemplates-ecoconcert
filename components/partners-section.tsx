import Image from "next/image"

const partners = [
  {
    name: "Partner 1",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Abstract",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Aspen Online",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Grand Events",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Peppermint",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Pixie Labs",
    logo: "/placeholder.svg?height=40&width=120",
  }
]

export function PartnersSection() {
  return (
    <section className="w-full py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="w-full max-w-[160px] h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

