"use client"

import { useState, useRef, useEffect } from 'react';

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How fast can I launch?",
    answer: "Starter MVP in 6–12 months, Growth in 6–9, Scale in 2–6."
  },
  {
    id: 2,
    question: "Can I pause and resume?",
    answer: "Yes, you can pause your subscription at any time and resume when you're ready. Your project data will be safely stored during the pause period."
  },
  {
    id: 3,
    question: "Do I need technical knowledge?",
    answer: "No technical knowledge is required. Our team handles all technical aspects while keeping you informed throughout the development process."
  },
  {
    id: 4,
    question: "What if I can't pay millions upfront?",
    answer: "We offer flexible payment plans starting from affordable monthly subscriptions. No large upfront payments required."
  }
];

export function Faq() {
  const [activeId, setActiveId] = useState<number | null>(1); // First FAQ open by default
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
            observer.unobserve(entry.target);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg 
      width="12" 
      height="8" 
      viewBox="0 0 12 8" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s ease" }}
    >
      <path 
        d="M1 1.5L6 6.5L11 1.5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="FAQSection_section__qaBnt">
      <div className="FAQSection_container__6056H">
        <h2 className="FAQSection_title__JA5yu" style={{ opacity: 1, transform: "none" }}>
          FAQs
        </h2>
        <div className="FAQSection_faqList__PFyVt">
          {faqData.map((faq, index) => {
            const isActive = activeId === faq.id;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div 
                ref={el => itemRefs.current[index] = el}
                key={faq.id}
                className={`FAQSection_faqItem__OKfln ${isActive ? 'FAQSection_active__ip1tk' : ''}`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <button 
                  className="FAQSection_question__uwmqg" 
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isActive}
                >
                  <span className="FAQSection_icon__0c9WZ">
                    <ChevronIcon isOpen={isActive} />
                  </span>
                  <span className="FAQSection_questionText__G0XZm">
                    {faq.question}
                  </span>
                </button>
                
                <div 
                  className="FAQSection_answerWrapper__oIfB_" 
                  style={{ 
                    height: isActive ? 'auto' : '0',
                    opacity: isActive ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'height 0.3s ease, opacity 0.3s ease'
                  }}
                >
                  <div className="FAQSection_answer__2ovPS">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}