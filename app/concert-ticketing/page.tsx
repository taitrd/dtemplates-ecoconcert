import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ConcertTicketingPage() {
  return (
    <div className="min-h-screen bg-[#0a0b2e] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Concert Ticketing</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-300">
            <li>Browse our extensive list of upcoming concerts and events.</li>
            <li>Select the event you're interested in attending.</li>
            <li>Choose your preferred seating options and ticket quantity.</li>
            <li>Proceed to checkout and complete your purchase securely.</li>
            <li>Receive your e-tickets via email or in your Ticketer account.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Types of Tickets</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li><strong>General Admission:</strong> Standard entry to the event, usually without assigned seating.</li>
            <li><strong>Reserved Seating:</strong> Specific assigned seats for the duration of the event.</li>
            <li><strong>VIP Packages:</strong> Premium tickets that may include perks like early entry, meet-and-greets, or exclusive merchandise.</li>
            <li><strong>Group Tickets:</strong> Discounted rates for large groups attending together.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Ticket Policies</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>All sales are final unless the event is canceled or rescheduled.</li>
            <li>Tickets are non-transferable and non-refundable unless stated otherwise.</li>
            <li>Resale of tickets is subject to local laws and event organizer policies.</li>
            <li>Always purchase from authorized sellers to ensure ticket validity.</li>
          </ul>
        </section>

        <div className="flex justify-center">
          <Button asChild className="bg-[#4338ca] hover:bg-[#3730a3]">
            <Link href="/concerts">Browse Upcoming Concerts</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

