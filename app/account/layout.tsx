import { AccountSidebar } from "@/components/account-sidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AccountSidebar />
      <main className="flex-1 min-h-screen bg-background">{children}</main>
    </div>
  );
}
