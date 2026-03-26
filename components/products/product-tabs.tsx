"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Star, ThumbsUp, User } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface Tab {
  id: string
  label: string
}

const tabs: Tab[] = [
  { id: "description", label: "Descriptions" },
  { id: "additional", label: "Additional Information" },
  { id: "feedback", label: "Customer Feedback" },
]

interface ProductTabsProps {
  description: string
  additionalDescription: string
  features: string[]
  specifications: {
    weight: string
    dimensions: string
    category: string
    stock: number
    tags: string[]
  }
  reviews: {
    average: number
    total: number
    distribution: number[]
    items: {
      author: string
      rating: number
      date: string
      content: string
      helpful: number
      image?: string
    }[]
  }
}

export function ProductTabs({ 
  description, 
  additionalDescription, 
  features,
  specifications,
  reviews 
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className="mt-16">
      <div className="border-b">
        <div className="container">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-[#00B207] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#00B207]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-8">
        {activeTab === "description" && (
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-gray-600">
                {description}
              </p>
              <p className="text-gray-600">
                {additionalDescription}
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00B207]/10">
                      <Check className="h-3 w-3 text-[#00B207]" />
                    </span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/delivery-person.jpg"
                  alt="Delivery Person"
                  fill
                  className="object-cover"
                />
                <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#00B207] shadow-lg transition-transform hover:scale-110">
                  <svg
                    className="h-6 w-6 translate-x-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00B207]/10">
                    <svg
                      className="h-6 w-6 text-[#00B207]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">64% Discount</div>
                    <div className="text-sm text-gray-500">Save your 64% money with us</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00B207]/10">
                    <svg
                      className="h-6 w-6 text-[#00B207]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">100% Organic</div>
                    <div className="text-sm text-gray-500">100% Organic Vegetables</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "additional" && (
          <div className="max-w-3xl space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Specifications</h3>
              <div className="space-y-4">
                <div className="flex border-b pb-4">
                  <span className="w-1/3 font-medium">Weight</span>
                  <span className="w-2/3 text-gray-600">{specifications.weight}</span>
                </div>
                <div className="flex border-b pb-4">
                  <span className="w-1/3 font-medium">Dimensions</span>
                  <span className="w-2/3 text-gray-600">{specifications.dimensions}</span>
                </div>
                <div className="flex border-b pb-4">
                  <span className="w-1/3 font-medium">Category</span>
                  <span className="w-2/3">
                    <Badge variant="secondary">{specifications.category}</Badge>
                  </span>
                </div>
                <div className="flex border-b pb-4">
                  <span className="w-1/3 font-medium">Stock</span>
                  <span className="w-2/3 text-gray-600">{specifications.stock} in stock</span>
                </div>
                <div className="flex">
                  <span className="w-1/3 font-medium">Tags</span>
                  <span className="w-2/3">
                    <div className="flex flex-wrap gap-2">
                      {specifications.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Shipping & Returns</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  We deliver to customers across the country. Standard delivery takes 3-5 business days.
                </p>
                <p>
                  If you're not satisfied with your purchase, you can return it within 30 days for a full refund.
                  Items must be unused and in their original packaging.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "feedback" && (
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold">{reviews.average.toFixed(1)}</div>
                  <div className="mt-2 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(reviews.average)
                            ? 'fill-[#FF8A00] text-[#FF8A00]'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    Based on {reviews.total} reviews
                  </div>
                </div>
                <div className="space-y-2">
                  {reviews.distribution.map((count, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-12 text-sm">{5 - index} stars</div>
                      <Progress 
                        value={(count / reviews.total) * 100} 
                        className="h-2" 
                      />
                      <div className="w-12 text-sm text-gray-500">{count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-6">
                {reviews.items.map((review, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                          {review.image ? (
                            <Image
                              src={review.image}
                              alt={review.author}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          ) : (
                            <User className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{review.author}</div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? 'fill-[#FF8A00] text-[#FF8A00]'
                                      : 'fill-gray-200 text-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        Helpful ({review.helpful})
                      </Button>
                    </div>
                    <p className="text-gray-600">{review.content}</p>
                    {index < reviews.items.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

