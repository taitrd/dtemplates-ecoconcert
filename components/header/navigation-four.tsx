import Link from "next/link"

const navigation = [
  { name: "Home", href: "/", active: true },
  { name: "Shop", href: "/shop" },
  { name: "Pages", href: "/pages" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
]

export function NavigationFour() {
  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between py-4">
        <ul className="flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-sm font-medium ${
                  item.active ? "text-[#00B207]" : "text-gray-600 hover:text-[#00B207]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

