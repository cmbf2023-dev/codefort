"use client"
import { useEffect, useRef } from "react"
import type React from "react"

import Typed from "typed.js"

export function Header({ page }: { page: string }) {
  let typedText: string[] = []
  switch (page) {
    case "home":
      typedText = [
        "Transform your business ideas with Codefort solutions",
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
      break
    case "blockchain":
      typedText = ["Unleash the potential of Blockchain with our expertise"]
      break
    case "ai-and-ml":
      typedText = ["Supercharge your business with intelligent and data-driven solutions"]
      break
    case "product-design":
      typedText = ["Wow your users with the best product experience"]
      break
    case "outsourcing":
      typedText = ["Achieve Remarkable Success with a Strategic Partnership"]
      break
    case "maintenance":
      typedText = ["Boost your business with seamless software performance."]
      break
    case "startup-solutions":
      typedText = ["Build your dream with our budget-friendly solutions"]
      break
  }

  const typedElement = useRef(null)
  const typedInstance = useRef<Typed | null>(null)

  useEffect(() => {
    if (!typedElement.current || typedText.length === 0) return

    // Destroy previous instance to avoid conflicts
    if (typedInstance.current) {
      typedInstance.current.destroy()
    }

    // Configure typed.js with professional settings
    typedInstance.current = new Typed(typedElement.current, {
      strings: typedText,
      typeSpeed: 50, // Professional typist speed
      backSpeed: 40, // Smooth erasing
      backDelay: 2000, // Pause before erasing
      startDelay: 300,
      loop: typedText.length > 1, // Only loop if multiple strings
      showCursor: false, // Remove cursor element entirely
      bindInputFocusEvents: false,
      contentType: "html",
    })

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy()
      }
    }
  }, [page])

  return (
    <div className="Hero_container__Ie7sQ">
      <div id="tsparticles"></div>
      <div className="Header_headerWrapper__0NhQv">
        <header className="Header_header__z1DZP false">
          <a href="/"
            ><img
              alt="logo"
              loading="lazy"
              width="178.61"
              height="40"
              decoding="async"
              data-nimg="1"
              className="Header_logoFull__32g1a"
              style={{color: "transparent"}}
              srcSet="/coded/logo-full.png, /coded/logo-full.png 2x"
              src="/coded/logo-full.png" /><img
              alt="logo"
              loading="lazy"
              width="142.89"
              height="32"
              decoding="async"
              data-nimg="1"
              className="Header_logo__nMWzR"
              style={{color: "transparent"}}
              srcSet="/coded/logo-full.png, /coded/logo-full.png 2x"
              src="/coded/logo-full.png"
          /></a>
          <nav className="Header_links__7__VU">
            <div className="Header_servicesNavWrapperOuter__eBYPR">
              <div className="Header_servicesNavWrapper__Fm7SW">
                <h3 className="Header_servicesNavHeader__K2Q4v">
                  Services we offer<span
                    className="Header_servicesNavHeader__K2Q4v Header_dot__5qYda"
                    >.</span
                  >
                </h3>
                <div className="Header_servicesNav__vVlPe">
                  <a
                    className="Header_servicesLink__fHPea"
                    href="/software-development"
                  >
                    <div className="Header_servicesLinkInner__ixia5">
                      <img
                        alt="nav image"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        style={{color: "transparent"}}
                        srcSet="
                          /coded/service-1-icon.webp,
                          /coded/service-1-icon.webp 2x
                        "
                        src="/coded/service-1-icon.webp"
                      />
                      <p className="Header_serviceLinkText__EZRlM">
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
                        style={{color: "transparent"}}
                        srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                        src="/coded/learn-more.png"
                      />
                    </div> </a>
                    <a className="Header_servicesLink__fHPea" href="/blockchain">
                    <div className="Header_servicesLinkInner__ixia5">
                      <img
                        alt="nav image"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        style={{color: "transparent"}}
                        srcSet="
                          /coded/service-3-icon.webp,
                          /coded/service-3-icon.webp 2x
                        "
                        src="/coded/service-3-icon.webp"
                      />
                      <p className="Header_serviceLinkText__EZRlM">
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
                        style={{color: "transparent"}}
                        srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                        src="/coded/learn-more.png"
                      />
                    </div> </a>
                    <a className="Header_servicesLink__fHPea" href="/product-design">
                    <div className="Header_servicesLinkInner__ixia5">
                      <img
                        alt="nav image"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        style={{color: "transparent"}}
                        srcSet="
                          /coded/service-2-icon.webp,
                          /coded/service-2-icon.webp 2x
                        "
                        src="/coded/service-2-icon.webp"
                      />
                      <p className="Header_serviceLinkText__EZRlM">
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
                        style={{color: "transparent"}}
                        srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                        src="/coded/learn-more.png"
                      />
                    </div> </a>
                    <a className="Header_servicesLink__fHPea" href="/ai-and-ml">
                    <div className="Header_servicesLinkInner__ixia5">
                      <img
                        alt="nav image"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        style={{color: "transparent"}}
                        srcSet="
                          /coded/service-4-icon.webp,
                          /coded/service-4-icon.webp 2x
                        "
                        src="/coded/service-4-icon.webp"
                      />
                      <p className="Header_serviceLinkText__EZRlM">
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
                        style={{color: "transparent"}}
                        srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                        src="/coded/learn-more.png"
                      />
                    </div> </a>
                    <a className="Header_servicesLink__fHPea" href="/outsourcing">
                    <div className="Header_servicesLinkInner__ixia5">
                      <img
                        alt="nav image"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        style={{color: "transparent"}}
                        srcSet="
                          /coded/service-5-icon.webp,
                          /coded/service-5-icon.webp 2x
                        "
                        src="/coded/service-5-icon.webp"
                      />
                      <p className="Header_serviceLinkText__EZRlM">
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
                        style={{color: "transparent"}}
                        srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                        src="/coded/learn-more.png"
                      />
                    </div> </a>
                    <a className="Header_servicesLink__fHPea" href="/maintenance">
                    <div className="Header_servicesLinkInner__ixia5">
                      <img
                        alt="nav image"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        style={{color: "transparent"}}
                        srcSet="
                          /coded/service-6-icon.webp,
                          /coded/service-6-icon.webp 2x
                        "
                        src="/coded/service-6-icon.webp"
                      />
                      <p className="Header_serviceLinkText__EZRlM">
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
                        style={{color: "transparent"}}
                        srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                        src="/coded/learn-more.png"
                      />
                    </div> </a>
                    <a className="Header_servicesLink__fHPea" href="#startup">
                    <div className="Header_servicesLinkInner__ixia5">
                      <img
                        alt="nav image"
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        style={{color: "transparent"}}
                        srcSet="
                          /coded/service-7-icon.webp,
                          /coded/service-7-icon.webp 2x
                        "
                        src="/coded/service-7-icon.webp"
                      />
                      <p className="Header_serviceLinkText__EZRlM">
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
                        style={{color: "transparent"}}
                        srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                        src="/coded/learn-more.png"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <a className="Header_link__OJ7mG Header_linkActive__1Wk7s" href="/">Home</a
            ><a className="Header_link__OJ7mG" href="/about-us">About us</a
            ><a className="Header_link__OJ7mG" href="/our-process">Our process</a
            ><a className="Header_link__OJ7mG" href="/pay-as-you-build"
              >Pay As you build<span className="Header_newTag__5CHHH">NEW</span></a
            >
            <p className="Header_link__OJ7mG Header_linkMulti__uOmVn">Services</p>
          </nav>
          <a className="Header_headerButton__YuNwT" href="#contact">Contact us</a
          ><img
            alt="menu icon"
            loading="lazy"
            width="40"
            height="40"
            decoding="async"
            data-nimg="1"
            className="Header_menuOpen__u0_H5"
            style={{color: "transparent"}}
            src="/images/menu.svg"
          />
        </header>
        <nav className="Header_mobileNav__nlBu7">
          <div className="Header_mobileTop__Gvy_h">
            <a href="/"
              ><img
                alt="logo"
                loading="lazy"
                width="142.89"
                height="32"
                decoding="async"
                data-nimg="1"
                className="Header_logo__nMWzR"
                style={{color: "transparent"}}
                srcSet="/coded/logo-full.png, /coded/logo-full.png 2x"
                src="/coded/logo-full.png" /></a
            ><img
              alt="menu icon"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              style={{color: "transparent"}}
              src="/images/close.svg"
            />
          </div>
          <div className="Header_navMobileWrapper__BWmve">
            <a className="Header_linkMobile__sGuGe" href="/"
              ><img
                alt="icon"
                loading="lazy"
                width="19"
                height="19"
                decoding="async"
                data-nimg="1"
                style={{color: "transparent"}}
                srcSet="/coded/right.png, /coded/right.png 2x"
                src="/coded/right.png"
              />
              <p className="Header_linkMobileText__6k8yi">Home</p> </a
            ><a className="Header_linkMobile__sGuGe" href="/about-us"
              ><img
                alt="icon"
                loading="lazy"
                width="19"
                height="19"
                decoding="async"
                data-nimg="1"
                style={{color: "transparent"}}
                srcSet="/coded/right.png, /coded/right.png 2x"
                src="/coded/right.png"
              />
              <p className="Header_linkMobileText__6k8yi">About us</p> </a
            ><a className="Header_linkMobile__sGuGe" href="/our-process"
              ><img
                alt="icon"
                loading="lazy"
                width="19"
                height="19"
                decoding="async"
                data-nimg="1"
                style={{color: "transparent"}}
                srcSet="/coded/right.png, /coded/right.png 2x"
                src="/coded/right.png"
              />
              <p className="Header_linkMobileText__6k8yi">Our process</p> </a
            ><a className="Header_linkMobile__sGuGe" href="/pay-as-you-build"
              ><img
                alt="icon"
                loading="lazy"
                width="19"
                height="19"
                decoding="async"
                data-nimg="1"
                style={{color: "transparent"}}
                srcSet="/coded/right.png, /coded/right.png 2x"
                src="/coded/right.png"
              />
              <p className="Header_linkMobileText__6k8yi">Pay As you build</p>
              <span className="Header_newTagMobile__nrz9E">NEW</span>
            </a>
            <div>
              <h2 className="Header_mobileServiceHeader__4Rg21">Services</h2>
              <div className="Header_innerNavs__R3eNy">
                <a className="Header_linkMobile__sGuGe" href="/software-development"
                  ><img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{color: "transparent"}}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    Custom Software Development
                  </p> </a>
                  <a className="Header_linkMobile__sGuGe" href="/blockchain"
                  ><img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{color: "transparent"}}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    Blockchain Development
                  </p> </a>
                  <a className="Header_linkMobile__sGuGe" href="/product-design"
                  ><img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{color: "transparent"}}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    User Research &amp; Product Design
                  </p> </a>
                  <a className="Header_linkMobile__sGuGe" href="/ai-and-ml"
                  ><img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{color: "transparent"}}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    AI &amp; ML Development
                  </p> </a>
                  <a className="Header_linkMobile__sGuGe" href="/outsourcing"
                  ><img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{color: "transparent"}}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    Outsourcing &amp; Recruitment Services
                  </p> </a>
                  <a className="Header_linkMobile__sGuGe" href="/maintenance"
                  ><img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{color: "transparent"}}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    Software Maintenance &amp; Support
                  </p> </a>
                  <a className="Header_linkMobile__sGuGe" href="#startup"
                  ><img
                    alt="icon"
                    loading="lazy"
                    width="19"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    style={{color: "transparent"}}
                    srcSet="/coded/right.png, /coded/right.png 2x"
                    src="/coded/right.png"
                  />
                  <p className="Header_linkMobileText__6k8yi">
                    Startup &amp; Small Business Solutions
                  </p>
                </a>
              </div>
            </div>
          </div>
          <a className="Header_headerButtonMobile__EXRpk" href="#contact">Contact us</a>
        </nav>
      </div>
      <section className="Hero_heroWrapper__HHgQu">
        <div className="Hero_heroContent__Ck9wY">
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
          <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
            <div style={{ height: "100%", opacity: 1, transform: "none" }}>
              <p className="Hero_heroBody__D7tPo">
                Harness the power of scalable software solutions to elevate your business's performance and
                profitability.
              </p>
            </div>
          </div>
          <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
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
          </div>
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
          srcSet="
            /coded/hero-image.webp,
            /coded/hero-image.webp,
            /coded/hero-image.webp,
            /coded/hero-image.webp,
            /coded/hero-image.webp,
            /coded/hero-image.webp 1920w,
            /coded/hero-image.webp,
            /coded/hero-image.webp
          "
          src="/coded/hero-image.webp"
        />
      </div>
    </div>
  )
}