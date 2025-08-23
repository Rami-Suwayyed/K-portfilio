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
  title: 'كبسه - Kabseh Food Ordering',
  description: 'Authentic Middle Eastern cuisine delivery',
  keywords: 'food delivery, Middle Eastern cuisine, Kabsa, Kabseh , restaurant, online ordering, food app ,Kabseh Food delivery service , Food delivery service The best food delivery app, توصيل طعام، مأكولات شرق أوسطية، كبسة، مطعم، طلب عبر الإنترنت، تطبيق طعام، كبسة خدمة توصيل طعام، خدمة توصيل طعام أفضل تطبيق لتوصيل الطعام , كبسه , كبسة لخدمة التوصيل , كبسه لخدمة التوصيل توصيل مكولات , كبسة لخدمات توصيل المكولات , كبسه لخدمات توصيل المكولات , اسرع خدمة توصيل, اسرع خدمة توصيل مكولات , اسرع خدمة توصيل مكولات في السعودية , اسرع خدمة توصيل مكولات في الرياض , اسرع خدمة توصيل مكولات في جدة , اسرع خدمة توصيل مكولات في الدمام , اسرع خدمة توصيل مكولات في المدينة المنورة , اسرع خدمة توصيل مكولات في مكة المكرمة , اسرع خدمة توصيل مكولات في الخبر , اسرع خدمة توصيل مكولات في الظهران',
  robots: 'index, follow',
  authors: [
    {
      name: 'Kabseh Jordan',
      url: 'https://Kabseh.com',
    },
  ],
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
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