'use client'

import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone } from 'lucide-react'
import toast from 'react-hot-toast'
import Reveal from './common/Reveal'
import { submitContact } from '../lib/api'

function ContactUs({ contactRef }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [submitting, setSubmitting] = useState(false)
  const formRef = useRef(null)

  const toastStyle = {
    background: 'var(--primary)',
    color: 'white',
    borderRadius: '25px',
    padding: '16px 24px',
    fontSize: '16px',
    fontWeight: '500',
    direction: isRTL ? 'rtl' : 'ltr',
    textAlign: isRTL ? 'right' : 'left',
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      subject: data.get('subject'),
      message: data.get('message'),
      botcheck: data.get('botcheck') || '',
    }

    setSubmitting(true)
    try {
      await submitContact(payload)
      toast.success(t('contactUs.successMessage'), { duration: 4000, position: 'top-center', style: toastStyle })
      form.reset()
    } catch {
      // Network / service failure — prompt a retry without losing entered values.
      toast.error(t('contactUs.errorMessage'), { position: 'top-center', style: toastStyle })
    } finally {
      setSubmitting(false)
    }
  }

  const fieldClass =
    'w-full rounded-2xl border border-cream-200 bg-cream px-5 py-3.5 text-ink placeholder-ink-soft transition-all duration-200 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15'

  return (
    <section ref={contactRef} id="contact" className="bg-cream py-20 lg:py-28" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-content px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-8">
            <div className="space-y-4">
              <span className="eyebrow">{t('contactUs.title')}</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                {t('contactUs.subtitle')}
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{t('contactUs.description')}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${t('email.support')}`}
                className="flex items-center gap-4 rounded-card border border-cream-200 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm"
              >
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-primary text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span className={isRTL ? 'text-right' : 'text-left'}>
                  <span className="block text-sm font-semibold text-ink">{t('contactUs.email')}</span>
                  <span className="block text-sm text-ink-soft" dir="ltr">{t('email.support')}</span>
                </span>
              </a>
              <a
                href={`tel:${t('phone.support').replace(/\s+/g, '')}`}
                className="flex items-center gap-4 rounded-card border border-cream-200 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm"
              >
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-brand-green text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <span className={isRTL ? 'text-right' : 'text-left'}>
                  <span className="block text-sm font-semibold text-ink">{t('contactUs.phone')}</span>
                  <span className="block text-sm text-ink-soft" dir="ltr">{t('phone.support')}</span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-block bg-white p-7 shadow-warm md:p-9">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className={`block text-sm font-medium text-ink ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contactUs.form.name')}
                  </label>
                  <input id="name" type="text" name="name" required placeholder={t('contactUs.form.namePlaceholder')} className={fieldClass} style={{ direction: isRTL ? 'rtl' : 'ltr' }} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className={`block text-sm font-medium text-ink ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contactUs.form.email')}
                  </label>
                  <input id="email" type="email" name="email" required placeholder={t('contactUs.form.emailPlaceholder')} className={fieldClass} style={{ direction: 'ltr' }} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="phone" className={`block text-sm font-medium text-ink ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contactUs.form.phone')}
                  </label>
                  <input id="phone" type="tel" name="phone" required placeholder={t('contactUs.form.phonePlaceholder')} className={fieldClass} style={{ direction: 'ltr' }} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className={`block text-sm font-medium text-ink ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contactUs.form.subject')}
                  </label>
                  <input id="subject" type="text" name="subject" required placeholder={t('contactUs.form.subjectPlaceholder')} className={fieldClass} style={{ direction: isRTL ? 'rtl' : 'ltr' }} />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className={`block text-sm font-medium text-ink ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('contactUs.form.message')}
                </label>
                <textarea id="message" name="message" rows={5} required placeholder={t('contactUs.form.messagePlaceholder')} className={`${fieldClass} resize-none`} style={{ direction: isRTL ? 'rtl' : 'ltr' }} />
              </div>

              <button type="submit" disabled={submitting} className="btn btn-primary w-full py-4 text-lg disabled:opacity-70">
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
                    {t('contactUs.form.sending')}
                  </span>
                ) : (
                  t('contactUs.form.sendMessage')
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
