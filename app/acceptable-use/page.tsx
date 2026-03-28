import Link from "next/link"

export default function AcceptableUsePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Acceptable Use Policy</h1>
        
        <section className="mb-12">
          <p className="text-muted-foreground mb-4">
            This Acceptable Use Policy outlines the guidelines for using Ticketer's services. By accessing or using our platform, you agree to comply with these rules and regulations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Prohibited Activities</h2>
          <p className="text-muted-foreground mb-4">
            Users of Ticketer are strictly prohibited from engaging in the following activities:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Violating any applicable laws or regulations</li>
            <li>Infringing on intellectual property rights</li>
            <li>Engaging in fraudulent or deceptive practices</li>
            <li>Attempting to gain unauthorized access to Ticketer's systems or other users' accounts</li>
            <li>Interfering with or disrupting Ticketer's services or servers</li>
            <li>Harvesting or collecting user information without consent</li>
            <li>Impersonating other users or Ticketer staff</li>
            <li>Posting or transmitting any unlawful, threatening, or abusive content</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Ticket Purchasing and Reselling</h2>
          <p className="text-muted-foreground mb-4">
            Users must adhere to the following guidelines when purchasing and reselling tickets:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Do not use automated systems or bots to purchase tickets</li>
            <li>Do not attempt to circumvent ticket purchase limits</li>
            <li>Reselling tickets is subject to local laws and event organizer policies</li>
            <li>Do not engage in price gouging or unfair pricing practices</li>
            <li>Accurately represent the tickets you are selling</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Content Guidelines</h2>
          <p className="text-muted-foreground mb-4">
            When posting content on Ticketer, including reviews, comments, or messages, users must:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Provide accurate and truthful information</li>
            <li>Respect the privacy and rights of others</li>
            <li>Refrain from posting offensive, discriminatory, or harmful content</li>
            <li>Not engage in spamming or excessive self-promotion</li>
            <li>Obtain necessary permissions for any third-party content shared</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Account Security</h2>
          <p className="text-muted-foreground mb-4">
            Users are responsible for maintaining the security of their accounts and must:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Use strong, unique passwords</li>
            <li>Keep login credentials confidential</li>
            <li>Log out of shared or public devices</li>
            <li>Report any suspicious activity to Ticketer immediately</li>
            <li>Not share or transfer accounts to others</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Compliance and Enforcement</h2>
          <p className="text-muted-foreground mb-4">
            Ticketer reserves the right to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Monitor user activity for compliance with this policy</li>
            <li>Investigate potential violations</li>
            <li>Take appropriate action against users who violate this policy</li>
            <li>Suspend or terminate accounts for repeated or severe violations</li>
            <li>Cooperate with law enforcement when required</li>
          </ul>
        </section>

        <p className="text-muted-foreground text-sm">
          For more information about our policies, please refer to our{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

