import React from 'react'
import Image from 'next/image'
import aboutOne from '../../public/images/92.png'
import aboutTwo from '../../public/images/93.png'
import aboutThree from '../../public/images/94.png'

function OnboardingCardsStack() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="group relative h-[600px] transition-all duration-700 ease-in-out">
                <div className="flex items-center justify-center h-full">
                    <div className="relative w-[300px] h-full group-hover:w-auto group-hover:flex group-hover:gap-8">
                        <div className="absolute left-0 top-0 w-[300px] h-[600px] transition-all duration-700 ease-in-out origin-bottom-left rotate-[-8deg] group-hover:rotate-0 group-hover:relative group-hover:w-auto group-hover:h-[700px] z-10 group-hover:z-auto">
                            <div className="relative w-full h-full group-hover:h-[700px] group-hover:w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <Image
                                    src={aboutOne}
                                    alt="Discover Local Flavors"
                                    fill
                                    sizes="(max-width: 400px) 100vw, 350px"
                                    className="object-cover group-hover:object-contain"
                                    priority
                                />
                            </div>
                        </div>
                        
                        <div className="absolute left-[20px] top-[-10px] w-[300px] h-[600px] transition-all duration-700 ease-in-out origin-bottom rotate-0 group-hover:rotate-0 group-hover:relative group-hover:left-0 group-hover:top-0 group-hover:w-auto group-hover:h-[700px] z-20 group-hover:z-auto">
                            <div className="relative w-full h-full group-hover:h-[700px] group-hover:w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <Image
                                    src={aboutTwo}
                                    alt="No Surprises Just Great Prices"
                                    fill
                                    sizes="(max-width: 400px) 100vw, 350px"
                                    className="object-cover group-hover:object-contain"
                                    priority
                                />
                            </div>
                        </div>
                        
                        <div className="absolute left-[40px] top-[-20px] w-[300px] h-[600px] transition-all duration-700 ease-in-out origin-bottom-right rotate-[8deg] group-hover:rotate-0 group-hover:relative group-hover:left-0 group-hover:top-0 group-hover:w-auto group-hover:h-[700px] z-30 group-hover:z-auto">
                            <div className="relative w-full h-full group-hover:h-[700px] group-hover:w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <Image
                                    src={aboutThree}
                                    alt="Track Every Bite"
                                    fill
                                    sizes="(max-width: 400px) 100vw, 350px"
                                    className="object-cover group-hover:object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnboardingCardsStack