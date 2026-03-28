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
    <section className="w-full py-24 px-4 md:px-6 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[350px_1fr] gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Common <span className="text-primary italic">Questions</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Everything you need to know about booking, cancellations, and more.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm transition-all hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Us</span>
                  <a 
                    href="mailto:helpcenter@ticketer.com" 
                    className="text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    helpcenter@ticketer.com
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm transition-all hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Call Us</span>
                  <a 
                    href="tel:(010)123-4567" 
                    className="text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    (010) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                Still have questions?
              </h3>
              <p className="text-sm text-muted-foreground">
                Can't find the answer you're looking for? Our dedicated support team is here to help you 24/7.
              </p>
              <Button size="lg" className="w-full font-bold shadow-lg shadow-primary/20">
                Contact Support
              </Button>
            </div>
          </div>

          {/* Right Column - FAQs */}
          <div className="space-y-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-2xl px-2 overflow-hidden bg-card transition-all duration-300 data-[state=open]:border-primary/50 data-[state=open]:shadow-xl"
                >
                  <AccordionTrigger className="px-4 py-5 hover:no-underline font-bold text-lg text-left text-card-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6 pt-2 text-muted-foreground leading-relaxed text-base border-t border-border/50 mt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="flex justify-center pt-4">
              <Button 
                variant="outline" 
                size="lg"
                className="font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Explore Knowledge Base
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

