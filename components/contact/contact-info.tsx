import { Mail, MapPin, Phone } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="rounded-lg border bg-white p-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00B207]/10">
            <MapPin className="h-5 w-5 text-[#00B207]" />
          </div>
          <div>
            <h3 className="font-semibold">Our Location</h3>
            <p className="mt-1 text-gray-500">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00B207]/10">
            <Mail className="h-5 w-5 text-[#00B207]" />
          </div>
          <div>
            <h3 className="font-semibold">Email Address</h3>
            <div className="mt-1 space-y-1 text-gray-500">
              <p>Proxy@gmail.com</p>
              <p>Help.proxy@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00B207]/10">
            <Phone className="h-5 w-5 text-[#00B207]" />
          </div>
          <div>
            <h3 className="font-semibold">Phone Number</h3>
            <div className="mt-1 space-y-1 text-gray-500">
              <p>(219) 555-0114</p>
              <p>(164) 333-0487</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

