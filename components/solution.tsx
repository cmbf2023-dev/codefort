"use client";

import { useEffect, useRef, useState } from 'react';

export function Solution() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: '0px 0px -50px 0px', // Adjust trigger point slightly up
      }
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

  return (
    <section 
      ref={sectionRef}
      className="SolutionSection_section__QsjEP"
    >
      <div className={`SolutionSection_MarkContainer__72HD9 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <img 
          alt="Entrepreneur facing challenges" 
          fetchPriority="high" 
          decoding="async" 
          data-nimg="fill" 
          className="SolutionSection_markImage__pNkep" 
          style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
          src="/coded/static/media/firstMark.af014d84.svg"
        />
      </div>
      <div className="SolutionSection_container__OcCs8">
        <div className={`SolutionSection_imageWrapper__dYGME transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transform: 'none' }}>
          <div className="SolutionSection_imageContainer__68WPx">
            <img 
              alt="Entrepreneur facing challenges" 
              fetchPriority="high" 
              decoding="async" 
              data-nimg="fill" 
              className="SolutionSection_image__2RQSN" 
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
              src="/coded/static/media/solution-img.02a6f8d8.svg"
            />
          </div>
        </div>
        <div className={`SolutionSection_contentWrapper__4n3w0 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transform: 'none' }}>
          <header className="SolutionSection_header__1pR_X">
            <h3 className={`SolutionSection_subtitle__X_RYj transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              The Breakthrough
            </h3>
            <h2 className={`SolutionSection_title__dc8a_ transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Our Solution
            </h2>
            <p className={`SolutionSection_description__zGwdu transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              We created Build-as-a-Service (BaaS) to change that.
            </p>
          </header>
          <div className="SolutionSection_problemList__tksUL">
            {[
              "Start from ₦300K/month instead of ₦10M upfront.",
              "Get a dedicated team: Product Manager, Engineers, QA.",
              "Build in monthly milestones, you see progress, not promises.",
              "Scale at your own pace: upgrade anytime to accelerate delivery."
            ].map((text, index) => (
              <div 
                key={index}
                className={`SolutionSection_problemItem__oUFIa transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-5'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${900 + index * 150}ms` : '0ms',
                  opacity: 1, 
                  transform: 'none' 
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.31771 3.76905C10.4302 3.42399 13.5712 3.42399 16.6837 3.76905C17.2448 3.83215 17.7861 4.01331 18.2722 4.30063C18.7582 4.58794 19.1779 4.9749 19.5037 5.43605L11.5007 13.439L9.03071 10.969C8.96149 10.8974 8.8787 10.8404 8.78718 10.8011C8.69566 10.7618 8.59723 10.7412 8.49765 10.7404C8.39807 10.7395 8.29931 10.7586 8.20716 10.7963C8.11501 10.8341 8.03129 10.8898 7.96091 10.9603C7.89052 11.0307 7.83487 11.1145 7.7972 11.2067C7.75954 11.2989 7.74061 11.3976 7.74152 11.4972C7.74243 11.5968 7.76317 11.6952 7.80252 11.7867C7.84187 11.8782 7.89904 11.9609 7.97071 12.03L10.9707 15.03C11.1113 15.1705 11.302 15.2494 11.5007 15.2494C11.6995 15.2494 11.8901 15.1705 12.0307 15.03L20.1467 6.91505C20.1687 7.02438 20.1864 7.13538 20.1997 7.24805C20.5697 10.405 20.5697 13.595 20.1997 16.752C19.9847 18.588 18.5097 20.027 16.6837 20.232C13.5712 20.5771 10.4302 20.5771 7.31771 20.232C5.49071 20.027 4.01571 18.588 3.80171 16.752C3.43329 13.5948 3.43329 10.4053 3.80171 7.24805C4.01571 5.41105 5.49171 3.97305 7.31771 3.76805" fill="#08CE08" />
                </svg>
                <p className="SolutionSection_problemText__BIozE">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}