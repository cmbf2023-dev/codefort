"use client"

import { useEffect, useState } from 'react';

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to second panel (index 1)

  useEffect(() => {
    // Set background images for each panel
    const accordion = document.querySelector(".Projects_accordion__SVvzD");
    if (!accordion) return;

    const accordions = accordion.querySelectorAll(".Projects_accordionPanel__k2ce_");
    
    // Set background images
    if (accordions[1]) {
      accordions[1].style.backgroundImage = "url(/coded/accordion/furniture.jpg)";
      accordions[1].style.backgroundPosition = "center center";
      accordions[1].style.backgroundRepeat = "no-repeat";
      accordions[1].style.backgroundSize = "cover";
    }

    if (accordions[0]) {
      accordions[0].style.backgroundImage = "url(/coded/accordion/fintech.jpeg)";
      accordions[0].style.backgroundPosition = "center center";
      accordions[0].style.backgroundRepeat = "no-repeat";
      accordions[0].style.backgroundSize = "cover";
    }

    if (accordions[2]) {
      accordions[2].style.backgroundImage = "url(/coded/accordion/nft.png)";
      accordions[2].style.backgroundPosition = "center center";
      accordions[2].style.backgroundRepeat = "no-repeat";
      accordions[2].style.backgroundSize = "cover";
    }

    // Update accordion state based on activeIndex
    updateAccordion(activeIndex);
  }, [activeIndex]);

  const updateAccordion = (index: number) => {
    const accordionPanels = document.querySelectorAll('.Projects_accordionPanel__k2ce_');
    const navigationIcons = document.querySelectorAll('.Projects_navigationIcon__Ww6uO');
    const arrowLeft = navigationIcons[0];
    const arrowRight = navigationIcons[1];

    // Reset all panels
    accordionPanels.forEach((panel, i) => {
      const content = panel.querySelector('.Projects_accordionContent__vpAcZ');
      const overlay = panel.querySelector('.Projects_overlay__jgi58');
      const trigger = panel.querySelector('.Projects_accordionTrigger__QvU3e');
      
      if (i === index) {
        // Expand active panel
        content?.setAttribute('aria-hidden', 'false');
        trigger?.setAttribute('aria-expanded', 'true');
        
        // Remove inactive overlay class if present
        overlay?.classList.remove('Projects_overlayInactive__E_x2P');
        overlay?.classList.remove('false');
        
        // Add active styling
        (panel as HTMLElement).style.flex = '3'; // Expanded width
        (content as HTMLElement).style.opacity = '1';
        (content as HTMLElement).style.transform = 'translateY(0)';
        (overlay as HTMLElement).style.opacity = '0.7';
        
        // Update chip styling for active panel
        const chip = panel.querySelector('.Projects_accordionChip__2ET1P');
        if (chip) {
          (chip as HTMLElement).style.backgroundColor = 'rgb(59, 133, 183)';
          (chip as HTMLElement).style.color = 'white';
        }

        // Handle click for the second panel (index 1)
        const button = panel.querySelector("a");
        if (button) {
          button.onclick = (e) => {
            if (i !== 1) {
              window.open((button as HTMLAnchorElement).href, "_blank");
            } else {
              e.preventDefault();
              (button as HTMLAnchorElement).href = "#";
            }
          };
        }
      } else {
        // Collapse inactive panels
        content?.setAttribute('aria-hidden', 'true');
        trigger?.setAttribute('aria-expanded', 'false');
        
        // Add inactive overlay class
        overlay?.classList.add('Projects_overlayInactive__E_x2P');
        
        // Collapsed styling
        (panel as HTMLElement).style.flex = '1';
        (content as HTMLElement).style.opacity = '0';
        (content as HTMLElement).style.transform = 'translateY(20px)';
        (overlay as HTMLElement).style.opacity = '0.3';
        
        // Reset chip styling for inactive panels
        const chip = panel.querySelector('.Projects_accordionChip__2ET1P');
        if (chip) {
          (chip as HTMLElement).style.backgroundColor = 'rgba(59, 133, 183, 0.1)';
          (chip as HTMLElement).style.color = 'rgb(59, 133, 183)';
        }
      }
    });

    // Update navigation arrows
    if (arrowLeft) {
      if (index === 0) {
        (arrowLeft as HTMLElement).style.opacity = '0.5';
        (arrowLeft as HTMLElement).style.cursor = 'not-allowed';
      } else {
        (arrowLeft as HTMLElement).style.opacity = '1';
        (arrowLeft as HTMLElement).style.cursor = 'pointer';
      }
    }

    if (arrowRight) {
      if (index === accordionPanels.length - 1) {
        (arrowRight as HTMLElement).style.opacity = '0.5';
        (arrowRight as HTMLElement).style.cursor = 'not-allowed';
      } else {
        (arrowRight as HTMLElement).style.opacity = '1';
        (arrowRight as HTMLElement).style.cursor = 'pointer';
      }
    }
  };

  // Handle panel click
  const handlePanelClick = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  // Handle navigation arrow clicks
  const handleArrowLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleArrowRight = () => {
    const accordionPanels = document.querySelectorAll('.Projects_accordionPanel__k2ce_');
    if (activeIndex < accordionPanels.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const accordionPanels = document.querySelectorAll('.Projects_accordionPanel__k2ce_');
      
      switch(e.key) {
        case 'ArrowLeft':
          if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
          }
          break;
        case 'ArrowRight':
          if (activeIndex < accordionPanels.length - 1) {
            setActiveIndex(activeIndex + 1);
          }
          break;
        case 'Home':
          setActiveIndex(0);
          break;
        case 'End':
          setActiveIndex(accordionPanels.length - 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Add click handlers to panels on mount
  useEffect(() => {
    const accordionPanels = document.querySelectorAll('.Projects_accordionPanel__k2ce_');
    
    accordionPanels.forEach((panel, index) => {
      panel.addEventListener('click', () => {
        if (activeIndex !== index) {
          setActiveIndex(index);
        }
      });
    });

    // Add click event to navigation arrows
    const navigationIcons = document.querySelectorAll('.Projects_navigationIcon__Ww6uO');
    const arrowLeft = navigationIcons[0];
    const arrowRight = navigationIcons[1];

    if (arrowLeft) {
      arrowLeft.addEventListener('click', handleArrowLeft);
    }

    if (arrowRight) {
      arrowRight.addEventListener('click', handleArrowRight);
    }

    return () => {
      // Cleanup event listeners
      accordionPanels.forEach((panel, index) => {
        panel.removeEventListener('click', () => {
          if (activeIndex !== index) {
            setActiveIndex(index);
          }
        });
      });

      if (arrowLeft) {
        arrowLeft.removeEventListener('click', handleArrowLeft);
      }

      if (arrowRight) {
        arrowRight.removeEventListener('click', handleArrowRight);
      }
    };
  }, [activeIndex]);

  return (
    <section className="Projects_projects__lgDIF">
      {/* ... rest of your JSX remains the same ... */}
      <div className="Projects_projectsHeader__bnFBQ">
        <div className="Projects_projectsHeaderTexts__cgRT4">
          <div style={{position: "relative", width: "fit-content", overflow: "hidden"}}>
            <div style={{height: "100%", opacity: 1, transform: "none"}}>
              <h3 className="Projects_sectionTitle__5kjAb">
                Featured Projects<span
                  className="Projects_sectionTitle__5kjAb Projects_dot__VI4_7"
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
              <p className="Projects_sectionBody__sVEo7">
                The work we have done &amp; the people we have helped
              </p>
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
        </div>
        <div className="Projects_projectsNavigation__UA65H">
          <img
            alt="arrow"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            className="Projects_navigationIcon__Ww6uO"
            style={{color: "transparent", cursor: "pointer"}}
            src="/images/arrow-left.svg"
            onClick={handleArrowLeft}
          /><img
            alt="arrow"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            className="Projects_navigationIcon__Ww6uO"
            style={{color: "transparent", cursor: "pointer"}}
            src="/images/arrow-right.svg"
            onClick={handleArrowRight}
          />
        </div>
      </div>
      <div className="Projects_accordion__SVvzD">
        <div 
          className="Projects_accordionPanel__k2ce_" 
          onClick={() => handlePanelClick(0)}
          style={{cursor: "pointer"}}
        >
          <div
            className="Projects_overlay__jgi58 Projects_overlayInactive__E_x2P"
          ></div>
          <div
            className="Projects_accordionContent__vpAcZ"
            id="panel1-content"
            aria-hidden="false"
            role="region"
          >
            <p className="Projects_accordionChip__2ET1P">Scriptbank</p>
            <p className="Projects_accordionContentHeader__C6kbA">
              Decentralized banking system and fintech application that uses
              blockchain technology.
            </p>
            <p className="Projects_accordionContentText__PrxLs">
              Finance, Security, Asset Management
            </p>
            <h2 id="panel1-heading">
              <a
                href="https://scriptbank.org"
                target="_blank"
                className="Projects_accordionTrigger__QvU3e"
                aria-expanded="false"
                onClick={(e) => e.stopPropagation()}
                ><span className="Projects_accordionTriggerText__J_0NQ"
                  >View Product</span
                ><img
                  alt="project image"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
              /></a>
            </h2>
          </div>
        </div>
        <div 
          className="Projects_accordionPanel__k2ce_" 
          onClick={() => handlePanelClick(1)}
          style={{cursor: "pointer"}}
        >
          <div className="Projects_overlay__jgi58 false"></div>
          <div
            className="Projects_accordionContent__vpAcZ"
            id="panel2-content"
            aria-hidden="false"
            role="region"
          >
            <p className="Projects_accordionChip__2ET1P">Jiamate</p>
            <p className="Projects_accordionContentHeader__C6kbA">
              Redifining The furniture Business.
            </p>
            <p className="Projects_accordionContentText__PrxLs">
              Product design, Software development, Testing
            </p>
            <h2 id="panel2-heading">
              <a
                href="https://jiamate.vercel.app/"
                target="_blank"
                className="Projects_accordionTrigger__QvU3e"
                aria-expanded="true"
                onClick={(e) => e.stopPropagation()}
                ><span className="Projects_accordionTriggerText__J_0NQ"
                  >View Product</span
                ><img
                  alt="project image"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
              /></a>
            </h2>
          </div>
        </div>
        <div 
          className="Projects_accordionPanel__k2ce_" 
          onClick={() => handlePanelClick(2)}
          style={{cursor: "pointer"}}
        >
          <div
            className="Projects_overlay__jgi58 Projects_overlayInactive__E_x2P"
          ></div>
          <div
            className="Projects_accordionContent__vpAcZ"
            id="panel3-content"
            aria-hidden="false"
            role="region"
          >
            <p className="Projects_accordionChip__2ET1P">NFT Marketplace</p>
            <p className="Projects_accordionContentHeader__C6kbA">
              Nft Exchange: Your Gateway to Effortless Trading in NFT,
              Cryptocurrencies, Airtimes, and Bills!
            </p>
            <p className="Projects_accordionContentText__PrxLs">
              Product design, Software development, Testing
            </p>
            <h2 id="panel3-heading">
              <a
                href="https://decentralizedwebpages.sbs"
                target="_blank"
                className="Projects_accordionTrigger__QvU3e"
                aria-expanded="false"
                onClick={(e) => e.stopPropagation()}
                ><span className="Projects_accordionTriggerText__J_0NQ"
                  >View Product</span
                ><img
                  alt="project image"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{color: "transparent"}}
                  srcSet="/coded/learn-more.png, /coded/learn-more.png 2x"
                  src="/coded/learn-more.png"
              /></a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}