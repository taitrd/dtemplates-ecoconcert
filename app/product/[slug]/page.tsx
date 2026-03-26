import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ProductDetails } from "@/components/products/product-details"
import { ProductTabs } from "@/components/products/product-tabs"
import { RelatedProducts } from "@/components/products/related-products"

const product = {
  name: "Organic Green Apple",
  slug: "organic-green-apple",
  price: 14.99,
  originalPrice: 20.99,
  discount: 25,
  rating: 4.5,
  reviewCount: 89,
  description: "Fresh and crisp organic green apples. Perfect for snacking, baking, or adding to your favorite recipes. Grown without the use of synthetic pesticides or fertilizers.",
  longDescription: "Sed commodo aliquam dui ac porta. Fusce ipsum felis. Imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis.",
  additionalDescription: "Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.",
  features: [
    "100g of fresh leaves provides.",
    "Aliquam ac est at augue volutpat elementum.",
    "Quisque nec enim eget sapien molestie.",
    "Proin convallis odio volutpat finibus posuere."
  ],
  images: [
    "https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg",
    "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg",
    "https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg",
    "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
  ],
  category: "Fruits",
  sku: "FRTA001",
  stock: 50,
  variants: [
    { name: "Size", options: ["Small", "Medium", "Large"] },
    { name: "Package", options: ["Single", "Pack of 4", "Box of 12"] }
  ],
  specifications: {
    weight: "500g - 700g per piece",
    dimensions: "7-8 cm diameter",
    category: "Organic Fruits",
    stock: 50,
    tags: ["Organic", "Fresh", "Fruits", "Healthy", "Natural", "Vitamin C", "Dietary Fiber"]
  },
  reviews: {
    average: 4.5,
    total: 89,
    distribution: [50, 25, 10, 3, 1],
    items: [
      {
        author: "Sarah Johnson",
        rating: 5,
        date: "2 days ago",
        content: "These apples are incredibly fresh and crisp! The flavor is perfect - sweet with just the right amount of tartness. I love that they're organic and the size is consistent. Will definitely buy again!",
        helpful: 12,
        image: "/placeholder.svg"
      },
      {
        author: "Michael Chen",
        rating: 4,
        date: "1 week ago",
        content: "Good quality apples, arrived in perfect condition. The packaging was secure and protected the fruit well. Would recommend for both eating fresh and baking.",
        helpful: 8
      },
      {
        author: "Emma Wilson",
        rating: 5,
        date: "2 weeks ago",
        content: "Excellent product! These apples are perfect for my morning smoothies. They're always fresh and last longer than the ones I get from the supermarket.",
        helpful: 15,
        image: "/placeholder.svg"
      }
    ]
  }
}

export default function ProductPage() {
  return (
    <div>
      <div className="container py-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: product.name, href: `/product/${product.slug}` }
        ]} />
        <ProductDetails product={product} />
      </div>
      <ProductTabs 
        description={product.longDescription}
        additionalDescription={product.additionalDescription}
        features={product.features}
        specifications={product.specifications}
        reviews={product.reviews}
      />
      <RelatedProducts />
    </div>
  )
}

