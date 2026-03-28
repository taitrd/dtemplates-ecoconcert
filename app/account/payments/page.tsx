'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, ShoppingCartIcon as PaypalIcon, Plus } from 'lucide-react'

interface PaymentMethod {
  id: string
  type: 'card' | 'paypal'
  details: string
  isDefault: boolean
  expiryDate?: string
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "PM-001",
    type: "card",
    details: "**** **** **** 4242",
    isDefault: true,
    expiryDate: "12/25"
  },
  {
    id: "PM-002",
    type: "paypal",
    details: "john.doe@example.com",
    isDefault: false
  }
]

interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  status: 'completed' | 'pending' | 'failed'
  paymentMethod: string
}

const transactions: Transaction[] = [
  {
    id: "TRX-001",
    date: "2024-03-20",
    description: "Taylor Swift Concert Tickets",
    amount: 799.98,
    status: "completed",
    paymentMethod: "**** 4242"
  },
  {
    id: "TRX-002",
    date: "2024-03-15",
    description: "Beyoncé Concert Tickets",
    amount: 299.99,
    status: "completed",
    paymentMethod: "PayPal"
  }
]

export default function PaymentsPage() {
  const [showAddCard, setShowAddCard] = useState(false)

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-500'
      case 'pending':
        return 'text-yellow-500'
      case 'failed':
        return 'text-destructive'
      default:
        return 'text-muted-foreground'
    }
  }

  return (
    <div className="p-8">
      <div className="max-w-6xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold">Payment Methods</h1>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => setShowAddCard(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Payment Method
          </Button>
        </div>

        {/* Payment Methods */}
        <div className="grid gap-4 md:grid-cols-2">
          {paymentMethods.map((method) => (
            <Card key={method.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {method.type === 'card' ? (
                      <CreditCard className="h-8 w-8 text-muted-foreground" />
                    ) : (
                      <PaypalIcon className="h-8 w-8 text-primary" />
                    )}
                    <div>
                      <p className="font-medium">{method.details}</p>
                      {method.expiryDate && (
                        <p className="text-sm text-muted-foreground">Expires {method.expiryDate}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {method.isDefault && (
                      <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded">
                        Default
                      </span>
                    )}
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add New Card Form */}
        {showAddCard && (
          <Card>
            <CardHeader>
              <CardTitle>Add New Card</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name on Card</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowAddCard(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Add Card
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Transaction History */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border"
                >
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(transaction.date).toLocaleDateString()} · {transaction.paymentMethod}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`font-medium ${getStatusColor(transaction.status)}`}>
                      ${transaction.amount.toFixed(2)}
                    </span>
                    <span className={`text-sm ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

