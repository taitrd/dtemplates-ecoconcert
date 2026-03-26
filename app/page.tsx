import { Banner } from "@/components/banner/banner"
import { Features } from "@/components/features/features"
import { Categories } from "@/components/categories/categories"
import { PopularProducts } from "@/components/products/popular-products"
import { PromotionalBanners } from "@/components/deals/promotional-banners"
import { HotDeals } from "@/components/deals/hot-deals"
import { SummerSaleBanner } from "@/components/banner/summer-sale-banner"
import { FeaturedProducts } from "@/components/products/featured-products"
import { LatestNews } from "@/components/news/latest-news"
import { ClientTestimonials } from "@/components/testimonials/client-testimonials"
import { PartnerBrands } from "@/components/partner-brands/partner-brands"

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <PopularProducts />
      <PromotionalBanners />
      <HotDeals />
      <SummerSaleBanner />
      <FeaturedProducts />
      <LatestNews />
      <ClientTestimonials />
      <PartnerBrands />
    </>
  )
}

