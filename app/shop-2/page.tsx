import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ShopTwo } from "@/components/shop/shop-two"

export default function ShopTwoPage() {
  return (
    <div>
      <div className="bg-gray-50 py-8">
        <div className="container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop-2' }
          ]} />
          <h1 className="mt-4 text-3xl font-bold">Shop Grid</h1>
        </div>
      </div>
      <ShopTwo />
    </div>
  )
}

