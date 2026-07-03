'use client'

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import { submitCaptainRegistration } from '../../lib/api'

const fieldClass =
  'w-full rounded-2xl border border-cream-200 bg-cream px-5 py-3.5 text-ink placeholder-ink-soft transition-all duration-200 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15'

export default function CaptainRegistrationForm({ onSuccess }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [showOtherInput, setShowOtherInput] = useState(false)
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
      full_name: data.get('fullName'),
      phone: data.get('phone'),
      phone_type: data.get('phoneType'),
      vehicle_type: data.get('vehicleType'),
      vehicle_model: data.get('vehicleModel'),
      // governorate: data.get('governorate'),
      address: data.get('address'),
      botcheck: data.get('botcheck') || '',
    }
    if (data.get('otherVehicleType')) {
      payload.other_vehicle_type = data.get('otherVehicleType')
    }

    setSubmitting(true)
    try {
      await submitCaptainRegistration(payload)
      toast.success(t('modal.successMessage'), { duration: 4000, position: 'top-center', style: toastStyle })
      form.reset()
      setShowOtherInput(false)
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
        <label htmlFor="fullName" className={labelClass}>{t('modalCaptin.name')}</label>
        <input id="fullName" name="fullName" type="text" required placeholder={t('modalCaptin.namePlaceholder')} className={fieldClass} style={{ direction: isRTL ? 'rtl' : 'ltr' }} />
      </div>

      <div>
        <label htmlFor="vehicleType" className={labelClass}>{t('modalCaptin.vehicleType')}</label>
        <select
          id="vehicleType"
          name="vehicleType"
          required
          onChange={(e) => setShowOtherInput(e.target.value === 'Other')}
          className={fieldClass}
          style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        >
          <option value="">{t('modalCaptin.vehicleTypePlaceholder')}</option>
          <option value="Scooter">{t('modalCaptin.scooter')}</option>
          <option value="Economical Car">{t('modalCaptin.economicalCar')}</option>
          <option value="Electric Car">{t('modalCaptin.electricCar')}</option>
          <option value="Other">{t('modalCaptin.other')}</option>
        </select>
      </div>

      {showOtherInput && (
        <div>
          <label htmlFor="otherVehicleType" className={labelClass}>{t('modalCaptin.otherVehicleType')}</label>
          <input id="otherVehicleType" name="otherVehicleType" type="text" required placeholder={t('modalCaptin.otherVehicleTypePlaceholder')} className={fieldClass} style={{ direction: isRTL ? 'rtl' : 'ltr' }} />
        </div>
      )}

      <div>
        <label htmlFor="vehicleModel" className={labelClass}>{t('modalCaptin.vehicleModel')}</label>
        <input id="vehicleModel" name="vehicleModel" type="text" required placeholder={t('modalCaptin.vehicleModelPlaceholder')} className={fieldClass} style={{ direction: isRTL ? 'rtl' : 'ltr' }} />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>{t('modalCaptin.phone')}</label>
        <input id="phone" name="phone" type="tel" required placeholder={t('modalCaptin.phonePlaceholder')} className={fieldClass} style={{ direction: 'ltr' }} />
      </div>
      <div>
        <label htmlFor="address" className={labelClass}>{t('modalCaptin.address')}</label>
        <textarea id="address" name="address" rows={3} required placeholder={t('modalCaptin.addressPlaceholder')} className={`${fieldClass} resize-none`} style={{ direction: isRTL ? 'rtl' : 'ltr' }} />
      </div>

      <div>
        <label htmlFor="phoneType" className={labelClass}>{t('modalCaptin.phoneType')}</label>
        <select id="phoneType" name="phoneType" required className={fieldClass} style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
          <option value="">{t('modalCaptin.phoneTypePlaceholder')}</option>
          <option value="iOS">{t('modalCaptin.ios')}</option>
          <option value="Android">{t('modalCaptin.android')}</option>
        </select>
      </div>

      <button type="submit" disabled={submitting} className="w-full py-4 text-lg btn btn-primary disabled:opacity-70">
        {submitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-5 h-5 border-b-2 border-white rounded-full animate-spin" />
            {t('modal.submitting')}
          </span>
        ) : (
          t('modal.submit')
        )}
      </button>
    </form>
  )
}
