'use client';

import { CreditCard, Calendar, RefreshCcw, Banknote } from 'lucide-react'
import { StageGradientBackground } from './ui/stage-gradient-background'

const benefits = [
  {
    icon: CreditCard,
    title: "Instalment Payment!",
    description: "You can pay a ticket in 2 portions throughout a fixed period of time. Start invoicing for free."
  },
  {
    icon: Calendar,
    title: "Online Booking!",
    description: "You can pay a ticket in 2 portions throughout a fixed period of time. Start invoicing for free."
  },
  {
    icon: RefreshCcw,
    title: "Refundable Tickets!",
    description: "You can pay a ticket in 2 portions throughout a fixed period of time. Start invoicing for free."
  },
  {
    icon: Banknote,
    title: "Cheapest Tickets!",
    description: "You can pay a ticket in 2 portions throughout a fixed period of time. Start invoicing for free."
  }
]

export function BenefitsSection() {
  return (
    <StageGradientBackground variant="subtle">
      <section className="w-full py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Benefits
            </h2>
            <p className="text-white/70 text-lg">
              we promise users with the standard of these 4 services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:scale-105 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15"
              >
                <div className="w-24 h-24 mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-300 rounded-full opacity-30 animate-pulse" />
                  <benefit.icon className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </StageGradientBackground>
  )
}

