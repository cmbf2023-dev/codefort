"use client"

import { useState, useRef, useEffect } from 'react';

export function Hero() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const elementRefs = useRef<Map<string, HTMLElement | null>>(new Map());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Create observers for each element
    elementRefs.current.forEach((element, key) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              newSet.add(key);
              return newSet;
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

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Helper function to check if an element is visible
  const isElementVisible = (key: string) => visibleElements.has(key);

  return (
    <div className="page_heroWrapper__O5M9U">
      <div className="Header_headerWrapper__0NhQv">
        <header className="Header_header__z1DZP false">
          <a href="/">
            <img 
              alt="logo" 
              loading="lazy" 
              width="178.61" 
              height="40" 
              decoding="async" 
              data-nimg="1" 
              className="Header_logoFull__32g1a" 
              style={{ color: "transparent" }} 
              srcSet="/coded/logo-full.webp, /coded/logo-full.webp 2x" 
              src="/coded/logo-full.webp"
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
              srcSet="/coded/logo-full.webp, /coded/logo-full.webp 2x" 
              src="/coded/logo-full.webp"
            />
          </a>
          <nav className="Header_links__7__VU">
            <div className="Header_servicesNavWrapperOuter__eBYPR">
              <div className="Header_servicesNavWrapper__Fm7SW">
                <h3 className="Header_servicesNavHeader__K2Q4v">
                  Services we offer
                  <span className="Header_servicesNavHeader__K2Q4v Header_dot__5qYda">.</span>
                </h3>
                <div className="Header_servicesNav__vVlPe">
                  {[
                    { href: "/software-development", icon: "/coded/service-1-icon.webp", text: "Custom Software Development" },
                    { href: "/blockchain", icon: "/coded/service-3-icon.webp", text: "Blockchain Development" },
                    { href: "/product-design", icon: "/coded/service-2-icon.webp", text: "User Research & Product Design" },
                    { href: "/ai-and-ml", icon: "/coded/service-4-icon.webp", text: "AI & ML Development" },
                    { href: "/outsourcing", icon: "/coded/service-5-icon.webp", text: "Outsourcing & Recruitment Services" },
                    { href: "/maintenance", icon: "/coded/service-6-icon.webp", text: "Software Maintenance & Support" },
                    { href: "#startup", icon: "/coded/service-7-icon.webp", text: "Startup & Small Business Solutions" }
                  ].map((service, index) => (
                    <a 
                      key={index} 
                      className="Header_servicesLink__fHPea" 
                      href={service.href}
                      ref={el => elementRefs.current.set(`service-${index}`, el)}
                      style={{
                        opacity: isElementVisible(`service-${index}`) ? 1 : 0,
                        transform: isElementVisible(`service-${index}`) ? 'translateY(0)' : 'translateY(20px)',
                        transition: `opacity 0.6s ease-out ${0.1 * index}s, transform 0.6s ease-out ${0.1 * index}s`
                      }}
                    >
                      <div className="Header_servicesLinkInner__ixia5">
                        <img 
                          alt="nav image" 
                          loading="lazy" 
                          width="20" 
                          height="20" 
                          decoding="async" 
                          data-nimg="1" 
                          style={{ color: "transparent" }} 
                          srcSet={`${service.icon}, ${service.icon}`} 
                          src={service.icon}
                        />
                        <p className="Header_serviceLinkText__EZRlM">{service.text}</p>
                        <img 
                          alt="nav icon" 
                          loading="lazy" 
                          width="20" 
                          height="20" 
                          decoding="async" 
                          data-nimg="1" 
                          className="Header_servicesLinkArrow__w0Ox_" 
                          style={{ color: "transparent" }} 
                          srcSet="/coded/learn-more.webp, /coded/learn-more.webp" 
                          src="/coded/learn-more.webp"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {["Home", "About us", "Our process", "Pay As you build"].map((link, index) => (
              <a 
                key={index} 
                className="Header_link__OJ7mG" 
                href={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`}
                ref={el => elementRefs.current.set(`nav-${index}`, el)}
                style={{
                  opacity: isElementVisible(`nav-${index}`) ? 1 : 0,
                  transform: isElementVisible(`nav-${index}`) ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease-out ${0.1 * (index + 7)}s, transform 0.6s ease-out ${0.1 * (index + 7)}s`
                }}
              >
                {link}
                {link === "Pay As you build" && <span className="Header_newTag__5CHHH">NEW</span>}
              </a>
            ))}
            <p 
              className="Header_link__OJ7mG Header_linkMulti__uOmVn"
              ref={el => elementRefs.current.set('services-label', el)}
              style={{
                opacity: isElementVisible('services-label') ? 1 : 0,
                transform: isElementVisible('services-label') ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out 0.9s, transform 0.6s ease-out 0.9s'
              }}
            >
              Services
            </p>
          </nav>
          <a 
            className="Header_headerButton__YuNwT Header_headerButtonInvert__dTsph" 
            href="#contact"
            ref={el => elementRefs.current.set('contact-button', el)}
            style={{
              opacity: isElementVisible('contact-button') ? 1 : 0,
              transform: isElementVisible('contact-button') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out 1s, transform 0.6s ease-out 1s'
            }}
          >
            Contact us
          </a>
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
        <nav className="Header_mobileNav__nlBu7">
          <div className="Header_mobileTop__Gvy_h">
            <a href="/">
              <img 
                alt="logo" 
                loading="lazy" 
                width="142.89" 
                height="32" 
                decoding="async" 
                data-nimg="1" 
                className="Header_logo__nMWzR" 
                style={{ color: "transparent" }} 
                srcSet="/coded/logo-full.webp, /coded/logo-full.webp 2x" 
                src="/coded/logo-full.webp"
              />
            </a>
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
            {[
              { href: "/", text: "Home" },
              { href: "/about-us", text: "About us" },
              { href: "/our-process", text: "Our process" },
              { href: "/pay-as-you-build", text: "Pay As you build", hasNewTag: true }
            ].map((link, index) => (
              <a 
                key={index} 
                className="Header_linkMobile__sGuGe" 
                href={link.href}
                ref={el => elementRefs.current.set(`mobile-nav-${index}`, el)}
                style={{
                  opacity: isElementVisible(`mobile-nav-${index}`) ? 1 : 0,
                  transform: isElementVisible(`mobile-nav-${index}`) ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease-out ${0.1 * index}s, transform 0.6s ease-out ${0.1 * index}s`
                }}
              >
                <img 
                  alt="icon" 
                  loading="lazy" 
                  width="19" 
                  height="19" 
                  decoding="async" 
                  data-nimg="1" 
                  style={{ color: "transparent" }} 
                  srcSet="/coded/right.webp, /coded/right.webp" 
                  src="/coded/right.webp"
                />
                <p className="Header_linkMobileText__6k8yi">{link.text}</p>
                {link.hasNewTag && <span className="Header_newTagMobile__nrz9E">NEW</span>}
              </a>
            ))}
            <div>
              <h2 
                className="Header_mobileServiceHeader__4Rg21"
                ref={el => elementRefs.current.set('mobile-services-header', el)}
                style={{
                  opacity: isElementVisible('mobile-services-header') ? 1 : 0,
                  transform: isElementVisible('mobile-services-header') ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
                }}
              >
                Services
              </h2>
              <div className="Header_innerNavs__R3eNy">
                {[
                  "Custom Software Development",
                  "Blockchain Development",
                  "User Research & Product Design",
                  "AI & ML Development",
                  "Outsourcing & Recruitment Services",
                  "Software Maintenance & Support",
                  "Startup & Small Business Solutions"
                ].map((service, index) => (
                  <a 
                    key={index} 
                    className="Header_linkMobile__sGuGe" 
                    href={`/${service.toLowerCase().split(" ")[0]}`}
                    ref={el => elementRefs.current.set(`mobile-service-${index}`, el)}
                    style={{
                      opacity: isElementVisible(`mobile-service-${index}`) ? 1 : 0,
                      transform: isElementVisible(`mobile-service-${index}`) ? 'translateY(0)' : 'translateY(20px)',
                      transition: `opacity 0.6s ease-out ${0.5 + (0.1 * index)}s, transform 0.6s ease-out ${0.5 + (0.1 * index)}s`
                    }}
                  >
                    <img 
                      alt="icon" 
                      loading="lazy" 
                      width="19" 
                      height="19" 
                      decoding="async" 
                      data-nimg="1" 
                      style={{ color: "transparent" }} 
                      srcSet="/coded/right.webp, /coded/right.webp" 
                      src="/coded/right.webp"
                    />
                    <p className="Header_linkMobileText__6k8yi">{service}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a 
            className="Header_headerButtonMobile__EXRpk" 
            href="#contact"
            ref={el => elementRefs.current.set('mobile-contact-button', el)}
            style={{
              opacity: isElementVisible('mobile-contact-button') ? 1 : 0,
              transform: isElementVisible('mobile-contact-button') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out 1.2s, transform 0.6s ease-out 1.2s'
            }}
          >
            Contact us
          </a>
        </nav>
      </div>
      <div className="page_backgroundWrapper__mcFT3">
        <img 
          alt="Hero background showing abstract digital pattern" 
          fetchPriority="high" 
          decoding="async" 
          data-nimg="fill" 
          className="page_backgroundImage__AJK1g" 
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
          sizes="100vw" 
          srcSet="/coded/Fblur.2b61fabb.webp" 
          src="/coded/Fblur.2b61fabb.webp"
        />
        <div className="page_overlay__0UsNU"></div>
      </div>
      <section 
        className="ProductHero_section__1BgHW"
        ref={el => elementRefs.current.set('hero-section', el)}
        style={{
          opacity: isElementVisible('hero-section') ? 1 : 0,
          transform: isElementVisible('hero-section') ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
        }}
      >
        <div className="ProductHero_container__DYb0N">
          <div className="ProductHero_wrapper__ue_de">
            <div 
              className="ProductHero_heroContent__L_1n5"
              style={{ opacity: 1 }}
              ref={el => elementRefs.current.set('hero-content', el)}
            >
              <div 
                className="ProductHero_titleContainer__cuqns"
                style={{
                  opacity: isElementVisible('hero-content') ? 1 : 0,
                  transform: isElementVisible('hero-content') ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                }}
              >
                <h1 
                  className="ProductHero_title___bY2r"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Launch <span className="ProductHero_highlight__n8we9">Your Idea</span> Without
                </h1>
                <h1 
                  className="ProductHero_title___bY2r"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Breaking the Bank
                </h1>
              </div>
            </div>
          </div>
          <div 
            className="ProductHero_descriptionContainer__N8l2V"
            ref={el => elementRefs.current.set('description-container', el)}
            style={{
              opacity: isElementVisible('description-container') ? 1 : 0,
              transform: isElementVisible('description-container') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
            }}
          >
            <p className="ProductHero_subtitle__WLBGd">Skip the ₦10M Upfront Cost. Start From ₦300K/Month.</p>
            <p className="ProductHero_description__wssOk">
              Flexible software development for Websites • Mobile Apps • AI Agents • Enterprise Portals.
            </p>
          </div>
          <div 
            className="ProductHero_buttonContainer__lIh8Q"
            ref={el => elementRefs.current.set('button-container', el)}
            style={{
              opacity: isElementVisible('button-container') ? 1 : 0,
              transform: isElementVisible('button-container') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
            }}
          >
            <a target="_blank" rel="noopener noreferrer" href="https://cal.com/codeforttech/30min">
              <button className="ProductHero_primaryButton__HSdP1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1_4640_1657" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.4695 4.03008C19.6095 4.17108 19.6895 4.36208 19.6895 4.56008V8.39008C19.6895 8.58899 19.6104 8.77976 19.4698 8.92041C19.3291 9.06106 19.1384 9.14008 18.9395 9.14008C18.7405 9.14008 18.5498 9.06106 18.4091 8.92041C18.2685 8.77976 18.1895 8.58899 18.1895 8.39008V6.37008L15.0295 9.53008C14.9602 9.60168 14.8774 9.65878 14.7859 9.69804C14.6944 9.7373 14.596 9.75795 14.4964 9.75877C14.3968 9.75958 14.2981 9.74056 14.2059 9.70281C14.1138 9.66505 14.03 9.60932 13.9597 9.53887C13.8893 9.46842 13.8336 9.38465 13.796 9.29246C13.7583 9.20027 13.7394 9.10151 13.7403 9.00192C13.7412 8.90234 13.7619 8.80393 13.8013 8.71245C13.8406 8.62097 13.8978 8.53823 13.9695 8.46908L17.1285 5.30908H15.1095C14.9105 5.30908 14.7198 5.23006 14.5791 5.08941C14.4385 4.94876 14.3595 4.75799 14.3595 4.55908C14.3595 4.36017 14.4385 4.1694 14.5791 4.02875C14.7198 3.8881 14.9105 3.80908 15.1095 3.80908H18.9375C19.1363 3.80926 19.3269 3.88839 19.4675 4.02908" />
                  </mask>
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.4695 4.03008C19.6095 4.17108 19.6895 4.36208 19.6895 4.56008V8.39008C19.6895 8.58899 19.6104 8.77976 19.4698 8.92041C19.3291 9.06106 19.1384 9.14008 18.9395 9.14008C18.7405 9.14008 18.5498 9.06106 18.4091 8.92041C18.2685 8.77976 18.1895 8.58899 18.1895 8.39008V6.37008L15.0295 9.53008C14.9602 9.60168 14.8774 9.65878 14.7859 9.69804C14.6944 9.7373 14.596 9.75795 14.4964 9.75877C14.3968 9.75958 14.2981 9.74056 14.2059 9.70281C14.1138 9.66505 14.03 9.60932 13.9597 9.53887C13.8893 9.46842 13.8336 9.38465 13.796 9.29246C13.7583 9.20027 13.7394 9.10151 13.7403 9.00192C13.7412 8.90234 13.7619 8.80393 13.8013 8.71245C13.8406 8.62097 13.8978 8.53823 13.9695 8.46908L17.1285 5.30908H15.1095C14.9105 5.30908 14.7198 5.23006 14.5791 5.08941C14.4385 4.94876 14.3595 4.75799 14.3595 4.55908C14.3595 4.36017 14.4385 4.1694 14.5791 4.02875C14.7198 3.8881 14.9105 3.80908 15.1095 3.80908H18.9375C19.1363 3.80926 19.3269 3.88839 19.4675 4.02908" fill="white" />
                  <path d="M18.1895 6.37008H19.1895V3.95587L17.4823 5.66298L18.1895 6.37008ZM15.0295 9.53008L14.3223 8.82297L14.3164 8.82895L14.3105 8.83503L15.0295 9.53008ZM13.9695 8.46908L14.6638 9.18869L14.6703 9.18244L14.6767 9.17608L13.9695 8.46908ZM17.1285 5.30908L17.8357 6.01608L19.5421 4.30908H17.1285V5.30908ZM15.1095 5.30908V6.30908V5.30908ZM15.1095 3.80908V2.80908V3.80908ZM18.9375 3.80908L18.9383 2.80908H18.9375V3.80908ZM19.4695 4.03008L18.7598 4.73467C18.7173 4.69182 18.6895 4.63092 18.6895 4.56008H19.6895H20.6895C20.6895 4.09324 20.5016 3.65035 20.1791 3.3255L19.4695 4.03008ZM19.6895 4.56008H18.6895V8.39008H19.6895H20.6895V4.56008H19.6895ZM19.6895 8.39008H18.6895C18.6895 8.32377 18.7158 8.26019 18.7627 8.21331L19.4698 8.92041L20.1769 9.62752C20.5051 9.29933 20.6895 8.85422 20.6895 8.39008H19.6895ZM19.4698 8.92041L18.7627 8.21331C18.8096 8.16642 18.8731 8.14008 18.9395 8.14008V9.14008V10.1401C19.4036 10.1401 19.8487 9.95571 20.1769 9.62752L19.4698 8.92041ZM18.9395 9.14008V8.14008C19.0058 8.14008 19.0693 8.16642 19.1162 8.21331L18.4091 8.92041L17.702 9.62752C18.0302 9.95571 18.4753 10.1401 18.9395 10.1401V9.14008ZM18.4091 8.92041L19.1162 8.21331C19.1631 8.26019 19.1895 8.32378 19.1895 8.39008H18.1895H17.1895C17.1895 8.85421 17.3738 9.29933 17.702 9.62752L18.4091 8.92041ZM18.1895 8.39008H19.1895V6.37008H18.1895H17.1895V8.39008H18.1895ZM18.1895 6.37008L17.4823 5.66298L14.3223 8.82297L15.0295 9.53008L15.7366 10.2372L18.8966 7.07719L18.1895 6.37008ZM15.0295 9.53008L14.3105 8.83503C14.3336 8.81116 14.3612 8.79213 14.3917 8.77904L14.7859 9.69804L15.1802 10.617C15.3937 10.5254 15.5869 10.3922 15.7484 10.2251L15.0295 9.53008ZM14.7859 9.69804L14.3917 8.77904C14.4222 8.76595 14.455 8.75907 14.4882 8.7588L14.4964 9.75877L14.5046 10.7587C14.737 10.7568 14.9666 10.7087 15.1802 10.617L14.7859 9.69804ZM14.4964 9.75877L14.4882 8.7588C14.5214 8.75853 14.5543 8.76487 14.585 8.77745L14.2059 9.70281L13.8268 10.6282C14.0418 10.7163 14.2722 10.7606 14.5046 10.7587L14.4964 9.75877ZM14.2059 9.70281L14.585 8.77745C14.6157 8.79004 14.6436 8.80861 14.6671 8.8321L13.9597 9.53887L13.2522 10.2456C13.4164 10.41 13.6118 10.5401 13.8268 10.6282L14.2059 9.70281ZM13.9597 9.53887L14.6671 8.8321C14.6906 8.85558 14.7091 8.8835 14.7217 8.91423L13.796 9.29246L12.8702 9.67069C12.9581 9.8858 13.088 10.0813 13.2522 10.2456L13.9597 9.53887ZM13.796 9.29246L14.7217 8.91423C14.7342 8.94496 14.7405 8.97789 14.7402 9.01108L13.7403 9.00192L12.7403 8.99276C12.7382 9.22513 12.7823 9.45559 12.8702 9.67069L13.796 9.29246ZM13.7403 9.00192L14.7402 9.01108C14.7399 9.04427 14.733 9.07708 14.7199 9.10757L13.8013 8.71245L12.8826 8.31733C12.7908 8.53079 12.7424 8.7604 12.7403 8.99276L13.7403 9.00192ZM13.8013 8.71245L14.7199 9.10757C14.7068 9.13807 14.6877 9.16564 14.6638 9.18869L13.9695 8.46908L13.2751 7.74947C13.1079 7.91082 12.9744 8.10386 12.8826 8.31733L13.8013 8.71245ZM13.9695 8.46908L14.6767 9.17608L17.8357 6.01608L17.1285 5.30908L16.4212 4.60209L13.2622 7.76209L13.9695 8.46908ZM17.1285 5.30908V4.30908H15.1095V5.30908V6.30908H17.1285V5.30908ZM15.1095 5.30908V4.30908C15.1758 4.30908 15.2393 4.33542 15.2862 4.38231L14.5791 5.08941L13.872 5.79652C14.2002 6.12471 14.6453 6.30908 15.1095 6.30908V5.30908ZM14.5791 5.08941L15.2862 4.38231C15.3331 4.42919 15.3595 4.49278 15.3595 4.55908H14.3595H13.3595C13.3595 5.02321 13.5438 5.46833 13.872 5.79652L14.5791 5.08941ZM14.3595 4.55908H15.3595C15.3595 4.62539 15.3331 4.68898 15.2862 4.73586L14.5791 4.02875L13.872 3.32165C13.5438 3.64983 13.3595 4.09495 13.3595 4.55908H14.3595ZM14.5791 4.02875L15.2862 4.73586C15.2393 4.78274 15.1758 4.80908 15.1095 4.80908V3.80908V2.80908C14.6453 2.80908 14.2002 2.99346 13.872 3.32165L14.5791 4.02875ZM15.1095 3.80908V4.80908H18.9375V3.80908V2.80908H15.1095V3.80908ZM18.9375 3.80908L18.9366 4.80908C18.8703 4.80902 18.8067 4.78265 18.7599 4.73575L19.4675 4.02908L20.175 3.32242C19.8471 2.99413 19.4023 2.80949 18.9383 2.80908L18.9375 3.80908Z" fill="white" mask="url(#path-1-inside-1_4640_1657)" />
                  <path d="M5.0006 9.86001C6.92077 14.0406 10.332 17.3541 14.5666 19.152L15.2466 19.455C15.9996 19.7903 16.8468 19.8491 17.639 19.621C18.4311 19.3929 19.1173 18.8925 19.5766 18.208L20.4656 16.884C20.6047 16.6764 20.661 16.4242 20.6235 16.1771C20.5859 15.93 20.4571 15.7059 20.2626 15.549L17.2506 13.119C17.1457 13.0344 17.0248 12.9719 16.8951 12.9353C16.7655 12.8986 16.6298 12.8885 16.4961 12.9056C16.3625 12.9227 16.2336 12.9666 16.1174 13.0347C16.0011 13.1028 15.8998 13.1938 15.8196 13.302L14.8876 14.559C12.4952 13.3774 10.5587 11.4406 9.3776 9.04801L10.6336 8.11601C10.7418 8.03577 10.8328 7.93448 10.9009 7.81823C10.969 7.70198 11.0129 7.57316 11.03 7.4395C11.0471 7.30585 11.037 7.17012 11.0003 7.04046C10.9637 6.91081 10.9012 6.7899 10.8166 6.68501L8.3866 3.67301C8.2297 3.47846 8.00563 3.34972 7.75854 3.31215C7.51145 3.27458 7.25924 3.33089 7.0516 3.47001L5.7186 4.36401C5.03 4.82579 4.52769 5.51702 4.30115 6.31457C4.07462 7.11213 4.13856 7.9642 4.4816 8.71901L5.0006 9.86001Z" fill="white" />
                </svg>
                Book a Free Discovery Call
              </button>
            </a>
            <a href="#contactForm">
              <button className="ProductHero_secondaryButton__TSAvr">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.33301 5.40576C10.4381 5.13592 13.5609 5.13591 16.666 5.40576H16.667L18.1768 5.53564C18.5774 5.5706 18.9635 5.70669 19.2979 5.93018C19.5624 6.10706 19.7873 6.3351 19.9619 6.59912L13.9131 10.3462C13.3313 10.7063 12.6618 10.8997 11.9775 10.9067C11.2933 10.9137 10.6203 10.7335 10.0312 10.3853L3.92871 6.77881C4.09785 6.46695 4.33462 6.19575 4.62305 5.98584C4.97459 5.73001 5.38913 5.57427 5.82227 5.53662L7.33301 5.40576Z" fill="#17C2C2" stroke="#17C2C2" />
                  <path d="M3.36193 8.76689C3.3262 8.74572 3.28572 8.73387 3.24422 8.73241C3.20271 8.73096 3.1615 8.73995 3.12438 8.75856C3.08725 8.77717 3.05539 8.80481 3.03173 8.83894C3.00806 8.87307 2.99335 8.9126 2.98893 8.95389C2.73537 11.4717 2.79718 14.0114 3.17293 16.5139C3.2701 17.1549 3.58003 17.7447 4.05286 18.1883C4.5257 18.632 5.13399 18.9037 5.77993 18.9599L7.28993 19.0909C10.4249 19.3639 13.5769 19.3639 16.7119 19.0909L18.2219 18.9609C18.8681 18.9044 19.4765 18.6321 19.9492 18.1879C20.4219 17.7437 20.7314 17.1533 20.8279 16.5119C21.2146 13.9365 21.2687 11.3221 20.9889 8.73289C20.9841 8.69143 20.9688 8.65185 20.9446 8.61784C20.9204 8.58383 20.888 8.55649 20.8504 8.53834C20.8128 8.52019 20.7713 8.51182 20.7296 8.51401C20.6879 8.51621 20.6474 8.52889 20.6119 8.55089L14.9669 12.0449C14.0749 12.5969 13.0489 12.8944 11.9999 12.9052C10.951 12.9159 9.91907 12.6395 9.01593 12.1059L3.36193 8.76689Z" fill="#17C2C2" />
                </svg>
                Get My Free MVP Roadmap
              </button>
            </a>
          </div>
        </div>
      </section>
      <div 
        className="productHeroBottom_container__zVjNm"
        ref={el => elementRefs.current.set('bottom-container', el)}
        style={{
          opacity: isElementVisible('bottom-container') ? 1 : 0,
          transform: isElementVisible('bottom-container') ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s'
        }}
      >
        <div 
          style={{ 
            transform: "none", 
            opacity: 1, 
            transition: "0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" 
          }} 
          className="productHeroBottom_imageWrapper__iVZgS"
        >
          <div className="productHeroBottom_desktopView__oEntX">
            <img 
              alt="mask" 
              fetchPriority="high" 
              loading="eager" 
              width="1400" 
              height="900" 
              decoding="async" 
              data-nimg="1" 
              className="productHeroBottom_desktopImage__q3_2q" 
              style={{ color: "transparent" }} 
              src="/coded/static/media/hero-bottom-img.7a89ba28.svg"
            />
          </div>
          <div className="productHeroBottom_mobileView__BdEDJ">
            <img 
              alt="mask" 
              fetchPriority="high" 
              loading="eager" 
              width="600" 
              height="400" 
              decoding="async" 
              data-nimg="1" 
              className="productHeroBottom_mobileImage__G1ikH" 
              style={{ color: "transparent" }} 
              src="/coded/static/media/hero-bottom-img.7a89ba28.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}