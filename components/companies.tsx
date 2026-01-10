"use client";

import { useEffect } from 'react';

export function Companies() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'revealed' class to trigger the animation
                        entry.target.classList.add('revealed');
                        
                        // Also add to the inner content and cover
                        const content = entry.target.querySelector('.animated-content');
                        const cover = entry.target.querySelector('.company-cover');
                        
                        if (content) content.classList.add('revealed');
                        if (cover) cover.classList.add('revealed');
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        // Observe each animated container
        const containers = document.querySelectorAll('.company-container');
        containers.forEach(container => {
            observer.observe(container);
        });

        return () => {
            containers.forEach(container => {
                observer.unobserve(container);
            });
        };
    }, []);

    return (
        <section className="Companies_wrapper__bUnuf">
            {/* Header */}
            <div className="company-container">
                <div className="animated-content">
                    <h3 className="Companies_header__I1XDj">
                        We have the privilege of working with ambitious companies to create
                        world-class solutions.
                    </h3>
                </div>
                <div className="company-cover"></div>
            </div>

            {/* Company Logos */}
            <div className="Companies_imagesWrapper__OtbwN">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div key={num} className="company-container">
                        <div className="animated-content">
                            <div className="Companies_imageWrapperOuter__1jeFH">
                                <div className="Companies_imageWrapper__OJY1z">
                                    <img
                                        alt="company image"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="Companies_image__1E2RC"
                                        sizes="100vw"
                                        srcSet={`
                                            /coded/company-${num}.png,
                                            /coded/company-${num}.png,
                                            /coded/company-${num}.png,
                                            /coded/company-${num}.png,
                                            /coded/company-${num}.png,
                                            /coded/company-${num}.png,
                                            /coded/company-${num}.png,
                                            /coded/company-${num}.png
                                        `}
                                        src={`/coded/company-${num}.png`}
                                        style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            inset: "0px",
                                            color: "transparent"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="company-cover"></div>
                    </div>
                ))}
            </div>

            {/* Achievements Section */}
            <div className="Companies_achievements__xb2QA">
                <div className="company-container">
                    <div className="animated-content">
                        <div className="Companies_achievement__tt9Jp">
                            <div className="Companies_achievementTitleWrapper__MxR3l">
                                <p className="Companies_achievementTitle__hH6v8">14+</p>
                                <p className="Companies_achievementText__NrH_N">years in business</p>
                            </div>
                            <img
                                alt="achievement image"
                                loading="lazy"
                                width="96"
                                height="96"
                                decoding="async"
                                data-nimg="1"
                                className="Companies_achievementIcon__nFPj7"
                                srcSet="/coded/calendar.webp, /coded/calendar.webp"
                                src="/coded/calendar.webp"
                                style={{ color: "transparent" }}
                            />
                            <img
                                alt="achievement image"
                                loading="lazy"
                                width="72"
                                height="72"
                                decoding="async"
                                data-nimg="1"
                                className="Companies_achievementIconMobile__sXRf_"
                                srcSet="/coded/calendar.webp, /coded/calendar.webp"
                                src="/coded/calendar.webp"
                                style={{ color: "transparent" }}
                            />
                            <img
                                alt="achievement image"
                                loading="lazy"
                                width="48"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                className="Companies_achievementIconMobile2__sDkte"
                                srcSet="/coded/calendar.webp 1x, /coded/calendar.webp"
                                src="/coded/calendar.webp"
                                style={{ color: "transparent" }}
                            />
                        </div>
                    </div>
                    <div className="company-cover"></div>
                </div>

                <div className="company-container">
                    <div className="animated-content">
                        <div className="Companies_achievement__tt9Jp Companies_borderBlock__3m91G">
                            <div className="Companies_achievementTitleWrapper__MxR3l">
                                <p className="Companies_achievementTitle__hH6v8">100+</p>
                                <p className="Companies_achievementText__NrH_N">solutions delivered</p>
                            </div>
                            <img
                                alt="achievement image"
                                loading="lazy"
                                width="96"
                                height="96"
                                decoding="async"
                                data-nimg="1"
                                className="Companies_achievementIcon__nFPj7"
                                srcSet="/coded/ranking.webp, /coded/ranking.webp"
                                src="/coded/ranking.webp"
                                style={{ color: "transparent" }}
                            />
                            <img
                                alt="achievement image"
                                loading="lazy"
                                width="72"
                                height="72"
                                decoding="async"
                                data-nimg="1"
                                className="Companies_achievementIconMobile__sXRf_"
                                srcSet="/coded/ranking.webp, /coded/ranking.webp"
                                src="/coded/ranking.webp"
                                style={{ color: "transparent" }}
                            />
                            <img
                                alt="achievement image"
                                loading="lazy"
                                width="48"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                className="Companies_achievementIconMobile2__sDkte"
                                srcSet="/coded/ranking.webp 1x, /coded/ranking.webp"
                                src="/coded/ranking.webp"
                                style={{ color: "transparent" }}
                            />
                        </div>
                    </div>
                    <div className="company-cover"></div>
                </div>

                <div className="company-container">
                    <div className="animated-content">
                        <div className="Companies_achievement__tt9Jp">
                            <div className="Companies_achievementTitleWrapper__MxR3l">
                                <p className="Companies_achievementTitle__hH6v8">$4M+</p>
                                <p className="Companies_achievementText__NrH_N">business delivered</p>
                            </div>
                            <img
                                alt="achievement image"
                                loading="lazy"
                                width="96"
                                height="96"
                                decoding="async"
                                data-nimg="1"
                                className="Companies_achievementIcon__nFPj7"
                                srcSet="/coded/coin.webp, /coded/coin.webp"
                                src="/coded/coin.webp"
                                style={{ color: "transparent" }}
                            />
                            <img
                                alt="achievement image"
                                loading="lazy"
                                width="72"
                                height="72"
                                decoding="async"
                                data-nimg="1"
                                className="Companies_achievementIconMobile__sXRf_"
                                srcSet="/coded/coin.webp, /coded/coin.webp"
                                src="/coded/coin.webp"
                                style={{ color: "transparent" }}
                            />
                            <img
                                alt="achievement image"
                                loading="lazy"
                                width="48"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                className="Companies_achievementIconMobile2__sDkte"
                                srcSet="/coded/coin.webp 1x, /coded/coin.webp"
                                src="/coded/coin.webp"
                                style={{ color: "transparent" }}
                            />
                        </div>
                    </div>
                    <div className="company-cover"></div>
                </div>
            </div>

            <style jsx global>{`
                /* Global styles to override inline styles */
                .company-container {
                    position: relative !important;
                    overflow: hidden !important;
                }
                
                /* Header container specific */
                .company-container:first-child {
                    width: 100% !important;
                }
                
                /* Company logo containers */
                .Companies_imagesWrapper__OtbwN .company-container {
                    width: fit-content !important;
                }
                
                /* Achievement containers */
                .Companies_achievements__xb2QA .company-container {
                    width: 100% !important;
                }
                
                /* Content that will be revealed */
                .animated-content {
                    opacity: 0 !important;
                    transform: translateY(75px) translateZ(0px) !important;
                    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                                transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    height: 100% !important;
                }
                
                /* Company-specific cover styles */
                .company-cover {
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    bottom: 0 !important;
                    background-color: rgb(59, 133, 183) !important;
                    transform: translateY(0) !important;
                    opacity: 1 !important;
                    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                                opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    z-index: 20 !important;
                    pointer-events: none !important;
                }
                
                /* Revealed states */
                .company-container.revealed .animated-content {
                    opacity: 1 !important;
                    transform: translateY(0) translateZ(0px) !important;
                }
                
                .company-container.revealed .company-cover,
                .company-cover.revealed {
                    transform: translateY(100%) !important;
                    opacity: 0 !important;
                }
                
                /* Ensure content stays above cover */
                .Companies_header__I1XDj,
                .Companies_imageWrapperOuter__1jeFH,
                .Companies_achievement__tt9Jp {
                    position: relative;
                    z-index: 10;
                }
                
                /* Mobile responsive */
                @media (max-width: 768px) {
                    .company-container {
                        width: 100% !important;
                    }
                    
                    .animated-content,
                    .company-cover {
                        transition-duration: 0.6s !important;
                    }
                }
                
                /* Stagger animation for company logos */
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(1) .animated-content,
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(1) .company-cover {
                    transition-delay: 0s;
                }
                
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(2) .animated-content,
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(2) .company-cover {
                    transition-delay: 0.1s;
                }
                
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(3) .animated-content,
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(3) .company-cover {
                    transition-delay: 0.2s;
                }
                
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(4) .animated-content,
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(4) .company-cover {
                    transition-delay: 0.3s;
                }
                
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(5) .animated-content,
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(5) .company-cover {
                    transition-delay: 0.4s;
                }
                
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(6) .animated-content,
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(6) .company-cover {
                    transition-delay: 0.5s;
                }
                
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(7) .animated-content,
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(7) .company-cover {
                    transition-delay: 0.6s;
                }
                
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(8) .animated-content,
                .Companies_imagesWrapper__OtbwN .company-container:nth-child(8) .company-cover {
                    transition-delay: 0.7s;
                }
                
                /* Stagger animation for achievements */
                .Companies_achievements__xb2QA .company-container:nth-child(1) .animated-content,
                .Companies_achievements__xb2QA .company-container:nth-child(1) .company-cover {
                    transition-delay: 0s;
                }
                
                .Companies_achievements__xb2QA .company-container:nth-child(2) .animated-content,
                .Companies_achievements__xb2QA .company-container:nth-child(2) .company-cover {
                    transition-delay: 0.15s;
                }
                
                .Companies_achievements__xb2QA .company-container:nth-child(3) .animated-content,
                .Companies_achievements__xb2QA .company-container:nth-child(3) .company-cover {
                    transition-delay: 0.3s;
                }
            `}</style>

            {/* Fallback JavaScript for browsers without IntersectionObserver */}
            <script dangerouslySetInnerHTML={{
                __html: `
                (function() {
                    // Function to reveal elements
                    function revealElements() {
                        document.querySelectorAll('.company-container').forEach((container, index) => {
                            setTimeout(() => {
                                container.classList.add('revealed');
                                const content = container.querySelector('.animated-content');
                                const cover = container.querySelector('.company-cover');
                                if (content) content.classList.add('revealed');
                                if (cover) cover.classList.add('revealed');
                            }, index * 150);
                        });
                    }
                    
                    if (!('IntersectionObserver' in window)) {
                        // Fallback for older browsers - reveal all immediately
                        setTimeout(revealElements, 500);
                        return;
                    }
                    
                    // Use IntersectionObserver for modern browsers
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('revealed');
                                const content = entry.target.querySelector('.animated-content');
                                const cover = entry.target.querySelector('.company-cover');
                                if (content) content.classList.add('revealed');
                                if (cover) cover.classList.add('revealed');
                            }
                        });
                    }, { threshold: 0.2, rootMargin: '0px 0px -100px 0px' });
                    
                    document.querySelectorAll('.company-container').forEach(container => {
                        observer.observe(container);
                    });
                })();
                `
            }} />
        </section>
    );
}