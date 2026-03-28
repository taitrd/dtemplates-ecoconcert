import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AccountDropdown } from "@/components/account-dropdown";
import { SiteFooter } from "@/components/site-footer";
import { ReduxProvider } from "@/components/providers/redux-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { TopNavigation } from "@/components/top-navigation";
import { BottomNavigation } from "@/components/bottom-navigation";

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
            <TopNavigation />

            <main className="flex-1 pb-16 md:pb-0">
              {children}
            </main>

            <BottomNavigation />

            <SiteFooter />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
