import Image from 'next/image'

const brands = [
  { name: 'Steps', logo: '/placeholder.svg' },
  { name: 'Mango', logo: '/placeholder.svg' },
  { name: 'Food Network', logo: '/placeholder.svg' },
  { name: 'Food', logo: '/placeholder.svg' },
  { name: 'Book Off', logo: '/placeholder.svg' },
  { name: 'G Series', logo: '/placeholder.svg' },
]

export function PartnerBrands() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {brands.map((brand) => (
            <div key={brand.name} className="w-1/3 sm:w-1/6">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
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

