import { Breadcrumb } from "@/components/ui/breadcrumb"
import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Register', href: '/register' }
        ]} />
      </div>
      <div className="container flex items-center justify-center py-16">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-sm">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

