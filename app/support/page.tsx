import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function AccountSupportPage() {
  return (
    <div className="min-h-screen bg-[#0a0b2e] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Account Support</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How Can We Help?</h2>
          <p className="text-gray-300 mb-6">
            Our support team is here to assist you with any account-related issues or questions. Please choose from the options below or use our contact form for personalized support.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <Mail className="h-8 w-8 text-[#4338ca] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-300 mb-4">Get in touch via email for non-urgent inquiries.</p>
              <Link href="mailto:support@ticketer.com" className="text-[#4338ca] hover:underline">
                support@ticketer.com
              </Link>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <Phone className="h-8 w-8 text-[#4338ca] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-300 mb-4">Call us for immediate assistance during business hours.</p>
              <Link href="tel:+1234567890" className="text-[#4338ca] hover:underline">
                +1 (234) 567-890
              </Link>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <MessageCircle className="h-8 w-8 text-[#4338ca] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-300 mb-4">Chat with our support team in real-time.</p>
              <Button className="bg-[#4338ca] hover:bg-[#3730a3]">Start Chat</Button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" className="bg-white/10 border-white/20" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" className="bg-white/10 border-white/20" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Support subject" className="bg-white/10 border-white/20" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Describe your issue" className="bg-white/10 border-white/20" />
            </div>
            <Button type="submit" className="bg-[#4338ca] hover:bg-[#3730a3]">Send Message</Button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <p className="text-gray-300 mb-4">
            For quick answers to common questions, please visit our FAQ page.
          </p>
          <Button asChild variant="outline" className="border-[#4338ca] text-[#4338ca] hover:bg-[#4338ca] hover:text-white">
            <Link href="/faqs">View FAQs</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}

