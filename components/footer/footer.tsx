import Image from "next/image"
import Link from "next/link"
import { Newsletter } from "./newsletter"

const footerLinks = [
  {
    title: "My Account",
    links: ["My Account", "Order History", "Shopping Cart", "Wishlist"]
  },
  {
    title: "Helps",
    links: ["Contact", "Faqs", "Terms & Condition", "Privacy Policy"]
  },
  {
    title: "Proxy",
    links: ["About", "Shop", "Product", "Track Order"]
  },
  {
    title: "Categories",
    links: ["Fruit & Vegetables", "Meat & Fish", "Bread & Bakery", "Beauty & Health"]
  }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Newsletter />
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center">
              <Image src="/placeholder.svg" alt="Ecobazar" width={32} height={32} />
              <span className="ml-2 text-xl font-bold">Ecobazar</span>
            </Link>
            <p className="mb-4 text-gray-400">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <p className="text-gray-400">
              (219) 555-0114 or Proxy@gmail.com
            </p>
          </div>
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="mb-4 text-lg font-semibold">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-800 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg" alt="Apple Pay" width={32} height={20} />
            <Image src="/placeholder.svg" alt="Visa" width={32} height={20} />
            <Image src="/placeholder.svg" alt="Discover" width={32} height={20} />
            <Image src="/placeholder.svg" alt="Mastercard" width={32} height={20} />
            <Image src="/placeholder.svg" alt="Secure Payment" width={32} height={20} />
          </div>
        </div>
      </div>
    </footer>
  )
}

