import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/components/providers/redux-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { TopNavigation } from "@/components/top-navigation";
import { siteMetadata } from "@/lib/metadata";
import { LayoutProvider } from "@/components/providers/layout-provider";
import { LayoutToolbar } from "@/components/ui/layout-toolbar";
import {
  BottomNavWrapper,
  FooterWrapper,
} from "@/components/features/layout/wrappers";

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
  const fullVersion = process.env.APP_VERSION === "full";
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen`}>
        <ReduxProvider>
          <ThemeProvider enableSystem attribute="class">
            <LayoutProvider>
              {fullVersion && <LayoutToolbar />}
              <TopNavigation />

              <main className="flex-1 pb-16 md:pb-0">{children}</main>

              <div className="md:hidden">
                <BottomNavWrapper />
              </div>

              <FooterWrapper />
            </LayoutProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
