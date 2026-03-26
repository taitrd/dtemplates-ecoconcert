import Link from "next/link"
import { Phone } from 'lucide-react'

export function Navigation() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container flex items-center justify-between py-4">
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="hover:text-[#00B207]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/home-2" className="hover:text-[#00B207]">
              Home v2
            </Link>
          </li>
          <li>
            <Link href="/home-3" className="hover:text-[#00B207]">
              Home v3
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-[#00B207]">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-[#00B207]">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/pages" className="hover:text-[#00B207]">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#00B207]">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#00B207]">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <span>(219) 555-0114</span>
        </div>
      </div>
    </nav>
  )
}

