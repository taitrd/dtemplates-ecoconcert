import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SocialShare() {
  return (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full bg-[#00B207]/10 text-[#00B207] hover:bg-[#00B207]/20"
        asChild
      >
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full bg-[#00B207]/10 text-[#00B207] hover:bg-[#00B207]/20"
        asChild
      >
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full bg-[#00B207]/10 text-[#00B207] hover:bg-[#00B207]/20"
        asChild
      >
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-4 w-4" />
          <span className="sr-only">Share on Instagram</span>
        </Link>
      </Button>
    </div>
  )
}

