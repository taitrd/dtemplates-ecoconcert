import Link from "next/link"
import { MapPin } from 'lucide-react'

export function TopBar() {
  return (
    <div className="border-b py-2">
      <div className="container flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <select className="bg-transparent" defaultValue="Eng">
              <option>Eng</option>
              <option>Es</option>
              <option>Fr</option>
            </select>
            <select className="bg-transparent" defaultValue="USD">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/sign-in" className="hover:text-[#00B207]">
              Sign In
            </Link>
            <span>/</span>
            <Link href="/register" className="hover:text-[#00B207]">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

