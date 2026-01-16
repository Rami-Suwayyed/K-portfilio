import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import registerCaptin from './../../public/images/RegisterCaptin.webp'
import Modal from './Modal/ModalCaptin'

function RegisterCaptin() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
            <section className="py-16 lg:py-24  overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <div className="flex-1 max-w-2xl lg:max-w-none">
                            <div className="slideInRight">
                                <div className="relative group">
                                    {/* <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary-dark)] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div> */}

                                    <div className="">
                                        <div className="relative overflow-hidden rounded-2xl">
                                            <Image
                                                src={registerCaptin}
                                                alt="Register Captin"
                                                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                                                priority
                                            />

                                            {/* <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                                        </div>
                                    </div>

                                    {/* <div className="absolute -top-6 -right-6 w-12 h-12 bg-[var(--primary)] rounded-full opacity-20 animate-pulse"></div>
                                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[var(--secondary-dark)] rounded-full opacity-30 animate-pulse delay-1000"></div> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 max-w-2xl lg:max-w-none">
                            <div className="space-y-8">
                                <div className="fadeInUp">
                                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                        <span className="text-[var(--primary)]">
                                            {t('registerCaptin.title')}
                                        </span>
                                    </h1>
                                    <div className="w-24 h-1 bg-primary-gradient mt-6 rounded-full"></div>
                                </div>

                                <div className="space-y-6 slideInLeft">
                                    <div className="text-lg lg:text-xl text-[var(--text-body)] leading-relaxed space-y-4">
                                        <p className="transform transition-all duration-300 hover:translate-x-2">
                                            {t('registerCaptin.description1')}
                                        </p>
                                    </div>
                                </div>

                                <div className="slideInUp">
                                    <button
                                        className="btn-secondary-gradient px-8 py-4 rounded-[var(--border-radius)] text-lg font-semibold text-white shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[var(--primary)] focus:ring-opacity-50"
                                        onClick={handleOpenModal}
                                    >
                                        <span className="relative z-10">
                                            {t('registerCaptin.button')}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary-dark)] opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[var(--border-radius)]"></div>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
        </>
    )
}

export default RegisterCaptin