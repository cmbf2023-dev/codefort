"use client"

import { useEffect, useRef, useState } from 'react';

export function OurProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`ProofSection_section__VuBTH ${isVisible ? 'visible' : ''}`}
    >
      <div className="ProofSection_container__2rpXA">
        <div 
          className={`${isVisible ? 'fade-in' : ''}`}
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? "none" : "translateY(20px)" 
          }}
        >
          <h3 className="ProofSection_subtitle__PYYGC">CLIENT SUCCESS STORIES</h3>
          <h2 className="ProofSection_title__a_Nw_">Proof</h2>
          <p className="ProofSection_description__tizU5">Both launched successfully and scaled using our BaaS model.</p>
        </div>
        <div className="ProofSection_cardsGrid__2ZJkL">
          <div 
            className={`ProofSection_card__gkPEm ${isVisible ? 'fade-in-delay-1' : ''}`} 
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? "none" : "translateY(20px)" 
            }}
          >
            <div className="ProofSection_imageWrapper__q0VF3">
              <img 
                alt="Plut" 
                loading="lazy" 
                decoding="async" 
                data-nimg="fill" 
                className="ProofSection_cardImage__zNMP3" 
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
                src="/images/plut_img.svg"
              />
            </div>
            <div className="ProofSection_cardContent__nhfEj">
              <div className="ProofSection_logoWrapper__eWpum">
                <img 
                  alt="Plut logo" 
                  loading="lazy" 
                  width="150" 
                  height="50" 
                  decoding="async" 
                  data-nimg="1" 
                  className="ProofSection_logo__u9rwP" 
                  style={{ color: "transparent" }} 
                  src="/images/plut_logo.svg"
                />
              </div>
              <p className="ProofSection_cardDescription__WzXpA">
                Delivered A Secure Fintech App For Crypto &amp; Gift Card Trading With Modern UI And Scalable Transactions.
              </p>
            </div>
          </div>
          <div 
            className={`ProofSection_card__gkPEm ${isVisible ? 'fade-in-delay-2' : ''}`} 
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? "none" : "translateY(20px)" 
            }}
          >
            <div className="ProofSection_imageWrapper__q0VF3">
              <img 
                alt="OLA OF NORTH" 
                loading="lazy" 
                decoding="async" 
                data-nimg="fill" 
                className="ProofSection_cardImage__zNMP3" 
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
                src="/images/ola_of_north_img.svg"
              />
            </div>
            <div className="ProofSection_cardContent__nhfEj">
              <div className="ProofSection_logoWrapper__eWpum">
                <img 
                  alt="OLA OF NORTH logo" 
                  loading="lazy" 
                  width="150" 
                  height="50" 
                  decoding="async" 
                  data-nimg="1" 
                  className="ProofSection_logo__u9rwP" 
                  style={{ color: "transparent" }} 
                  src="/images/ola_of_north_logo.svg"
                />
              </div>
              <p className="ProofSection_cardDescription__WzXpA">
                Built a multi-vendor farm-produce marketplace with vendor onboarding &amp; logistics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}