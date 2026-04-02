import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Ticket, Shield, Globe } from 'lucide-react'

const stats = [
  {
    number: "10M+",
    label: "Active Users"
  },
  {
    number: "50K+",
    label: "Events"
  },
  {
    number: "100+",
    label: "Cities"
  },
  {
    number: "24/7",
    label: "Support"
  }
]

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "We prioritize our customers' needs and satisfaction above all else, ensuring the best possible experience."
  },
  {
    icon: Ticket,
    title: "Easy Access",
    description: "Simple and intuitive ticket booking process, making it easy for everyone to attend their favorite events."
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "State-of-the-art security measures to protect your data and transactions at all times."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with events and experiences from around the world, bringing entertainment to your doorstep."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ticketer</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted platform for discovering and booking the best live entertainment experiences around the world.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Ticketer emerged from a simple vision: to make live entertainment accessible to everyone. What started as a small startup has grown into a global platform connecting millions of fans with their favorite events.
                </p>
                <p>
                  Our journey has been driven by innovation, customer satisfaction, and a deep passion for bringing people together through unforgettable experiences. Today, we're proud to be one of the leading ticket reservation platforms.
                </p>
                <p>
                  We work with the world's top venues, artists, and event organizers to bring you a diverse range of entertainment options, from intimate local shows to major international concerts.
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="/assets/asset_b95a9401.jpeg"
                alt="Concert crowd enjoying a live performance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-muted/50 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience More?</h2>
          <p className="text-muted-foreground mb-8">
            Join millions of others who have already discovered their next favorite event through Ticketer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/concerts">Browse Events</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

