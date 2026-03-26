import Image from "next/image"
import { Pencil, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const recentOrders = [
  { 
    id: "#738",
    date: "8 Sep, 2020",
    total: 135.00,
    products: 5,
    status: "Processing"
  },
  { 
    id: "#703",
    date: "24 May, 2020",
    total: 25.00,
    products: 1,
    status: "on the way"
  },
  { 
    id: "#130",
    date: "22 Oct, 2020",
    total: 250.00,
    products: 4,
    status: "Completed"
  },
  { 
    id: "#561",
    date: "1 Feb, 2020",
    total: 35.00,
    products: 1,
    status: "Completed"
  },
  { 
    id: "#536",
    date: "21 Sep, 2020",
    total: 578.00,
    products: 13,
    status: "Completed"
  },
  { 
    id: "#492",
    date: "22 Oct, 2020",
    total: 345.00,
    products: 7,
    status: "Completed"
  }
]

export function AccountDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Card */}
        <Card className="p-6 flex flex-col items-center text-center">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Dianne Russell"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold">Dianne Russell</h2>
          <p className="text-gray-500 mb-4">Customer</p>
          <Button className="bg-[#00B207] hover:bg-[#00B207]/90">
            <Pencil className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </Card>

        {/* Billing Address Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg text-gray-500">BILLING ADDRESS</h2>
            <Button className="text-[#00B207]" variant="link">
              Edit Address
            </Button>
          </div>
          <h3 className="text-xl font-bold mb-2">Dainne Russell</h3>
          <p className="text-gray-600 mb-4">
            4140 Parker Rd. Allentown, New Mexico 31134
          </p>
          <p className="text-gray-600 mb-1">dainne.ressell@gmail.com</p>
          <p className="text-gray-600">(671) 555-0110</p>
        </Card>
      </div>

      {/* Recent Orders Card */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Recent Order History</h2>
          <Button variant="link" className="text-[#00B207]">
            View All
          </Button>
        </div>
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
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="py-4">{order.id}</td>
                  <td className="py-4">{order.date}</td>
                  <td className="py-4">
                    ${order.total.toFixed(2)} ({order.products} Products)
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
                      View Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

