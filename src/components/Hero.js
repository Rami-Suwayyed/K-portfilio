'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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
import bgBottom from '../../public/images/bg-bottom.png'
import screenshotFrame from '../../public/images/screenshot-frame.png'

export default function HeroSection({scrollToContact}) {
  const { t, i18n } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const isRTL = i18n.language === 'ar'

  const screenshots = isRTL ? [
    screenshot1_ar,
    screenshot2_ar,
    screenshot3_ar,
    screenshot4_ar] : [
    screenshot1_en,
    screenshot2_en,
    screenshot3_en,
    screenshot4_en
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [screenshots.length])



  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-gradient"></div>

      <Image
        src={bgCircle}
        alt=""
        className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} pointer-events-none`}
        priority
      />
      <Image
        src={bgTriangle}
        alt=""
        className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-0' : 'right-0'} pointer-events-none`}
        priority
      />
      <Image
        src={bgBottom}
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
        priority
      />

      <div className="relative z-10 min-h-screen flex items-center pt-32 pb-24 md:pt-16 md:pb-0">
        <div className="container mx-auto px-4 lg:px-8 max-w-8xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className={`lg:col-span-8 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'} space-y-8`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight slideInDown">
                {t('hero.title')}
              </h1>

              <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed slideInDown max-w-3xl mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
                <button className="btn-primary-gradient px-8 py-4 rounded-full text-white font-semibold hover:shadow-xl transition-all duration-300 slideInLeft">
                  {t('buttons.readMore')}
                </button>
                <button onClick={scrollToContact} className="btn-secondary-gradient px-8 py-4 rounded-full text-white font-semibold hover:shadow-xl transition-all duration-300 slideInRight">
                  {t('buttons.contactUs')}
                </button>
              </div>
            </div>

            <div className={`lg:col-span-4 flex justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-end'} fadeInUp`}>
              <div className="relative w-[253px] h-[500px] p-[15px]">
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <Image
                    src={screenshotFrame}
                    alt=""
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="relative h-full overflow-hidden rounded-[30px]">
                  <div
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(${isRTL ? '' : '-'}${currentSlide * 100}%)` }}
                  >
                    {screenshots.map((screenshot, index) => (
                      <div key={index} className="w-full h-full flex-shrink-0">
                        <div className="relative w-[223px] h-[470px]">
                          <Image
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            fill
                            className="object-cover rounded-[20px]"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-[-30px]' : 'right-[-30px]'} flex flex-col gap-2`}>
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`relative w-[15px] h-[15px] rounded-full bg-primary-gradient transition-all duration-300 ${index === currentSlide ? 'shadow-lg' : ''
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <span className="absolute inset-[5px] bg-white rounded-full"></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-[var(--primary)] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--primary)] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}