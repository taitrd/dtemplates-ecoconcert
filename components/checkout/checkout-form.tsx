"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { OrderSummary } from "./order-summary"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  companyName: z.string().optional(),
  streetAddress: z.string().min(5, "Street address is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  country: z.string().min(1, "Please select a country"),
  state: z.string().min(1, "Please select a state"),
  differentAddress: z.boolean(),
  orderNotes: z.string().optional(),
  paymentMethod: z.enum(["cod", "paypal", "amazonpay"])
})

export function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      streetAddress: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      differentAddress: false,
      orderNotes: "",
      paymentMethod: "cod"
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    console.log(values)
    // Handle form submission
    setIsSubmitting(false)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Billing Information</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="streetAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Street address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email Address" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone number" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country / Region</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="differentAddress"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Ship to a different address?</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <div>
              <h2 className="text-2xl font-bold mb-6">Additional Info</h2>
              <FormField
                control={form.control}
                name="orderNotes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Order Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Notes about your order, e.g. special notes for delivery"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
      <div className="lg:col-span-4">
        <OrderSummary 
          items={[
            {
              name: "Green Capsicum",
              quantity: 5,
              price: 70.00,
              image: "https://images.pexels.com/photos/139751/pexels-photo-139751.jpeg"
            },
            {
              name: "Red Capsicum",
              quantity: 1,
              price: 14.00,
              image: "https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg"
            }
          ]}
          subtotal={84.00}
          shipping="Free"
          total={84.00}
          onSubmit={form.handleSubmit(onSubmit)}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  )
}

