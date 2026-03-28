// Concert-related types

export interface Concert {
  id: number
  artist: string
  date: string
  location: string
  venue: string
  image: string
  price: number
}

export interface ConcertCardData {
  artist: string
  location: string
  dateRange: string
  price: number
  imageUrl: string
}

export interface ThisWeekConcert {
  artist: string
  image: string
  dateRange: string
  location: string
  days: number
}

export interface UpcomingConcertData {
  artist: string
  location: string
  dateRange: string
  date: string
  imageUrl: string
}

export interface ShowTime {
  date: string
  day: string
  month: string
  time: string
  ticketsAvailable: number
  price: number
}

export interface ConcertInfo {
  title: string
  date: string
  time: string
  venue?: string
  ticketType?: string
}
