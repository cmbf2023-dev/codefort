"use client"

import { useEffect, useRef, useState } from 'react'

// Optional: Create reusable icon components
const WebsiteIcon = () => (
  <svg width="81" height="63" viewBox="0 0 81 63" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M40.4605 0L69.8595 0.828541C72.3723 0.899887 74.775 1.87515 76.6266 3.5753C78.4782 5.27545 79.6545 7.58641 79.9394 10.084C81.2481 21.5115 81.2481 33.051 79.9394 44.4785C79.6545 46.9761 78.4782 49.287 76.6266 50.9872C74.775 52.6874 72.3723 53.6626 69.8595 53.734L45.5125 54.421V62.6458H60.6688C61.4727 62.6458 62.2437 62.9652 62.8122 63.5337C63.3807 64.1021 63.7 64.8732 63.7 65.6771C63.7 66.481 63.3807 67.252 62.8122 67.8205C62.2437 68.389 61.4727 68.7083 60.6688 68.7083H20.2521C19.4482 68.7083 18.6772 68.389 18.1087 67.8205C17.5402 67.252 17.2209 66.481 17.2209 65.6771C17.2209 64.8732 17.5402 64.1021 18.1087 63.5337C18.6772 62.9652 19.4482 62.6458 20.2521 62.6458H35.4084V54.421L11.0614 53.734C8.54863 53.6626 6.14593 52.6874 4.29432 50.9872C2.44271 49.287 1.26645 46.9761 0.981455 44.4785C-0.327152 33.051 -0.327152 21.5115 0.981455 10.084C1.26645 7.58641 2.44271 5.27545 4.29432 3.5753C6.14593 1.87515 8.54863 0.899887 11.0614 0.828541L40.4605 0ZM12.1688 40.4167C11.3648 40.4167 10.5938 40.736 10.0254 41.3045C9.4569 41.873 9.13754 42.644 9.13754 43.4479C9.13754 44.2519 9.4569 45.0229 10.0254 45.5913C10.5938 46.1598 11.3648 46.4792 12.1688 46.4792H68.7521C69.5561 46.4792 70.3271 46.1598 70.8955 45.5913C71.464 45.0229 71.7834 44.2519 71.7834 43.4479C71.7834 42.644 71.464 41.873 70.8955 41.3045C70.3271 40.736 69.5561 40.4167 68.7521 40.4167H12.1688Z" fill="white" />
  </svg>
);

const MobileIcon = () => (
  <svg width="55" height="74" viewBox="0 0 55 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M54.5625 38.6182L54.5382 39.6003L54.5625 40.639L54.5382 41.6292L54.5625 42.6598L53.7986 76.0157C53.7509 78.0223 52.9763 79.9432 51.619 81.4218C50.2616 82.9003 48.4137 83.8359 46.4185 84.0546C33.6994 85.4288 20.8631 85.4288 8.14396 84.0546C6.14808 83.8368 4.29919 82.9016 2.941 81.423C1.58281 79.9444 0.807725 78.0229 0.759834 76.0157L0 42.6598L0.0242502 41.6211L0 40.639L0.0242502 39.6044L0 38.6182L0.679001 11.7775L0.707292 11.248L0.747708 9.38077C0.797898 7.31591 1.59932 5.3402 3.0018 3.82389C4.40429 2.30757 6.31157 1.35471 8.36625 1.14385L9.42517 1.03473C9.91145 0.923625 10.4041 0.842638 10.9004 0.792226C21.7954 -0.264075 32.7671 -0.264075 43.6621 0.792226C44.1633 0.846115 44.6537 0.926948 45.1333 1.03473L46.1962 1.14385C48.2502 1.35563 50.1565 2.30889 51.5582 3.82512C52.9598 5.34134 53.7607 7.31653 53.8107 9.38077L53.8552 11.2521C53.8687 11.4245 53.8768 11.5996 53.8795 11.7775L54.5625 38.6182ZM43.4479 65.8994C44.2519 65.8994 45.0229 65.5801 45.5913 65.0116C46.1598 64.4431 46.4792 63.6721 46.4792 62.8682C46.4792 62.0642 46.1598 61.2932 45.5913 60.7248C45.0229 60.1563 44.2519 59.8369 43.4479 59.8369H11.1146C10.3106 59.8369 9.53963 60.1563 8.97117 60.7248C8.4027 61.2932 8.08333 62.0642 8.08333 62.8682C8.08333 63.6721 8.4027 64.4431 8.97117 65.0116C9.53963 65.5801 10.3106 65.8994 11.1146 65.8994H43.4479ZM27.2812 81.864C28.8891 81.864 30.4311 81.2253 31.5681 80.0884C32.705 78.9514 33.3437 77.4094 33.3437 75.8015C33.3437 74.1936 32.705 72.6516 31.5681 71.5147C30.4311 70.3777 28.8891 69.739 27.2812 69.739C25.6734 69.739 24.1314 70.3777 22.9944 71.5147C21.8575 72.6516 21.2187 74.1936 21.2187 75.8015C21.2187 77.4094 21.8575 78.9514 22.9944 80.0884C24.1314 81.2253 25.6734 81.864 27.2812 81.864Z" fill="white" />
  </svg>
);

