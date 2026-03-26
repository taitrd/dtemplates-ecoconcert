'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: "The music was great, anytime again. We had great time. Just the price was too much, and the location wasn't very great time. Just the price was too much, and the location wasn't very great time.",
    author: "Matthias",
    location: "Manchester, UK",
    date: "10 July 2024",
    avatar: "/placeholder.svg"
  },
  {
    text: "We got tickets for Taylor Swift when noone else could. We had the best time ever at teh concert. Thanks Ticketer, your reselling site made it possible to have what seemed impossible!",
    author: "Emily",
    location: "Manchester, UK",
    date: "22 June 2024",
    avatar: "/placeholder.svg"
  },
  {
    text: "Ok so credit where its due having raised the issue with they quickly got back to me and refunded the difference. They also managed to get me the tickets so my daughter got to see Taylor Swift",
    author: "William",
    location: "Birmingham, UK",
    date: "31 July 2024",
    avatar: "/placeholder.svg"
  },
  {
    text: "I had such a great experience!! I bought an eras tour ticket and they promised to transfer it until the upcoming concert which is 10 days away. I got the ticket the day after",
    author: "Daisy",
    location: "Liverpool, UK",
    date: "01 August 2024",
    avatar: "/placeholder.svg"
  },
  {
    text: "The customer rep was really friendly and helped me resolve the issue of mobile transfer tickets. He even gave me a call back once.",
    author: "Sophie",
    location: "Oxford, UK",
    date: "01 August 2024",
    avatar: "/placeholder.svg"
  },
  {
    text: "Thank you Ticketer. It explained clearly what I needed to do to ensure the process went smoothly and responded quickly to the issues I needed help with.",
    author: "James",
    location: "Portsmouth, UK",
    date: "01 August 2024",
    avatar: "/placeholder.svg"
  },
  {
    text: "Called couple of days ago. Agent was extremely helpful and explained mean stubhub sucks but at least they have good employees. Xoxo",
    author: "Eliza",
    location: "York, UK",
    date: "23 August 2024",
    avatar: "/placeholder.svg"
  }
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What People Think About Us
          </h2>
          <p className="text-gray-400 text-lg">
            Words of praise from others about our presence.
            <br />
            You can read and also write about us here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-[#4338ca] mb-4" />
                <p className="text-gray-200 mb-6 line-clamp-4">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.location}
                    </div>
                    <div className="text-sm text-gray-400">
                      Date of experience: {testimonial.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="outline" 
            className="border-[#4338ca] text-[#4338ca] hover:bg-[#4338ca] hover:text-white"
          >
            Read All Review
          </Button>
          <Button className="bg-[#4338ca] hover:bg-[#3730a3]">
            Leave a comment
          </Button>
        </div>
      </div>
    </section>
  )
}

