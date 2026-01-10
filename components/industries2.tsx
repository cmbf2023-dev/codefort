"use client"

import { useEffect, useRef, useState } from 'react';

export function Industries() {
  const industryRefs = useRef<(HTMLDivElement|null)[]>([]);
  const [animatedIndustries, setAnimatedIndustries] = useState<boolean[]>([]);

  // Set up Intersection Observer for each industry
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = industryRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setAnimatedIndustries((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    industryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Initialize animated industries array
  useEffect(() => {
    setAnimatedIndustries(new Array(6).fill(false));
  }, []);

  // Animation directions for each card
  const animationDirections = [
    'slideInFromLeft',  // Fintech
    'slideInFromRight', // E-commerce
    'slideInFromBottom', // Oil & Gas
    'slideInFromTop',   // Travel & Recreation
    'slideInFromLeft',  // Insurance
    'slideInFromRight', // Logistics
  ];

  const getAnimationStyle = (index: number) => {
    if (!animatedIndustries[index]) {
      // Initial hidden state
      switch (animationDirections[index]) {
        case 'slideInFromLeft':
          return { transform: 'translateX(-100px)', opacity: 0 };
        case 'slideInFromRight':
          return { transform: 'translateX(100px)', opacity: 0 };
        case 'slideInFromTop':
          return { transform: 'translateY(-100px)', opacity: 0 };
        case 'slideInFromBottom':
          return { transform: 'translateY(100px)', opacity: 0 };
        default:
          return { transform: 'translateY(50px)', opacity: 0 };
      }
    }
    
    // Animated state
    return {
      transform: 'translateX(0) translateY(0)',
      opacity: 1,
    };
  };

  // Animation delay for staggered effect
  const getAnimationDelay = (index: number) => {
    return `${index * 0.1}s`; // 100ms delay between each card
  };

  return (
    <section className="Industries_industries__HYBHz">
      <div className="Industries_industriesHeader__VR0cy">
        <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
          <div style={{ height: "100%", opacity: 1, transform: "none" }}>
            <h3 className="Industries_sectionTitleDark__KiY_l">
              Key industries<span
                className="Industries_sectionTitleDark__KiY_l Industries_dot__OZdDB"
              >.</span>
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
        <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
          <div style={{ height: "100%", opacity: 1, transform: "none" }}>
            <p className="Industries_sectionBodyDark__fXO6O">
              Domains we have mastered and conquered
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
      <div className="Industries_industriesWrapper__DdnYt">
        {/* Fintech */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
          <div
            ref={(el) => {industryRefs.current[0] = el}}
            style={{
              height: "100%",
              opacity: getAnimationStyle(0).opacity,
              transform: getAnimationStyle(0).transform,
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out',
              transitionDelay: getAnimationDelay(0),
              willChange: 'transform, opacity',
            }}
          >
            <div className="Industries_industry__iDBFY Industries_fintech__QaM_E">
              <h3 className="Industries_industryNameAlone__qM67Q">Fintech</h3>
              <div className="Industries_industryOverlay__yK1FB"></div>
              <div className="Industries_industryDetails__tLD4v">
                <h3 className="Industries_industryName__ifcur">Fintech</h3>
                <p className="Industries_industryDescription___X44L">
                  We provide solutions for secure payment gateways, robust banking
                  systems, and personalized financial management tools. With
                  Codefort, you can streamline your operations, optimize
                  transactions, and deliver seamless customer experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* E-commerce */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
          <div
            ref={(el) => {industryRefs.current[1] = el}}
            style={{
              height: "100%",
              opacity: getAnimationStyle(1).opacity,
              transform: getAnimationStyle(1).transform,
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out',
              transitionDelay: getAnimationDelay(1),
              willChange: 'transform, opacity',
            }}
          >
            <div className="Industries_industry__iDBFY Industries_e-commerce__G401f">
              <h3 className="Industries_industryNameAlone__qM67Q">E-commerce</h3>
              <div className="Industries_industryOverlay__yK1FB"></div>
              <div className="Industries_industryDetails__tLD4v">
                <h3 className="Industries_industryName__ifcur">E-commerce</h3>
                <p className="Industries_industryDescription___X44L">
                  Our e-commerce solutions allow businesses to create captivating
                  online storefronts, implement secure payment gateways, and
                  leverage data-driven insights for growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Oil & Gas */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
          <div
            ref={(el) => {industryRefs.current[2] = el}}
            style={{
              height: "100%",
              opacity: getAnimationStyle(2).opacity,
              transform: getAnimationStyle(2).transform,
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out',
              transitionDelay: getAnimationDelay(2),
              willChange: 'transform, opacity',
            }}
          >
            <div className="Industries_industry__iDBFY Industries_oil-and-gas__7kQzx">
              <h3 className="Industries_industryNameAlone__qM67Q">Oil &amp; Gas</h3>
              <div className="Industries_industryOverlay__yK1FB"></div>
              <div className="Industries_industryDetails__tLD4v">
                <h3 className="Industries_industryName__ifcur">Oil &amp; Gas</h3>
                <p className="Industries_industryDescription___X44L">
                  Our solutions encompass advanced asset management systems, IoT
                  integration, and predictive analytics. Build a solid foundation
                  for optimized operations, risk mitigation, and sustainable growth
                  with our comprehensive software services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Travel & Recreation */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
          <div
            ref={(el) => {industryRefs.current[3] = el}}
            style={{
              height: "100%",
              opacity: getAnimationStyle(3).opacity,
              transform: getAnimationStyle(3).transform,
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out',
              transitionDelay: getAnimationDelay(3),
              willChange: 'transform, opacity',
            }}
          >
            <div
              className="Industries_industry__iDBFY Industries_travel-and-recreation__9Heu0"
            >
              <h3 className="Industries_industryNameAlone__qM67Q">
                Travel &amp; Recreation
              </h3>
              <div className="Industries_industryOverlay__yK1FB"></div>
              <div className="Industries_industryDetails__tLD4v">
                <h3 className="Industries_industryName__ifcur">
                  Travel &amp; Recreation
                </h3>
                <p className="Industries_industryDescription___X44L">
                  With Codefort's innovative solutions, your organization can build
                  captivating online booking platforms, efficient travel management
                  systems, and personalized itineraries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
          <div
            ref={(el) => {industryRefs.current[4] = el}}
            style={{
              height: "100%",
              opacity: getAnimationStyle(4).opacity,
              transform: getAnimationStyle(4).transform,
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out',
              transitionDelay: getAnimationDelay(4),
              willChange: 'transform, opacity',
            }}
          >
            <div className="Industries_industry__iDBFY Industries_insurance__9J8wQ">
              <h3 className="Industries_industryNameAlone__qM67Q">Insurance</h3>
              <div className="Industries_industryOverlay__yK1FB"></div>
              <div className="Industries_industryDetails__tLD4v">
                <h3 className="Industries_industryName__ifcur">Insurance</h3>
                <p className="Industries_industryDescription___X44L">
                  Our innovative solutions help our clients to embrace digital
                  transformation, navigate regulatory challenges, and gain a
                  competitive edge in the industry. With Codefort, you can build and
                  secure a prosperous future for your insurance business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logistics */}
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
          <div
            ref={(el) => {industryRefs.current[5] = el}}
            style={{
              height: "100%",
              opacity: getAnimationStyle(5).opacity,
              transform: getAnimationStyle(5).transform,
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out',
              transitionDelay: getAnimationDelay(5),
              willChange: 'transform, opacity',
            }}
          >
            <div className="Industries_industry__iDBFY Industries_logistics__g4SGv">
              <h3 className="Industries_industryNameAlone__qM67Q">Logistics</h3>
              <div className="Industries_industryOverlay__yK1FB"></div>
              <div className="Industries_industryDetails__tLD4v">
                <h3 className="Industries_industryName__ifcur">Logistics</h3>
                <p className="Industries_industryDescription___X44L">
                  Our logistics solutions encompass end-to-end supply chain
                  management, real-time tracking, warehouse management systems, and
                  process automation. Build a strong logistics ecosystem and elevate
                  your operations to new heights with our custom solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromTop {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .Industries_industry__iDBFY {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .Industries_industry__iDBFY:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .Industries_industryNameAlone__qM67Q {
          transition: transform 0.3s ease;
        }

        .Industries_industry__iDBFY:hover .Industries_industryNameAlone__qM67Q {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}