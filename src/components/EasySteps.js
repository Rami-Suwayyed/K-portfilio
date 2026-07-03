'use client'

import React from 'react'
import EasyCard from './common/EasyCard'
import Reveal from './common/Reveal'
import { Settings, User, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function EasySteps() {
  const { t } = useTranslation()

  const data = [
    { title: t('easySteps.title1'), description: t('easySteps.description1'), icon: <Settings className="h-8 w-8" /> },
    { title: t('easySteps.title2'), description: t('easySteps.description2'), icon: <User className="h-8 w-8" /> },
    { title: t('easySteps.title3'), description: t('easySteps.description3'), icon: <Check className="h-8 w-8" /> },
  ]

  return (
    <section id="feature" className="py-20 lg:py-28">
      <div className="mx-auto max-w-content px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('easySteps.subtitle') || 'How it works'}</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {t('easySteps.title') || '3 Easy Steps'}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.map((item, index) => (
            <Reveal key={index} delay={index * 0.1} className="h-full">
              <EasyCard
                index={index + 1}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EasySteps
