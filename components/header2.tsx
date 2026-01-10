"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import type React from "react"
import Typed from "typed.js"
import { Particles, initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Container, Engine } from "@tsparticles/engine"
import Link from "next/link"

export function Header({ page, image = "/coded/hero-image.webp" }: { page: string, image?: string }) {
  let typedText: string[] = []
  let blockText = "Blockchain Development";
  let blockColor = "rgb(251, 185, 57)";
  let blockBack  = "rgba(251, 185, 57, 0.1)";
  
  switch (page) {
    case "home":
      typedText = [
        "Transform your business ideas with CodeFort solutions",
        "Achieve your software development Dreams!",
        "Innovate and grow through advanced web solutions.",
      ]
      break
    case "about-us":
      typedText = ["We transform businesses with technology."]
      break
    case "our-process":
      typedText = ["Transforming Ideas into Digital Reality"]
      break
    case "software-development":
      typedText = ["Bring your ideas into reality with cutting-edge solutions"]
      blockText = "Custom Software Development";
      blockBack = "rgba(178, 91, 246, 0.1)"
      blockColor = "rgb(178, 91, 246)"
      break
    case "blockchain":
      typedText = ["Unleash the potential of Blockchain with our expertise"]
      break
    case "ai-and-ml":
      typedText = ["Supercharge your business with intelligent and data-driven solutions"]
      blockText = "AI & Machine Learning Development";
      blockBack = "rgba(75, 94, 113, 0.2)"
      blockColor = "rgb(255, 255, 255)"
      break
    case "product-design":
      typedText = ["Wow your users with the best product experience"]
      blockText = "User Research and Product Design";
      blockBack = "rgba(246, 100, 91, 0.1)"
      blockColor = "rgb(246, 100, 91)"
      break
    case "outsourcing":
      typedText = ["Achieve Remarkable Success with a Strategic Partnership"]
      blockText = "Outsourcing & Recruitment Services";
      blockBack = "rgba(91, 135, 246, 0.1)"
      blockColor = "rgb(91, 135, 246)"
      break
    case "maintenance":
      typedText = ["Boost your business with seamless software performance."]
      blockText = "Software Maintenance & Support";
      blockBack = "rgba(5, 201, 72, 0.1)"
      blockColor = "rgb(5, 201, 72)"
      break
    case "startup-solutions":
      typedText = ["Build your dream with our budget-friendly solutions"]
      blockText = "Startup & Small Business Solutions";
      blockBack = "rgba(57, 170, 251, 0.1)"
      blockColor = "rgb(57, 170, 251)"
      break
  }

  const typedElement = useRef(null)
  const typedInstance = useRef<Typed | null>(null)
  const [particlesInit, setParticlesInit] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [isOverServices, setIsOverServices] = useState(false)
  const [isOverDropdown, setIsOverDropdown] = useState(false)
  const servicesRef = useRef<HTMLParagraphElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => {
      setParticlesInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container) => {
    console.log("Particles loaded", container)
  }

  useEffect(() => {
    if (!typedElement.current || typedText.length === 0) return

    if (typedInstance.current) {
      typedInstance.current.destroy()
    }

    typedInstance.current = new Typed(typedElement.current, {
      strings: typedText,
      typeSpeed: 90,
      backSpeed: 70,
      backDelay: 2000,
      startDelay: 300,
      loop: typedText.length > 1,
      showCursor: false,
      bindInputFocusEvents: false,
      contentType: "html",
    })

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy()
      }
    }
  }, [page])

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        servicesRef.current && 
        !servicesRef.current.contains(event.target as Node)
      ) {
        setShowServices(false)
        setIsOverServices(false)
        setIsOverDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Auto-close when mouse leaves both elements
  useEffect(() => {
    if (!isOverServices && !isOverDropdown && showServices) {
      const timer = setTimeout(() => {
        setShowServices(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOverServices, isOverDropdown, showServices])

  const handleServicesMouseEnter = () => {
    setIsOverServices(true)
    setShowServices(true)
  }

  const handleServicesMouseLeave = () => {
    setIsOverServices(false)
  }

  const handleDropdownMouseEnter = () => {
    setIsOverDropdown(true)
    setShowServices(true)
  }

  const handleDropdownMouseLeave = () => {
    setIsOverDropdown(false)
  }

  return (
    <div className="Hero_container__Ie7sQ">
      {/* TSParticles Component */}
      {particlesInit && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="tsparticles-container"
          options={{
            fullScreen: {
              enable: false,
              zIndex: 0,
            },
            particles: {
              number: {
                value: 1500,
                density: {
                  enable: true,
                },
              },
              color: {
                value: ["#ffffff", "#e0e0e0", "#c0c0c0", "#a0a0a0"],
              },
              shape: {
                type: "square",
              },
              opacity: {
                value: 0.5,
                animation: {
                  enable: true,
                  speed: 0.5,
                  sync: false,
                },
              },
              size: {
                value: 4,
                animation: {
                  enable: false,
                  speed: 2,
                  sync: false,
                },
              },
              links: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "out",
                },
                attract: {
                  enable: false,
                },
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.3,
                  },
                },
                push: {
                  quantity: 4,
                },
              },
            },
            detectRetina: true,
            background: {
              color: "transparent",
            },
          }}
        />
      )}

      <div className="Header_headerWrapper__0NhQv">
        <header className="Header_header__z1DZP false">
          <Link href="/">
            <img
              alt="logo"
              loading="lazy"
              width="178.61"
              height="40"
              decoding="async"
              data-nimg="1"
              className="Header_logoFull__32g1a"
              style={{ color: "transparent" }}
              srcSet="/coded/logo-full.png, /coded/logo-full.png 2x"
              src="/coded/logo-full.png"
            />
            <img
              alt="logo"
              loading="lazy"
              width="142.89"
              height="32"
              decoding="async"
              data-nimg="1"
              className="Header_logo__nMWzR"
              style={{ color: "transparent" }}
              srcSet="/coded/logo-full.png, /coded/logo-full.png 2x"
              src="/coded/logo-full.png"
            />
          </Link>
          
          <nav className="Header_links__7__VU" style={{ position: 'relative' }}>
            {/* Services Dropdown */}
            {showServices && (
              <div
                ref={dropdownRef}
                className="Header_servicesNavWrapperOuter__eBYPR"
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '0',
                  zIndex: 1000,
                  background: 'transparent',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  width:"0%",
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'block',
                  opacity: 1,
                  visibility: 'visible',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="Header_servicesNavWrapper__Fm7SW">
                  <h3 className="Header_servicesNavHeader__K2Q4v" style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 600 }}>
                    Services we offer<span className="Header_dot__5qYda" style={{ color: '#007bff' }}>.</span>
                  </h3>
                  <div className="Header_servicesNav__vVlPe" >
                    <Link className="Header_servicesLink__fHPea" href="/software-development" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="Header_servicesLinkInner__ixia5" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '8px', transition: 'background 0.2s' }}>
                        <img
                          alt="nav image"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="/coded/service-1-icon.webp, /coded/service-1-icon.webp 2x"
                          src="/coded/service-1-icon.webp"
                        />
                        <p className="Header_serviceLinkText__EZRlM" style={{ margin: 0, flex: 1, fontSize: '14px' }}>
                          Custom Software Development
                        </p>
                        <img
                          alt="nav icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="Header_servicesLinkArrow__w0Ox_"
                          style={{ color: "transparent", opacity: 0.6 }}
                          srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                          src="/coded/learn-more.png"
                        />
                      </div>
                    </Link>
                    
                    <Link className="Header_servicesLink__fHPea" href="/blockchain" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="Header_servicesLinkInner__ixia5" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '8px', transition: 'background 0.2s' }}>
                        <img
                          alt="nav image"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="/coded/service-3-icon.webp, /coded/service-3-icon.webp 2x"
                          src="/coded/service-3-icon.webp"
                        />
                        <p className="Header_serviceLinkText__EZRlM" style={{ margin: 0, flex: 1, fontSize: '14px' }}>
                          Blockchain Development
                        </p>
                        <img
                          alt="nav icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="Header_servicesLinkArrow__w0Ox_"
                          style={{ color: "transparent", opacity: 0.6 }}
                          srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                          src="/coded/learn-more.png"
                        />
                      </div>
                    </Link>
                    
                    <Link className="Header_servicesLink__fHPea" href="/product-design" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="Header_servicesLinkInner__ixia5" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '8px', transition: 'background 0.2s' }}>
                        <img
                          alt="nav image"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="/coded/service-2-icon.webp, /coded/service-2-icon.webp 2x"
                          src="/coded/service-2-icon.webp"
                        />
                        <p className="Header_serviceLinkText__EZRlM" style={{ margin: 0, flex: 1, fontSize: '14px' }}>
                          User Research &amp; Product Design
                        </p>
                        <img
                          alt="nav icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="Header_servicesLinkArrow__w0Ox_"
                          style={{ color: "transparent", opacity: 0.6 }}
                          srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                          src="/coded/learn-more.png"
                        />
                      </div>
                    </Link>
                    
                    <Link className="Header_servicesLink__fHPea" href="/ai-and-ml" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="Header_servicesLinkInner__ixia5" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '8px', transition: 'background 0.2s' }}>
                        <img
                          alt="nav image"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="/coded/service-4-icon.webp, /coded/service-4-icon.webp 2x"
                          src="/coded/service-4-icon.webp"
                        />
                        <p className="Header_serviceLinkText__EZRlM" style={{ margin: 0, flex: 1, fontSize: '14px' }}>
                          AI &amp; ML Development
                        </p>
                        <img
                          alt="nav icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="Header_servicesLinkArrow__w0Ox_"
                          style={{ color: "transparent", opacity: 0.6 }}
                          srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                          src="/coded/learn-more.png"
                        />
                      </div>
                    </Link>
                    
                    <Link className="Header_servicesLink__fHPea" href="/outsourcing" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="Header_servicesLinkInner__ixia5" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '8px', transition: 'background 0.2s' }}>
                        <img
                          alt="nav image"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="/coded/service-5-icon.webp, /coded/service-5-icon.webp 2x"
                          src="/coded/service-5-icon.webp"
                        />
                        <p className="Header_serviceLinkText__EZRlM" style={{ margin: 0, flex: 1, fontSize: '14px' }}>
                          Outsourcing &amp; Recruitment Services
                        </p>
                        <img
                          alt="nav icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="Header_servicesLinkArrow__w0Ox_"
                          style={{ color: "transparent", opacity: 0.6 }}
                          srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                          src="/coded/learn-more.png"
                        />
                      </div>
                    </Link>
                    
                    <Link className="Header_servicesLink__fHPea" href="/maintenance" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="Header_servicesLinkInner__ixia5" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '8px', transition: 'background 0.2s' }}>
                        <img
                          alt="nav image"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="/coded/service-6-icon.webp, /coded/service-6-icon.webp 2x"
                          src="/coded/service-6-icon.webp"
                        />
                        <p className="Header_serviceLinkText__EZRlM" style={{ margin: 0, flex: 1, fontSize: '14px' }}>
                          Software Maintenance &amp; Support
                        </p>
                        <img
                          alt="nav icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="Header_servicesLinkArrow__w0Ox_"
                          style={{ color: "transparent", opacity: 0.6 }}
                          srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                          src="/coded/learn-more.png"
                        />
                      </div>
                    </Link>
                    
                    <Link className="Header_servicesLink__fHPea" href="/startup" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="Header_servicesLinkInner__ixia5" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '8px', transition: 'background 0.2s' }}>
                        <img
                          alt="nav image"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="/coded/service-7-icon.webp, /coded/service-7-icon.webp 2x"
                          src="/coded/service-7-icon.webp"
                        />
                        <p className="Header_serviceLinkText__EZRlM" style={{ margin: 0, flex: 1, fontSize: '14px' }}>
                          Startup &amp; Small Business Solutions
                        </p>
                        <img
                          alt="nav icon"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="Header_servicesLinkArrow__w0Ox_"
                          style={{ color: "transparent", opacity: 0.6 }}
                          srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                          src="/coded/learn-more.png"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            <Link className={`Header_link__OJ7mG ${page == "home" ? "Header_linkActive__1Wk7s" :""}`} href="/">Home</Link>
            <Link className={`Header_link__OJ7mG ${page == "about-us" ? "Header_linkActive__1Wk7s" :""}`} href="/about-us">About us</Link>
            <Link className={`Header_link__OJ7mG ${page == "our-process" ? "Header_linkActive__1Wk7s" :""}`} href="/our-process">Our process</Link>
            <Link className={`Header_link__OJ7mG ${page == "pay-as-you-build" ? "Header_linkActive__1Wk7s" :""}`} href="/pay-as-you-build">
              Pay As you build<span className="Header_newTag__5CHHH">NEW</span>
            </Link>
            
            {/* Services Text */}
            <p
              ref={servicesRef}
              className="Header_link__OJ7mG Header_linkMulti__uOmVn"
              style={{
                cursor: 'pointer',
                position: 'relative',
                margin: 0,
                padding: '0',
              }}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              Services
            </p>
          </nav>
          
          <Link className="Header_headerButton__YuNwT" href="#contact">Contact us</Link>
          <img
            alt="menu icon"
            loading="lazy"
            width="40"
            height="40"
            decoding="async"
            data-nimg="1"
            className="Header_menuOpen__u0_H5"
            style={{ color: "transparent" }}
            src="/images/menu.svg"
          />
        </header>
        
        {/* Mobile Navigation - Keep original */}
        <nav className="Header_mobileNav__nlBu7">
          <div className="Header_mobileTop__Gvy_h">
            <Link href="/">
              <img
                alt="logo"
                loading="lazy"
                width="142.89"
                height="32"
                decoding="async"
                data-nimg="1"
                className="Header_logo__nMWzR"
                style={{ color: "transparent" }}
                srcSet="/coded/logo-full.png, /coded/logo-full.png 2x"
                src="/coded/logo-full.png"
              />
            </Link>
            <img
              alt="menu icon"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/images/close.svg"
            />
          </div>
          <div className="Header_navMobileWrapper__BWmve">
            <Link className="Header_linkMobile__sGuGe" href="/">
              <img
                alt="icon"
                loading="lazy"
                width="19"
                height="19"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/coded/right.png, /coded/right.png 2x"
                src="/coded/right.png"
              />
              <p className="Header_linkMobileText__6k8yi">Home</p>
            </Link>
            <Link className="Header_linkMobile__sGuGe" href="/about-us">
              <img
                alt="icon"
                loading="lazy"
                width="19"
                height="19"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/coded/right.png, /coded/right.png 2x"
                src="/coded/right.png"
              />
              <p className="Header_linkMobileText__6k8yi">About us</p>
            </Link>
            <Link className="Header_linkMobile__sGuGe" href="/our-process">
              <img
                alt="icon"
                loading="lazy"
                width="19"
                height="19"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/coded/right.png, /coded/right.png 2x"
                src="/coded/right.png"
              />
              <p className="Header_linkMobileText__6k8yi">Our process</p>
            </Link>
            <Link className="Header_linkMobile__sGuGe" href="/pay-as-you-build">
              <img
                alt="icon"
                loading="lazy"
                width="19"
                height="19"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/coded/right.png, /coded/right.png 2x"
                src="/coded/right.png"
              />
              <p className="Header_linkMobileText__6k8yi">Pay As you build</p>
              <span className="Header_newTagMobile__nrz9E">NEW</span>
            </Link>
            <div>
              <h2 className="Header_mobileServiceHeader__4Rg21">Services</h2>
              <div className="Header_innerNavs__R3eNy">
                <Link className="Header_linkMobile__sGuGe" href="/software-development">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    Custom Software Development
                  </p>
                </Link>
                <Link className="Header_linkMobile__sGuGe" href="/blockchain">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    Blockchain Development
                  </p>
                </Link>
                <Link className="Header_linkMobile__sGuGe" href="/product-design">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    User Research &amp; Product Design
                  </p>
                </Link>
                <Link className="Header_linkMobile__sGuGe" href="/ai-and-ml">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    AI &amp; ML Development
                  </p>
                </Link>
                <Link className="Header_linkMobile__sGuGe" href="/outsourcing">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    Outsourcing &amp; Recruitment Services
                  </p>
                </Link>
                <Link className="Header_linkMobile__sGuGe" href="/maintenance">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    Software Maintenance &amp; Support
                  </p>
                </Link>
                <Link className="Header_linkMobile__sGuGe" href="/startup">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    Startup &amp; Small Business Solutions
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <Link className="Header_headerButtonMobile__EXRpk" href="#contact">Contact us</Link>
        </nav>
      </div>
      
      <section className="Hero_heroWrapper__HHgQu">
        <div className="Hero_heroContent__Ck9wY">
        {!["home", "about-us", "our-process"].includes(page) && (
          <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}><div style={{ height: "100%", opacity: 1, transform: "none" }}><p className="Hero_serviceType__nwU7a" style={{background: blockBack, color: blockColor}}>{blockText}</p></div></div>
        )}

          <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
            <div style={{ height: "100%", opacity: 1, transform: "none" }}>
              <h3 className="Hero_textCenter__uoexa">
                <span
                  className="Hero_heroTitle__IbUgH false"
                  ref={typedElement}
                  style={
                    {
                      "--typed-cursor-color": "currentColor",
                      display: "inline-block",
                    } as React.CSSProperties & { "--typed-cursor-color": string }
                  }
                >
                  {/* typed.js populates this element */}
                </span>
              </h3>
            </div>
          </div>
          {page == "home" && (
            <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
              <div style={{ height: "100%", opacity: 1, transform: "none" }}>
                <p className="Hero_heroBody__D7tPo">
                  Harness the power of scalable software solutions to elevate your business's performance and
                  profitability.
                </p>
              </div>
            </div>
          )}
          {page == "our-process" && (
            <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
              <div style={{ height: "100%", opacity: 1, transform: "none" }}>
                <p className="Hero_heroBody__D7tPo">
                  We harness the boundless power of technology and innovation and elevate your business performance. Your Vision brought to life by Our Expertise.
                </p>
              </div>
            </div>
          )}
          {page != "about-us" && (<div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
            <div style={{ height: "100%", opacity: 1, transform: "none" }}>
              <a
                className="Hero_heroButton__BDVHi"
                target="_blank"
                rel="noopener noreferrer"
                href="https://cal.com/codeforttech/30min"
              >
                Book a call with us
              </a>
            </div>
          </div>)}
        </div>
      </section>
      <div className="Hero_heroImageWrapper__LhUtw">
        <img
          alt="hero image"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="Hero_heroImage__AJe10"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: "transparent",
          }}
          sizes="100vw"
          src={image}
        />
      </div>
    </div>
  )
}