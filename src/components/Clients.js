'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useTranslation } from 'react-i18next'
import Reveal from './common/Reveal'
import { brands } from '../data/brands'

const Clients = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const lang = i18n.language

  const animation = { duration: 25000, easing: (x) => x }

  // track.details is null until the slider has slides (brands not fetched yet) — guard it.
  const advance = (s) => {
    const abs = s?.track?.details?.abs
    if (typeof abs === 'number') s.moveToIdx(abs + 5, true, animation)
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    mode: 'free',
    rtl: isRTL,
    slides: { perView: 'auto', spacing: 32 },
    created(s) {
      if (s?.track?.details) s.moveToIdx(5, true, animation)
    },
    updated: advance,
    animationEnded: advance,
  })

  // Re-sync the marquee when the language changes (direction/RTL flips).
  useEffect(() => {
    if (brands.length && instanceRef.current?.update) {
      const id = setTimeout(() => instanceRef.current.update(), 100)
      return () => clearTimeout(id)
    }
  }, [lang, instanceRef])

  const pause = () => instanceRef.current?.animator?.stop()
  const resume = () => advance(instanceRef.current)

  const nameOf = (b) => b.title?.[lang] || b.title?.en || ''
  const altOf = (b) => b.logo_alt?.[lang] || b.logo_alt?.en || nameOf(b)

  const loop = brands.length ? [...brands, ...brands, ...brands] : []

  return (
    <section id="brands" className="bg-cream py-20 lg:py-28" dir={isRTL ? 'rtl' : 'ltr'}>
      <Reveal className="mx-auto mb-14 max-w-2xl px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {t('clients.title')}
          <span className="mt-1 block text-gradient-brand">{t('clients.subtitle')}</span>
        </h2>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-primary/70" />
      </Reveal>

      <div className="relative" onMouseEnter={pause} onMouseLeave={resume}>
        <div ref={sliderRef} className="keen-slider">
          {loop.map((brand, index) => (
            <div
              key={`${brand.id}-${index}-${lang}`}
              className="keen-slider__slide brand-slide"
              style={{ minWidth: '200px', width: 'auto' }}
            >
              <Link
                href={`/brands/${brand.slug}/`}
                className="group flex w-[200px] flex-col items-center rounded-card border border-cream-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm"
              >
                <img
                  src={brand.logo}
                  alt={altOf(brand)}
                  className="mx-auto h-20 w-32 object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                  width={128}
                  height={80}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <h3 className="mt-3 text-center text-sm font-semibold text-ink-soft">{nameOf(brand)}</h3>
              </Link>
            </div>
          ))}
        </div>

        <div className={`pointer-events-none absolute inset-y-0 start-0 z-10 w-24 from-cream to-transparent ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'}`} />
        <div className={`pointer-events-none absolute inset-y-0 end-0 z-10 w-24 from-cream to-transparent ${isRTL ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}`} />
      </div>

      <Reveal className="mx-auto mt-14 max-w-2xl px-4 text-center">
        <p className="text-lg leading-relaxed text-ink-soft">{t('clients.description')}</p>
      </Reveal>

      <style jsx>{`
        .keen-slider {
          height: auto;
        }
        .brand-slide {
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
        .keen-slider__slide {
          overflow: visible !important;
        }
        .keen-slider {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .keen-slider::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Clients