const AIIcon = () => (
  <svg width="97" height="77" viewBox="0 0 97 77" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54.5625 6.06264C54.5625 7.85714 53.7825 9.46976 52.5417 10.5812V18.1876H72.75C75.9657 18.1876 79.0498 19.4651 81.3237 21.739C83.5975 24.0128 84.875 27.0969 84.875 30.3126V70.7293C84.875 73.9451 83.5975 77.0291 81.3237 79.303C79.0498 81.5769 75.9657 82.8543 72.75 82.8543H24.25C21.0342 82.8543 17.9502 81.5769 15.6763 79.303C13.4025 77.0291 12.125 73.9451 12.125 30.3126V30.3126C12.125 27.0969 13.4025 24.0128 15.6763 21.739C17.9502 19.4651 21.0342 18.1876 24.25 18.1876H44.4583V10.5812C43.7046 9.90704 43.1314 9.05502 42.7911 8.10274C42.4508 7.15045 42.3541 6.12816 42.5098 5.12895C42.6655 4.12975 43.0687 3.18537 43.6827 2.3818C44.2967 1.57824 45.1019 0.941032 46.0251 0.528193C46.9482 0.115355 47.96 -0.059995 48.9682 0.0181109C49.9765 0.0962168 50.9492 0.425297 51.7977 0.975386C52.6463 1.52548 53.3438 2.2791 53.8267 3.16763C54.3096 4.05616 54.5625 5.05137 54.5625 6.06264ZM0 38.396H8.08333V62.646H0V38.396ZM97 38.396H88.9167V62.646H97V38.396ZM36.375 56.5835C37.9829 56.5835 39.5249 55.9448 40.6618 54.8078C41.7988 53.6709 42.4375 52.1289 42.4375 50.521C42.4375 48.9131 41.7988 47.3711 40.6618 46.2341C39.5249 45.0972 37.9829 44.4585 36.375 44.4585C34.7671 44.4585 33.2251 45.0972 32.0882 46.2341C30.9512 47.3711 30.3125 48.9131 30.3125 50.521C30.3125 52.1289 30.9512 53.6709 32.0882 54.8078C33.2251 55.9448 34.7671 56.5835 36.375 56.5835ZM66.6875 50.521C66.6875 48.9131 66.0488 47.3711 64.9118 46.2341C63.7749 45.0972 62.2329 44.4585 60.625 44.4585C59.0171 44.4585 57.4751 45.0972 56.3382 46.2341C55.2012 47.3711 54.5625 48.9131 54.5625 50.521C54.5625 52.1289 55.2012 53.6709 56.3382 54.8078C57.4751 55.9448 59.0171 56.5835 60.625 56.5835C62.2329 56.5835 63.7749 55.9448 64.9118 54.8078C66.0488 53.6709 66.6875 52.1289 66.6875 50.521Z" fill="white" />
  </svg>
);

