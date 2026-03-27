import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AccountDropdown } from "@/components/account-dropdown";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticketer - Book Your Favorite Concerts",
  description:
    "Find and book tickets for your favorite concerts and live events.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[#0a0b2e] text-white`}
      >
        <ThemeProvider defaultTheme="dark" attribute="class">
          {/* Navigation */}
          <nav className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-medium hover:text-gray-300"
              >
                Home
              </Link>
              <Link
                href="/concerts"
                className="text-sm font-medium hover:text-gray-300"
              >
                Concerts
              </Link>
              <Link
                href="/singers"
                className="text-sm font-medium hover:text-gray-300"
              >
                Singers
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Link href="/" className="text-2xl font-bold tracking-wider">
                TICKETER
              </Link>
            </div>
            <AccountDropdown />
          </nav>

          {children}

          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
