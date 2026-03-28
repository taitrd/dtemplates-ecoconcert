'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Music, ArrowRight } from 'lucide-react'
import { BookingSteps } from '@/components/booking-steps'
import { DateTimeSelector } from '@/components/date-time-selector'
import { SeatSelection } from '@/components/seat-selection'
import type { ShowTime } from '@/components/date-time-selector'
import type { TicketTier } from '@/components/seat-selection'

export default function ConcertDetailsPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedTime, setSelectedTime] = useState<ShowTime>()
  const [selectedTier, setSelectedTier] = useState<TicketTier>()

  const handleTimeSelect = (time: ShowTime) => {
    setSelectedTime(time)
    setCurrentStep(2)
  }

  const handleTierSelect = (tier: TicketTier) => {
    setSelectedTier(tier)
    setCurrentStep(3)
  }

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <DateTimeSelector 
            onSelectTime={handleTimeSelect}
            selectedTime={selectedTime}
          />
        )
      case 2:
        return (
          <SeatSelection
            onSelectTier={handleTierSelect}
            selectedTier={selectedTier}
            concertInfo={{
              title: "The Eras Tour: Taylor Swift",
              date: "Mon, June 04",
              time: "08:00 pm",
              venue: "Royal Albert Hall"
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-primary/80 to-primary">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
              alt="Taylor Swift performing live"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
          
          {/* Event Details Section */}
          <div className="bg-muted/30 backdrop-blur-sm p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Date</div>
                    <div className="font-medium">3 June until 6 June, 2024</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Time</div>
                    <div className="font-medium">08:00 PM & 10:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center justify-between lg:col-span-1">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-medium">Royal Albert Hall, London</div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="hidden lg:flex items-center gap-2 text-foreground border-border hover:bg-muted"
                  >
                    Get Direction
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full mt-4 lg:hidden items-center justify-center gap-2 text-foreground border-border hover:bg-muted"
              >
                Get Direction
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Booking Steps */}
        <div className="my-12">
          <BookingSteps currentStep={currentStep} />
        </div>

        {/* Dynamic Step Content */}
        <div className="mb-12">
          {renderStepContent()}
        </div>

        {/* Concert Details - only show when not in selection steps */}
        {currentStep > 2 && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About the Concert</h2>
              <p className="text-muted-foreground leading-relaxed">
                Join us for an unforgettable evening with Taylor Swift at the iconic Royal Albert Hall. 
                Experience the magic of her latest tour featuring songs from her newest album along with 
                beloved classics. This exclusive performance promises an intimate setting with state-of-the-art 
                sound and lighting that will bring her music to life like never before.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Lineup</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Taylor Swift - Main Performance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Special Guest Performance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Opening Act
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Venue Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Royal Albert Hall is one of the world's most prestigious venues. 
                Located in South Kensington, London, this historic venue offers excellent 
                acoustics and an intimate atmosphere despite its grand scale. The venue 
                is easily accessible by public transport and offers nearby parking facilities.
              </p>
            </section>
          </div>

          <div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Concert Details</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-muted-foreground">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  <span>3-6 June, 2024</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  <span>8:00 PM & 10:00 PM</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  <span>Royal Albert Hall, London</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <Music className="w-5 h-5 mr-2 text-primary" />
                  <span>Pop, Contemporary</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={handleNextStep}
                >
                  {currentStep === 4 ? 'Download Ticket' : 'Continue'}
                </Button>
              </div>
            </div>
          </div>
        </div>
        )}
      </main>
    </div>
  )
}

