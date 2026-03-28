import Link from "next/link"

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <section className="mb-12">
          <p className="text-muted-foreground mb-4">
            Welcome to Ticketer. These Terms and Conditions govern your use of our website and services. By accessing or using Ticketer, you agree to be bound by these Terms. Please read them carefully.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Use of Our Services</h2>
          <p className="text-muted-foreground mb-4">
            You must follow any policies made available to you within the Services. Don't misuse our Services. For example, don't interfere with our Services or try to access them using a method other than the interface and the instructions that we provide.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Privacy</h2>
          <p className="text-muted-foreground mb-4">
            Ticketer's privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Ticketer can use such data in accordance with our privacy policies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Your Ticketer Account</h2>
          <p className="text-muted-foreground mb-4">
            You may need a Ticketer Account in order to use some of our Services. You may create your own Ticketer Account, or your Ticketer Account may be assigned to you by an administrator, such as your employer or educational institution. If you are using a Ticketer Account assigned to you by an administrator, different or additional terms may apply and your administrator may be able to access or disable your account.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Modifying and Terminating our Services</h2>
          <p className="text-muted-foreground mb-4">
            We are constantly changing and improving our Services. We may add or remove functionalities or features, and we may suspend or stop a Service altogether. You can stop using our Services at any time, although we'll be sorry to see you go. Ticketer may also stop providing Services to you, or add or create new limits to our Services at any time.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Our Warranties and Disclaimers</h2>
          <p className="text-muted-foreground mb-4">
            We provide our Services using a commercially reasonable level of skill and care and we hope that you will enjoy using them. But there are certain things that we don't promise about our Services. OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS OR ADDITIONAL TERMS, NEITHER TICKETER NOR ITS SUPPLIERS OR DISTRIBUTORS MAKE ANY SPECIFIC PROMISES ABOUT THE SERVICES.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Liability for our Services</h2>
          <p className="text-muted-foreground mb-4">
            WHEN PERMITTED BY LAW, TICKETER, AND TICKETER'S SUPPLIERS AND DISTRIBUTORS, WILL NOT BE RESPONSIBLE FOR LOST PROFITS, REVENUES, OR DATA, FINANCIAL LOSSES OR INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. Business uses of our Services</h2>
          <p className="text-gray-300 mb-4">
            If you are using our Services on behalf of a business, that business accepts these terms. It will hold harmless and indemnify Ticketer and its affiliates, officers, agents, and employees from any claim, suit or action arising from or related to the use of the Services or violation of these terms, including any liability or expense arising from claims, losses, damages, suits, judgments, litigation costs and attorneys' fees.
          </p>
        </section>

        <p className="text-muted-foreground text-sm">
          For more information about our terms and policies, please visit our{" "}
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

