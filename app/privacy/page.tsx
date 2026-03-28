import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="mb-12">
          <p className="text-muted-foreground mb-4">
            At Ticketer, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website and services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect the following types of information:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Personal information (e.g., name, email address, phone number)</li>
            <li>Payment information (e.g., credit card details, billing address)</li>
            <li>Account information (e.g., username, password)</li>
            <li>Transaction history and ticket purchase details</li>
            <li>Device and browser information</li>
            <li>Usage data and analytics</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>To process ticket purchases and payments</li>
            <li>To provide customer support and respond to inquiries</li>
            <li>To send important notifications about your purchases or account</li>
            <li>To improve our services and develop new features</li>
            <li>To prevent fraud and ensure the security of our platform</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
          <p className="text-muted-foreground mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Event organizers and venues (limited to necessary information for ticket fulfillment)</li>
            <li>Service providers and partners who assist in our operations</li>
            <li>Legal authorities when required by law or to protect our rights</li>
            <li>Other users, if you choose to make certain information public on our platform</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement various security measures to protect your information, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Encryption of sensitive data</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Access controls and authentication measures</li>
            <li>Employee training on data protection and privacy</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights and Choices</h2>
          <p className="text-muted-foreground mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Access and update your personal information</li>
            <li>Request deletion of your data (subject to legal requirements)</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to certain data processing activities</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies and similar technologies to enhance your experience on our platform. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
          <p className="text-muted-foreground mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any significant changes and obtain your consent where required by law.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions or concerns about our Privacy Policy, please contact us at:
          </p>
          <p className="text-muted-foreground">
            Email: privacy@ticketer.com<br />
            Address: 123 Ticket Street, Concert City, MU 12345
          </p>
        </section>

        <p className="text-gray-300">
          For more information about our policies, please refer to our{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms and Conditions
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

