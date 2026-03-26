"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CouponFormProps {
  onApply: (code: string) => void
}

export function CouponForm({ onApply }: CouponFormProps) {
  const [code, setCode] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (code.trim()) {
      onApply(code)
    }
  }

  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-lg font-bold">Coupon Code</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button type="submit" variant="secondary">
            Apply Coupon
          </Button>
        </div>
      </form>
    </div>
  )
}

