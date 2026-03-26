import { Header } from "./header/header"
import { Banner } from "./banner/banner"
import { Features } from "./features/features"
import { Categories } from "./categories/categories"
import { PopularProducts } from "./products/popular-products"
import { PromotionalBanners } from "./deals/promotional-banners"
import { HotDeals } from "./deals/hot-deals"
import { SummerSaleBanner } from "./banner/summer-sale-banner"
import { FeaturedProducts } from "./products/featured-products"
import { LatestNews } from "./news/latest-news"
import { ClientTestimonials } from "./testimonials/client-testimonials"
import { PartnerBrands } from "./partner-brands/partner-brands"
import { Footer } from "./footer/footer"

export default function Home() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  )
}

