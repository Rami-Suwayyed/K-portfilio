'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  ArrowUp,
} from 'lucide-react'
import bgCircle from '../../public/images/bg-circle.png'
import bgTriangle from '../../public/images/bg-triangle.png'
import logoWhite from '../../public/images/brand/kabseh-logo-white.png'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [showTop, setShowTop] = useState(false)
  const sentinelRef = useRef(null)

  useEffect(() => {
    // Show the back-to-top button once the page top scrolls out of view.
    const home = document.getElementById('home')
    if (!home) return
    const observer = new IntersectionObserver(([entry]) => setShowTop(!entry.isIntersecting), {
      threshold: 0,
    })
    observer.observe(home)
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
  }

  const links = [
    { key: 'footer.aboutUs', id: 'about' },
    { key: 'footer.contactUs', id: 'contact' },
    { key: 'navigation.feature', id: 'feature' },
    { key: 'navigation.partners', id: 'brands' },
    { key: 'navigation.downloadApp', id: 'downloadApp' },
  ]

  const socials = [
    { Icon: Twitter, href: 'https://x.com/kabsehjo/', label: t('footer.socialMedia.twitter') },
    { Icon: Facebook, href: 'https://www.facebook.com/kabsehjo/', label: t('footer.socialMedia.facebook') },
    { Icon: Instagram, href: 'https://www.instagram.com/kabsehjo/', label: t('footer.socialMedia.instagram') },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/kabseh-jo/', label: t('footer.socialMedia.linkedin') },
  ]

  return (
    <footer className={`relative overflow-hidden bg-primary-gradient text-white ${isRTL ? 'rtl' : 'ltr'}`} ref={sentinelRef}>
      <Image src={bgCircle} alt="" className="pointer-events-none absolute bottom-0 start-0 z-0 opacity-50" priority />
      <Image src={bgTriangle} alt="" className="pointer-events-none absolute top-1/2 end-0 z-0 -translate-y-1/2 opacity-50" priority />

      {showTop && (
        <button
          onClick={() => scrollToSection('home')}
          aria-label={t('navigation.home')}
          className="fixed bottom-6 end-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-white text-primary shadow-warm transition-transform duration-300 hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <div className="relative z-10 mx-auto max-w-content px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <Image src={logoWhite} alt="Kabseh" width={159} height={40} className="mb-5 object-contain" priority />
            <div className="space-y-3 text-white/85">
              <a
                href={`https://maps.google.com/?q=${t('footer.addressText')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span className="leading-relaxed">{t('footer.addressText')}</span>
              </a>
              <a href={`tel:${t('phone.support').replace(/\s+/g, '')}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span dir="ltr">{t('phone.support')}</span>
              </a>
              <a href={`mailto:${t('email.support')}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span dir="ltr">{t('email.support')}</span>
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <Link
                  key={href}
                  target="_blank"
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="mb-4 text-lg font-semibold">{t('footer.quickLinks')}</h4>
            <div className="space-y-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center text-white/85 transition-all duration-300 hover:text-white ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`h-3.5 w-3.5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                  <span>{t(link.key)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="mb-4 text-lg font-semibold">{t('footer.popularLinks')}</h4>
            <div className="space-y-3">
              {['home', 'about', 'feature', 'brands', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center text-white/85 transition-all duration-300 hover:text-white ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`h-3.5 w-3.5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                  <span>{t(`navigation.${id === 'contact' ? 'contact' : id}`)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="mb-4 text-lg font-semibold">{t('footer.newsletter')}</h4>
            <p className="text-sm leading-relaxed text-white/85">{t('footer.newsletterText')}</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-white/85 md:flex-row lg:px-8">
          <span className="font-semibold text-white">{t('name')}</span>
          <span>
            {t('footer.allRightsReserved')} &copy; {t('footer.siteName')}
          </span>
        </div>
      </div>
    </footer>
  )
}
