import { Check } from 'lucide-react'

interface OrderTimelineProps {
  status: "Order received" | "Processing" | "on the way" | "Delivered"
}

export function OrderTimeline({ status }: OrderTimelineProps) {
  const steps = [
    { id: "01", label: "Order received", status: "complete" },
    { id: "02", label: "Processing", status: status === "Processing" ? "current" : status === "Order received" ? "upcoming" : "complete" },
    { id: "03", label: "On the way", status: status === "on the way" ? "current" : status === "Order received" || status === "Processing" ? "upcoming" : "complete" },
    { id: "04", label: "Delivered", status: status === "Delivered" ? "current" : "upcoming" }
  ] as const

  return (
    <div className="relative">
      <div className="absolute left-0 top-[15px] h-0.5 w-full bg-gray-200">
        <div
          className="absolute left-0 top-0 h-full bg-[#00B207] transition-all duration-500"
          style={{
            width: status === "Order received" ? "0%" :
                   status === "Processing" ? "33%" :
                   status === "on the way" ? "66%" :
                   "100%"
          }}
        />
      </div>
      <div className="relative z-10 flex justify-between">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
              step.status === "complete" ? "border-[#00B207] bg-[#00B207] text-white" :
              step.status === "current" ? "border-[#00B207] bg-white text-[#00B207]" :
              "border-gray-300 bg-white text-gray-300"
            }`}>
              {step.status === "complete" ? (
                <Check className="h-5 w-5" />
              ) : (
                step.id
              )}
            </div>
            <span className={`mt-2 text-sm ${
              step.status === "complete" || step.status === "current" ? "text-gray-900" : "text-gray-500"
            }`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

