import React from 'react'

function EasyCard({title, description, icon}) {
  return (
    <>
      <div className='bg-[var(--background-default)] rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
        {icon}
        <h3 className='text-[var(--text-body)] text-2xl font-bold mt-4'>{title}</h3>
        <p className='text-[var(--text-body)] text-base mt-2'>{description}</p>
      </div>
    </>
  )
}

export default EasyCard
