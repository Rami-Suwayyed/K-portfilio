import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, ValidationError } from '@formspree/react'
import toast from "react-hot-toast"
import { X } from 'lucide-react'

function Modal({ setIsOpen }) {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const [showOtherInput, setShowOtherInput] = useState(false);
    const [state, handleSubmit] = useForm('xgvzrvzq');
    const formRef = useRef(null);

    useEffect(() => {
        if (state.succeeded) {
            toast.success(t('modal.successMessage'), {
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
            setIsOpen(false);
            if (formRef.current) {
                formRef.current.reset();
            }
        }
    }, [state.succeeded, t, isRTL, setIsOpen]);

    const handleVehicleTypeChange = (e) => {
        if (e.target.value === 'Other') {
            setShowOtherInput(true);
        } else {
            setShowOtherInput(false);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    }

    return (
        <>
            <div
                className='fixed inset-0 bg-[var(--secondary-light)] bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn'
                onClick={handleBackdropClick}
            >
                <div className={`bg-[var(--white)] rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out animate-slideUp relative ${isRTL ? 'rtl' : 'ltr'}`}>
                    <button
                        onClick={handleClose}
                        className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:text-gray-200 transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-95`}
                        type="button"
                        aria-label="Close modal"
                    >
                        <X size={20} />
                    </button>

                    <div className='bg-gradient-to-r from-[var(--primary)] to-red-600 p-6 rounded-t-3xl text-center'>
                        <h1 className='text-2xl font-bold text-[var(--text-heading)] mb-2'>{t('modal.title')}</h1>
                    </div>

                    <form ref={formRef} className='p-6 space-y-5' onSubmit={handleSubmit}>
                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                {t('modalCaptin.name')}
                            </label>
                            <input
                                name='fullName'
                                type="text"
                                required
                                placeholder={t('modalCaptin.namePlaceholder')}
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] placeholder-gray-400 focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                            />
                            <ValidationError 
                                prefix="Full Name" 
                                field="fullName"
                                errors={state.errors}
                            />
                        </div>

                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                {t('modalCaptin.vehicleType')}
                            </label>
                            <select
                                name='vehicleType'
                                required
                                onChange={handleVehicleTypeChange}
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                            >
                                <option value="">{t('modalCaptin.vehicleTypePlaceholder')}</option>
                                <option value="Scooter">{t('modalCaptin.scooter')}</option>
                                <option value="Economical Car">{t('modalCaptin.economicalCar')}</option>
                                <option value="Electric Car">{t('modalCaptin.electricCar')}</option>
                                <option value="Other">{t('modalCaptin.other')}</option>
                            </select>
                            <ValidationError 
                                prefix="Vehicle Type" 
                                field="vehicleType"
                                errors={state.errors}
                            />
                        </div>

                        {showOtherInput && (
                            <div className='space-y-2'>
                                <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {t('modalCaptin.otherVehicleType')}
                                </label>
                                <input
                                    name='otherVehicleType'
                                    type="text"
                                    placeholder={t('modalCaptin.otherVehicleTypePlaceholder')}
                                    className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] placeholder-gray-400 focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                                />
                                <ValidationError 
                                    prefix="Other Vehicle Type" 
                                    field="otherVehicleType"
                                    errors={state.errors}
                                />
                            </div>
                        )}

                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                {t('modalCaptin.vehicleModel')}
                            </label>
                            <input
                                name='vehicleModel'
                                type="text"
                                required
                                placeholder={t('modalCaptin.vehicleModelPlaceholder')}
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] placeholder-gray-400 focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                            />
                            <ValidationError 
                                prefix="Vehicle Model" 
                                field="vehicleModel"
                                errors={state.errors}
                            />
                        </div>

                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                {t('modalCaptin.phone')}
                            </label>
                            <input
                                name='phone'
                                type="tel"
                                required
                                placeholder={t('modalCaptin.phonePlaceholder')}
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] placeholder-gray-400 focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                            />
                            <ValidationError 
                                prefix="Phone" 
                                field="phone"
                                errors={state.errors}
                            />
                        </div>

                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                {t('modalCaptin.address')}
                            </label>
                            <textarea
                                name='address'
                                rows="3"
                                required
                                placeholder={t('modalCaptin.addressPlaceholder')}
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] placeholder-gray-400 focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                            />
                            <ValidationError 
                                prefix="Address" 
                                field="address"
                                errors={state.errors}
                            />
                        </div>

                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                {t('modalCaptin.phoneType')}
                            </label>
                            <select
                                name='phoneType'
                                required
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                            >
                                <option value="">{t('modalCaptin.phoneTypePlaceholder')}</option>
                                <option value="iOS">{t('modalCaptin.ios')}</option>
                                <option value="Android">{t('modalCaptin.android')}</option>
                            </select>
                            <ValidationError 
                                prefix="Phone Type" 
                                field="phoneType"
                                errors={state.errors}
                            />
                        </div>

                        <div className='pt-4'>
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className='w-full bg-gradient-to-r from-[var(--primary)] to-red-600 text-[var(--text-heading)] py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-in-out hover:from-red-600 hover:to-[var(--primary)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none'
                            >
                                {state.submitting ? (
                                    <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>{t('modal.submitting')}</span>
                                    </div>
                                ) : (
                                    t('modal.submit')
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </>
    )
}

export default Modal