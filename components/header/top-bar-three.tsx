import Link from "next/link"
import { MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TopBarThree() {
  return (
    <div className="bg-[#1A1A1A] py-2 text-white">
      <div className="container flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Select defaultValue="eng">
              <SelectTrigger className="h-8 w-[74px] border-0 bg-transparent text-white focus:ring-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eng">Eng</SelectItem>
                <SelectItem value="es">Es</SelectItem>
                <SelectItem value="fr">Fr</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="usd">
              <SelectTrigger className="h-8 w-[74px] border-0 bg-transparent text-white focus:ring-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/sign-in" className="hover:text-[#00B207]">
              Sign In
            </Link>
            <span>/</span>
            <Link href="/sign-up" className="hover:text-[#00B207]">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

