"use client";

import { useEffect } from 'react';
import Link from "next/link";

export function Footer() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'revealed' class to trigger the animation
                        entry.target.classList.add('revealed');
                        
                        // Also add to the inner content if it exists
                        const content = entry.target.querySelector('.footer-animated-content');
                        if (content) content.classList.add('revealed');
                    }
                });
            },
            {
                threshold: 0.1, // Lower threshold for footer since it's at the bottom
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observe each animated container
        const containers = document.querySelectorAll('.footer-container');
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
        <footer className="Footer_footer__yUjxG">
            <div className="Footer_copyrightWrapper__9VI0F">
                <div className="footer-container">
                    <div className="footer-animated-content">
                        <Link href="/">
                            <img
                                alt="logo"
                                loading="lazy"
                                width="67"
                                height="64"
                                decoding="async"
                                data-nimg="1"
                                className="Footer_footerLogo__OItv_"
                                style={{ color: "transparent" }}
                                srcSet="
                                    /coded/image?url=%2Fimages%2Flogo.png&amp;w=96&amp;q=75 1x,
                                    /coded/logo.png                                         2x
                                "
                                src="/coded/logo.png"
                            />
                        </Link>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer-animated-content">
                        <Link href="/">
                            <img
                                alt="logo"
                                loading="lazy"
                                width="44.667"
                                height="42.667"
                                decoding="async"
                                data-nimg="1"
                                className="Footer_footerLogoMobile__JQMV0"
                                style={{ color: "transparent" }}
                                srcSet="
                                    /coded/image?url=%2Fimages%2Flogo.png&amp;w=48&amp;q=75 1x,
                                    /coded/image?url=%2Fimages%2Flogo.png&amp;w=96&amp;q=75 2x
                                "
                                src="/coded/logo.png"
                            />
                        </Link>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer-animated-content">
                        <p className="Footer_copyright__m8i3P">
                            © 2023 CodeFort, All rights reserved
                        </p>
                    </div>
                </div>
            </div>
            <div className="Footer_footerNavsWrapper__2QYA9">
                <div className="Footer_footerNavsWrapperInner__rU8OM">
                    <div className="footer-container">
                        <div className="footer-animated-content">
                            <h3 className="Footer_footerHeader__VAK2E">Company</h3>
                        </div>
                    </div>
                    <div className="Footer_footerNavs__uGTx7">
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link className="Footer_footerLink__iFDe2" href="/about-us">About us</Link>
                            </div>
                        </div>
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link className="Footer_footerLink__iFDe2" href="/our-process">Our process</Link>
                            </div>
                        </div>
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link
                                    className="Footer_footerLink__iFDe2"
                                    href="/terms-of-service#privacy-policy"
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link className="Footer_footerLink__iFDe2" href="/terms-of-service">Terms of service</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer_footerNavsWrapperInner__rU8OM">
                    <div className="footer-container">
                        <div className="footer-animated-content">
                            <h3 className="Footer_footerHeader__VAK2E">Services</h3>
                        </div>
                    </div>
                    <div className="Footer_footerNavs__uGTx7">
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link className="Footer_footerLink__iFDe2" href="/software-development">Custom Software Development</Link>
                            </div>
                        </div>
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link className="Footer_footerLink__iFDe2" href="/blockchain">Blockchain Development</Link>
                            </div>
                        </div>
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link className="Footer_footerLink__iFDe2" href="/product-design">Product Design</Link>
                            </div>
                        </div>
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link className="Footer_footerLink__iFDe2" href="/ai-and-ml">AI and ML Development</Link>
                            </div>
                        </div>
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link className="Footer_footerLink__iFDe2" href="/outsourcing">Outsourcing &amp; Recruitment</Link>
                            </div>
                        </div>
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link className="Footer_footerLink__iFDe2" href="/maintenance">Software Maintenance</Link>
                            </div>
                        </div>
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link className="Footer_footerLink__iFDe2" href="#startup">Startup Solutions</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer_footerNavsWrapperInner__rU8OM">
                    <div className="footer-container">
                        <div className="footer-animated-content">
                            <h3 className="Footer_footerHeader__VAK2E">Contact info</h3>
                        </div>
                    </div>
                    <div className="Footer_footerNavs__uGTx7">
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <p className="Footer_footerLink__iFDe2">
                                    CodeFortTech HQ, Adebola House (Suite 100, Rear Wing), 40 Opebi
                                    Road, Ikeja-Lagos.
                                </p>
                            </div>
                        </div>
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <p className="Footer_footerLink__iFDe2">info@codeforttech.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="Footer_socialIconsMobile__8Wjb4">
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link href="https://twitter.com/codeforttech/" target="_blank">
                                    <img
                                        alt="social icon"
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        className="Footer_socialIcon__uhwLW"
                                        style={{ color: "transparent" }}
                                        src="/images/twitter.svg"
                                    />
                                </Link>
                            </div>
                        </div>
                        <Link href="https://linkedin.com/in/codeforttech-limited-340848259" target="_blank">
                            <div className="footer-container">
                                <div className="footer-animated-content">
                                    <img
                                        alt="social icon"
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        className="Footer_socialIcon__uhwLW"
                                        style={{ color: "transparent" }}
                                        src="/images/linkedin.svg"
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="Footer_socialIcons__fF_Oa">
                        <div className="footer-container">
                            <div className="footer-animated-content">
                                <Link href="https://twitter.com/codeforttech/" target="_blank">
                                    <img
                                        alt="social icon"
                                        loading="lazy"
                                        width="40"
                                        height="40"
                                        decoding="async"
                                        data-nimg="1"
                                        className="Footer_socialIcon__uhwLW"
                                        style={{ color: "transparent" }}
                                        src="/images/twitter.svg"
                                    />
                                </Link>
                            </div>
                        </div>
                        <Link href="https://linkedin.com/in/codeforttech-limited-340848259" target="_blank">
                            <div className="footer-container">
                                <div className="footer-animated-content">
                                    <img
                                        alt="social icon"
                                        loading="lazy"
                                        width="40"
                                        height="40"
                                        decoding="async"
                                        data-nimg="1"
                                        className="Footer_socialIcon__uhwLW"
                                        style={{ color: "transparent" }}
                                        src="/images/linkedin.svg"
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                /* Footer animation styles */
                .footer-container {
                    position: relative !important;
                    width: fit-content !important;
                    overflow: hidden !important;
                }
                
                .footer-animated-content {
                    opacity: 0 !important;
                    transform: translateY(30px) !important;
                    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                                transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                
                /* Revealed state */
                .footer-container.revealed .footer-animated-content,
                .footer-animated-content.revealed {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
                
                /* Stagger animations for better visual effect */
                .Footer_copyrightWrapper__9VI0F .footer-container:nth-child(1) .footer-animated-content {
                    transition-delay: 0s;
                }
                
                .Footer_copyrightWrapper__9VI0F .footer-container:nth-child(2) .footer-animated-content {
                    transition-delay: 0.1s;
                }
                
                .Footer_copyrightWrapper__9VI0F .footer-container:nth-child(3) .footer-animated-content {
                    transition-delay: 0.2s;
                }
                
                /* Company section stagger */
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(1) .footer-container:nth-child(1) .footer-animated-content {
                    transition-delay: 0s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(1) .Footer_footerNavs__uGTx7 .footer-container:nth-child(1) .footer-animated-content {
                    transition-delay: 0.1s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(1) .Footer_footerNavs__uGTx7 .footer-container:nth-child(2) .footer-animated-content {
                    transition-delay: 0.15s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(1) .Footer_footerNavs__uGTx7 .footer-container:nth-child(3) .footer-animated-content {
                    transition-delay: 0.2s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(1) .Footer_footerNavs__uGTx7 .footer-container:nth-child(4) .footer-animated-content {
                    transition-delay: 0.25s;
                }
                
                /* Services section stagger */
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(2) .footer-container:nth-child(1) .footer-animated-content {
                    transition-delay: 0.05s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(2) .Footer_footerNavs__uGTx7 .footer-container:nth-child(1) .footer-animated-content {
                    transition-delay: 0.1s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(2) .Footer_footerNavs__uGTx7 .footer-container:nth-child(2) .footer-animated-content {
                    transition-delay: 0.15s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(2) .Footer_footerNavs__uGTx7 .footer-container:nth-child(3) .footer-animated-content {
                    transition-delay: 0.2s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(2) .Footer_footerNavs__uGTx7 .footer-container:nth-child(4) .footer-animated-content {
                    transition-delay: 0.25s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(2) .Footer_footerNavs__uGTx7 .footer-container:nth-child(5) .footer-animated-content {
                    transition-delay: 0.3s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(2) .Footer_footerNavs__uGTx7 .footer-container:nth-child(6) .footer-animated-content {
                    transition-delay: 0.35s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(2) .Footer_footerNavs__uGTx7 .footer-container:nth-child(7) .footer-animated-content {
                    transition-delay: 0.4s;
                }
                
                /* Contact section stagger */
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(3) .footer-container:nth-child(1) .footer-animated-content {
                    transition-delay: 0.1s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(3) .Footer_footerNavs__uGTx7 .footer-container:nth-child(1) .footer-animated-content {
                    transition-delay: 0.15s;
                }
                
                .Footer_footerNavsWrapperInner__rU8OM:nth-child(3) .Footer_footerNavs__uGTx7 .footer-container:nth-child(2) .footer-animated-content {
                    transition-delay: 0.2s;
                }
                
                /* Social icons stagger */
                .Footer_socialIconsMobile__8Wjb4 .footer-container:nth-child(1) .footer-animated-content {
                    transition-delay: 0.25s;
                }
                
                .Footer_socialIconsMobile__8Wjb4 .footer-container:nth-child(2) .footer-animated-content {
                    transition-delay: 0.3s;
                }
                
                .Footer_socialIcons__fF_Oa .footer-container:nth-child(1) .footer-animated-content {
                    transition-delay: 0.25s;
                }
                
                .Footer_socialIcons__fF_Oa .footer-container:nth-child(2) .footer-animated-content {
                    transition-delay: 0.3s;
                }
                
                /* Mobile responsive */
                @media (max-width: 768px) {
                    .footer-container {
                        width: 100% !important;
                    }
                    
                    .footer-animated-content {
                        transform: translateY(20px) !important;
                        transition-duration: 0.6s !important;
                    }
                    
                    /* Reduce delays on mobile for faster animation */
                    * {
                        transition-delay: 0.05s !important;
                    }
                }
            `}</style>

            {/* Fallback JavaScript for browsers without IntersectionObserver */}
            <script dangerouslySetInnerHTML={{
                __html: `
                (function() {
                    // Function to reveal footer elements
                    function revealFooterElements() {
                        document.querySelectorAll('.footer-container').forEach((container, index) => {
                            setTimeout(() => {
                                container.classList.add('revealed');
                                const content = container.querySelector('.footer-animated-content');
                                if (content) content.classList.add('revealed');
                            }, index * 50);
                        });
                    }
                    
                    if (!('IntersectionObserver' in window)) {
                        // Fallback for older browsers - reveal all immediately
                        setTimeout(revealFooterElements, 300);
                        return;
                    }
                    
                    // Use IntersectionObserver for modern browsers
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('revealed');
                                const content = entry.target.querySelector('.footer-animated-content');
                                if (content) content.classList.add('revealed');
                            }
                        });
                    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
                    
                    document.querySelectorAll('.footer-container').forEach(container => {
                        observer.observe(container);
                    });
                })();
                `
            }} />
        </footer>
    );
}