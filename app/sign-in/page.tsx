import { Breadcrumb } from "@/components/ui/breadcrumb"
import { SignInForm } from "@/components/auth/sign-in-form"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Sign In', href: '/sign-in' }
        ]} />
      </div>
      <div className="container flex items-center justify-center py-16">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-sm">
          <SignInForm />
        </div>
      </div>
    </div>
  )
}

