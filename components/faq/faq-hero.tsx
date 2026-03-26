import Image from "next/image"

export function FaqHero() {
  return (
    <div className="relative py-24 overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/3786314/pexels-photo-3786314.jpeg"
        alt="Background pattern"
        fill
        className="object-cover opacity-10"
        priority
      />
      <div className="relative container">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Have questions? We're here to help. Check out our frequently asked questions below.
          </p>
        </div>
      </div>
    </div>
  )
}