const DashboardIcon = () => (
  <svg width="72" height="67" viewBox="0 0 72 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.0431 0.461098C18.4879 -0.153699 12.8819 -0.153699 7.32674 0.461098C5.59304 0.654108 3.97529 1.42682 2.73559 2.65406C1.49588 3.88129 0.706853 5.49115 0.496326 7.22281C-0.165442 12.8591 -0.165442 18.5534 0.496326 24.1897C0.706853 25.9214 1.49588 27.5312 2.73559 28.7585C3.97529 29.9857 5.59304 30.7584 7.32674 30.9514C12.8355 31.5658 18.5343 31.5658 24.0431 30.9514C25.7768 30.7584 27.3945 29.9857 28.6342 28.7585C29.8739 27.5312 30.663 25.9214 30.8735 24.1897C31.5353 18.5534 31.5353 12.8591 30.8735 7.22281C30.663 5.49115 29.8739 3.88129 28.6342 2.65406C27.3945 1.42682 25.7768 0.654108 24.0431 0.461098ZM24.0431 40.8778C18.4879 40.263 12.8819 40.263 7.32674 40.8778C5.59304 41.0708 3.97529 41.8435 2.73559 43.0707C1.49588 44.298 0.706853 45.9078 0.496326 47.6395C-0.165442 53.2758 -0.165442 58.9701 0.496326 64.6064C0.706853 66.3381 1.49588 67.9479 2.73559 69.1751C3.97529 70.4024 5.59304 71.1751 7.32674 71.3681C12.8355 71.9824 18.5343 71.9824 24.0431 71.3681C25.7768 71.1751 27.3945 70.4024 28.6342 69.1751C29.8739 67.9479 30.663 66.3381 30.8735 64.6064C31.5353 58.9701 31.5353 53.2758 30.8735 47.6395C30.663 45.9078 29.8739 44.298 28.6342 43.0707C27.3945 41.8435 25.7768 41.0708 24.0431 40.8778ZM64.4597 0.461098C58.9046 -0.153699 53.2986 -0.153699 47.7434 0.461098C46.0097 0.654108 44.392 1.42682 43.1522 2.65406C41.9125 3.88129 41.1235 5.49115 40.913 7.22281C40.2512 12.8591 40.2512 18.5534 40.913 24.1897C41.1235 25.9214 41.9125 27.5312 43.1522 28.7585C44.392 29.9857 46.0097 30.7584 47.7434 30.9514C53.2562 31.5658 58.9469 31.5658 64.4597 30.9514C66.1934 30.7584 67.8112 29.9857 69.0509 28.7585C70.2906 27.5312 71.0796 25.9214 71.2901 24.1897C71.9519 18.5534 71.9519 12.8591 71.2901 7.22281C71.0796 5.49115 70.2906 3.88129 69.0509 2.65406C67.8112 1.42682 66.1934 0.654108 64.4597 0.461098ZM64.4597 40.8778C58.9046 40.263 53.2986 40.263 47.7434 40.8778C46.0097 41.0708 44.392 41.8435 43.1522 43.0707C41.9125 44.298 41.1235 45.9078 40.913 47.6395C40.2512 53.2758 40.2512 58.9701 40.913 64.6064C41.1235 66.3381 41.9125 67.9479 43.1522 69.1751C44.392 70.4024 46.0097 71.1751 47.7434 71.3681C53.2562 71.9824 58.9469 71.9824 64.4597 71.3681C66.1934 71.1751 67.8112 70.4024 69.0509 69.1751C70.2906 67.9479 71.0796 66.3381 71.2901 64.6064C71.9519 58.9701 71.9519 53.2758 71.2901 47.6395C71.0796 45.9078 70.2906 44.298 69.0509 43.0707C67.8112 41.8435 66.1934 41.0708 64.4597 40.8778Z" fill="white" />
  </svg>
);

