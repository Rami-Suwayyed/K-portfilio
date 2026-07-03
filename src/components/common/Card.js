import React from 'react'
import CountUp from './CountUp'

function Card({ icon, counts, description, isRTL = false }) {
  const Icon = icon

  return (
    <div className="group rounded-card border border-cream-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
      <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
        <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-primary text-white shadow-[0_10px_22px_-10px_rgba(217,2,23,0.7)] transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-ink md:text-3xl">
            <CountUp to={counts} />
          </h3>
          <p className="mt-0.5 text-sm font-medium text-ink-soft">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
