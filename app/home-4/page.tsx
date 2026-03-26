import { HeaderFour } from "@/components/header/header-four"
import { HeroFour } from "@/components/hero/hero-four"
import { FeaturesFour } from "@/components/features/features-four"
import { CategoriesFour } from "@/components/categories/categories-four"
import { PromotionalBannersFour } from "@/components/banner/promotional-banners-four"
import { TrustedSectionFour } from "@/components/trusted/trusted-section-four"
import { StatsFour } from "@/components/stats/stats-four"
import { PartnerBrandsFour } from "@/components/brands/partner-brands-four"
import { FooterFour } from "@/components/footer/footer-four"

export default function FourthHome() {
  return (
    <div>
      <HeaderFour />
      <main>
        <HeroFour />
        <FeaturesFour />
        <CategoriesFour />
        <PromotionalBannersFour />
        <TrustedSectionFour />
        <StatsFour />
        <PartnerBrandsFour />
      </main>
      <FooterFour />
    </div>
  )
}

