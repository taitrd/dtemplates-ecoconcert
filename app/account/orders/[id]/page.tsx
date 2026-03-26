import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { OrderDetails } from "@/components/account/order-details"

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Order Details • April 24, 2021 • 3 Products</h1>
        </div>
        <Button variant="link" className="text-[#00B207]" asChild>
          <Link href="/account/orders" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to List
          </Link>
        </Button>
      </div>
      <OrderDetails orderId={params.id} />
    </div>
  )
}

