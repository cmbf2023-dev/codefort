"use client";

import { useEffect, useRef, useState } from 'react';

// Animation styles
const animationStyles = `
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-left {
  animation: slideInFromLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-right {
  animation: slideInFromRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-bottom {
  animation: slideInFromBottom 0.6s ease-out forwards;
}

.animate-fade-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }
.animation-delay-500 { animation-delay: 500ms; }
.animation-delay-600 { animation-delay: 600ms; }

.animation-stagger-1 { animation-delay: 100ms; }
.animation-stagger-2 { animation-delay: 200ms; }
.animation-stagger-3 { animation-delay: 300ms; }
.animation-stagger-4 { animation-delay: 400ms; }
.animation-stagger-5 { animation-delay: 500ms; }

.why-choose-initial {
  opacity: 0;
}
`;

// Data structure for cleaner code
const benefits = [
  {
    text: "Faster Launch – MVP in months, not years",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.31771 3.76905C10.4302 3.42399 13.5712 3.42399 16.6837 3.76905C17.2448 3.83215 17.7861 4.01331 18.2722 4.30063C18.7582 4.58794 19.1779 4.9749 19.5037 5.43605L11.5007 13.439L9.03071 10.969C8.96149 10.8974 8.8787 10.8404 8.78718 10.8011C8.69566 10.7618 8.59723 10.7412 8.49765 10.7404C8.39807 10.7395 8.29931 10.7586 8.20716 10.7963C8.11501 10.8341 8.03129 10.8898 7.96091 10.9603C7.89052 11.0307 7.83487 11.1145 7.7972 11.2067C7.75954 11.2989 7.74061 11.3976 7.74152 11.4972C7.74243 11.5968 7.76317 11.6952 7.80252 11.7867C7.84187 11.8782 7.89904 11.9609 7.97071 12.03L10.9707 15.03C11.1113 15.1705 11.302 15.2494 11.5007 15.2494C11.6995 15.2494 11.8901 15.1705 12.0307 15.03L20.1467 6.91505C20.1687 7.02438 20.1864 7.13538 20.1997 7.24805C20.5697 10.405 20.5697 13.595 20.1997 16.752C19.9847 18.588 18.5097 20.027 16.6837 20.232C13.5712 20.5771 10.4302 20.5771 7.31771 20.232C5.49071 20.027 4.01571 18.588 3.80171 16.752C3.43329 13.5948 3.43329 10.4053 3.80171 7.24805C4.01571 5.41105 5.49171 3.97305 7.31771 3.76805" fill="#08CE08" />
      </svg>
    )
  },
  {
    text: "Affordable – Start at ₦300K/month, no big upfront",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.31771 3.76905C10.4302 3.42399 13.5712 3.42399 16.6837 3.76905C17.2448 3.83215 17.7861 4.01331 18.2722 4.30063C18.7582 4.58794 19.1779 4.9749 19.5037 5.43605L11.5007 13.439L9.03071 10.969C8.96149 10.8974 8.8787 10.8404 8.78718 10.8011C8.69566 10.7618 8.59723 10.7412 8.49765 10.7404C8.39807 10.7395 8.29931 10.7586 8.20716 10.7963C8.11501 10.8341 8.03129 10.8898 7.96091 10.9603C7.89052 11.0307 7.83487 11.1145 7.7972 11.2067C7.75954 11.2989 7.74061 11.3976 7.74152 11.4972C7.74243 11.5968 7.76317 11.6952 7.80252 11.7867C7.84187 11.8782 7.89904 11.9609 7.97071 12.03L10.9707 15.03C11.1113 15.1705 11.302 15.2494 11.5007 15.2494C11.6995 15.2494 11.8901 15.1705 12.0307 15.03L20.1467 6.91505C20.1687 7.02438 20.1864 7.13538 20.1997 7.24805C20.5697 10.405 20.5697 13.595 20.1997 16.752C19.9847 18.588 18.5097 20.027 16.6837 20.232C13.5712 20.5771 10.4302 20.5771 7.31771 20.232C5.49071 20.027 4.01571 18.588 3.80171 16.752C3.43329 13.5948 3.43329 10.4053 3.80171 7.24805C4.01571 5.41105 5.49171 3.97305 7.31771 3.76805" fill="#08CE08" />
      </svg>
    )
  },
  {
    text: "Dedicated Team – Product Manager, Engineers, QA",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.31771 3.76905C10.4302 3.42399 13.5712 3.42399 16.6837 3.76905C17.2448 3.83215 17.7861 4.01331 18.2722 4.30063C18.7582 4.58794 19.1779 4.9749 19.5037 5.43605L11.5007 13.439L9.03071 10.969C8.96149 10.8974 8.8787 10.8404 8.78718 10.8011C8.69566 10.7618 8.59723 10.7412 8.49765 10.7404C8.39807 10.7395 8.29931 10.7586 8.20716 10.7963C8.11501 10.8341 8.03129 10.8898 7.96091 10.9603C7.89052 11.0307 7.83487 11.1145 7.7972 11.2067C7.75954 11.2989 7.74061 11.3976 7.74152 11.4972C7.74243 11.5968 7.76317 11.6952 7.80252 11.7867C7.84187 11.8782 7.89904 11.9609 7.97071 12.03L10.9707 15.03C11.1113 15.1705 11.302 15.2494 11.5007 15.2494C11.6995 15.2494 11.8901 15.1705 12.0307 15.03L20.1467 6.91505C20.1687 7.02438 20.1864 7.13538 20.1997 7.24805C20.5697 10.405 20.5697 13.595 20.1997 16.752C19.9847 18.588 18.5097 20.027 16.6837 20.232C13.5712 20.5771 10.4302 20.5771 7.31771 20.232C5.49071 20.027 4.01571 18.588 3.80171 16.752C3.43329 13.5948 3.43329 10.4053 3.80171 7.24805C4.01571 5.41105 5.49171 3.97305 7.31771 3.76805" fill="#08CE08" />
      </svg>
    )
  },
  {
    text: "Scalable – Accelerate or pause as you need",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.31771 3.76905C10.4302 3.42399 13.5712 3.42399 16.6837 3.76905C17.2448 3.83215 17.7861 4.01331 18.2722 4.30063C18.7582 4.58794 19.1779 4.9749 19.5037 5.43605L11.5007 13.439L9.03071 10.969C8.96149 10.8974 8.8787 10.8404 8.78718 10.8011C8.69566 10.7618 8.59723 10.7412 8.49765 10.7404C8.39807 10.7395 8.29931 10.7586 8.20716 10.7963C8.11501 10.8341 8.03129 10.8898 7.96091 10.9603C7.89052 11.0307 7.83487 11.1145 7.7972 11.2067C7.75954 11.2989 7.74061 11.3976 7.74152 11.4972C7.74243 11.5968 7.76317 11.6952 7.80252 11.7867C7.84187 11.8782 7.89904 11.9609 7.97071 12.03L10.9707 15.03C11.1113 15.1705 11.302 15.2494 11.5007 15.2494C11.6995 15.2494 11.8901 15.1705 12.0307 15.03L20.1467 6.91505C20.1687 7.02438 20.1864 7.13538 20.1997 7.24805C20.5697 10.405 20.5697 13.595 20.1997 16.752C19.9847 18.588 18.5097 20.027 16.6837 20.232C13.5712 20.5771 10.4302 20.5771 7.31771 20.232C5.49071 20.027 4.01571 18.588 3.80171 16.752C3.43329 13.5948 3.43329 10.4053 3.80171 7.24805C4.01571 5.41105 5.49171 3.97305 7.31771 3.76805" fill="#08CE08" />
      </svg>
    )
  },
  {
    text: "Transparent – Milestones, demos, reviews",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.31771 3.76905C10.4302 3.42399 13.5712 3.42399 16.6837 3.76905C17.2448 3.83215 17.7861 4.01331 18.2722 4.30063C18.7582 4.58794 19.1779 4.9749 19.5037 5.43605L11.5007 13.439L9.03071 10.969C8.96149 10.8974 8.8787 10.8404 8.78718 10.8011C8.69566 10.7618 8.59723 10.7412 8.49765 10.7404C8.39807 10.7395 8.29931 10.7586 8.20716 10.7963C8.11501 10.8341 8.03129 10.8898 7.96091 10.9603C7.89052 11.0307 7.83487 11.1145 7.7972 11.2067C7.75954 11.2989 7.74061 11.3976 7.74152 11.4972C7.74243 11.5968 7.76317 11.6952 7.80252 11.7867C7.84187 11.8782 7.89904 11.9609 7.97071 12.03L10.9707 15.03C11.1113 15.1705 11.302 15.2494 11.5007 15.2494C11.6995 15.2494 11.8901 15.1705 12.0307 15.03L20.1467 6.91505C20.1687 7.02438 20.1864 7.13538 20.1997 7.24805C20.5697 10.405 20.5697 13.595 20.1997 16.752C19.9847 18.588 18.5097 20.027 16.6837 20.232C13.5712 20.5771 10.4302 20.5771 7.31771 20.232C5.49071 20.027 4.01571 18.588 3.80171 16.752C3.43329 13.5948 3.43329 10.4053 3.80171 7.24805C4.01571 5.41105 5.49171 3.97305 7.31771 3.76805" fill="#08CE08" />
      </svg>
    )
  }
];

