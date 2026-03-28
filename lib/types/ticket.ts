// Ticket-related types
import type { LucideIcon } from 'lucide-react'

export interface Seat {
  id: string
  section: number
  row: number
  number: number
  status: 'available' | 'unavailable' | 'selected'
}

export interface TicketTier {
  type: 'VIP' | 'Standard' | 'Economic'
  price: number
  icon: LucideIcon
  description: string
  features: string[]
}

export interface SelectedTicket {
  section: number
  row: string
  seat: number
  price: number
}

export interface TicketItem {
  id: number
  title: string
  artist: string
  date: string
  time: string
  section: string
  row: string
  seat: number
  price: number
  ticketType: string
  image: string
}

export interface CartItem {
  id: string
  event: string
  date: string
  venue: string
  section: string
  row: string
  seat: string
  price: number
  ticketType: string
  image: string
}

export interface TicketWallet {
  id: string
  event: string
  date: string
  venue: string
  section: string
  row: string
  seat: string
  status: 'valid' | 'used' | 'expired'
  image: string
}
