import { BoxedLayout } from "@/components/layouts/boxed-layout"
import { Header } from "@/components/header/header"
import { CategoriesSidebar } from "@/components/sidebar/categories-sidebar"
import { BoxedBanner } from "@/components/banner/boxed-banner"
import { BoxedFeatures } from "@/components/features/boxed-features"
import { BoxedFeaturedProducts } from "@/components/products/boxed-featured-products"
import { PopularProducts } from "@/components/products/popular-products"
import { PromotionalBanners } from "@/components/deals/promotional-banners"
import { HotDeals } from "@/components/deals/hot-deals"
import { SummerSaleBanner } from "@/components/banner/summer-sale-banner"
import { FeaturedProducts } from "@/components/products/featured-products"
import { LatestNews } from "@/components/news/latest-news"
import { ClientTestimonials } from "@/components/testimonials/client-testimonials"
import { PartnerBrands } from "@/components/partner-brands/partner-brands"
import { BoxedFooter } from "@/components/footer/boxed-footer"

export default function BoxedHome() {
  return (
    <BoxedLayout>
      <Header />
      <main>
        <div className="flex">
          <CategoriesSidebar />
          <div className="flex-1">
            <BoxedBanner />
          </div>
        </div>
        <BoxedFeatures />
        <BoxedFeaturedProducts />
        <PopularProducts />
        <PromotionalBanners />
        <HotDeals />
        <SummerSaleBanner />
        <FeaturedProducts />
        <LatestNews />
        <ClientTestimonials />
        <PartnerBrands />
      </main>
      <BoxedFooter />
    </BoxedLayout>
  )
}

