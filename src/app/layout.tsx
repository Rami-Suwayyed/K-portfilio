import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import TranslationProvider from '../components/TranslationProvider'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'كبسه - Kabsa Food Ordering',
  description: 'Authentic Middle Eastern cuisine delivery',
  icons: {
    icon: '/images/Logo.webp',
    shortcut: '/images/Logo.webp',
    apple: '/images/Logo.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat`}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}