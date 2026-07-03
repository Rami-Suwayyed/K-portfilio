'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import screenshot1_ar from '../../public/images/screenshot1-ar.jpeg'
import screenshot2_ar from '../../public/images/screenshot2-ar.jpeg'
import screenshot3_ar from '../../public/images/screenshot3-ar.jpeg'
import screenshot4_ar from '../../public/images/screenshot4-ar.jpeg'
import screenshot1_en from '../../public/images/screenshot1-en.jpeg'
import screenshot2_en from '../../public/images/screenshot2-en.jpeg'
import screenshot3_en from '../../public/images/screenshot3-en.jpeg'
import screenshot4_en from '../../public/images/screenshot4-en.jpeg'
import bgCircle from '../../public/images/bg-circle.png'
import bgTriangle from '../../public/images/bg-triangle.png'
import screenshotFrame from '../../public/images/screenshot-frame.png'

export default function HeroSection({ scrollToContact }) {
  const { t, i18n } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const isRTL = i18n.language === 'ar'
  const reduceMotion = useReducedMotion()

  const screenshots = isRTL
    ? [screenshot1_ar, screenshot2_ar, screenshot3_ar, screenshot4_ar]
    : [screenshot1_en, screenshot2_en, screenshot3_en, screenshot4_en]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [screenshots.length])

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const item = reduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-gradient" />
      <Image
        src={bgCircle}
        alt=""
        className={`pointer-events-none absolute top-0 opacity-70 ${isRTL ? 'right-0' : 'left-0'}`}
        priority
      />
      <Image
        src={bgTriangle}
        alt=""
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 opacity-70 ${isRTL ? 'left-0' : 'right-0'}`}
        priority
      />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-content items-center px-4 pb-16 pt-28 lg:px-8 lg:pt-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={`text-center lg:col-span-7 ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}
          >
            <motion.span
              variants={item}
              className="chip mb-5 bg-white/15 text-white backdrop-blur-sm"
            >
              {t('appName')}
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              variants={item}
              className={`mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl ${
                isRTL ? 'lg:ms-auto' : ''
              } mx-auto lg:mx-0`}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              variants={item}
              className={`mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center ${
                isRTL ? 'lg:justify-end' : 'lg:justify-start'
              }`}
            >
              <button onClick={() => scrollToId('downloadApp')} className="btn btn-light px-7 py-3.5">
                {t('buttons.startFreeTrial') || 'Get the app'}
              </button>
              <button onClick={scrollToContact} className="btn btn-outline-white px-7 py-3.5">
                {t('buttons.contactUs')}
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`flex justify-center lg:col-span-5 ${isRTL ? 'lg:justify-start' : 'lg:justify-end'}`}
          >
            <div className="relative h-[500px] w-[253px] p-[15px]">
              <div className="pointer-events-none absolute inset-0 z-10">
                <Image src={screenshotFrame} alt="" fill className="object-contain" priority />
              </div>

              <div className="relative h-full overflow-hidden rounded-[30px]">
                <div
                  className="flex h-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(${isRTL ? '' : '-'}${currentSlide * 100}%)` }}
                >
                  {screenshots.map((screenshot, index) => (
                    <div key={index} className="h-full w-full flex-shrink-0">
                      <div className="relative h-[470px] w-[223px]">
                        <Image
                          src={screenshot}
                          alt={`Kabseh app screen ${index + 1}`}
                          fill
                          className="rounded-[20px] object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`absolute top-1/2 flex -translate-y-1/2 flex-col gap-2 ${
                  isRTL ? 'left-[-26px]' : 'right-[-26px]'
                }`}
              >
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full bg-white transition-all duration-300 ${
                      index === currentSlide ? 'h-6 opacity-100' : 'w-2.5 opacity-50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
