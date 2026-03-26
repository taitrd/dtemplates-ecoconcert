import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageCircle, Phone } from 'lucide-react'
import Link from "next/link"

export function FaqContact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#00B207]/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#00B207]" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Chat with our friendly team instantly
            </p>
            <Button className="bg-[#00B207] hover:bg-[#00B207]/90">
              Start Chat
            </Button>
          </Card>

          <Card className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#00B207]/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#00B207]" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Get in touch via email
            </p>
            <Button 
              className="bg-[#00B207] hover:bg-[#00B207]/90"
              asChild
            >
              <Link href="mailto:support@example.com">
                Send Email
              </Link>
            </Button>
          </Card>

          <Card className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#00B207]/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#00B207]" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">
              Call us for immediate help
            </p>
            <Button 
              className="bg-[#00B207] hover:bg-[#00B207]/90"
              asChild
            >
              <Link href="tel:+1234567890">
                Call Now
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}

