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
    <section className="w-full py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            What Our <span className="text-primary italic">Fans</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Real stories from real concert-goers. We pride ourselves on making the impossible, possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border shadow-md hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 flex justify-between items-start">
                  <Quote className="h-10 w-10 text-primary/40 transition-colors group-hover:text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Verified Review</span>
                </div>
                <p className="text-card-foreground mb-8 line-clamp-4 italic leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                  <Avatar className="h-12 w-12 border-2 border-primary/10">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground">
                      {testimonial.author}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </span>
                    <span className="text-[10px] font-medium text-primary/80 mt-1 uppercase tracking-tighter">
                      Visited: {testimonial.date}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Read All Reviews
          </Button>
          <Button 
            size="lg"
            className="w-full sm:w-auto font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            Leave a Comment
          </Button>
        </div>
      </div>
    </section>
  )
}

