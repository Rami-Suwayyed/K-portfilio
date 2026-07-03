'use client'

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import { submitRestaurantRegistration } from '../../lib/api'

const fieldClass =
  'w-full rounded-2xl border border-cream-200 bg-cream px-5 py-3.5 text-ink placeholder-ink-soft transition-all duration-200 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15'

export default function RestaurantRegistrationForm({ onSuccess }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [submitting, setSubmitting] = useState(false)

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
      owner_name: data.get('nameOfOwner'),
      email: data.get('email'),
      phone: data.get('phone'),
      location: data.get('location'),
      botcheck: data.get('botcheck') || '',
    }

    setSubmitting(true)
    try {
      await submitRestaurantRegistration(payload)
      toast.success(t('modal.successMessage'), { duration: 4000, position: 'top-center', style: toastStyle })
      form.reset()
      onSuccess?.()
    } catch {
      // Network / service failure — prompt a retry without losing entered values.
      toast.error(t('modal.errorRetry'), { position: 'top-center', style: toastStyle })
    } finally {
      setSubmitting(false)
    }
  }

  const labelClass = `block text-sm font-medium text-ink mb-2 ${isRTL ? 'text-right' : 'text-left'}`

  return (
    <form onSubmit={handleSubmit} className="space-y-5" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Honeypot — must stay empty (hidden from real users) */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      <div>
        <label htmlFor="name" className={labelClass}>{t('modal.name')}</label>
        <input id="name" name="name" type="text" required placeholder={t('modal.name')} className={fieldClass} style={{ direction: isRTL ? 'rtl' : 'ltr' }} />
      </div>

      <div>
        <label htmlFor="nameOfOwner" className={labelClass}>{t('modal.nameOfOwner')}</label>
        <input id="nameOfOwner" name="nameOfOwner" type="text" required placeholder={t('modal.nameOfOwner')} className={fieldClass} style={{ direction: isRTL ? 'rtl' : 'ltr' }} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>{t('modal.email')}</label>
        <input id="email" name="email" type="email" required placeholder={t('modal.email')} className={fieldClass} style={{ direction: 'ltr' }} />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>{t('modal.phone')}</label>
        <input id="phone" name="phone" type="tel" required placeholder={t('modal.phone')} className={fieldClass} style={{ direction: 'ltr' }} />
      </div>

      <div>
        <label htmlFor="location" className={labelClass}>{t('modal.location')}</label>
        <input id="location" name="location" type="text" required placeholder={t('modal.locationPlaceholder')} className={fieldClass} style={{ direction: isRTL ? 'rtl' : 'ltr' }} />
      </div>

      <button type="submit" disabled={submitting} className="btn btn-primary w-full py-4 text-lg disabled:opacity-70">
        {submitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
            {t('modal.submitting')}
          </span>
        ) : (
          t('modal.submit')
        )}
      </button>
    </form>
  )
}
