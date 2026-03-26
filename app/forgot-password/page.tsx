'use client'

import { useState } from 'react'
import Link from "next/link"
import { Mail, X, Ticket } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [sentEmail, setSentEmail] = useState('')

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Email is required')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email')
      return
    }

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setSentEmail(email)
    } catch (error) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      // Keep success state, just show loading for feedback
    } catch (error) {
      setError('Failed to resend email. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleTryAnotherEmail = () => {
    setIsSuccess(false)
    setEmail('')
    setError('')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <Ticket className="h-8 w-8" />
            <span className="text-2xl font-bold tracking-wider">TICKETER</span>
          </Link>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Forgot Password</h1>
            {!isSuccess && (
              <p className="text-sm text-muted-foreground mt-2">
                Please enter your email address associated with your account. 
                We'll send you a link to reset your password.
              </p>
            )}
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cn(
                      "pl-10",
                      error && "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  {email && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setEmail('')}
                    >
                      <X className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  )}
                </div>
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#4338ca] hover:bg-[#3730a3]"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <p className="text-sm">
                  A link to reset your password has been sent to:
                  <br />
                  <span className="font-medium">{sentEmail}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  If you don't receive it in a few minutes, check your junk
                  mail folder, or try another email to reset.
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleResend}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Resend email"}
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-3 text-center">
            <Button
              variant="link"
              className="text-[#4338ca] hover:text-[#3730a3]"
              asChild
            >
              <Link href="/login">
                Return to sign in
              </Link>
            </Button>

            {isSuccess && (
              <div>
                <Button
                  variant="link"
                  onClick={handleTryAnotherEmail}
                  className="text-[#4338ca] hover:text-[#3730a3]"
                >
                  Try another email
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

