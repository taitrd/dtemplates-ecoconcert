import { AccountSidebar } from "@/components/account-sidebar";
import { isStaticExport } from "@/lib/constants/app";
import { notFound } from "next/navigation";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (isStaticExport) {
    notFound();
  }
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <AccountSidebar />
        <main className="flex-1 min-h-screen bg-background">{children}</main>
      </div>
    </div>
  );
}
