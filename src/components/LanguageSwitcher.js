'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params?.locale || 'en';

  const switchLanguage = (newLocale) => {
    if (newLocale === currentLocale) return;
    
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLocale === 'en'
            ? 'text-white'
            : 'text-[var(--text-body)] hover:text-white'
        }`}
      >
        English
      </button>
      <button
        onClick={() => switchLanguage('ar')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLocale === 'ar'
            ? 'text-white'
            : 'text-[var(--text-body)] hover:text-white'
        }`}
      >
        العربية
      </button>
    </div>
  );
} 