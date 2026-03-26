'use client'

import { useState } from 'react'
import Image from "next/image"
import { Phone, Mail, Instagram, Facebook, Send, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success("Message sent successfully!")
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <div className="bg-black/40 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch with Us</h1>
          <p className="text-xl text-gray-300">
            Have questions or need assistance? We're here to help! Reach out to our team through any of the channels below.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        {/* Left Column - Contact Info */}
        <div className="relative bg-[#0a0b2e] text-white p-8 lg:p-12">
          <div className="relative z-10">
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call directly at:</p>
                  <a 
                    href="tel:+1-235678354" 
                    className="text-lg hover:text-[#4338ca] transition-colors"
                  >
                    +1-235678354
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email:</p>
                  <a 
                    href="mailto:Ticketer@gmail.com" 
                    className="text-lg hover:text-[#4338ca] transition-colors"
                  >
                    Ticketer@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-gray-400 mb-4">Follow us on social media:</p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4338ca] transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4338ca] transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4338ca] transition-colors"
                >
                  <Send className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4338ca] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
              alt="Concert crowd"
              fill
              className="object-cover opacity-20"
            />
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="p-8 lg:p-12">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
            <p className="text-gray-500 mb-8">
              Feel free to drop us a line below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#4338ca] hover:bg-[#3730a3]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

