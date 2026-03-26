"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
})

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // Handle form submission
    console.log(values)
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="Password" 
                      type={showPassword ? "text" : "password"} 
                      {...field} 
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-sm text-gray-500"
                  >
                    Remember me
                  </label>
                </div>
              )}
            />

            <Link
              href="/forgot-password"
              className="text-sm text-gray-500 hover:text-[#00B207]"
            >
              Forget Password
            </Link>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#00B207] hover:bg-[#00B207]/90"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Login"}
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm text-gray-500">
        Don&apos;t have account?{" "}
        <Link href="/register" className="font-medium text-[#00B207] hover:underline">
          Register
        </Link>
      </div>
    </div>
  )
}

