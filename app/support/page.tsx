import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function AccountSupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Account Support</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How Can We Help?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is here to assist you with any account-related issues or questions. Please choose from the options below or use our contact form for personalized support.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-muted-foreground mb-4">Get in touch via email for non-urgent inquiries.</p>
              <Link href="mailto:support@ticketer.com" className="text-primary hover:underline">
                support@ticketer.com
              </Link>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-muted-foreground mb-4">Call us for immediate assistance during business hours.</p>
              <Link href="tel:+1234567890" className="text-primary hover:underline">
                +1 (234) 567-890
              </Link>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <MessageCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-4">Chat with our support team in real-time.</p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Start Chat</Button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" className="bg-muted/50 border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" className="bg-muted/50 border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Support subject" className="bg-muted/50 border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Describe your issue" className="bg-muted/50 border-border" />
            </div>
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <p className="text-muted-foreground mb-4">
            For quick answers to common questions, please visit our FAQ page.
          </p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/faqs">View FAQs</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}

