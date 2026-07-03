'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Clock, Shield, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from './common/Reveal'
import screenshotFrame from '../../public/images/screenshot-frame.png'
import screenshot1_en from '../../public/images/screenshot1-en.jpeg'
import screenshot1_ar from '../../public/images/screenshot1-ar.jpeg'

const APP_STORE = 'https://apps.apple.com/om/app/kabseh-%D9%83%D8%A8%D8%B3%D9%87/id6463165637?l=ar'
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.metafortech.kabsauser&hl=ar'

function DownloadApp() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const screenshot = isRTL ? screenshot1_ar : screenshot1_en

  return (
    <section id="downloadApp" className="overflow-hidden py-20 lg:py-28" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-content px-4 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{t('downloadApp.title')}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t('downloadApp.subtitle')}</p>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className={isRTL ? 'lg:order-2' : ''}>
            <span className="chip mb-5 bg-brand-green/10 text-brand-green-dark">
              <Shield className="h-4 w-4" />
              {t('downloadApp.security')}
            </span>

            <h3 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
              {t('downloadApp.cta.title')}
            </h3>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              {t('downloadApp.cta.description')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link target="_blank" href={APP_STORE} className="btn bg-ink px-6 py-3.5 text-white hover:opacity-90">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-start">
                  <span className="block text-[11px] leading-none text-white/70">
                    {t('downloadApp.buttons.appStore.title')}
                  </span>
                  <span className="font-semibold">{t('downloadApp.buttons.appStore.name')}</span>
                </span>
              </Link>
              <Link target="_blank" href={PLAY_STORE} className="btn bg-ink px-6 py-3.5 text-white hover:opacity-90">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="text-start">
                  <span className="block text-[11px] leading-none text-white/70">
                    {t('downloadApp.buttons.googlePlay.title')}
                  </span>
                  <span className="font-semibold">{t('downloadApp.buttons.googlePlay.name')}</span>
                </span>
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-6 text-sm text-ink-soft">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                {t('downloadApp.stats.users')}
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                {t('downloadApp.stats.rating')}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className={`flex justify-center ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/10 blur-2xl" />
              <div className="relative h-[500px] w-[253px] p-[15px]">
                <div className="pointer-events-none absolute inset-0 z-10">
                  <Image src={screenshotFrame} alt="" fill className="object-contain" />
                </div>
                <div className="relative h-full overflow-hidden rounded-[30px]">
                  <div className="relative h-full w-full">
                    <Image src={screenshot} alt="Kabseh app" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default DownloadApp
