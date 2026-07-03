import React from 'react'

function EasyCard({ title, description, icon, index }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-card bg-white p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-warm">
      <span className="pointer-events-none absolute end-5 top-3 select-none text-6xl font-extrabold text-cream-200">
        {index}
      </span>
      <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cream text-primary transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>
      <h3 className="relative mt-5 text-xl font-bold text-ink">{title}</h3>
      <p className="relative mt-2 leading-relaxed text-ink-soft">{description}</p>
    </div>
  )
}

export default EasyCard
