import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AccountDropdown } from "@/components/account-dropdown";
import { SiteFooter } from "@/components/site-footer";
import { ReduxProvider } from "@/components/providers/redux-provider";
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
    <html lang="en" suppressHydrationWarning>
      <body

        className={`${inter.className} min-h-screen bg-background text-foreground`}
      >
        <ReduxProvider>
          <ThemeProvider enableSystem attribute="class">
            {/* Navigation */}
            <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center space-x-8 text-muted-foreground">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/concerts"
                  className="text-sm font-medium hover:text-foreground transition-colors"
                >
                  Concerts
                </Link>
                <Link
                  href="/singers"
                  className="text-sm font-medium hover:text-foreground transition-colors"
                >
                  Singers
                </Link>
              </div>
              <div className="flex-1 flex justify-center">
                <Link href="/" className="text-2xl font-bold tracking-wider text-primary">
                  TICKETER
                </Link>
              </div>
              <AccountDropdown />
            </nav>

            {children}

            <SiteFooter />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
