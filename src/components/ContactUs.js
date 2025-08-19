import React, { useEffect, useRef } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'

function ContactUs({ contactRef }) {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const [state, handleSubmit] = useForm('xzzvyzvk');
    const formRef = useRef(null);

    useEffect(() => {
        if (state.succeeded) {
            toast.success(t('contactUs.successMessage'), {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: 'var(--primary)',
                    color: 'white',
                    borderRadius: '25px',
                    padding: '16px 24px',
                    fontSize: '16px',
                    fontWeight: '500',
                    direction: isRTL ? 'rtl' : 'ltr',
                    textAlign: isRTL ? 'right' : 'left'
                }
            });
            if (formRef.current) {
                formRef.current.reset();
            }
        }
    }, [state.succeeded, t, isRTL]);

    return (
        <section
            className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 "
            ref={contactRef}
            id='contact'
            style={{ marginTop: '100px' }}
        >
            <div className="max-w-6xl mx-auto">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`space-y-8 ${isRTL ? 'lg:col-start-2' : ''}`}>
                        <div className="space-y-4">
                            <h2
                                className={`text-lg font-semibold tracking-wide uppercase ${isRTL ? 'text-right' : 'text-left'}`}
                                style={{ color: 'var(--primary)' }}
                            >
                                {t('contactUs.title')}
                            </h2>
                            <h1
                                className={`text-4xl md:text-5xl font-bold leading-tight ${isRTL ? 'text-right' : 'text-left'}`}
                                style={{ color: 'var(--secondary-dark)' }}
                            >
                                {t('contactUs.subtitle')}
                            </h1>
                            <p
                                className={`text-lg leading-relaxed max-w-xl ${isRTL ? 'text-right' : 'text-left'}`}
                                style={{ color: 'var(--text-body)' }}
                            >
                                {t('contactUs.description')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: 'var(--primary)' }}
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className={isRTL ? 'text-right' : 'text-left'}>
                                    <h3 className="font-semibold" style={{ color: 'var(--secondary-dark)' }}>
                                        {t('contactUs.email')}
                                    </h3>
                                    <a href={`mailto:${t('email.support')}`}
                                       style={{ color: 'var(--text-body)' }}
                                       className="hover:text-primary transition-colors">
                                        <p>{t('email.support')}</p>
                                    </a>
                                </div>
                            </div>

                            <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: 'var(--primary)' }}
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className={isRTL ? 'text-right' : 'text-left'}>
                                    <h3 className="font-semibold" style={{ color: 'var(--secondary-dark)' }}>
                                        {t('contactUs.phone')}
                                    </h3>
                                    <a href={`tel:${t('phone.support').replace(/\s+/g, '')}`} 
                                       style={{ color: 'var(--text-body)' }}
                                       className="hover:text-primary transition-colors">
                                        <p>{t('phone.support')}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 ${isRTL ? 'lg:col-start-1' : ''}`}>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className={`block text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{ color: 'var(--secondary-dark)' }}
                                >
                                    {t('contactUs.form.name')}
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    className={`w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{
                                        '--tw-ring-color': 'var(--primary)',
                                        '--tw-ring-opacity': '0.5',
                                        direction: isRTL ? 'rtl' : 'ltr'
                                    }}
                                    placeholder={t('contactUs.form.namePlaceholder')}
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className={`block text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{ color: 'var(--secondary-dark)' }}
                                >
                                    {t('contactUs.form.email')}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className={`w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{
                                        '--tw-ring-color': 'var(--primary)',
                                        '--tw-ring-opacity': '0.5',
                                        direction: 'ltr'
                                    }}
                                    placeholder={t('contactUs.form.emailPlaceholder')}
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className={`block text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{ color: 'var(--secondary-dark)' }}
                                >
                                    {t('contactUs.form.subject')}
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    required
                                    className={`w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{
                                        '--tw-ring-color': 'var(--primary)',
                                        '--tw-ring-opacity': '0.5',
                                        direction: isRTL ? 'rtl' : 'ltr'
                                    }}
                                    placeholder={t('contactUs.form.subjectPlaceholder')}
                                />
                                <ValidationError
                                    prefix="Subject"
                                    field="subject"
                                    errors={state.errors}
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className={`block text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{ color: 'var(--secondary-dark)' }}
                                >
                                    {t('contactUs.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className={`w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{
                                        '--tw-ring-color': 'var(--primary)',
                                        '--tw-ring-opacity': '0.5',
                                        direction: isRTL ? 'rtl' : 'ltr'
                                    }}
                                    placeholder={t('contactUs.form.messagePlaceholder')}
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full py-4 px-8 rounded-2xl font-semibold text-white text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                style={{
                                    backgroundColor: 'var(--primary)',
                                    boxShadow: state.submitting ? 'none' : '0 10px 30px rgba(240, 74, 36, 0.3)'
                                }}
                            >
                                {state.submitting ? (
                                    <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>{t('contactUs.form.sending')}</span>
                                    </div>
                                ) : (
                                    <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                                        <span>{t('contactUs.form.sendMessage')}</span>
                                    </div>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs