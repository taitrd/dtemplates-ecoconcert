'use client'

import { Mail, Phone, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "I haven't received any order confirmation yet. Did my booking go through?",
    answer: "Lorem ipsum dolor sit amet consectetur. Eleifend nunc habi loremut egestas. Convallis praesent egestas suscipit hendrerit sem eualiquet feugiat. Amet vulputate rhoncus falectus duis in ultricies pharetra."
  },
  {
    question: "I am not able/do not want to attend an already booked event for personal reasons. Is there a possibility to cancel/rebook the tickets?",
    answer: "We understand that plans can change. You can cancel or rebook your tickets up to 48 hours before the event. Please contact our customer service for assistance with the process."
  },
  {
    question: "I lost my e-Ticket. What can I do?",
    answer: "Don't worry! You can easily retrieve your e-Ticket by logging into your account and accessing your order history. Alternatively, check your email for the original ticket confirmation."
  },
  {
    question: "An event was canceled/postponed/relocated, and I am not able/do not want to attend the event. Is it possible to cancel my tickets?",
    answer: "Yes, if an event is canceled, postponed, or relocated, you are eligible for a refund. Contact our support team with your booking reference for assistance."
  },
  {
    question: "I've already ordered tickets and now want to add another one. Is it possible yet to sit together?",
    answer: "Depending on availability, we can help you find adjacent seats. Contact our customer service with your booking reference, and we'll do our best to accommodate your request."
  }
]

export function FaqSection() {
  return (
    <section className="w-full py-20 px-4 md:px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#4338ca]" />
                </div>
                <a 
                  href="mailto:helpcenter@ticketer.com" 
                  className="text-white hover:text-[#4338ca] transition-colors"
                >
                  helpcenter@ticketer.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#4338ca]" />
                </div>
                <a 
                  href="tel:(010)123-4567" 
                  className="text-white hover:text-[#4338ca] transition-colors"
                >
                  (010) 123-4567
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Still Have Questions?
              </h3>
              <p className="text-gray-400">
                Can't find the answer you're looking for? Please contact our help center.
              </p>
              <Button className="bg-[#4338ca] hover:bg-[#3730a3]">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Column - FAQs */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/10">
                    <span className="text-left text-white">{faq.question}</span>
                    <ChevronDown className="shrink-0 text-white transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-6 text-center">
              <Button 
                variant="outline" 
                className="border-[#4338ca] text-[#4338ca] hover:bg-[#4338ca] hover:text-white"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

