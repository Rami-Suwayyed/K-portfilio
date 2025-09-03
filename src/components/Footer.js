'use client'

import { useState } from 'react'
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
  Send
} from 'lucide-react'
import bgCircle from '../../public/images/bg-circle.png'
import bgTriangle from '../../public/images/bg-triangle.png'
import bgTop from '../../public/images/bg-top.png'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const [email, setEmail] = useState('')
  const isRTL = i18n.language === 'ar'

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className={`relative bg-primary-gradient text-white mt-10 pt-5 overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Removed curved background images for straight-line look */}

      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h4 className="text-white text-lg font-semibold mb-4">
                {t('footer.address')}
              </h4>
              <div className="space-y-3 text-white/90">
                <div className={`flex items-start gap-3`}>
                  <MapPin className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                  <a href={`https://maps.google.com/?q=${t('footer.addressText')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white/100 transition-colors">
                    <span className="leading-relaxed">{t('footer.addressText')}</span>
                  </a>
                </div>
                <div className={`flex items-center gap-3`}>
                  <Phone className={`w-4 h-4 text-white flex-shrink-0 ${isRTL ? 'flex-row-reverse' : ''}`} />
                  <a href={`tel:${t('phone.support').replace(/\s+/g, '')}`} className="hover:text-white/100 transition-colors">
                    <span dir="ltr">{t('phone.support')}</span>
                  </a>
                </div>
                <div className={`flex items-center gap-3`}>
                  <Mail className="w-4 h-4 text-white flex-shrink-0" />
                  <a href={`mailto:${t('email.support')}`} className="hover:text-white/100 transition-colors">
                    <span dir="ltr">{t('email.support')}</span>
                  </a>
                </div>
              </div>

              <div className={`flex gap-2 pt-2 `}>
                <Link
                  target='_blank'
                  href="https://x.com/kabsehjo/"
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[var(--secondary-dark)] hover:text-primary transition-all duration-300 group"
                  aria-label={t('footer.socialMedia.twitter')}
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  target='_blank'
                  href="https://www.facebook.com/kabsehjo/"
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[var(--secondary-dark)] hover:text-primary transition-all duration-300 group"
                  aria-label={t('footer.socialMedia.facebook')}
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  target='_blank'
                  href="https://www.instagram.com/kabsehjo/"
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[var(--secondary-dark)] hover:text-primary transition-all duration-300 group"
                  aria-label={t('footer.socialMedia.instagram')}
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  target='_blank'
                  href="https://www.linkedin.com/company/kabseh-jo/"
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[var(--secondary-dark)] hover:text-primary transition-all duration-300 group"
                  aria-label={t('footer.socialMedia.linkedin')}
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h4 className="text-white text-lg font-semibold mb-4">
                {t('footer.quickLinks')}
              </h4>
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('about')}
                  className={`flex items-center text-white/90 hover:text-white hover:tracking-wide transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`w-3 h-3 text-sm transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'ml-3 rotate-180' : 'mr-3'}`} />
                  <span>{t('footer.aboutUs')}</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`flex items-center text-white/90 hover:text-white hover:tracking-wide transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`w-3 h-3 text-sm transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'ml-3 rotate-180' : 'mr-3'}`} />
                  <span>{t('footer.contactUs')}</span>
                </button>
                <button
                  onClick={() => scrollToSection('feature')}
                  className={`flex items-center text-white/90 hover:text-white hover:tracking-wide transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`w-3 h-3 text-sm transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'ml-3 rotate-180' : 'mr-3'}`} />
                  <span>{t('navigation.feature')}</span>
                </button>
                <button
                  onClick={() => scrollToSection('brands')}
                  className={`flex items-center text-white/90 hover:text-white hover:tracking-wide transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`w-3 h-3 text-sm transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'ml-3 rotate-180' : 'mr-3'}`} />
                  <span>{t('navigation.pricing')}</span>
                </button>
                <button
                  onClick={() => scrollToSection('review')}
                  className={`flex items-center text-white/90 hover:text-white hover:tracking-wide transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`w-3 h-3 text-sm transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'ml-3 rotate-180' : 'mr-3'}`} />
                  <span>{t('navigation.review')}</span>
                </button>
              </div>
            </div>

            <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h4 className="text-white text-lg font-semibold mb-4">
                {t('footer.popularLinks')}
              </h4>
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('home')}
                  className={`flex items-center text-white/90 hover:text-white hover:tracking-wide transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`w-3 h-3 text-sm transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'ml-3 rotate-180' : 'mr-3'}`} />
                  <span>{t('navigation.home')}</span>
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className={`flex items-center text-white/90 hover:text-white hover:tracking-wide transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`w-3 h-3 text-sm transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'ml-3 rotate-180' : 'mr-3'}`} />
                  <span>{t('footer.aboutUs')}</span>
                </button>
                <button
                  onClick={() => scrollToSection('feature')}
                  className={`flex items-center text-white/90 hover:text-white hover:tracking-wide transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`w-3 h-3 text-sm transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'ml-3 rotate-180' : 'mr-3'}`} />
                  <span>{t('navigation.feature')}</span>
                </button>
                <button
                  onClick={() => scrollToSection('brands')}
                  className={`flex items-center text-white/90 hover:text-white hover:tracking-wide transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`w-3 h-3 text-sm transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'ml-3 rotate-180' : 'mr-3'}`} />
                  <span>{t('navigation.pricing')}</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`flex items-center text-white/90 hover:text-white hover:tracking-wide transition-all duration-300 group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ChevronRight className={`w-3 h-3 text-sm transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'ml-3 rotate-180' : 'mr-3'}`} />
                  <span>{t('footer.contactUs')}</span>
                </button>
              </div>
            </div>

            <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h4 className="text-white text-lg font-semibold mb-4">
                {t('footer.newsletter')}
              </h4>
              <p className="text-white/90 text-sm leading-relaxed">
                {t('footer.newsletterText')}
              </p>

            </div>
          </div>
        </div>
               <button
                  onClick={() => scrollToSection('home')}
                  className="border-b border-white/30 hover:border-white transition-colors"
                >
                </button>
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-6">
            <div className={`flex flex-col md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''
              } justify-between items-center gap-2`}>
              <div className={`text-sm text-white/90 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('footer.allRightsReserved')}
                {' '} &copy; {' '}
               {t('footer.siteName')}
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}