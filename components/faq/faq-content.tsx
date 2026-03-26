"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const faqs = {
  "Shopping Information": [
    {
      question: "How do I place an order?",
      answer: "You can place an order by selecting the products you want, adding them to your cart, and proceeding to checkout. Follow the simple steps to provide shipping and payment information."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and other digital payment options. All transactions are secure and encrypted."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
    }
  ],
  "Shipping & Delivery": [
    {
      question: "What are your shipping rates?",
      answer: "Shipping rates vary based on your location and the size of your order. We offer free shipping on orders over $50. You can see the exact shipping cost at checkout."
    },
    {
      question: "How long will it take to receive my order?",
      answer: "Standard delivery typically takes 3-5 business days. Express shipping options are available at checkout for faster delivery. International shipping may take longer."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping times and rates vary by location. You can see available shipping options at checkout."
    }
  ],
  "Returns & Refunds": [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Some restrictions apply to perishable goods."
    },
    {
      question: "How do I initiate a return?",
      answer: "To initiate a return, log into your account and go to your order history. Select the order and items you wish to return and follow the prompts. You'll receive a return shipping label via email."
    },
    {
      question: "When will I receive my refund?",
      answer: "Refunds are processed within 3-5 business days after we receive your return. The funds may take an additional 2-5 business days to appear in your account, depending on your bank."
    }
  ],
  "Account & Orders": [
    {
      question: "How do I create an account?",
      answer: "Click the 'Sign Up' button in the top right corner of our website. Fill in your details and create a password. You'll receive a confirmation email to verify your account."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placing them. Contact our customer service team immediately if you need to make changes to your order."
    },
    {
      question: "How can I reset my password?",
      answer: "Click the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to reset your password."
    }
  ]
}

export function FaqContent() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(faqs).map(([category, questions]) => (
            <Card key={category} className="p-6">
              <h2 className="text-xl font-bold mb-4">{category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

