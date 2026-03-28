import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Cookies Policy</h1>
        
        <section className="mb-12">
          <p className="text-muted-foreground mb-4">
            This Cookies Policy explains how Ticketer uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
          <p className="text-muted-foreground mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why do we use cookies?</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>To enable certain functions of the Service</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>To enable advertisements delivery, including behavioral advertising</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Types of cookies we use</h2>
          <p className="text-muted-foreground mb-4">
            The cookies we use can be categorized as follows:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Strictly Necessary Cookies</li>
            <li>Functionality Cookies</li>
            <li>Analytics Cookies</li>
            <li>Advertising Cookies</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How can you control cookies?</h2>
          <p className="text-muted-foreground mb-4">
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Updates to this policy</h2>
          <p className="text-muted-foreground mb-4">
            We may update this Cookies Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookies Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">More information</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about our use of cookies or other technologies, please email us at privacy@ticketer.com.
          </p>
        </section>

        <div className="flex justify-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

