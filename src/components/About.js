'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from './common/Card'
import Reveal from './common/Reveal'
import { Settings, Star } from 'lucide-react'
import Image from 'next/image'
import aboutOne from '../../public/images/10.png'
import aboutTwo from '../../public/images/8.png'
import aboutThree from '../../public/images/9.png'

function About() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <section className="bg-cream py-20 lg:py-28" dir={isRTL ? 'rtl' : 'ltr'} id="about">
      <div className="mx-auto max-w-content px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className={`space-y-7 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
            <span className="eyebrow">{t('about.subtitle')}</span>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              <span className="text-gradient-brand">{t('about.title')}</span>
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              {t('about.description')}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card icon={Settings} counts="50000+" description={t('about.activeInstall')} isRTL={isRTL} />
              <Card icon={Star} counts="4.8/5" description={t('about.clientsReviews')} isRTL={isRTL} />
            </div>
          </Reveal>

          <Reveal delay={0.1} className={`relative ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative mx-auto h-[460px] w-full max-w-md">
              <div className="absolute end-0 top-2 h-[300px] w-[58%] overflow-hidden rounded-[1.75rem] shadow-warm ring-1 ring-black/5">
                <Image src={aboutOne} alt="" fill sizes="280px" className="object-cover" priority />
              </div>
              <div className="absolute bottom-0 start-0 h-[260px] w-[52%] overflow-hidden rounded-[1.75rem] shadow-warm ring-1 ring-black/5">
                <Image src={aboutTwo} alt="" fill sizes="240px" className="object-cover" priority />
              </div>
              <div className="absolute start-[34%] top-[40%] h-[150px] w-[40%] overflow-hidden rounded-[1.5rem] shadow-soft ring-4 ring-cream">
                <Image src={aboutThree} alt="" fill sizes="180px" className="object-cover" />
              </div>
              <div className="absolute end-2 bottom-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-warm">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-green text-white">
                  <Star className="h-4 w-4 fill-current" />
                </span>
                <span className="text-sm font-bold text-ink">4.8</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
