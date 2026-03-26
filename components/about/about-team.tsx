import Image from "next/image"
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "Jenny Wilson",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Robert Fox",
    role: "Chief Marketing Officer",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Esther Howard",
    role: "Head of Operations",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Albert Flores",
    role: "Head of Customer Success",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  }
]

export function AboutTeam() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Meet Our Team</h2>
          <p className="mb-12 text-gray-500">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform hover:scale-110"
                />
              </div>
              <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
              <p className="mb-4 text-gray-500">{member.role}</p>
              <div className="flex justify-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

