'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import Image from 'next/image'
import logo from '../../public/images/Kabseh-Logo-white (1).png'
import logoOrange from '../../public/images/Kabseh-LogoText.png'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useTranslation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsSticky(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'feature', 'brands', 'downloadApp', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    closeMenu()
  }

  const navItems = [
    { id: 'home', label: t('navigation.home') || 'Home' },
    { id: 'about', label: t('navigation.about') || 'About' },
    { id: 'feature', label: t('navigation.feature') || 'Feature' },
    { id: 'brands', label: t('navigation.partners') || 'Partners' },
    { id: 'downloadApp', label: t('navigation.downloadApp') || 'Download App' },
    { id: 'contact', label: t('navigation.contact') || 'Contact' }
  ]


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isSticky 
        ? 'bg-white shadow-lg navbar-sticky' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isSticky ? 'h-16' : 'h-20'
        }`}>
          <Link 
            href="/" 
            className={`text-2xl font-bold transition-all duration-500 ${
              isSticky 
                ? 'text-primary-gradient' 
                : 'text-white'
            }`}
            onClick={() => scrollToSection('home')}
          >
            <Image 
              src={isSticky ? logoOrange : logo} 
              alt="Logo" 
              width={100} 
              height={100} 
              className="transition-all duration-500"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link-arrow relative px-4 py-2 font-medium text-lg transition-all duration-500 ${
                  isSticky 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-white'
                } ${
                  activeSection === item.id ? 'active' : ''
                }`}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '18px',
                  fontWeight: '500'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <LanguageSwitcher />
            <button className="hidden md:block btn-primary-gradient px-4 md:px-6 py-2 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300 text-sm md:text-base">
              {t('buttons.startFreeTrial') || 'Start Free Trial'}
            </button>
            <button
              className="lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ml-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                } ${isSticky ? 'bg-gray-700' : 'bg-white'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                } ${isSticky ? 'bg-gray-700' : 'bg-white'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                } ${isSticky ? 'bg-gray-700' : 'bg-white'}`}></span>
              </div>
            </button>
          </div>
        </div>

        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-200 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 ${
                  activeSection === item.id ? 'text-primary bg-gray-50' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-2 border-t border-gray-200 mt-4 pt-4">
               <button   key={'downloadApp'} onClick={() => scrollToSection('downloadApp')} className="btn-secondary-gradient px-8 py-4 rounded-full text-white font-semibold hover:shadow-xl transition-all duration-300 slideInRight">
                  {t('buttons.startFreeTrial')}
                </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}