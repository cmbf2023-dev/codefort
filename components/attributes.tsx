"use client";

import { useEffect } from 'react';

export function Attributes() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'revealed' class to trigger the animation
                        entry.target.classList.add('revealed');
                        
                        // Also add to the inner content and cover
                        const content = entry.target.querySelector('.animated-content');
                        const cover = entry.target.querySelector('.attribute-cover');
                        
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
        const containers = document.querySelectorAll('.attribute-container');
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
        <section className="Attributes_wrapper__v6LOL">
            {/* First Attribute */}
            <div className="Attribute_wrapper__7Q2Fd">
                <div className="Attribute_imageWrapper__HhgGf">
                    <img
                        alt="attribute image"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="Attribute_image__N9_48"
                        sizes="100vw"
                        srcSet="
                            /coded/attribute-1.webp,
                            /coded/attribute-1.webp,
                            /coded/attribute-1.webp,
                            /coded/attribute-1.webp,
                            /coded/attribute-1.webp,
                            /coded/attribute-1.webp,
                            /coded/attribute-1.webp,
                            /coded/attribute-1.webp
                        "
                        src="/coded/attribute-1.webp"
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent"
                        }}
                    />
                </div>
                <div className="Attribute_texts__lGlPa">
                    <div className="attribute-container">
                        <div className="animated-content">
                            <h3 className="Attribute_title__6yrz_">
                                Customer-centric:
                                <span className="Attribute_titleInner__Sf2RL">Your Success, Our Mission</span>
                                <span className="Attribute_title__6yrz_ Attribute_dot___wadH">.</span>
                            </h3>
                        </div>
                        <div className="attribute-cover"></div>
                    </div>
                    <div className="attribute-container">
                        <div className="animated-content">
                            <p className="Attribute_text__iBKtd">
                                We immerse ourselves in your vision, tailoring our solutions to meet
                                your specific requirements.
                            </p>
                        </div>
                        <div className="attribute-cover"></div>
                    </div>
                    <div className="attribute-container">
                        <div className="animated-content">
                            <p className="Attribute_text__iBKtd">
                                Our relentless dedication to delivering high-quality software is
                                what sets us apart.
                            </p>
                        </div>
                        <div className="attribute-cover"></div>
                    </div>
                </div>
            </div>

            {/* Second Attribute */}
            <div className="Attribute_wrapper__7Q2Fd Attribute_reverse__yH3Qo">
                <div className="Attribute_imageWrapper__HhgGf">
                    <img
                        alt="attribute image"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="Attribute_image__N9_48"
                        sizes="100vw"
                        srcSet="
                            /coded/attribute-2.webp,
                            /coded/attribute-2.webp,
                            /coded/attribute-2.webp,
                            /coded/attribute-2.webp,
                            /coded/attribute-2.webp,
                            /coded/attribute-2.webp,
                            /coded/attribute-2.webp,
                            /coded/attribute-2.webp
                        "
                        src="/coded/attribute-2.webp"
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent"
                        }}
                    />
                </div>
                <div className="Attribute_texts__lGlPa">
                    <div className="attribute-container">
                        <div className="animated-content">
                            <h3 className="Attribute_title__6yrz_">
                                Integrity:
                                <span className="Attribute_titleInner__Sf2RL">Building Trust, Inspiring Confidence</span>
                                <span className="Attribute_title__6yrz_ Attribute_dot___wadH">.</span>
                            </h3>
                        </div>
                        <div className="attribute-cover"></div>
                    </div>
                    <div className="attribute-container">
                        <div className="animated-content">
                            <p className="Attribute_text__iBKtd">
                                Integrity is the bedrock of our company. We uphold the highest
                                ethical standards, ensuring transparency and honesty in all our
                                interactions.
                            </p>
                        </div>
                        <div className="attribute-cover"></div>
                    </div>
                    <div className="attribute-container">
                        <div className="animated-content">
                            <p className="Attribute_text__iBKtd">
                                You can trust us to prioritize your interests and deliver on our
                                promises with unwavering dedication.
                            </p>
                        </div>
                        <div className="attribute-cover"></div>
                    </div>
                </div>
            </div>

            {/* Third Attribute */}
            <div className="Attribute_wrapper__7Q2Fd">
                <div className="Attribute_imageWrapper__HhgGf">
                    <img
                        alt="attribute image"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="Attribute_image__N9_48"
                        sizes="100vw"
                        srcSet="
                            /coded/attribute-3.webp,
                            /coded/attribute-3.webp,
                            /coded/attribute-3.webp,
                            /coded/attribute-3.webp,
                            /coded/attribute-3.webp,
                            /coded/attribute-3.webp,
                            /coded/attribute-3.webp,
                            /coded/attribute-3.webp
                        "
                        src="/coded/attribute-3.webp"
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent"
                        }}
                    />
                </div>
                <div className="Attribute_texts__lGlPa">
                    <div className="attribute-container">
                        <div className="animated-content">
                            <h3 className="Attribute_title__6yrz_">
                                Excellence:
                                <span className="Attribute_titleInner__Sf2RL">Pursuing Perfection</span>
                                <span className="Attribute_title__6yrz_ Attribute_dot___wadH">.</span>
                            </h3>
                        </div>
                        <div className="attribute-cover"></div>
                    </div>
                    <div className="attribute-container">
                        <div className="animated-content">
                            <p className="Attribute_text__iBKtd">
                                Excellence is not just an aspiration; it is our commitment to
                                achieving the highest standards. From project initiation to
                                completion, we strive for perfection in every detail of our work.
                            </p>
                        </div>
                        <div className="attribute-cover"></div>
                    </div>
                    <div className="attribute-container">
                        <div className="animated-content">
                            <p className="Attribute_text__iBKtd">
                                Our pursuit of excellence drives us to continuously deliver
                                tailor-made solutions to your unique requirements.
                            </p>
                        </div>
                        <div className="attribute-cover"></div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                /* Global styles to override inline styles */
                .attribute-container {
                    position: relative !important;
                    width: fit-content !important;
                    overflow: hidden !important;
                }
                
                .animated-content {
                    opacity: 0 !important;
                    transform: translateY(75px) translateZ(0px) !important;
                    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                                transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    height: 100% !important;
                }
                
                /* Attribute-specific cover styles */
                .attribute-cover {
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
                .attribute-container.revealed .animated-content {
                    opacity: 1 !important;
                    transform: translateY(0) translateZ(0px) !important;
                }
                
                .attribute-container.revealed .attribute-cover,
                .attribute-cover.revealed {
                    transform: translateY(100%) !important;
                    opacity: 0 !important;
                }
                
                /* Ensure text stays above cover */
                .Attribute_title__6yrz_,
                .Attribute_text__iBKtd {
                    position: relative;
                    z-index: 10;
                }
                
                /* Mobile responsive */
                @media (max-width: 768px) {
                    .attribute-container {
                        width: 100% !important;
                    }
                    
                    .animated-content,
                    .attribute-cover {
                        transition-duration: 0.6s !important;
                    }
                }
                
                /* Stagger animation for children within each attribute */
                .Attribute_texts__lGlPa .attribute-container:nth-child(2) .animated-content,
                .Attribute_texts__lGlPa .attribute-container:nth-child(2) .attribute-cover {
                    transition-delay: 0.15s;
                }
                
                .Attribute_texts__lGlPa .attribute-container:nth-child(3) .animated-content,
                .Attribute_texts__lGlPa .attribute-container:nth-child(3) .attribute-cover {
                    transition-delay: 0.3s;
                }
                
                /* Stagger between different attribute sections */
                .Attribute_wrapper__7Q2Fd:nth-child(2) .attribute-container .animated-content,
                .Attribute_wrapper__7Q2Fd:nth-child(2) .attribute-container .attribute-cover {
                    transition-delay: 0.1s;
                }
                
                .Attribute_wrapper__7Q2Fd:nth-child(3) .attribute-container .animated-content,
                .Attribute_wrapper__7Q2Fd:nth-child(3) .attribute-container .attribute-cover {
                    transition-delay: 0.2s;
                }
            `}</style>

            {/* Fallback JavaScript for browsers without IntersectionObserver */}
            <script dangerouslySetInnerHTML={{
                __html: `
                (function() {
                    // Function to reveal elements
                    function revealElements() {
                        document.querySelectorAll('.attribute-container').forEach((container, index) => {
                            setTimeout(() => {
                                container.classList.add('revealed');
                                const content = container.querySelector('.animated-content');
                                const cover = container.querySelector('.attribute-cover');
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
                                const cover = entry.target.querySelector('.attribute-cover');
                                if (content) content.classList.add('revealed');
                                if (cover) cover.classList.add('revealed');
                            }
                        });
                    }, { threshold: 0.2, rootMargin: '0px 0px -100px 0px' });
                    
                    document.querySelectorAll('.attribute-container').forEach(container => {
                        observer.observe(container);
                    });
                })();
                `
            }} />
        </section>
    );
}