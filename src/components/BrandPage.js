'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ShoppingBag, Download, ExternalLink } from 'lucide-react'
import Footer from './Footer'
import logo from '../../public/images/brand/kabseh-logo-red.png'

export default function BrandPage({ brand }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const lang = i18n.language

  const name = brand.title?.[lang] || brand.title?.en || ''
  const description = brand.description?.[lang] || brand.description?.en || ''
  const alt = brand.logo_alt?.[lang] || brand.logo_alt?.en || name
  const related = Array.isArray(brand.related_items) ? brand.related_items : []

  // Structured data uses the canonical (English) values for reliable indexing.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: brand.title?.en || name,
    logo: brand.logo,
    url: `https://web.kabseh.app/brands/${brand.slug}/`,
    ...(brand.description?.en ? { description: brand.description.en } : {}),
  }

  return (
    <main className="min-h-[100dvh] bg-cream" dir={isRTL ? 'rtl' : 'ltr'}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="sticky top-0 z-30 border-b border-cream-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/" aria-label="Kabseh home">
            <Image src={logo} alt="Kabseh" width={698} height={176} className="h-9 w-auto object-contain" priority />
          </Link>
          <div className="flex items-center gap-1">
            <Link href="/" className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-primary">
              <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              <span className="hidden sm:inline">{t('register.backToHome')}</span>
            </Link>
            <button
              onClick={() => i18n.changeLanguage(isRTL ? 'en' : 'ar')}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-cream hover:text-primary"
            >
              {isRTL ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-content px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center">
            <div className="relative grid h-64 w-64 place-items-center rounded-block bg-white p-8 shadow-warm ring-1 ring-black/5">
              {brand.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={brand.logo} alt={alt} className="max-h-full max-w-full object-contain" width={220} height={220} />
              ) : null}
            </div>
          </div>

          <div className={`space-y-5 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">{name}</h1>
            {description && <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{description}</p>}

            <div className="rounded-card border border-cream-200 bg-white/70 p-5 shadow-soft">
              <p className="font-semibold text-brand-green-dark">{t('brandPage.deliveryTitle')}</p>
              <p className="mt-1 text-ink-soft">{t('brandPage.deliveryText', { brand: name })}</p>
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Link href="/#downloadApp" className="btn btn-primary px-6 py-3">
                <ShoppingBag className="h-5 w-5" />
                {t('brandPage.orderCta')}
              </Link>
              <Link href="/#downloadApp" className="btn btn-green px-6 py-3">
                <Download className="h-5 w-5" />
                {t('brandPage.downloadCta')}
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="mb-5 text-xl font-bold text-ink">{t('brandPage.related')}</h2>
          <div className="flex flex-wrap gap-3">
            {related.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream-200 bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-warm"
              >
                {item.label}
                <ExternalLink className="h-3.5 w-3.5 text-ink-soft" />
              </a>
            ))}
            <Link
              href="/#brands"
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary/15"
            >
              {t('brandPage.browse')}
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}
