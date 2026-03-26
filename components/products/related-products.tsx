import { ProductCard } from "./product-card"

const relatedProducts = [
  {
    name: "Green Apple",
    price: 14.99,
    originalPrice: 20.99,
    image: "https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg",
    rating: 4,
    onSale: true
  },
  {
    name: "Chanise Cabbage",
    price: 14.99,
    image: "https://images.pexels.com/photos/257259/pexels-photo-257259.jpeg",
    rating: 4
  },
  {
    name: "Green Capsicum",
    price: 14.99,
    image: "https://images.pexels.com/photos/139751/pexels-photo-139751.jpeg",
    rating: 4,
    active: true
  },
  {
    name: "Ladies Finger",
    price: 14.99,
    image: "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg",
    rating: 4
  }
]

export function RelatedProducts() {
  return (
    <section className="container py-16">
      <h2 className="mb-8 text-2xl font-bold">Related Products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {relatedProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

