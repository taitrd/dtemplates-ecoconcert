"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Download, Share2 } from "lucide-react";
import { BookingSteps } from "@/components/booking-steps";

interface TicketDetails {
  concertName: string;
  artist: string;
  date: string;
  time: string;
  section: string;
  seats: string[];
  quantity: number;
  amount: number;
  customerName: string;
  contactNumber: string;
  emailAddress: string;
  image: string;
}

const ticketDetails: TicketDetails = {
  concertName: "Eras Tour",
  artist: "Taylor Swift",
  date: "4 June",
  time: "8 pm",
  section: "D",
  seats: ["23", "24"],
  quantity: 2,
  amount: 800,
  customerName: "Elnaz Bolkhari",
  contactNumber: "98 935-498 28 65",
  emailAddress: "elnazbolkhari@gmail",
  image: "/assets/asset_d1774d39.jpeg",
};

export default function CheckoutSuccessPage() {
  return (
    <>
      <style jsx global>{`
        @media print {
          /* Hide global layout elements */
          nav,
          footer,
          header,
          .layout-toolbar,
          [role="navigation"],
          .no-print {
            display: none !important;
          }

          /* Reset page margins and background */
          body {
            background: white !important;
            color: black !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Ensure the ticket content takes full width and is visible */
          .print-content {
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 20px !important;
            display: block !important;
          }

          /* Fix for Card backgrounds and images in print */
          .bg-card {
            background-color: #f8fafc !important;
            -webkit-print-color-adjust: exact;
          }

          .text-primary-foreground {
            color: black !important;
          }
        }
      `}</style>

      <div className="min-h-screen py-8 print-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-12 no-print">
            <BookingSteps currentStep={4} />
          </div>

          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4 no-print">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-green-500 mb-2">
              Payment Successful!
            </h1>
            <p className="text-muted-foreground no-print">
              You got your ticket. Download it here.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Purchase Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                <p className="text-muted-foreground text-lg">
                  You've Successfully purchased the ticket for:
                </p>
                <p className="text-xl mt-2 font-semibold">
                  {ticketDetails.concertName} {ticketDetails.artist} Concert.
                </p>
              </div>

              {/* Item Details */}
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-semibold mb-4">Item Details</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Item:</span>
                    <span className="font-medium text-foreground">
                      {ticketDetails.concertName} {ticketDetails.artist} Concert
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantity:</span>
                    <span className="font-medium text-foreground">
                      {ticketDetails.quantity} Tickets
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-border/50 pt-2 mt-2">
                    <span className="font-bold">Amount:</span>
                    <span className="font-bold text-primary">
                      ${ticketDetails.amount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Customer Details */}
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-semibold mb-4">Customer details</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Name:</span>
                    <span className="font-medium text-foreground">
                      {ticketDetails.customerName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact Number:</span>
                    <span className="font-medium text-foreground">
                      {ticketDetails.contactNumber}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email Address:</span>
                    <span className="font-medium text-foreground">
                      {ticketDetails.emailAddress}
                    </span>
                  </div>
                </div>
              </div>

              {/* Special Rewards */}
              <div className="no-print border-t border-border pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Thank you for choosing to buy from Ticketer!
                </h3>
                <p className="text-muted-foreground mb-4">
                  You've unlocked special rewards:
                </p>
                <div className="space-y-3">
                  <div className="bg-green-500/10 text-green-500 p-4 rounded-lg">
                    20% Discount on your next ticket!
                  </div>
                  <div className="bg-green-500/10 text-green-500 p-4 rounded-lg">
                    Earned 50 points for your purchase!
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Ticket Preview */}
            <div className="print:m-0">
              <Card className="bg-card text-foreground overflow-hidden border-border shadow-xl">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={ticketDetails.image}
                    alt={ticketDetails.artist}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                          <Check className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">
                          Official Ticket
                        </span>
                      </div>
                      <h2 className="text-3xl font-black text-muted-foreground uppercase tracking-tighter">
                        Download Your Tickets!
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Order Date: July 17, 2024
                      </p>
                      <p className="text-2xl font-bold mt-4 text-primary">
                        {ticketDetails.concertName} {ticketDetails.artist}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex justify-between items-center border-t border-border/50 pt-6">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                            Section
                          </div>
                          <div className="text-xl font-bold">
                            {ticketDetails.section}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                            Seat
                          </div>
                          <div className="text-xl font-bold">
                            {ticketDetails.seats.join(", ")}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                            Gate
                          </div>
                          <div className="text-xl font-bold">G7</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center border-t border-border/50 pt-6">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                            Date
                          </div>
                          <div className="text-lg font-semibold">
                            {ticketDetails.date}, 2024
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                            Time
                          </div>
                          <div className="text-lg font-semibold">
                            {ticketDetails.time}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 no-print pt-4">
                        <Button
                          className="bg-primary hover:bg-primary/90 text-primary-foreground w-full py-6 text-lg font-bold"
                          onClick={() => window.print()}
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Download Ticket
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full py-6 text-lg font-bold"
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({
                                title: `${ticketDetails.concertName} Tickets`,
                                text: `Check out my tickets for ${ticketDetails.artist}'s concert!`,
                                url: window.location.href,
                              });
                            }
                          }}
                        >
                          <Share2 className="w-5 h-5 mr-2" />
                          Share Ticket
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="mt-6 p-6 border-2 border-dashed border-border rounded-xl text-center no-print bg-accent/10">
                <p className="text-sm text-muted-foreground font-medium">
                  Scan this QR code or show this ticket at the entrance.
                </p>
                <div className="mt-4 w-32 h-32 bg-white mx-auto rounded-lg shadow-sm flex items-center justify-center border border-border">
                  {/* Placeholder for QR Code */}
                  <div className="w-24 h-24 bg-black/10 rounded flex items-center justify-center italic text-[10px] text-black">
                    QR CODE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
