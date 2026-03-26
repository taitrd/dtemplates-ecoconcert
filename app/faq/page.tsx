import { Breadcrumb } from "@/components/ui/breadcrumb"
import { FaqHero } from "@/components/faq/faq-hero"
import { FaqContent } from "@/components/faq/faq-content"
import { FaqContact } from "@/components/faq/faq-contact"

export default function FaqPage() {
  return (
    <div>
      <div className="container py-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'FAQ', href: '/faq' }
        ]} />
      </div>
      <FaqHero />
      <FaqContent />
      <FaqContact />
    </div>
  )
}

