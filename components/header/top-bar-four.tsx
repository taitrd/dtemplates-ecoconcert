import { MapPin } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TopBarFour() {
  return (
    <div className="bg-[#F7F7F7] py-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="eng">
            <SelectTrigger className="h-8 w-[70px] border-0 bg-transparent text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eng">Eng</SelectItem>
              <SelectItem value="es">Es</SelectItem>
              <SelectItem value="fr">Fr</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="usd">
            <SelectTrigger className="h-8 w-[70px] border-0 bg-transparent text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
              <SelectItem value="gbp">GBP</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

