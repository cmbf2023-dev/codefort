"use client"

import { useEffect, useRef, useState } from 'react'

export function Problem() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section comes into view
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Optional: unobserve after animation triggers
          observer.unobserve(entry.target)
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // trigger when 10% of section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="ProblemSection_section__BQ3W8"
    >
      <div className="ProblemSection_container__Wb_mi">
        <div 
          className="ProblemSection_contentWrapper__92QGK" 
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            transitionDelay: isVisible ? '0.1s' : '0s'
          }}
        >
          <header className="ProblemSection_header__GknQl">
            <h3 
              className="ProblemSection_subtitle__DpwRf"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(10px)',
                transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s'
              }}
            >
              RELATABLE PAIN POINTS
            </h3>
            <h2 
              className="ProblemSection_title__CQmYc"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(10px)',
                transition: 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s'
              }}
            >
              The Problem
            </h2>
            <p 
              className="ProblemSection_description__adcs5"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(10px)',
                transition: 'opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s'
              }}
            >
              Every day, thousands of entrepreneurs have amazing ideas — but most never launch. Why?
            </p>
          </header>
          <div className="ProblemSection_problemList__P2nvd">
            {[
              "Agencies demand millions upfront before writing a line of code.",
              "Hiring a single developer is slow, expensive, and risky.",
              "Ideas stay stuck in notebooks because execution feels impossible."
            ].map((text, index) => (
              <div 
                key={index}
                className="ProblemSection_problemItem__IttGl"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'none' : 'translateY(15px)',
                  transition: `opacity 0.5s ease-out ${0.5 + index * 0.1}s, transform 0.5s ease-out ${0.5 + index * 0.1}s`
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.34435 4.01705C10.4382 3.67449 13.5605 3.67449 16.6543 4.01705C18.3673 4.20905 19.7493 5.55805 19.9503 7.27705C20.317 10.415 20.317 13.5851 19.9503 16.723C19.7493 18.442 18.3673 19.791 16.6543 19.983C13.5605 20.3256 10.4382 20.3256 7.34435 19.983C5.63135 19.791 4.24935 18.442 4.04835 16.723C3.6818 13.5854 3.6818 10.4157 4.04835 7.27805C4.15001 6.44292 4.53073 5.66659 5.12878 5.07489C5.72683 4.48319 6.50718 4.11079 7.34335 4.01805M8.46935 8.47005C8.60997 8.3296 8.8006 8.25071 8.99935 8.25071C9.1981 8.25071 9.38872 8.3296 9.52935 8.47005L11.9993 10.94L14.4693 8.47005C14.538 8.39636 14.6208 8.33726 14.7128 8.29627C14.8048 8.25527 14.9041 8.23323 15.0048 8.23145C15.1055 8.22968 15.2056 8.2482 15.2989 8.28592C15.3923 8.32365 15.4772 8.37979 15.5484 8.45101C15.6196 8.52223 15.6757 8.60706 15.7135 8.70045C15.7512 8.79384 15.7697 8.89387 15.7679 8.99457C15.7662 9.09527 15.7441 9.19459 15.7031 9.28658C15.6621 9.37858 15.603 9.46138 15.5293 9.53005L13.0593 12L15.5293 14.47C15.6618 14.6122 15.734 14.8003 15.7305 14.9946C15.7271 15.1889 15.6484 15.3743 15.511 15.5117C15.3736 15.6491 15.1882 15.7278 14.9939 15.7312C14.7996 15.7347 14.6115 15.6625 14.4693 15.53L11.9993 13.06L9.52935 15.53C9.46068 15.6037 9.37788 15.6628 9.28588 15.7038C9.19389 15.7448 9.09457 15.7669 8.99387 15.7686C8.89317 15.7704 8.79314 15.7519 8.69975 15.7142C8.60636 15.6764 8.52153 15.6203 8.45031 15.5491C8.37909 15.4779 8.32295 15.393 8.28522 15.2996C8.2475 15.2063 8.22898 15.1062 8.23075 15.0055C8.23253 14.9048 8.25457 14.8055 8.29557 14.7135C8.33656 14.6215 8.39566 14.5387 8.46935 14.47L10.9393 12L8.46935 9.53005C8.3289 9.38942 8.25001 9.1988 8.25001 9.00005C8.25001 8.8013 8.3289 8.61067 8.46935 8.47005Z" fill="#FA0000" />
                </svg>
                <p className="ProblemSection_problemText__nNyhH">{text}</p>
              </div>
            ))}
          </div>
          <div 
            className="ProblemSection_resultBox__bHyAw"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(15px)',
              transition: 'opacity 0.5s ease-out 0.8s, transform 0.5s ease-out 0.8s'
            }}
          >
            <p className="ProblemSection_resultText__n5HdF">Result: Great ideas die before they are tested.</p>
          </div>
        </div>
        <div 
          className="ProblemSection_imageWrapper__lRRm1" 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateX(20px)',
            transition: 'opacity 0.6s ease-out 0.9s, transform 0.6s ease-out 0.9s'
          }}
        >
          <div className="ProblemSection_imageContainer__wxgZB">
            <img 
              alt="Entrepreneur facing challenges" 
              fetchPriority="high" 
              decoding="async" 
              data-nimg="fill" 
              className="ProblemSection_image__qWr_f" 
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent"
              }} 
              src="/coded/static/media/problem-img.779606f3.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}