const FintechIcon = () => (
  <svg width="76" height="66" viewBox="0 0 76 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M75.0941 11.1818C75.7206 12.269 74.5404 13.4856 73.2915 13.3481C65.3454 12.4723 57.3271 12.4723 49.381 13.3481C46.8706 13.6254 44.5277 14.7435 42.733 16.5206C40.9382 18.2977 39.7971 20.6295 39.4951 23.1371C38.558 31.1986 38.558 39.3416 39.4951 47.4032C39.7971 49.9108 40.9382 52.2426 42.733 54.0197C44.5277 55.7968 46.8706 56.9148 49.381 57.1921C57.3271 58.0679 65.3454 58.0679 73.2915 57.1921C74.5485 57.0507 75.7408 58.2793 75.1062 59.3746C73.5194 62.1116 71.3086 64.4351 68.6537 66.1559C65.9989 67.8766 62.9751 68.9459 59.8287 69.2767L57.1936 69.5515C43.8121 70.9573 30.3154 70.8638 16.9547 69.2727L15.2087 69.0665C11.7063 68.6504 8.44198 67.0804 5.93047 64.604C3.41895 62.1277 1.80312 58.8858 1.33773 55.3896C-0.44591 42.0359 -0.44591 28.5044 1.33773 15.1507C1.80312 11.6545 3.41895 8.41261 5.93047 5.93623C8.44198 3.45984 11.7063 1.88982 15.2087 1.47372L16.9547 1.26759C30.3154 -0.323498 43.8121 -0.417037 57.1936 0.988719L59.8287 1.26759C62.975 1.59837 65.9984 2.66909 68.6515 4.39222C71.3047 6.11535 73.5124 8.44195 75.0941 11.1818Z" fill="white" />
  </svg>
);

// Optional: Card data for cleaner code
const cards = [
  {
    title: "Websites & Web Apps",
    items: ["SaaS", "Marketplace", "Corporate sites"],
    Icon: WebsiteIcon
  },
  {
    title: "Mobile Apps",
    items: ["iOS", "Android", "Native or Hybrid"],
    Icon: MobileIcon
  },
  {
    title: "AI Agents & Automations",
    items: ["Chatbots", "Workflow Bots", "Customer Support"],
    Icon: AIIcon
  },
  {
    title: "Enterprise Portals & Dashboards",
    items: ["CRM", "HR", "Analytics"],
    Icon: DashboardIcon
  },
  {
    title: "Fintech & Payment Systems",
    items: ["Wallets", "Transfers", "Virtual Cards"],
    Icon: FintechIcon
  }
];

