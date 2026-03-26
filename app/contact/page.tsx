import { Breadcrumb } from "@/components/ui/breadcrumb"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactMap } from "@/components/contact/contact-map"

export default function ContactPage() {
  return (
    <div>
      <div className="container py-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', href: '/contact' }
        ]} />
        <div className="py-8">
          <h1 className="mb-8 text-2xl font-bold">Contact Us</h1>
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
          <div className="mt-12">
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  )
}

