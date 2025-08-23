'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const switchLanguage = (newLocale) => {
    if (newLocale === currentLocale) return;
    i18n.changeLanguage(newLocale);
  };

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only render once mounted on client to avoid hydration mismatch
  if (!isMounted) {
    // Return a placeholder with same structure but no text until client-side hydration
    return (
      <div className="flex items-center">
        <button 
          className={`px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
            isSticky 
              ? 'text-gray-700' 
              : 'text-white'
          }`}
          style={{
            borderRadius: 'var(--border-radius)',
            opacity: 0
          }}
        >
          placeholder
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      {currentLocale === 'en' ? (
        <button
          onClick={() => switchLanguage('ar')}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
            isSticky 
              ? 'text-gray-700 hover:text-[var(--primary)] hover:bg-gray-100' 
              : 'text-white hover:text-[var(--text-link-hover)] hover:bg-[var(--secondary-light)]'
          }`}
          style={{
            borderRadius: 'var(--border-radius)',
          }}
        >
          العربية
        </button>
      ) : (
        <button
          onClick={() => switchLanguage('en')}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
            isSticky 
              ? 'text-gray-700 hover:text-[var(--primary)] hover:bg-gray-100' 
              : 'text-white hover:text-[var(--text-link-hover)] hover:bg-[var(--secondary-light)]'
          }`}
          style={{
            borderRadius: 'var(--border-radius)',
          }}
        >
          English
        </button>
      )}
    </div>
  );
} 