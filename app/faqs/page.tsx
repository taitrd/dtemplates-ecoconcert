'use client'

import Link from "next/link"
import { Mail, Phone } from 'lucide-react'
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
    answer: "If you haven't received a confirmation email within 15 minutes of your purchase, please check your spam folder first. If you still can't find it, you can check your order status by logging into your account. If you need further assistance, please contact our support team with your transaction details."
  },
  {
    question: "I am not able/do not want to attend an already booked event for personal reasons. Is there a possibility to cancel/rebook the tickets?",
    answer: "Yes, you can cancel or rebook your tickets up to 48 hours before the event starts. To do this, log into your account, go to 'My Orders', and select the booking you wish to cancel. Please note that a cancellation fee may apply, and refunds typically take 5-7 business days to process."
  },
  {
    question: "I lost my e-Ticket. What can I do?",
    answer: "Don't worry! You can easily retrieve your e-Ticket by logging into your Ticketer account and accessing your order history. From there, you can download or email your tickets to yourself again. If you're having trouble, our customer service team can help resend your tickets."
  },
  {
    question: "An event was canceled/postponed/relocated, and I am not able/do not want to attend the event. Is it possible to cancel my tickets?",
    answer: "Yes, if an event is canceled, postponed, or relocated, you are eligible for a full refund of the ticket price. For canceled events, refunds are typically processed automatically. For postponed or relocated events, you can request a refund through your account or by contacting customer service."
  },
  {
    question: "I've already ordered tickets and now want to add another one. Is it possible yet to sit together?",
    answer: "Depending on availability, we can help you find adjacent seats. Contact our customer service with your booking reference, and we'll do our best to accommodate your request. We recommend checking the seat map first to see if there are available seats next to your current booking."
  },
  {
    question: "How do I transfer tickets to someone else?",
    answer: "You can transfer tickets through your Ticketer account. Go to 'My Orders', select the tickets you want to transfer, and click 'Transfer Tickets'. Enter the recipient's email address, and they'll receive instructions to claim the tickets."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit/debit cards (Visa, MasterCard, American Express), PayPal, and various digital payment methods. Some events may also offer payment plans or installment options."
  },
  {
    question: "Is there a limit to how many tickets I can buy?",
    answer: "Yes, ticket limits vary by event and are set by event organizers to ensure fair access for all fans. The specific limit will be clearly displayed during the purchase process."
  }
]

export default function FaqsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="bg-muted/30 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about tickets, events, and our services. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="bg-muted/50 rounded-lg overflow-hidden border-none"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                <span className="text-left">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Read More
          </Button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-muted/30 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still have question?</h2>
          <p className="text-muted-foreground mb-12">
            Contact us using the information below. We'll respond promptly to your inquiries and feedback.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link 
              href="mailto:helpcenter@ticketer.com"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
              helpcenter@ticketer.com
            </Link>

            <Link 
              href="tel:(010)123-4567"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              (010) 123-4567
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

