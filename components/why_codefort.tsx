"use client";

import { useEffect, useRef } from 'react';

export function WHyCodeFort() {
    const containerRef = useRef<HTMLDivElement>(null);
    const coversRef = useRef<NodeListOf<Element> | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Find all cover elements within the intersected element
                        const covers = entry.target.querySelectorAll('.cover');
                        covers.forEach((cover, index) => {
                            // Stagger the animation
                            setTimeout(() => {
                                (cover as HTMLElement).style.transform = 'translateY(100%)';
                                (cover as HTMLElement).style.opacity = '0';
                            }, index * 150); // 150ms delay between each cover
                        });
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        // Observe each text container that has covers
        const textContainers = document.querySelectorAll('.text-container, .text-block');
        textContainers.forEach(container => {
            observer.observe(container);
        });

        return () => {
            textContainers.forEach(container => {
                observer.unobserve(container);
            });
        };
    }, []);

    const reasons = [
        {
            number: "1",
            title: "Value for money",
            description: "Our cost-effective services ensure you receive the highest quality without breaking the bank. Working with us ensures you allocate resources strategically and reach your desired goal with the right amount of investment."
        },
        {
            number: "2",
            title: "Speed and quality",
            description: "We understand the importance of deadlines and strive to deliver projects on time. Working with us guarantees the best chance to win in our tech-powered fast paced world without compromising quality."
        },
        {
            number: "3",
            title: "World class team",
            description: "Our experts excel in developing applications that seamlessly adapt to desktop, web, and mobile environments leveraging the latest technologies to deliver solutions that elevate your business and satisfy your customers."
        },
        {
            number: "4",
            title: "Continuous support",
            description: "Our focus is on building long-term relationships with our clients. We believe in transparent communication, active collaboration, and exceeding your expectations."
        }
    ];

    return (
        <section className="WhyCodefort_wrapper__2C5m0" ref={containerRef}>
            {/* Main Header */}
            <div className="scroll-reveal-container">
                <div className="text-container">
                    <h3 className="WhyCodefort_header__Zwfq0">
                        Why Codefort<span className="WhyCodefort_questionMark__oz_8v">?</span>
                    </h3>
                    <div className="cover"></div>
                </div>
            </div>
            
            {/* Reasons List */}
            <div className="WhyCodefort_whyWrapper__1z5Wv">
                {reasons.map((item, index) => (
                    <div key={index} className="WhyCodefort_why__9A5In">
                        <div className="WhyCodefort_whyNumberWrapper__4D57U">
                            <div className="text-container">
                                <p className="WhyCodefort_whyNumber__3_QAY">{item.number}</p>
                                <div className="cover"></div>
                            </div>
                        </div>
                        <div className="WhyCodefort_whyWrapperInner__0SgTN">
                            <div className="text-container">
                                <h3 className="WhyCodefort_whyHeader__YaB_a">{item.title}</h3>
                                <div className="cover"></div>
                            </div>
                            <div className="text-container">
                                <p className="WhyCodefort_whyBody__8C_RB">{item.description}</p>
                                <div className="cover"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="WhyCodefort_bottom__iAYfR">
                <div className="WhyCodefort_bottomText__fhIHX">
                    <div className="text-container">
                        <h3 className="WhyCodefort_header__Zwfq0">
                            Let's get started<span className="WhyCodefort_questionMark__oz_8v">.</span>
                        </h3>
                        <div className="cover"></div>
                    </div>
                    <div className="text-container">
                        <p className="WhyCodefort_sectionBody___a7h5">
                            Work with us to transform your business ideas
                        </p>
                        <div className="cover"></div>
                    </div>
                </div>
                <div className="text-container">
                    <a className="WhyCodefort_bottomButton__rv9qM" href="/#contact">
                        Start your project
                    </a>
                    <div className="cover"></div>
                </div>
            </div>
            
            <style jsx>{`
                /* Text Container Styles */
                .text-container {
                    position: relative;
                    display: inline-block;
                    overflow: hidden;
                    width: fit-content;
                }
                
                .scroll-reveal-container .text-container {
                    display: block;
                }
                
                /* Cover Styles */
                .cover {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgb(59, 133, 183);
                    transform: translateY(0);
                    opacity: 1;
                    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                                opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 20;
                    pointer-events: none;
                }
                
                /* Animation for covers that have been revealed */
                .cover.revealed {
                    transform: translateY(100%);
                    opacity: 0;
                }
                
                /* Text Styles - Ensure text stays above cover */
                .WhyCodefort_header__Zwfq0,
                .WhyCodefort_whyNumber__3_QAY,
                .WhyCodefort_whyHeader__YaB_a,
                .WhyCodefort_whyBody__8C_RB,
                .WhyCodefort_sectionBody___a7h5,
                .WhyCodefort_bottomButton__rv9qM {
                    position: relative;
                    z-index: 10;
                    margin: 0;
                }
                
                /* Container Styles */
                .WhyCodefort_why__9A5In {
                    margin-bottom: 2rem;
                }
                
                .WhyCodefort_whyNumberWrapper__4D57U {
                    margin-bottom: 0.5rem;
                }
                
                .WhyCodefort_whyWrapperInner__0SgTN {
                    margin-left: 1.5rem;
                }
                
                .WhyCodefort_bottom__iAYfR {
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid #e5e7eb;
                }
                
                .WhyCodefort_bottomText__fhIHX {
                    margin-bottom: 1.5rem;
                }
                
                /* Button Styles */
                .WhyCodefort_bottomButton__rv9qM {
                    display: inline-block;
                    padding: 0.75rem 1.5rem;
                    background-color: #3b85b7;
                    color: white;
                    text-decoration: none;
                    border-radius: 0.375rem;
                    font-weight: 600;
                    transition: background-color 0.2s;
                }
                
                .WhyCodefort_bottomButton__rv9qM:hover {
                    background-color: #2c6a94;
                }
                
                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .text-container {
                        width: 100%;
                    }
                    
                    .WhyCodefort_whyWrapperInner__0SgTN {
                        margin-left: 1rem;
                    }
                    
                    .cover {
                        transition-duration: 0.6s;
                    }
                }
                
                /* Focus styles for accessibility */
                .text-container:focus-within .cover {
                    transform: translateY(100%);
                    opacity: 0;
                }
            `}</style>
            
            {/* Fallback JavaScript for browsers without IntersectionObserver */}
            <script dangerouslySetInnerHTML={{
                __html: `
                (function() {
                    if (!('IntersectionObserver' in window)) {
                        // Fallback for older browsers - reveal all covers immediately
                        document.querySelectorAll('.cover').forEach(cover => {
                            cover.style.transform = 'translateY(100%)';
                            cover.style.opacity = '0';
                        });
                        return;
                    }
                    
                    // Additional scroll trigger for elements that might not be caught by React
                    function initScrollReveal() {
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    const covers = entry.target.querySelectorAll('.cover');
                                    covers.forEach((cover, index) => {
                                        setTimeout(() => {
                                            cover.style.transform = 'translateY(100%)';
                                            cover.style.opacity = '0';
                                        }, index * 150);
                                    });
                                }
                            });
                        }, { threshold: 0.2, rootMargin: '0px 0px -100px 0px' });
                        
                        document.querySelectorAll('.text-container').forEach(container => {
                            observer.observe(container);
                        });
                    }
                    
                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', initScrollReveal);
                    } else {
                        initScrollReveal();
                    }
                })();
                `
            }} />
        </section>
    );
}