'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Store, Bike, CheckCircle2 } from 'lucide-react'
import RestaurantRegistrationForm from './forms/RestaurantRegistrationForm'
import CaptainRegistrationForm from './forms/CaptainRegistrationForm'
import logo from '../../public/images/brand/kabseh-logo-red.png'

const CONFIG = {
  restaurant: {
    Icon: Store,
    accent: 'bg-brand-green/10 text-brand-green-dark',
    titleKey: 'registerResturant.title',
    descKeys: ['registerResturant.description1', 'registerResturant.description2', 'registerResturant.description3'],
    Form: RestaurantRegistrationForm,
  },
  captain: {
    Icon: Bike,
    accent: 'bg-primary/10 text-primary',
    titleKey: 'registerCaptin.title',
    descKeys: ['registerCaptin.description1'],
    Form: CaptainRegistrationForm,
  },
}

export default function RegistrationLayout({ type }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [submitted, setSubmitted] = useState(false)
  const cfg = CONFIG[type]
  const { Icon, Form } = cfg

  const switchLang = () => i18n.changeLanguage(isRTL ? 'en' : 'ar')

  return (
    <main className="min-h-[100dvh] bg-cream" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="sticky top-0 z-30 border-b border-cream-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/" aria-label="Kabseh home">
            <Image src={logo} alt="Kabseh" width={698} height={176} className="h-9 w-auto object-contain" priority />
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              <span className="hidden sm:inline">{t('register.backToHome')}</span>
            </Link>
            <button
              onClick={switchLang}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-cream hover:text-primary"
            >
              {isRTL ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-content px-4 py-10 lg:px-8 lg:py-16">
        {submitted ? (
          <div className="mx-auto max-w-lg rounded-block bg-white p-8 text-center shadow-warm md:p-10">
            <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-brand-green/10 text-brand-green-dark">
              <CheckCircle2 className="h-8 w-8" />
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{t('register.successTitle')}</h1>
            <p className="mt-3 leading-relaxed text-ink-soft">{t('register.successText')}</p>
            <Link href="/" className="btn btn-primary mt-7 px-6 py-3">
              {t('register.backToHome')}
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="space-y-6 lg:pt-4">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${cfg.accent}`}>
                <Icon className="h-7 w-7" />
              </span>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">{t(cfg.titleKey)}</h1>
              <div className="max-w-xl space-y-2 text-lg leading-relaxed text-ink-soft">
                {cfg.descKeys.map((k) => (
                  <p key={k}>{t(k)}</p>
                ))}
              </div>
            </div>

            <div className="rounded-block bg-white p-6 shadow-warm md:p-8">
              <Form onSuccess={() => setSubmitted(true)} />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
