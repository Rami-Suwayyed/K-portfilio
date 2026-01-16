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
  metadataBase: new URL('https://web.kabseh.app'),
  title: {
    default: 'Kabseh for Delivery Services - The Best Food Delivery App',
    template: '%s | Kabseh'
  },
  description: 'Kabseh connects you with the finest traditional restaurants. Fast, fair, and always fresh food delivery from your neighborhood. Download now!',
  keywords: 'food delivery, Middle Eastern cuisine, Kabsa, Kabseh, restaurant, online ordering, food app, Kabseh Food delivery service, Food delivery service, The best food delivery app, توصيل طعام، مأكولات شرق أوسطية، كبسة، مطعم، طلب عبر الإنترنت، تطبيق طعام، كبسة خدمة توصيل طعام، خدمة توصيل طعام أفضل تطبيق لتوصيل الطعام, كبسه, كبسة لخدمة التوصيل, كبسه لخدمة التوصيل توصيل مكولات, كبسة لخدمات توصيل المكولات, كبسه لخدمات توصيل المكولات, اسرع خدمة توصيل, اسرع خدمة توصيل مكولات, اسرع خدمة توصيل مكولات في السعودية, اسرع خدمة توصيل مكولات في الرياض, اسرع خدمة توصيل مكولات في جدة, اسرع خدمة توصيل مكولات في الدمام, اسرع خدمة توصيل مكولات في المدينة المنورة, اسرع خدمة توصيل مكولات في مكة المكرمة, اسرع خدمة توصيل مكولات في الخبر, اسرع خدمة توصيل مكولات في الظهران',
  applicationName: 'Kabseh',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [
    {
      name: 'Kabseh for Delivery Services',
      url: 'https://web.kabseh.app',
    },
  ],
  creator: 'Kabseh',
  publisher: 'Kabseh for Delivery Services',
  alternates: {
    canonical: 'https://web.kabseh.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_SA'],
    url: 'https://web.kabseh.app',
    siteName: 'Kabseh',
    title: 'Kabseh for Delivery Services - The Best Food Delivery App',
    description: 'Kabseh connects you with the finest traditional restaurants. Fast, fair, and always fresh food delivery from your neighborhood.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Kabseh Food Delivery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kabseh for Delivery Services - The Best Food Delivery App',
    description: 'Kabseh connects you with the finest traditional restaurants. Fast, fair, and always fresh food delivery.',
    images: ['/images/logo.png'],
    creator: '@kabsehjo',
  },
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'G-0Z9SX67Z2E',
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