import { Breadcrumb } from "@/components/ui/breadcrumb"
import { WishlistProducts } from "@/components/wishlist/wishlist-products"

export default function WishlistPage() {
  return (
    <div className="container py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Wishlist', href: '/wishlist' }
      ]} />
      <div className="py-8">
        <h1 className="mb-8 text-2xl font-bold">My Wishlist</h1>
        <WishlistProducts />
      </div>
    </div>
  )
}

