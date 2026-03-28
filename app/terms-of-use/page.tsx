import Link from "next/link"

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        
        <section className="mb-12">
          <p className="text-muted-foreground mb-4">
            By accessing and using Ticketer's website and services, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully before using our platform.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By using Ticketer, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, our Privacy Policy, and any other applicable laws and regulations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
          <p className="text-muted-foreground mb-4">
            To access certain features of Ticketer, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Ticket Purchases</h2>
          <p className="text-muted-foreground mb-4">
            All ticket purchases are final and non-refundable unless otherwise stated or required by law. Ticketer reserves the right to cancel or modify orders that appear to be placed fraudulently or in error.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Prohibited Activities</h2>
          <p className="text-muted-foreground mb-4">
            Users are prohibited from engaging in any unlawful or fraudulent activities on Ticketer, including but not limited to ticket scalping, using automated systems to access our services, or attempting to interfere with the proper functioning of the platform.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            All content on Ticketer, including but not limited to text, graphics, logos, and software, is the property of Ticketer or its content suppliers and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            Ticketer shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or for the cost of procurement of substitute goods and services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. Modifications to Terms</h2>
          <p className="text-muted-foreground mb-4">
            Ticketer reserves the right to modify these Terms of Use at any time. We will notify users of any significant changes. Your continued use of Ticketer after such modifications constitutes your acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p className="text-muted-foreground mb-4">
            These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which Ticketer is based, without regard to its conflict of law provisions.
          </p>
        </section>

        <p className="text-muted-foreground text-sm">
          For more information about our policies, please refer to our{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/acceptable-use" className="text-primary hover:underline">
            Acceptable Use Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

