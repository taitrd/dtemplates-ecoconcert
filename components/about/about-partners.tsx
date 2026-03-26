import Image from "next/image"

const partners = [
  { name: "Partner 1", logo: "/placeholder.svg" },
  { name: "Partner 2", logo: "/placeholder.svg" },
  { name: "Partner 3", logo: "/placeholder.svg" },
  { name: "Partner 4", logo: "/placeholder.svg" },
  { name: "Partner 5", logo: "/placeholder.svg" },
  { name: "Partner 6", logo: "/placeholder.svg" }
]

export function AboutPartners() {
  return (
    <section className="border-t py-12">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div key={partner.name} className="w-1/3 sm:w-1/6">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="mx-auto h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

