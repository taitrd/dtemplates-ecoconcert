import { Breadcrumb } from "@/components/ui/breadcrumb"
import { CheckoutForm } from "@/components/checkout/checkout-form"

export default function CheckoutPage() {
  return (
    <div className="container py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Cart', href: '/cart' },
        { label: 'Checkout', href: '/checkout' }
      ]} />
      <div className="py-8">
        <h1 className="mb-8 text-2xl font-bold">Checkout</h1>
        <CheckoutForm />
      </div>
    </div>
  )
}

