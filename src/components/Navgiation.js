'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import Image from 'next/image'
import logo from '../../public/images/brand/kabseh-logo-white.png'
import logoOrange from '../../public/images/brand/kabseh-logo-red.png'

const SECTION_IDS = ['home', 'about', 'feature', 'brands', 'downloadApp', 'contact']

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const sentinelRef = useRef(null)
  const { t } = useTranslation()

  const closeMenu = () => setIsMenuOpen(false)

  // Sticky toggle via a top sentinel (no scroll listener).
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { rootMargin: '-80px 0px 0px 0px' }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  // Active-section highlight via IntersectionObserver.
  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
    }
    closeMenu()
  }

  const navItems = [
    { id: 'home', label: t('navigation.home') || 'Home' },
    { id: 'about', label: t('navigation.about') || 'About' },
    { id: 'feature', label: t('navigation.feature') || 'Feature' },
    { id: 'brands', label: t('navigation.partners') || 'Partners' },
    { id: 'downloadApp', label: t('navigation.downloadApp') || 'Download App' },
    { id: 'contact', label: t('navigation.contact') || 'Contact' },
  ]

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="absolute top-0 h-px w-px" />
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isSticky ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-content px-4 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            <Link href="/" onClick={() => scrollToSection('home')} aria-label="Kabseh">
              <Image
                src={isSticky ? logoOrange : logo}
                alt="Kabseh"
                width={698}
                height={176}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const active = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-200 ${
                      isSticky
                        ? active
                          ? 'text-primary'
                          : 'text-ink-soft hover:text-ink'
                        : active
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                        active ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <LanguageSwitcher />
              <button
                onClick={() => scrollToSection('downloadApp')}
                className="btn btn-primary hidden px-5 py-2.5 text-sm md:inline-flex"
              >
                {t('buttons.startFreeTrial') || 'Get the app'}
              </button>
              <button
                className={`rounded-full p-2 lg:hidden ${isSticky ? 'text-ink' : 'text-white'}`}
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 lg:hidden ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mb-3 mt-1 rounded-card bg-white p-2 shadow-soft">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full rounded-xl px-4 py-3 text-start transition-colors ${
                    activeSection === item.id
                      ? 'bg-cream text-primary'
                      : 'text-ink-soft hover:bg-cream'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('downloadApp')}
                className="btn btn-primary mt-2 w-full py-3"
              >
                {t('buttons.startFreeTrial') || 'Get the app'}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
