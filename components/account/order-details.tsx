import Image from "next/image"
import { Card } from "@/components/ui/card"
import { OrderTimeline } from "./order-timeline"

interface OrderDetailsProps {
  orderId: string
}

export function OrderDetails({ orderId }: OrderDetailsProps) {
  const orderData = {
    id: "#4152",
    date: "April 24, 2021",
    paymentMethod: "Paypal",
    status: "Processing",
    billing: {
      name: "Dainne Russell",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
      email: "dainne.ressell@gmail.com",
      phone: "(671) 555-0110"
    },
    shipping: {
      name: "Dainne Russell",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
      email: "dainne.ressell@gmail.com",
      phone: "(671) 555-0110"
    },
    summary: {
      subtotal: 365.00,
      discount: "20%",
      shipping: "Free",
      total: 84.00
    },
    products: [
      {
        name: "Red Capsicum",
        price: 14.00,
        quantity: 5,
        subtotal: 70.00,
        image: "https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg"
      },
      {
        name: "Green Capsicum",
        price: 14.00,
        quantity: 2,
        subtotal: 28.00,
        image: "https://images.pexels.com/photos/139751/pexels-photo-139751.jpeg"
      },
      {
        name: "Green Chili",
        price: 26.70,
        quantity: 10,
        subtotal: 267.00,
        image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg"
      }
    ]
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Billing Address */}
        <Card className="md:col-span-1 p-6">
          <h2 className="text-sm text-gray-500 mb-4">BILLING ADDRESS</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">{orderData.billing.name}</h3>
              <p className="text-gray-600">{orderData.billing.address}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">EMAIL</h4>
              <p className="text-gray-600">{orderData.billing.email}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">PHONE</h4>
              <p className="text-gray-600">{orderData.billing.phone}</p>
            </div>
          </div>
        </Card>

        {/* Shipping Address */}
        <Card className="md:col-span-1 p-6">
          <h2 className="text-sm text-gray-500 mb-4">SHIPPING ADDRESS</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">{orderData.shipping.name}</h3>
              <p className="text-gray-600">{orderData.shipping.address}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">EMAIL</h4>
              <p className="text-gray-600">{orderData.shipping.email}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">PHONE</h4>
              <p className="text-gray-600">{orderData.shipping.phone}</p>
            </div>
          </div>
        </Card>

        {/* Order Summary */}
        <Card className="md:col-span-1 p-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <h4 className="text-sm text-gray-500">ORDER ID:</h4>
              <p className="font-medium">{orderData.id}</p>
            </div>
            <div className="flex justify-between">
              <h4 className="text-sm text-gray-500">PAYMENT METHOD:</h4>
              <p className="font-medium">{orderData.paymentMethod}</p>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${orderData.summary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium">{orderData.summary.discount}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">{orderData.summary.shipping}</span>
              </div>
              <div className="flex justify-between mt-4 text-lg font-bold">
                <span>Total</span>
                <span className="text-[#00B207]">${orderData.summary.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Order Timeline */}
      <Card className="p-6">
        <OrderTimeline status={orderData.status} />
      </Card>

      {/* Products Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-4 font-medium">PRODUCT</th>
                <th className="pb-4 font-medium">PRICE</th>
                <th className="pb-4 font-medium">QUANTITY</th>
                <th className="pb-4 font-medium text-right">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orderData.products.map((product) => (
                <tr key={product.name}>
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-4">${product.price.toFixed(2)}</td>
                  <td className="py-4">x{product.quantity}</td>
                  <td className="py-4 text-right">${product.subtotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

