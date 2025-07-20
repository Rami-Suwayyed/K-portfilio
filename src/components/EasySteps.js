import React from 'react'
import EasyCard from './common/EasyCard';
import { Settings, User, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next';
function EasySteps() {
    const { t } = useTranslation();

    const data = [
        {
            title: t('easySteps.title1'),
            description: t('easySteps.description1'),
            icon: <Settings className='text-[var(--primary)] w-15 h-15'/>
        },
        {
            title: t('easySteps.title2'),
            description: t('easySteps.description2'),
            icon: <User className='text-[var(--primary)] text-4xl w-15 h-15'/>
        },
        {
            title: t('easySteps.title3'),
            description: t('easySteps.description3'),
            icon: <Check className='text-[var(--primary)] text-4xl w-15 h-15'/>
        }
    ]
    return (
        <>
            <div className='container mx-auto px-4 lg:px-8 max-w-7xl text-center mt-10' id='feature'>
                <div>
                    <h2 className='text-[var(--primary)] text-lg font-bold'>How it works</h2>
                    <h1 className='text-[var(--text-body)] text-4xl font-bold mt-2'>3 Easy Steps</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                    {data.map((item, index) => <EasyCard key={index} title={item.title} description={item.description} icon={item.icon} />)}
                </div>
            </div>
        </>
    )
}

export default EasySteps
