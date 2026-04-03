'use client'

import { Button } from "@/components/ui/button"
import { Monitor, Calendar, CreditCard, Download } from 'lucide-react'
import { motion } from "framer-motion"
import { StageGradientBackground } from "@/components/ui/stage-gradient-background"

const steps = [
  {
    icon: Monitor,
    title: "Choose A Concert",
    description: "You can see concert tickets in our website and check which one is good for you."
  },
  {
    icon: Calendar,
    title: "Choose Date & Time",
    description: "You Can check date and time of your favorite concert in our website"
  },
  {
    icon: CreditCard,
    title: "Pay Your Bill",
    description: "After choosing your date and time and your preferred seat you can pay ticket online"
  },
  {
    icon: Download,
    title: "Download Your Ticket!",
    description: "After completing checkout process you can download your ticket and get ready for concert"
  }
]

export function StepsSection() {
  return (
    <StageGradientBackground variant="intense">
      <section className="w-full py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-12">
          {/* Left side - Title and Button */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              4 Easy Steps To Buy a Ticket!
            </h2>
            <p className="text-white/70 mb-8">
              Get Familiar with our 4 easy working process
            </p>
            <Button 
              className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 px-8 font-bold"
              size="lg"
            >
              Buy Ticket
            </Button>
          </div>

          {/* Right side - Steps */}
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-cyan-400/20">
              <motion.div
                className="h-full bg-cyan-400"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 mb-4 rounded-full bg-cyan-400/20 flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-cyan-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
    </StageGradientBackground>
  )
}

