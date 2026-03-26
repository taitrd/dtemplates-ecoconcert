"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
interface Order {
  id: string
  date: string
  total: number
  products: number
  status: "Processing" | "on the way" | "Completed"
}

const orders: Order[] = [
  { id: "#3933", date: "4 April, 2021", total: 135.00, products: 5, status: "Processing" },
  { id: "#5045", date: "27 Mar, 2021", total: 25.00, products: 1, status: "on the way" },
  { id: "#5028", date: "20 Mar, 2021", total: 250.00, products: 4, status: "Completed" },
  { id: "#4600", date: "19 Mar, 2021", total: 35.00, products: 1, status: "Completed" },
  { id: "#4152", date: "18 Mar, 2021", total: 578.00, products: 13, status: "Completed" },
  { id: "#8811", date: "10 Mar, 2021", total: 345.00, products: 7, status: "Completed" },
  { id: "#3536", date: "5 Mar, 2021", total: 560.00, products: 2, status: "Completed" },
  { id: "#1374", date: "27 Feb, 2021", total: 560.00, products: 2, status: "Completed" },
  { id: "#7791", date: "25 Feb, 2021", total: 560.00, products: 2, status: "Completed" },
  { id: "#4846", date: "24 Feb, 2021", total: 23.00, products: 1, status: "Completed" },
  { id: "#5948", date: "20 Feb, 2021", total: 23.00, products: 1, status: "Completed" },
  { id: "#1577", date: "12 Oct, 2020", total: 23.00, products: 1, status: "Completed" }
]

const ITEMS_PER_PAGE = 10

export function OrderHistory() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE)
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentOrders = orders.slice(startIndex, endIndex)

  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-6">Order History</h1>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-4 font-medium">ORDER ID</th>
              <th className="pb-4 font-medium">DATE</th>
              <th className="pb-4 font-medium">TOTAL</th>
              <th className="pb-4 font-medium">STATUS</th>
              <th className="pb-4 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td className="py-4">{order.id}</td>
                <td className="py-4">{order.date}</td>
                <td className="py-4">
                  ${order.total.toFixed(2)} ({order.products} {order.products === 1 ? 'Product' : 'Products'})
                </td>
                <td className="py-4">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Processing"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4">
                  <Button variant="link" className="text-[#00B207]">
                    <Link href={`/account/orders/${order.id.replace('#', '')}`}>View Details</Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i + 1}
            variant={currentPage === i + 1 ? "default" : "outline"}
            className={currentPage === i + 1 ? "bg-[#00B207] hover:bg-[#00B207]/90" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