export function WhatBuild() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section comes into view
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Optional: unobserve after animation triggers
          observer.unobserve(entry.target)
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // trigger when 10% of section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="WhatYouCanBuild_section__byNko"
    >
      <div className="WhatYouCanBuild_container__NU3M_">
        <div className="WhatYouCanBuild_cardsGrid__jMYkq">
          <div 
            className="WhatYouCanBuild_headerWrapper__BkMRo" 
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: isVisible ? '0.1s' : '0s'
            }}
          >
            <h3 
              className="WhatYouCanBuild_subtitle__wND3_"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(10px)',
                transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s'
              }}
            >
              CURIOSITY BUILDER
            </h3>
            <h2 
              className="WhatYouCanBuild_title__dvwNv"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(10px)',
                transition: 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s'
              }}
            >
              What You Can Build
            </h2>
            <p 
              className="WhatYouCanBuild_description__EuVMB"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(10px)',
                transition: 'opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s'
              }}
            >
              From startups to enterprises, we help ideas become real products:
            </p>
          </div>
          
          {/* First two cards */}
          <div 
            className="WhatYouCanBuild_card__BrLHs" 
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(25px)',
              transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
            }}
          >
            <div className="WhatYouCanBuild_cardContent__rgy9l">
              <h3 className="WhatYouCanBuild_cardTitle__Km5au">Websites & Web Apps</h3>
              <ul className="WhatYouCanBuild_itemsList__kyWVk">
                <li className="WhatYouCanBuild_item__IMfmW">SaaS</li>
                <li className="WhatYouCanBuild_item__IMfmW">Marketplace</li>
                <li className="WhatYouCanBuild_item__IMfmW">Corporate sites</li>
              </ul>
            </div>
            <div className="WhatYouCanBuild_iconWrapper__M7COc">
              <span className="WhatYouCanBuild_icon__4eQCb">
                <WebsiteIcon />
              </span>
            </div>
          </div>
          
          <div 
            className="WhatYouCanBuild_card__BrLHs" 
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(25px)',
              transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
            }}
          >
            <div className="WhatYouCanBuild_cardContent__rgy9l">
              <h3 className="WhatYouCanBuild_cardTitle__Km5au">Mobile Apps</h3>
              <ul className="WhatYouCanBuild_itemsList__kyWVk">
                <li className="WhatYouCanBuild_item__IMfmW">iOS</li>
                <li className="WhatYouCanBuild_item__IMfmW">Android</li>
                <li className="WhatYouCanBuild_item__IMfmW">Native or Hybrid</li>
              </ul>
            </div>
            <div className="WhatYouCanBuild_iconWrapper__M7COc">
              <span className="WhatYouCanBuild_icon__4eQCb">
                <MobileIcon />
              </span>
            </div>
          </div>
        </div>
        
        <div className="WhatYouCanBuild_secondCardGrid__7c48s">
          {/* Last three cards */}
          <div 
            className="WhatYouCanBuild_card__BrLHs" 
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(25px)',
              transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s'
            }}
          >
            <div className="WhatYouCanBuild_cardContent__rgy9l">
              <h3 className="WhatYouCanBuild_cardTitle__Km5au">AI Agents & Automations</h3>
              <ul className="WhatYouCanBuild_itemsList__kyWVk">
                <li className="WhatYouCanBuild_item__IMfmW">Chatbots</li>
                <li className="WhatYouCanBuild_item__IMfmW">Workflow Bots</li>
                <li className="WhatYouCanBuild_item__IMfmW">Customer Support</li>
              </ul>
            </div>
            <div className="WhatYouCanBuild_iconWrapper__M7COc">
              <span className="WhatYouCanBuild_icon__4eQCb">
                <AIIcon />
              </span>
            </div>
          </div>
          
          <div 
            className="WhatYouCanBuild_card__BrLHs" 
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(25px)',
              transition: 'opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s'
            }}
          >
            <div className="WhatYouCanBuild_cardContent__rgy9l">
              <h3 className="WhatYouCanBuild_cardTitle__Km5au">Enterprise Portals & Dashboards</h3>
              <ul className="WhatYouCanBuild_itemsList__kyWVk">
                <li className="WhatYouCanBuild_item__IMfmW">CRM</li>
                <li className="WhatYouCanBuild_item__IMfmW">HR</li>
                <li className="WhatYouCanBuild_item__IMfmW">Analytics</li>
              </ul>
            </div>
            <div className="WhatYouCanBuild_iconWrapper__M7COc">
              <span className="WhatYouCanBuild_icon__4eQCb">
                <DashboardIcon />
              </span>
            </div>
          </div>
          
          <div 
            className="WhatYouCanBuild_card__BrLHs" 
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(25px)',
              transition: 'opacity 0.6s ease-out 0.7s, transform 0.6s ease-out 0.7s'
            }}
          >
            <div className="WhatYouCanBuild_cardContent__rgy9l">
              <h3 className="WhatYouCanBuild_cardTitle__Km5au">Fintech & Payment Systems</h3>
              <ul className="WhatYouCanBuild_itemsList__kyWVk">
                <li className="WhatYouCanBuild_item__IMfmW">Wallets</li>
                <li className="WhatYouCanBuild_item__IMfmW">Transfers</li>
                <li className="WhatYouCanBuild_item__IMfmW">Virtual Cards</li>
              </ul>
            </div>
            <div className="WhatYouCanBuild_iconWrapper__M7COc">
              <span className="WhatYouCanBuild_icon__4eQCb">
                <FintechIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}