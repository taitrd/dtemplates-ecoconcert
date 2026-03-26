import { Breadcrumb } from "@/components/ui/breadcrumb"
import { CartPage } from "@/components/cart/cart-page"

export default function Cart() {
  return (
    <div className="container py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Shopping Cart', href: '/cart' }
      ]} />
      <div className="py-8">
        <h1 className="mb-8 text-2xl font-bold">Shopping Cart</h1>
        <CartPage />
      </div>
    </div>
  )
}