export function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Get animation class based on index
  const getBenefitAnimation = (index: number) => {
    return `animate-fade-up animation-stagger-${index + 1} why-choose-initial`;
  };

  return (
    <>
      <style jsx global>{animationStyles}</style>
      <section 
        ref={sectionRef}
        className="WhyChooseUs_section__W1yO2"
      >
        <div className="WhyChooseUs_container__ZAJd2">
          {/* Left Content - Slides in from left */}
          <div 
            className={`WhyChooseUs_contentWrapper__pcDgr why-choose-initial ${isVisible ? 'animate-slide-left' : ''}`}
          >
            {/* Header - Fades up */}
            <header className={`WhyChooseUs_header__i6FAY why-choose-initial ${isVisible ? 'animate-fade-up' : ''}`}>
              <h3 className="WhyChooseUs_subtitle__wpymB">Quick Trust Section</h3>
              <h2 className="WhyChooseUs_title__FGYEA">Why Choose Us?</h2>
            </header>
            
            {/* Benefits List - Each item fades up with staggered delay */}
            <div className="WhyChooseUs_problemList__S8NWM">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`WhyChooseUs_problemItem__TzQ_X why-choose-initial ${isVisible ? getBenefitAnimation(index) : ''}`}
                >
                  <div className="WhyChooseUs_iconWrapper__animated">
                    {benefit.icon}
                  </div>
                  <p className="WhyChooseUs_problemText__GM55n">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image - Slides in from right with slight delay */}
          <div 
            className={`WhyChooseUs_imageWrapper__6bAlB why-choose-initial ${isVisible ? 'animate-slide-right animation-delay-300' : ''}`}
          >
            <div className="WhyChooseUs_imageContainer__1fu2t">
              <img 
                alt="Entrepreneur facing challenges" 
                fetchPriority="high" 
                decoding="async" 
                data-nimg="fill" 
                className="WhyChooseUs_image__pcBRf" 
                style={{ 
                  position: 'absolute', 
                  height: '100%', 
                  width: '100%', 
                  left: 0, 
                  top: 0, 
                  right: 0, 
                  bottom: 0, 
                  color: 'transparent',
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 0.5s ease-out 0.3s'
                }} 
                src="/coded/static/media/why_choose_us_img.0b67e28f.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}