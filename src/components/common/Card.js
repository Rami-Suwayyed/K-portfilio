import React from 'react'
import CountUp from './CountUp'
function Card({ icon, counts, description, isRTL = false }) {
    const Icon = icon;
    
    return (
        <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D90416]/5 to-[#b80313]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D90416]/10 to-transparent rounded-bl-3xl"></div>
            
            <div className={`relative flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-center gap-4`}>
                <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D90416] to-[#b80313] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-[#D90416] to-[#b80313] rounded-xl opacity-20 animate-ping group-hover:animate-none"></div>
                </div>
                
                <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-body)] group-hover:text-[#D90416] transition-colors duration-300">
                        <CountUp to={counts} />
                    </h3>
                    <p className="text-gray-600 font-medium mt-1 group-hover:text-gray-700 transition-colors duration-300">
                        {description}
                    </p>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#D90416] to-[#b80313] group-hover:w-full transition-all duration-500"></div>
        </div>
    )
}

export default Card