// User-related types

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Order {
  id: string
  event: string
  date: string
  status: 'upcoming' | 'completed' | 'cancelled'
  price: number
  quantity: number
  image: string
}

export interface Listing {
  id: string
  event: string
  date: string
  status: 'active' | 'sold' | 'expired'
  price: number
  quantity: number
  image: string
  views: number
}

export interface Sale {
  id: string
  event: string
  date: string
  buyer: string
  price: number
  quantity: number
  status: 'completed' | 'pending' | 'refunded'
  image: string
}

export interface PaymentMethod {
  id: string
  type: 'card' | 'paypal'
  details: string
  isDefault: boolean
  expiryDate?: string
}

export interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  status: 'completed' | 'pending' | 'failed'
  paymentMethod: string
}

export interface SalesStat {
  title: string
  value: string
  icon: React.ComponentType<{ className?: string }>
  change: string
  timespan: string
}
