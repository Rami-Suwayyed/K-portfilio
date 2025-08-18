import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from './common/Card'
import { Settings, Star } from 'lucide-react'
import Image from 'next/image'
import about from '../../public/images/About2.png'

function About() {
    const { t, i18n } = useTranslation()
    const isRTL = i18n.language === 'ar'

    return (
        <section 
            className="py-20  mt-10"
            dir={isRTL ? 'rtl' : 'ltr'}
            id='about'
        >
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className={`space-y-8 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span className="bg-gradient-to-r from-[var(--primary)] to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                                    {t('about.subtitle')}
                                </span>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-body)] leading-tight">
                                <span className="bg-gradient-to-r from-[var(--primary)] to-orange-500 bg-clip-text text-transparent">
                                    {t('about.title')}
                                </span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                                {t('about.description')}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <Card 
                                icon={Settings} 
                                counts="50000+" 
                                description={t('about.activeInstall')}
                                isRTL={isRTL}
                            />
                            <Card 
                                icon={Star} 
                                counts="4.8/5" 
                                description={t('about.clientsReviews')}
                                isRTL={isRTL}
                            />
                        </div>
                        {/* <div className="pt-6">
                            <button className="group bg-gradient-to-r from-[var(--primary)] to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                                <span className="flex items-center gap-3">
                                    {t('buttons.startFreeTrial')}
                                    <div className={`w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'group-hover:-translate-x-1' : ''}`}>
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d={isRTL 
                                                ? "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                : "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            } clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </span>
                            </button>
                        </div> */}
                    </div>

                    <div className={`relative ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative">
                 
                           
                            <div className="w-full max-w-2xl mx-auto">
                                <div className="relative overflow-hidden rounded-2xl h-96 md:h-[400px] lg:h-[400px]">
                                    <Image 
                                        src={about} 
                                        alt={t('about.subtitle')}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                    
                                </div>
                                
                            
                            </div>

                 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About