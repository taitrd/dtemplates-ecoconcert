import { Breadcrumb } from "@/components/ui/breadcrumb"
import { AboutHero } from "@/components/about/about-hero"
import { AboutFeatures } from "@/components/about/about-features"
import { AboutDelivery } from "@/components/about/about-delivery"
import { AboutTeam } from "@/components/about/about-team"
import { AboutTestimonials } from "@/components/about/about-testimonials"
import { AboutPartners } from "@/components/about/about-partners"

export default function AboutPage() {
  return (
    <div>
      <div className="container py-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' }
        ]} />
      </div>
      <AboutHero />
      <AboutFeatures />
      <AboutDelivery />
      <AboutTeam />
      <AboutTestimonials />
      <AboutPartners />
    </div>
  )
}

