import { HeaderThree } from "@/components/header/header-three"
import { HeroThree } from "@/components/hero/hero-three"
import { FeaturesThree } from "@/components/features/features-three"
import { ProductsThree } from "@/components/products/products-three"
import { PromotionalBannersThree } from "@/components/banner/promotional-banners-three"
import { DealsThree } from "@/components/deals/deals-three"
import { VideoTestimonialThree } from "@/components/testimonials/video-testimonial-three"
import { TestimonialsThree } from "@/components/testimonials/testimonials-three"
import { NewsThree } from "@/components/news/news-three"

export default function ThirdHome() {
  return (
    <div>
      <HeaderThree />
      <main>
        <HeroThree />
        <FeaturesThree />
        <ProductsThree />
        <PromotionalBannersThree />
        <DealsThree />
        <VideoTestimonialThree />
        <TestimonialsThree />
        <NewsThree />
      </main>
    </div>
  )
}

