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

// New types for Redux
export interface Concert {
  id: string;
  title: string;
  singer: string;
  date: string;
  location: string;
  price: number;
  image: string;
  description: string;
  tags: string[];
}

export interface Ticket {
  id: string;
  concertId: string;
  userId: string;
  seatNumber: string;
  purchasedAt: string;
  status: 'active' | 'used' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface SearchFilters {
  query?: string;
  date?: string;
  location?: string;
  advanced?: {
    minPrice?: number;
    maxPrice?: number;
    tags?: string[];
  };
}

export interface TicketState {
  concerts: Concert[];
  userTickets: Ticket[];
  selectedConcertIds: string[];
  filters: SearchFilters;
  loading: boolean;
  error: string | null;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
