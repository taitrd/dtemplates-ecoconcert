"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const sections = [
  {
    title: "Orders",
    message: "You don't have any upcoming events scheduled right now.",
    link: "/account/orders",
    linkText: "View all orders",
  },
  {
    title: "Listings",
    message: "You don't have any listings right now.",
    link: "/account/listings",
    linkText: "View all lisings",
  },
  {
    title: "Payments",
    message: "You don't have any payments.",
    link: "/account/payments",
    linkText: "View payments",
  },
  {
    title: "Ticketer Wallet",
    message: "You don't have any tickets in your wallet.",
    link: "/account/wallet",
    linkText: "View Wallet",
  },
];

export default function AccountPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl space-y-6">
        {/* Main Sections */}
        <div className="grid gap-6">
          {sections.map((section) => (
            <Card key={section.title} className=" rounded-xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{section.title}</CardTitle>
                <Button variant="ghost" className="text-[#4338ca]" asChild>
                  <Link href={section.link} className="flex items-center gap-2">
                    {section.linkText}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{section.message}</p>
              </CardContent>
            </Card>
          ))}

          {/* Contact Info */}
          <Card className="bg-card rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Contact Info</CardTitle>
              <Button variant="ghost" className="text-[#4338ca]" asChild>
                <Link
                  href="/reset-password"
                  className="flex items-center gap-2"
                >
                  Change Password
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">elnazbolkhari@gmail.com</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
