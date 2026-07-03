'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { Store, ArrowRight } from 'lucide-react'
import Reveal from './common/Reveal'
import registerResturant from './../../public/images/registerResturant.webp'

function RegisterResturant() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <section className="py-16 lg:py-24" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-content px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-green/10 text-brand-green-dark">
              <Store className="h-6 w-6" />
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
              {t('registerResturant.title')}
            </h2>
            <div className="max-w-xl space-y-2 text-lg leading-relaxed text-ink-soft">
              <p>{t('registerResturant.description1')}</p>
              <p>{t('registerResturant.description2')}</p>
              <p>{t('registerResturant.description3')}</p>
            </div>
            <Link href="/register/restaurant" className="btn btn-green px-7 py-3.5">
              {t('registerResturant.button')}
              <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-brand-green/10 blur-2xl" />
            <div className="overflow-hidden rounded-block shadow-warm ring-1 ring-black/5">
              <Image
                src={registerResturant}
                alt="Register your restaurant with Kabseh"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default RegisterResturant
