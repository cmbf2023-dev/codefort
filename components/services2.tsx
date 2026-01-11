"use client";

import { useEffect, useRef, useState } from 'react';
import Link from "next/link"

export function Services() {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleServices, setVisibleServices] = useState<boolean[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleServices(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
              observer.unobserve(ref);
            }
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
          }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Initialize visibleServices array with false values
  useEffect(() => {
    setVisibleServices(new Array(14).fill(false)); // 7 mobile + 7 desktop = 14 total services
  }, []);

  const setServiceRef = (index: number) => (el: HTMLDivElement | null) => {
    serviceRefs.current[index] = el;
  };

  return (
    <section className="Services_services__J7yh8">
      <div className="Services_servicesHeader__mJBeC">
        <div style={{position: "relative", width: "fit-content", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <h3 className="Services_sectionTitle__QEFIE">
              Services we offer<span
                className="Services_sectionTitle__QEFIE Services_dot__g8hLM"
                >.</span
              >
            </h3>
          </div>
          <div
            style={{
              position: "absolute",
              inset: "100% 0px 4px",
              zIndex: 20,
              background: "rgb(59, 133, 183)"
            }}
          ></div>
        </div>
        <div style={{position: "relative", width: "fit-content", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <p className="Services_sectionBody__0Yu7N">
              End-to-end solutions for your business
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              inset: "100% 0px 4px",
              zIndex: 20,
              background: "rgb(59, 133, 183)",
            }}
          ></div>
        </div>
      </div>
      <div className="Services_servicesMobile__WlkMM">
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(0)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-1-big.webp, /coded/service-1-big.webp 2x"
                src="/coded/service-1-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[0] ? 'animate-slide-up' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-1.webp, /coded/service-1.webp"
                  src="/coded/service-1.webp"
                />
                <h3 className="Service_title__HxlBT">Custom Software Development</h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#b25bf6"}}
                    ></div>
                    <p className="Service_point__02oaI">Website development</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#b25bf6"}}
                    ></div>
                    <p className="Service_point__02oaI">Web app development</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#b25bf6"}}
                    ></div>
                    <p className="Service_point__02oaI">Mobile app development</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/software-development">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(1)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-2-big.webp, /coded/service-2-big.webp 2x"
                src="/coded/service-2-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[1] ? 'animate-slide-up' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-2.webp, /coded/service-2.webp"
                  src="/coded/service-2.webp"
                />
                <h3 className="Service_title__HxlBT">Blockchain Development</h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#fbb939"}}
                    ></div>
                    <p className="Service_point__02oaI">Custom blockchain solutions</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#fbb939"}}
                    ></div>
                    <p className="Service_point__02oaI">Smart contracts</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#fbb939"}}
                    ></div>
                    <p className="Service_point__02oaI">Cryptocurrency integration</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/blockchain">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(2)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-3-big.webp, /coded/service-3-big.webp 2x"
                src="/coded/service-3-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[2] ? 'animate-slide-up' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-3.webp, /coded/service-3.webp"
                  src="/coded/service-3.webp"
                />
                <h3 className="Service_title__HxlBT">
                  User Research &amp; Product Design
                </h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#f6655b"}}
                    ></div>
                    <p className="Service_point__02oaI">User-centered design</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#f6655b"}}
                    ></div>
                    <p className="Service_point__02oaI">Prototyping and wireframing</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#f6655b"}}
                    ></div>
                    <p className="Service_point__02oaI">Usability testing</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/product-design">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(3)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-4-big.webp, /coded/service-4-big.webp 2x"
                src="/coded/service-4-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[3] ? 'animate-slide-up' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-4.webp, /coded/service-4.webp"
                  src="/coded/service-4.webp"
                />
                <h3 className="Service_title__HxlBT">
                  AI &amp; Machine Learning Development
                </h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#4b5e71"}}
                    ></div>
                    <p className="Service_point__02oaI">Predictive analytics</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#4b5e71"}}
                    ></div>
                    <p className="Service_point__02oaI">Natural language processing</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#4b5e71"}}
                    ></div>
                    <p className="Service_point__02oaI">Computer vision</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/ai-and-ml">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(4)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-5-big.webp, /coded/service-5-big.webp 2x"
                src="/coded/service-5-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[4] ? 'animate-slide-up' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-5.webp, /coded/service-5.webp"
                  src="/coded/service-5.webp"
                />
                <h3 className="Service_title__HxlBT">
                  Outsourcing &amp; Recruitment Services
                </h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#5b87f6"}}
                    ></div>
                    <p className="Service_point__02oaI">Dedicated engineering teams</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#5b87f6"}}
                    ></div>
                    <p className="Service_point__02oaI">Short-term project support</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#5b87f6"}}
                    ></div>
                    <p className="Service_point__02oaI">Managed recruitment services</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/outsourcing">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(5)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-6-big.webp, /coded/service-6-big.webp 2x"
                src="/coded/service-6-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[5] ? 'animate-slide-up' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-6.webp, /coded/service-6.webp"
                  src="/coded/service-6.webp"
                />
                <h3 className="Service_title__HxlBT">
                  Software Maintenance &amp; Support
                </h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#05c948"}}
                    ></div>
                    <p className="Service_point__02oaI">Bug fixes and updates</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#05c948"}}
                    ></div>
                    <p className="Service_point__02oaI">Performance optimization</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#05c948"}}
                    ></div>
                    <p className="Service_point__02oaI">Security enhancements</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/maintenance">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(6)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-7-big.webp, /coded/service-7-big.webp 2x"
                src="/coded/service-7-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[6] ? 'animate-slide-up' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-7.webp, /coded/service-7.webp"
                  src="/coded/service-7.webp"
                />
                <h3 className="Service_title__HxlBT">
                  Startup &amp; Small Business Solutions
                </h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#39aafb"}}
                    ></div>
                    <p className="Service_point__02oaI">Go-to-market strategy</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#39aafb"}}
                    ></div>
                    <p className="Service_point__02oaI">Market validation</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#39aafb"}}
                    ></div>
                    <p className="Service_point__02oaI">
                      Marketing advice &amp; strategy
                    </p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="#startup">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Services_serviceDesktop__6_pcC">
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(7)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-1-big.webp, /coded/service-1-big.webp 2x"
                src="/coded/service-1-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[7] ? 'animate-slide-left' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-1.webp, /coded/service-1.webp"
                  src="/coded/service-1.webp"
                />
                <h3 className="Service_title__HxlBT">Custom Software Development</h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#b25bf6"}}
                    ></div>
                    <p className="Service_point__02oaI">Website development</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#b25bf6"}}
                    ></div>
                    <p className="Service_point__02oaI">Web app development</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#b25bf6"}}
                    ></div>
                    <p className="Service_point__02oaI">Mobile app development</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/software-development">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Services_serviceDesktop__6_pcC">
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(8)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-2-big.webp, /coded/service-2-big.webp 2x"
                src="/coded/service-2-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[8] ? 'animate-slide-left' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-2.webp, /coded/service-2.webp"
                  src="/coded/service-2.webp"
                />
                <h3 className="Service_title__HxlBT">Blockchain Development</h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#fbb939"}}
                    ></div>
                    <p className="Service_point__02oaI">Custom blockchain solutions</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#fbb939"}}
                    ></div>
                    <p className="Service_point__02oaI">Smart contracts</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#fbb939"}}
                    ></div>
                    <p className="Service_point__02oaI">Cryptocurrency integration</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/blockchain">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Services_serviceDesktop__6_pcC">
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(9)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-3-big.webp, /coded/service-3-big.webp 2x"
                src="/coded/service-3-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[9] ? 'animate-slide-left' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-3.webp, /coded/service-3.webp"
                  src="/coded/service-3.webp"
                />
                <h3 className="Service_title__HxlBT">
                  User Research &amp; Product Design
                </h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#f6655b"}}
                    ></div>
                    <p className="Service_point__02oaI">User-centered design</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#f6655b"}}
                    ></div>
                    <p className="Service_point__02oaI">Prototyping and wireframing</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#f6655b"}}
                    ></div>
                    <p className="Service_point__02oaI">Usability testing</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/product-design">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Services_serviceDesktop__6_pcC">
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(10)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-4-big.webp, /coded/service-4-big.webp 2x"
                src="/coded/service-4-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[10] ? 'animate-slide-left' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-4.webp, /coded/service-4.webp"
                  src="/coded/service-4.webp"
                />
                <h3 className="Service_title__HxlBT">
                  AI &amp; Machine Learning Development
                </h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#4b5e71"}}
                    ></div>
                    <p className="Service_point__02oaI">Predictive analytics</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#4b5e71"}}
                    ></div>
                    <p className="Service_point__02oaI">Natural language processing</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#4b5e71"}}
                    ></div>
                    <p className="Service_point__02oaI">Computer vision</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/ai-and-ml">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Services_serviceDesktop__6_pcC">
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(11)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-5-big.webp, /coded/service-5-big.webp 2x"
                src="/coded/service-5-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[11] ? 'animate-slide-left' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-5.webp, /coded/service-5.webp"
                  src="/coded/service-5.webp"
                />
                <h3 className="Service_title__HxlBT">
                  Outsourcing &amp; Recruitment Services
                </h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#5b87f6"}}
                    ></div>
                    <p className="Service_point__02oaI">Dedicated engineering teams</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#5b87f6"}}
                    ></div>
                    <p className="Service_point__02oaI">Short-term project support</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#5b87f6"}}
                    ></div>
                    <p className="Service_point__02oaI">Managed recruitment services</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/outsourcing">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Services_serviceDesktop__6_pcC">
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(12)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-6-big.webp, /coded/service-6-big.webp 2x"
                src="/coded/service-6-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[12] ? 'animate-slide-left' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-6.webp, /coded/service-6.webp"
                  src="/coded/service-6.webp"
                />
                <h3 className="Service_title__HxlBT">
                  Software Maintenance &amp; Support
                </h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#05c948"}}
                    ></div>
                    <p className="Service_point__02oaI">Bug fixes and updates</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#05c948"}}
                    ></div>
                    <p className="Service_point__02oaI">Performance optimization</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#05c948"}}
                    ></div>
                    <p className="Service_point__02oaI">Security enhancements</p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="/maintenance">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Services_serviceDesktop__6_pcC">
        <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
          <div style={{height: "100%", opacity: 1, transform: "none"}}>
            <div 
              ref={setServiceRef(13)}
              className="Service_wrapper__mFGbY" 
              style={{backgroundColor: "#f0f9ff"}}
            >
              <img
                alt="service icon big"
                loading="lazy"
                width="156"
                height="145"
                decoding="async"
                data-nimg="1"
                className="Service_bigIcon__XIsmX"
                style={{color: "transparent"}}
                srcSet="/coded/service-7-big.webp, /coded/service-7-big.webp 2x"
                src="/coded/service-7-big.webp"
              />
              <div className={`Service_content__SXgPh ${visibleServices[13] ? 'animate-slide-left' : 'opacity-0'}`}>
                <img
                  alt="service icon"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/service-7.webp, /coded/service-7.webp"
                  src="/coded/service-7.webp"
                />
                <h3 className="Service_title__HxlBT">
                  Startup &amp; Small Business Solutions
                </h3>
                <div className="Service_pointsWraper__g1ekn">
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#39aafb"}}
                    ></div>
                    <p className="Service_point__02oaI">Go-to-market strategy</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#39aafb"}}
                    ></div>
                    <p className="Service_point__02oaI">Market validation</p>
                  </div>
                  <div className="Service_pointWraper__UyI4b">
                    <div
                      className="Service_dot__TG1eh"
                      style={{backgroundColor: "#39aafb"}}
                    ></div>
                    <p className="Service_point__02oaI">
                      Marketing advice &amp; strategy
                    </p>
                  </div>
                </div>
              </div>
              <Link className="Service_button__o8Hle" href="#startup">
                <p className="Service_buttonText__gCaNX">Learn more</p>
                <img
                  alt="learn more icon"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}