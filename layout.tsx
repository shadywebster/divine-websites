import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Spiritual Knowledge - Vedas, Puranas, Upanishads & More',
  description: 'Explore the ancient wisdom of Hindu scriptures including Vedas, Puranas, Upanishads, and Tantra texts. Shop for devotional items, books, idols, and japa malas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${poppins.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
