import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Clock,
    Shield,
    Smartphone,
    Download,
    Star,
    ChefHat,
} from 'lucide-react';
import Link from 'next/link';

function DownloadApp() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    return (
        
        <section id="downloadApp" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    {/* <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Smartphone className="w-4 h-4" />
                        <span>{t('downloadApp.badge')}</span>
                    </div> */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t('downloadApp.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t('downloadApp.subtitle')}
                    </p>
                </div>


                <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden">

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className={`${isRTL ? 'lg:order-2' : ''}`}>
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Shield className="w-4 h-4" />
                                <span>{t('downloadApp.security')}</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                {t('downloadApp.cta.title')}
                            </h3>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {t('downloadApp.cta.description')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link target='_blank' href="https://apps.apple.com/om/app/kabseh-%D9%83%D8%A8%D8%B3%D9%87/id6463165637?l=ar">
                                <button className="group flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-gray-300">{t('downloadApp.buttons.downloadOn')}</div>
                                            <div className="font-semibold">App Store</div>
                                        </div>
                                    </button>
                                </Link>
                                <Link target='_blank' href="https://play.google.com/store/apps/details?id=com.metafortech.kabsauser&hl=ar">
                                    <button className="group flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <div className="text-xs text-gray-300">{t('downloadApp.buttons.getItOn')}</div>
                                            <div className="font-semibold">Google Play</div>
                                        </div>
                                    </button>
                                </Link>
                            </div>

                            <div className="flex items-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{t('downloadApp.stats.users')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span>{t('downloadApp.stats.rating')}</span>
                                </div>
                            </div>
                        </div>

                        <div className={`relative ${isRTL ? 'lg:order-1' : ''}`}>
                            <div className="relative mx-auto w-64 h-96">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-[3rem] transform rotate-6 opacity-20"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-[3rem] transform -rotate-3 opacity-30"></div>
                                <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                    <div className="bg-gray-800 rounded-[2.5rem] h-full flex flex-col">
                                        <div className="h-6 bg-gray-700 rounded-t-[2.5rem] flex items-center justify-center">
                                            <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
                                        </div>
                                        <div className="flex-1 bg-white rounded-[2rem] m-1 p-6 flex flex-col items-center justify-center">
                                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                                                <ChefHat className="w-8 h-8 text-white" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-2">{t('appName')}</h4>
                                            <p className="text-xs text-gray-500 text-center mb-4">{t('downloadApp.appDescription')}</p>
                                            <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                                                <div className="w-3/4 h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                                            </div>
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                                                <Download className="w-4 h-4" />
                                                {t('downloadApp.buttons.install')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DownloadApp;