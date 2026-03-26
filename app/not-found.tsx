import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative w-full h-64 mb-8">
            <Image
              src="/404.svg"
              alt="404 Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Oops! page not found</h1>
          <p className="text-gray-600 mb-8">
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis
          </p>
          <Button 
            asChild
            className="bg-[#00B207] hover:bg-[#00B207]/90 px-8"
            size="lg"
          >
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

