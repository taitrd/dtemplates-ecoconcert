import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { ReduxProvider } from "@/components/providers/redux-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { TopNavigation } from "@/components/top-navigation";
import { BottomNavigation } from "@/components/bottom-navigation";
import { siteMetadata } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  ...siteMetadata,
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
      <body className={`${inter.variable} font-sans min-h-screen`}>
        <ReduxProvider>
          <ThemeProvider enableSystem attribute="class">
            <TopNavigation />

            <main className="flex-1 pb-16 md:pb-0">{children}</main>

            <BottomNavigation />

            <SiteFooter />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
