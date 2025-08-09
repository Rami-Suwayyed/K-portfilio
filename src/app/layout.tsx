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
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body className={`${montserrat.variable} font-montserrat`}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}