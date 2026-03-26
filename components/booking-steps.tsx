'use client'

import { cn } from "@/lib/utils"

interface BookingStepsProps {
  currentStep: number
}

const steps = [
  { number: 1, title: "Choose Time" },
  { number: 2, title: "Choose Seat" },
  { number: 3, title: "Checkout" },
  { number: 4, title: "Get Ticket" }
]

export function BookingSteps({ currentStep }: BookingStepsProps) {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.number} className="flex-1 flex items-center">
            <div className="flex flex-col items-center flex-1">
              <div 
                className={cn(
                  "w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2",
                  currentStep >= step.number 
                    ? "border-[#4338ca] bg-[#4338ca] text-white"
                    : "border-gray-300 text-gray-300"
                )}
              >
                {step.number}
              </div>
              <span 
                className={cn(
                  "text-sm text-center",
                  currentStep >= step.number 
                    ? "text-white"
                    : "text-gray-300"
                )}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  "h-[2px] flex-1 mx-4",
                  currentStep > step.number 
                    ? "bg-[#4338ca]"
                    : "bg-gray-300"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

