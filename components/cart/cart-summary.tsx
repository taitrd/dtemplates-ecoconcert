import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CartSummaryProps {
  subtotal: number
  shipping: string
  total: number
}

export function CartSummary({ subtotal, shipping, total }: CartSummaryProps) {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-lg font-bold">Cart Total</h2>
      <div className="mt-4 space-y-4">
        <div className="flex justify-between border-b pb-4">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b pb-4">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-medium">{shipping}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total:</span>
          <span className="text-xl font-bold">${total.toFixed(2)}</span>
        </div>
        <Button 
          className="w-full bg-[#00B207] hover:bg-[#00B207]/90"
          asChild
        >
          <Link href="/checkout">
            Proceed to checkout
          </Link>
        </Button>
      </div>
    </div>
  )
}

