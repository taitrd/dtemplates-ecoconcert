import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Newsletter() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="max-w-md text-center md:text-left">
          <h2 className="mb-2 text-2xl font-bold">Subscribe our Newsletter</h2>
          <p className="text-gray-600">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="flex w-full max-w-md flex-col items-center gap-4 md:flex-row">
          <Input type="email" placeholder="Your email address" className="w-full" />
          <Button className="w-full md:w-auto">Subscribe</Button>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-[#00b207]" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#00b207]" aria-label="Twitter">
            <Twitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#00b207]" aria-label="Instagram">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  )
}

