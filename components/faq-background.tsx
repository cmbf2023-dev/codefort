"use client"

import { useEffect, useState, useRef } from 'react';

export function FaqBackground() {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqItems = [
    {
      id: 1,
      question: "How can Codefort's engineering team benefit my business?",
      answer: "A dedicated engineering team from Codefort becomes an extension of your in-house team, providing expertise, skills, and additional resources. With our efficient recruitment process, we ensure that your team is up and running in no time, ready to tackle challenges and drive your project forward to success."
    },
    {
      id: 2,
      question: "How does Codefort's UI/UX design impact my business's success?",
      answer: "User-centered design is the cornerstone of our approach, and we believe that happy users lead to loyal customers. Our team of talented designers focuses on creating intuitive and visually appealing interfaces that resonate with your audience. By putting users at the center of the design process, we ensure that every interaction with your product is seamless, engaging, and memorable, ultimately driving business growth and building brand loyalty."
    },
    {
      id: 3,
      question: "What is the process for web development at Codefort?",
      answer: "Our web development process begins with thorough requirement gathering and analysis, followed by wireframing and design. Once approved, our engineers bring the design to life, and our QA team ensures a bug-free and seamless experience before launch. After deployment, we provide ongoing support and maintenance to keep your website running."
    },
    {
      id: 4,
      question: "How does Codefort ensure the security of my sensitive data during the development process?",
      answer: "At Codefort, safeguarding your sensitive data is of utmost importance to us. We follow a rigorous security protocol to ensure the highest level of confidentiality throughout the development process. Our team strictly adheres to industry best practices, utilizing encrypted communication channels and secure servers to protect your valuable information from any potential threats. Regular audits and constant monitoring further reinforce our commitment to maintaining the integrity and confidentiality of your data."
    },
    {
      id: 5,
      question: "Can Codefort optimize my website for mobile devices to reach a wider audience?",
      answer: "Absolutely! As part of our web development process, we prioritize mobile responsiveness to ensure that your website is accessible and user-friendly on all devices. We conduct rigorous testing across various screen sizes and devices, optimizing the user experience for mobile users, and expanding your reach to a wider audience."
    }
  ];

  // Simple reveal animation similar to ServiceFeatures
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            const content = entry.target.querySelector('.faq-animated-content');
            const cover = entry.target.querySelector('.faq-cover');
            
            if (content) content.classList.add('revealed');
            if (cover) cover.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const containers = document.querySelectorAll('.faq-animate-container');
    containers.forEach(container => {
      observer.observe(container);
    });

    return () => {
      containers.forEach(container => {
        observer.unobserve(container);
      });
    };
  }, []);

  const toggleFaq = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="FAQ_wrapper__j_XLJ">
      <div className="FAQ_faqHeader__FELve">
        <div className="faq-animate-container">
          <div className="faq-animated-content">
            <h3 className="FAQ_sectionTitleDark__GxfAN">
              FAQs<span className="FAQ_sectionTitleDark__GxfAN FAQ_dot__OTa5K">.</span>
            </h3>
          </div>
          <div className="faq-cover"></div>
        </div>
        <div className="faq-animate-container">
          <div className="faq-animated-content">
            <p className="FAQ_sectionBodyDark__z6_rW">Our frequently asked questions</p>
          </div>
          <div className="faq-cover"></div>
        </div>
      </div>
      
      <div className="FAQ_faqs__pBF9V">
        {faqItems.map((item, index) => {
          const isExpanded = expandedId === item.id;
          
          return (
            <div key={item.id} className="FAQ_faqOuter__tgMmY">
              <div 
                className="FAQ_faq__KLi_o"
                ref={el => {containerRefs.current[index] = el}}
              >
                <h2 className="FAQ_questionWrapper__iopBJ">
                  <button 
                    className="FAQ_question__CeAzK"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    {item.question}
                  </button>
                  <img 
                    alt="faq icon" 
                    loading="lazy" 
                    width="24" 
                    height="24" 
                    decoding="async"
                    className={`FAQ_faqIcon__fk182 ${isExpanded ? 'FAQ_faqIconCurrent__RNoo_' : ''}`}
                    style={{ 
                      color: "transparent", 
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                    srcSet="/coded/expand.webp, /coded/expand.webp 2x" 
                    src="/coded/expand.webp"
                  />
                </h2>
                <div 
                  id={`faq-answer-${item.id}`}
                  className="FAQ_answerWrapper__vy7_O" 
                  role="region" 
                  aria-hidden={!isExpanded}
                  style={{
                    maxHeight: isExpanded ? '500px' : '0',
                    opacity: isExpanded ? 1 : 0,
                    transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out',
                    overflow: 'hidden'
                  }}
                >
                  <div className="FAQ_answerWrapperInner__y_JW_">
                    <p className="FAQ_answer__A2Ls0">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        /* Animation styles similar to ServiceFeatures */
        .faq-animate-container {
          position: relative !important;
          width: fit-content !important;
          overflow: hidden !important;
        }
        
        .faq-animated-content {
          opacity: 0 !important;
          transform: translateY(75px) translateZ(0px) !important;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
          height: 100% !important;
        }
        
        .faq-cover {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 4px !important;
          background-color: rgb(59, 133, 183) !important;
          transform: translateY(0) !important;
          opacity: 1 !important;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                      opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
          z-index: 20 !important;
          pointer-events: none !important;
        }
        
        /* Revealed states */
        .faq-animate-container.revealed .faq-animated-content,
        .faq-animated-content.revealed {
          opacity: 1 !important;
          transform: translateY(0) translateZ(0px) !important;
        }
        
        .faq-animate-container.revealed .faq-cover,
        .faq-cover.revealed {
          transform: translateY(100%) !important;
          opacity: 0 !important;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
          .faq-animate-container {
            width: 100% !important;
          }
          
          .faq-animated-content,
          .faq-cover {
            transition-duration: 0.6s !important;
          }
        }
      `}</style>
    </section>
  );
}