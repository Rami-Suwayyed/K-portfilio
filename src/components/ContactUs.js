import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import toast from "react-hot-toast"
import { useTranslation } from 'react-i18next'
import ErrorMessage from './common/ErrorMessage'
const createContactSchema = (t) => z.object({
    name: z.string()
        .min(2, t('contactUs.validation.nameMin'))
        .max(50, t('contactUs.validation.nameMax')),
    email: z.string()
        .email(t('contactUs.validation.emailInvalid')),
    subject: z.string()
        .min(5, t('contactUs.validation.subjectMin'))
        .max(100, t('contactUs.validation.subjectMax')),
    message: z.string()
        .min(10, t('contactUs.validation.messageMin'))
        .max(500, t('contactUs.validation.messageMax'))
})

function ContactUs({ contactRef }) {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(createContactSchema(t)),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    })

    const onSubmit = async (data) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))

            console.log("Form submitted:", data)
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
            })
            reset()
        } catch (error) {
            toast.error(t('contactUs.errorMessage'), {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#ef4444',
                    color: 'white',
                    borderRadius: '25px',
                    padding: '16px 24px',
                    fontSize: '16px',
                    fontWeight: '500',
                    direction: isRTL ? 'rtl' : 'ltr',
                    textAlign: isRTL ? 'right' : 'left'
                }
            })
        }
    }

    return (
        <section
            className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
            ref={contactRef}
            id='contact'
            style={{ backgroundColor: 'var(--background-default)', marginTop: '100px' }}
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <div className="max-w-6xl mx-auto">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content Section */}
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

                        {/* Contact Info */}
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
                                    <p style={{ color: 'var(--text-body)' }}>hello@company.com</p>
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
                                    <p style={{ color: 'var(--text-body)' }}>+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 ${isRTL ? 'lg:col-start-1' : ''}`}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Field */}
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
                                    {...register("name")}
                                    className={`w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{
                                        '--tw-ring-color': 'var(--primary)',
                                        '--tw-ring-opacity': '0.5',
                                        direction: isRTL ? 'rtl' : 'ltr'
                                    }}
                                    placeholder={t('contactUs.form.namePlaceholder')}
                                />
                                {errors.name && <ErrorMessage errorMessage={errors.name.message} />}

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
                                    {...register("email")}
                                    className={`w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{
                                        '--tw-ring-color': 'var(--primary)',
                                        '--tw-ring-opacity': '0.5',
                                        direction: 'ltr' 
                                    }}
                                    placeholder={t('contactUs.form.emailPlaceholder')}
                                />
                                {errors.email && <ErrorMessage errorMessage={errors.email.message} />}
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
                                    {...register("subject")}
                                    className={`w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{
                                        '--tw-ring-color': 'var(--primary)',
                                        '--tw-ring-opacity': '0.5',
                                        direction: isRTL ? 'rtl' : 'ltr'
                                    }}
                                    placeholder={t('contactUs.form.subjectPlaceholder')}
                                />
                                {errors.subject && <ErrorMessage errorMessage={errors.subject.message} />}
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
                                    rows={5}
                                    {...register("message")}
                                    className={`w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                                    style={{
                                        '--tw-ring-color': 'var(--primary)',
                                        '--tw-ring-opacity': '0.5',
                                        direction: isRTL ? 'rtl' : 'ltr'
                                    }}
                                    placeholder={t('contactUs.form.messagePlaceholder')}
                                />
                                {errors.message && <ErrorMessage errorMessage={errors.message.message} />}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-8 rounded-2xl font-semibold text-white text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                style={{
                                    backgroundColor: 'var(--primary)',
                                    boxShadow: isSubmitting ? 'none' : '0 10px 30px rgba(240, 74, 36, 0.3)'
                                }}
                            >
                                {isSubmitting ? (
                                    <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>{t('contactUs.form.sending')}</span>
                                    </div>
                                ) : (
                                    <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                                        <span>{t('contactUs.form.sendMessage')}</span>
                                        <svg
                                            className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
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