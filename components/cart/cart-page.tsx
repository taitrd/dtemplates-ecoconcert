"use client"

import { CartItems } from "./cart-items"
import { CartSummary } from "./cart-summary"
import { CouponForm } from "./coupon-form"

const cartItems = [
  {
    id: "1",
    name: "Green Capsicum",
    price: 14.00,
    quantity: 5,
    image: "https://images.pexels.com/photos/139751/pexels-photo-139751.jpeg",
    subtotal: 70.00
  },
  {
    id: "2",
    name: "Red Capsicum",
    price: 14.00,
    quantity: 1,
    image: "https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg",
    subtotal: 14.00
  }
]

export function CartPage() {
  const handleQuantityChange = (id: string, quantity: number) => {
    console.log('Update quantity:', id, quantity)
  }

  const handleRemoveItem = (id: string) => {
    console.log('Remove item:', id)
  }

  const handleUpdateCart = () => {
    console.log('Update cart')
  }

  const handleApplyCoupon = (code: string) => {
    console.log('Apply coupon:', code)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <CartItems
          items={cartItems}
          onQuantityChange={handleQuantityChange}
          onRemoveItem={handleRemoveItem}
          onUpdateCart={handleUpdateCart}
        />
      </div>
      <div>
        <CartSummary subtotal={84.00} shipping="Free" total={84.00} />
        <div className="mt-6">
          <CouponForm onApply={handleApplyCoupon} />
        </div>
      </div>
    </div>
  )
}

