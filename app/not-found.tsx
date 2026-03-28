import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-foreground px-4">
      <h1 className="text-[12rem] font-bold leading-none mb-6 text-primary">404</h1>
      <h2 className="text-2xl md:text-4xl text-center font-semibold mb-8">
        Sorry, The page you are looking for was not found!
      </h2>
      <Button 
        asChild
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Link href="/">
          Go Back Home Page
        </Link>
      </Button>
    </div>
  )
}

