"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { subscribeToNewsletter } from "@/app/actions";

const news = [
  {
    title: "Taylor Swift in Biggest World Tour",
    description:
      "Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...",
    image: "/concerts/andre-benz-Jb7TLs6fW_I-unsplash.jpg",
    author: {
      name: "Jonathan Willis",
      avatar: "/placeholder-user.jpg",
      date: "July 17, 2024",
      readTime: "5 min",
    },
  },
  {
    title: "Royal Albert Hall New Events",
    description:
      "Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...",
    image: "/concerts/danny-howe-bn-D2bCvpik-unsplash.jpg",
    author: {
      name: "Marian Ed",
      avatar: "/placeholder-user.jpg",
      date: "June 13, 2024",
      readTime: "10 min",
    },
  },
  {
    title: "Yanni Will Be in London",
    description:
      "Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...",
    image: "/concerts/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg",

    author: {
      name: "Jack Nikelson",
      avatar: "/placeholder.svg",
      date: "May 08, 2024",
      readTime: "7 min",
    },
  },
];

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await subscribeToNewsletter(email);
      setEmail("");
      // You could add a success toast here
    } catch (error) {
      // You could add an error toast here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-24 px-4 md:px-6 bg-muted/20 border-y border-border">
      <div className="overflow-x-auto overflow-y-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Newsletter Subscription */}
          <div className="space-y-6 px-4">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Stay in the <span className="text-primary italic">Loop</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Unlock exclusive early access, special offers, and the latest
                news from the music world. Join our community today.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <label htmlFor="newsletter-email-input" className="sr-only">
                  Email address for newsletter
                </label>
                <Input
                  id="newsletter-email-input"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-10 h-14 bg-background border-border focus:ring-primary shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <svg
                  className="absolute left-3 top-[18px] h-5 w-5 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 font-bold text-base shadow-lg transition-all hover:scale-105"
                disabled={isSubmitting}
              >
                Sign Up
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground italic">
              * By subscribing, you agree to our Privacy Policy and Terms of
              Service.
            </p>
          </div>

          {/* News Carousel */}
          <div className="relative py-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="p-2">
                {news.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 bg-card p-4 rounded-3xl border border-border shadow-md overflow-hidden group">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col justify-center space-y-4 py-2">
                        <Badge
                          variant="secondary"
                          className="w-fit bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          Hot News
                        </Badge>
                        <h3 className="text-2xl font-bold text-card-foreground line-clamp-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                          <Avatar className="h-10 w-10 border-2 border-primary/20">
                            <AvatarImage src={item.author.avatar} />
                            <AvatarFallback className="bg-primary/10 text-primary font-bold">
                              {item.author.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-bold text-sm text-foreground">
                              {item.author.name}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              {item.author.date}{" "}
                              <span className="text-primary/50 text-lg leading-none">
                                •
                              </span>{" "}
                              {item.author.readTime} read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -bottom-12 right-0 flex gap-2">
                <CarouselPrevious className="static translate-y-0 h-10 w-10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground shadow-sm" />
                <CarouselNext className="static translate-y-0 h-10 w-10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground shadow-sm" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
