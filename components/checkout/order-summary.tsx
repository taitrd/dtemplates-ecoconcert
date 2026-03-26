import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface OrderItem {
  name: string
  quantity: number
  price: number
  image: string
}

interface OrderSummaryProps {
  items: OrderItem[]
  subtotal: number
  shipping: string
  total: number
  onSubmit: () => void
  isSubmitting: boolean
}

export function OrderSummary({ 
  items, 
  subtotal, 
  shipping, 
  total,
  onSubmit,
  isSubmitting
}: OrderSummaryProps) {
  return (
    <div className="rounded-lg border p-6 space-y-6">
      <h2 className="text-2xl font-bold">Order Summary</h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">
                  {item.name} <span className="text-gray-500">x{item.quantity}</span>
                </h3>
                <span className="font-medium">${item.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
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
      </div>

      <div>
        <h3 className="font-bold mb-4">Payment Method</h3>
        <RadioGroup defaultValue="cod" className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cod" id="cod" />
            <Label htmlFor="cod">Cash on Delivery</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal">PayPal</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="amazonpay" id="amazonpay" />
            <Label htmlFor="amazonpay">Amazon Pay</Label>
          </div>
        </RadioGroup>
      </div>

      <Button 
        className="w-full bg-[#00B207] hover:bg-[#00B207]/90"
        onClick={onSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Place Order"}
      </Button>
    </div>
  )
}

