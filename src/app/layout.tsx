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
  title: 'Kabseh for Delivery Services',
  description: 'The best food delivery app',
  keywords: 'food delivery, Middle Eastern cuisine, Kabsa, Kabseh , restaurant, online ordering, food app ,Kabseh Food delivery service , Food delivery service The best food delivery app, توصيل طعام، مأكولات شرق أوسطية، كبسة، مطعم، طلب عبر الإنترنت، تطبيق طعام، كبسة خدمة توصيل طعام، خدمة توصيل طعام أفضل تطبيق لتوصيل الطعام , كبسه , كبسة لخدمة التوصيل , كبسه لخدمة التوصيل توصيل مكولات , كبسة لخدمات توصيل المكولات , كبسه لخدمات توصيل المكولات , اسرع خدمة توصيل, اسرع خدمة توصيل مكولات , اسرع خدمة توصيل مكولات في السعودية , اسرع خدمة توصيل مكولات في الرياض , اسرع خدمة توصيل مكولات في جدة , اسرع خدمة توصيل مكولات في الدمام , اسرع خدمة توصيل مكولات في المدينة المنورة , اسرع خدمة توصيل مكولات في مكة المكرمة , اسرع خدمة توصيل مكولات في الخبر , اسرع خدمة توصيل مكولات في الظهران',
  robots: 'index, follow',
  authors: [
    {
      name: 'Kabseh for Delivery Services',
      url: 'https://Kabseeh.com',
    },
  ],
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Add suppressHydrationWarning to prevent hydration mismatches from browser extensions
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2356875822234904" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2356875822234904"
          crossOrigin="anonymous"
        />
        {/* Google Analytics */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-0Z9SX67Z2E"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0Z9SX67Z2E');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${montserrat.variable} font-montserrat`}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}