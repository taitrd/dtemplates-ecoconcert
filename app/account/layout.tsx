import { Breadcrumb } from "@/components/ui/breadcrumb"
import { AccountNav } from "@/components/account/account-nav"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container py-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'My Account', href: '/account' }
        ]} />
        <div className="py-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <AccountNav />
            </div>
            <div className="lg:col-span-9">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

