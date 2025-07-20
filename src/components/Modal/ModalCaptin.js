import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import toast from "react-hot-toast"
import ErrorMessage from '../common/ErrorMessage'
import { X } from 'lucide-react'

function Modal({ setIsOpen }) {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const [showOtherInput, setShowOtherInput] = useState(false);
    
    const createContactSchema = (t) => z.object({
        fullName: z.string()
            .min(2, t('contactUs.validation.fullNameMin'))
            .max(50, t('contactUs.validation.fullNameMax')),
        vehicleType: z.string()
            .min(1, t('contactUs.validation.vehicleTypeMin'))
            .max(50, t('contactUs.validation.vehicleTypeMax')),
        otherVehicleType: z.string().optional(),
        vehicleModel: z.string()
            .min(2, t('contactUs.validation.vehicleModelMin'))
            .max(50, t('contactUs.validation.vehicleModelMax')),
        phone: z.string()
            .min(10, t('contactUs.validation.phoneMin'))
            .max(15, t('contactUs.validation.phoneMax')),
        address: z.string()
            .min(10, t('contactUs.validation.addressMin'))
            .max(200, t('contactUs.validation.addressMax')),
        phoneType: z.string()
            .min(1, t('contactUs.validation.phoneTypeMin')),
    })
    
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        resolver: zodResolver(createContactSchema(t))
    })

    const watchedVehicleType = watch('vehicleType');

    React.useEffect(() => {
        if (watchedVehicleType === 'Other') {
            setShowOtherInput(true);
        } else {
            setShowOtherInput(false);
            setValue('otherVehicleType', '');
        }
    }, [watchedVehicleType, setValue]);
    
    const onSubmit = async (data) => {
        if (data.vehicleType === 'Other' && data.otherVehicleType) {
            data.vehicleType = data.otherVehicleType;
        }
        
        console.log(data)
        try {
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
            })
        } catch (error) {
            console.log(error)
            toast.error(t('modal.errorMessage'), {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: 'var(--primary)',
                    color: 'white',
                }
            })
        }
    }
    
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

                    <form className='p-6 space-y-5' onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                Full Name
                            </label>
                            <input
                                {...register('fullName')}
                                name='fullName'
                                type="text"
                                placeholder="Enter your full name"
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] placeholder-gray-400 focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                            />
                            {errors.fullName && <ErrorMessage errorMessage={errors.fullName.message} />}
                        </div>

                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                Type of Vehicle
                            </label>
                            <select
                                {...register('vehicleType')}
                                name='vehicleType'
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                            >
                                <option value="">Select vehicle type</option>
                                <option value="Scooter">Scooter</option>
                                <option value="Economical Car">Economical Car</option>
                                <option value="Electric Car">Electric Car</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.vehicleType && <ErrorMessage errorMessage={errors.vehicleType.message} />}
                        </div>

                        {showOtherInput && (
                            <div className='space-y-2'>
                                <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    Specify Other Vehicle Type
                                </label>
                                <input
                                    {...register('otherVehicleType')}
                                    name='otherVehicleType'
                                    type="text"
                                    placeholder="Enter your vehicle type"
                                    className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] placeholder-gray-400 focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                                />
                                {errors.otherVehicleType && <ErrorMessage errorMessage={errors.otherVehicleType.message} />}
                            </div>
                        )}

                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                Vehicle Model
                            </label>
                            <input
                                {...register('vehicleModel')}
                                name='vehicleModel'
                                type="text"
                                placeholder="Enter vehicle model"
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] placeholder-gray-400 focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                            />
                            {errors.vehicleModel && <ErrorMessage errorMessage={errors.vehicleModel.message} />}
                        </div>

                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                Phone Number
                            </label>
                            <input
                                {...register('phone')}
                                name='phone'
                                type="tel"
                                placeholder="Enter your phone number"
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] placeholder-gray-400 focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                            />
                            {errors.phone && <ErrorMessage errorMessage={errors.phone.message} />}
                        </div>

                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                Address
                            </label>
                            <textarea
                                {...register('address')}
                                name='address'
                                rows="3"
                                placeholder="Enter your address"
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] placeholder-gray-400 focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                            />
                            {errors.address && <ErrorMessage errorMessage={errors.address.message} />}
                        </div>

                        <div className='space-y-2'>
                            <label className={`block text-sm font-semibold text-[var(--secondary-dark)] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                                Phone Type
                            </label>
                            <select
                                {...register('phoneType')}
                                name='phoneType'
                                className={`w-full px-4 py-3 bg-[var(--secondary-light)] border-2 border-transparent rounded-2xl text-[var(--secondary-dark)] focus:border-[var(--primary)] focus:bg-white focus:outline-none transition-all duration-200 ease-in-out ${isRTL ? 'text-right' : 'text-left'}`}
                            >
                                <option value="">Select phone type</option>
                                <option value="iOS">iOS</option>
                                <option value="Android">Android</option>
                            </select>
                            {errors.phoneType && <ErrorMessage errorMessage={errors.phoneType.message} />}
                        </div>

                        <div className='pt-4'>
                            <button
                                type="submit"
                                className='w-full bg-gradient-to-r from-[var(--primary)] to-red-600 text-[var(--text-heading)] py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-in-out hover:from-red-600 hover:to-[var(--primary)]'
                            >
                                {t('modal.submit')}
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