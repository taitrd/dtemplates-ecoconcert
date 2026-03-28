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
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground text-muted-foreground"
                )}
              >
                {step.number}
              </div>
              <span 
                className={cn(
                  "text-sm text-center",
                  currentStep >= step.number 
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
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
                    ? "bg-primary"
                    : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

