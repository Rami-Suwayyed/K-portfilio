import React, { useEffect, useRef, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useTranslation } from 'react-i18next';

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t, i18n } = useTranslation();

  const restaurantBrands = [
    {
      id: 1,
      name: "Firefly",
      logo: "https://fireflyburgers.com/wp-content/uploads/2023/09/logo-1.png",
      alt: "Firefly"
    },
    {
      id: 2,
      name: "99 Grill",
      logo: "https://99-grill.com/Content/WebEn/img/logo.png",
      alt: "99 Grill"
    },
    {
      id: 3,
      name: "Tazaj",
      logo: "https://tazaj.jo/wp-content/uploads/2021/03/tazaj-logo-e1614772997860.png",
      alt: "Tazaj"
    },
    {
      id: 4,
      name: "Burger Makers",
      logo: "https://burgermakers.com/images/logo-part3.png",
      alt: "Burger Makers"
    },
    {
      id: 5,
      name: "Hakuna Matata",
      logo: "https://hakunamatatajo.com/uploads/foodlz05c263bf-304d-438d-82ef-5d33a3c1e057/logo/logo1618244904.png",
      alt: "Hakuna Matata"
    },
    {
      id: 6,
      name: "Al Mousalli",
      logo: "https://www.almousalli.com/themes/fuji/assets/images/lightlogo.png",
      alt: "Al Mousalli"
    }
  ];

  const animation = { duration: 25000, easing: (t) => t };
  const isRTL = i18n.language === 'ar';

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free",
    rtl: isRTL,
    slides: {
      perView: "auto",
      spacing: 48,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: "auto", spacing: 48 },
      },
      "(max-width: 767px)": {
        slides: { perView: "auto", spacing: 24 },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  useEffect(() => {
    if (instanceRef.current && instanceRef.current.update) {
      setTimeout(() => {
        instanceRef.current.update();
      }, 100);
    }
  }, [i18n.language, instanceRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (instanceRef.current) {
      instanceRef.current.animator.stop();
    }
  };

  const handleMouseLeave = () => {
    if (instanceRef.current) {
      instanceRef.current.moveToIdx(instanceRef.current.track.details.abs + 5, true, animation);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id='brands'
      className="relative py-20 bg-[var(--secondary-light)] overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-light)] to-white opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-body)] mb-4">
            {t('clients.title')}
            <span className="block text-[var(--primary)] mt-2">{t('clients.subtitle')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary-dark)] mx-auto rounded-full"></div>
        </div>

        <div 
          className={`relative transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={sliderRef} className="keen-slider">
            {[...restaurantBrands, ...restaurantBrands, ...restaurantBrands].map((brand, index) => (
              <div
                key={`${brand.id}-${index}-${i18n.language}`}
                className="keen-slider__slide brand-slide"
                style={{ 
                  minWidth: '220px', 
                  width: 'auto'
                }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 group">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={brand.logo}
                      alt={brand.alt}
                      className="w-32 h-20 object-contain mx-auto transition-transform duration-500 group-hover:scale-110"
                      width={128}
                      height={80}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-center mt-4 text-[var(--text-body)] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-0 bottom-0 w-32 bg-gradient-to-${isRTL ? 'l' : 'r'} from-[var(--secondary-light)] to-transparent z-10 pointer-events-none`}></div>
          <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-0 bottom-0 w-32 bg-gradient-to-${isRTL ? 'r' : 'l'} from-[var(--secondary-light)] to-transparent z-10 pointer-events-none`}></div>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-lg text-[var(--text-body)] opacity-70 max-w-2xl mx-auto">
            {t('clients.description')}
          </p>
          <button className="mt-8 px-8 py-4 bg-[var(--primary)] hover:bg-[var(--secondary-dark)] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            {t('clients.button')}
          </button>
        </div>
      </div>

      <style jsx>{`
        .keen-slider {
          height: auto;
        }
        
        .brand-slide {
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .keen-slider__slide {
          overflow: visible !important;
        }

        .keen-slider::-webkit-scrollbar {
          display: none;
        }
        
        .keen-slider {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        [dir="rtl"] .keen-slider {
          direction: rtl;
        }

        [dir="ltr"] .keen-slider {
          direction: ltr;
        }
      `}</style>
    </section>
  );
};

export default Clients;