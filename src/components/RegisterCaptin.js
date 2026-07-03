'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { Bike, ArrowRight } from 'lucide-react'
import Reveal from './common/Reveal'
import registerCaptin from './../../public/images/RegisterCaptin.webp'

function RegisterCaptin() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <section className="py-16 lg:py-24" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-content px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-block bg-primary-gradient px-6 py-12 shadow-warm md:px-12 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={`relative ${isRTL ? 'lg:order-2' : ''}`}>
              <div className="overflow-hidden rounded-[1.75rem] shadow-warm ring-1 ring-white/20">
                <Image
                  src={registerCaptin}
                  alt="Become a Kabseh captain"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className={`space-y-6 ${isRTL ? 'lg:order-1' : ''}`}>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                <Bike className="h-6 w-6" />
              </span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                {t('registerCaptin.title')}
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-white/90">
                {t('registerCaptin.description1')}
              </p>
              <Link href="/register/captain" className="btn btn-light px-7 py-3.5">
                {t('registerCaptin.button')}
                <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterCaptin
