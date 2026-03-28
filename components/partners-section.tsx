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
    <section className="w-full py-20 px-4 md:px-6 bg-background/80">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Our Trusted Partners</p>
          <h2 className="text-2xl font-bold text-muted-foreground/60">Collaborating with the Best in the Industry</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-70">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="w-full max-w-[140px] h-12 relative grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer"
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

