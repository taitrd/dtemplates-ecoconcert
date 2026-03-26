import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header/header'
import { Footer } from '@/components/footer/footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecobazar - Organic eCommerce Store',
  description: 'Shop fresh and organic products at Ecobazar',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

