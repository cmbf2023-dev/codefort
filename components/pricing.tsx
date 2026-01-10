"use client"

import { useEffect, useRef, useState } from "react"

// Animation styles
const animationStyles = `
@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-slide-top {
  animation: slideInFromTop 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-slide-left {
  animation: slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-slide-right {
  animation: slideInFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-slide-bottom {
  animation: slideInFromBottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-fade {
  animation: fadeIn 1s ease-out forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }
.animation-delay-500 { animation-delay: 500ms; }
.animation-delay-600 { animation-delay: 600ms; }

.pricing-initial {
  opacity: 0;
}
`

// Plan data
const plans = [
  {
    title: "Starter",
    description: "Begin building at your pace",
    buttonText: "Get Started",
    isPrimary: true,
    index: 0,
  },
  {
    title: "Growth",
    description: "Accelerate your progress",
    buttonText: "Get Started",
    isPrimary: true,
    index: 1,
  },
  {
    title: "Scale",
    description: "Take your business to the next level",
    buttonText: "Get Started",
    isPrimary: true,
    index: 2,
  },
  {
    title: "Custom",
    description: "Get a solution tailored to your needs",
    buttonText: "Contact Us",
    isPrimary: false,
    index: 3,
  },
]

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Get animation for each card based on position
  const getCardAnimation = (index: number) => {
    const baseClass = `PricingSection_card__mTQvd pricing-initial ${isVisible ? "animate-slide-bottom" : ""}`
    const delayClass = `animation-delay-${(index + 1) * 100}`

    if (index === 0) return `${baseClass} animate-slide-left ${delayClass}`
    if (index === 1) return `${baseClass} animate-slide-bottom ${delayClass}`
    if (index === 2) return `${baseClass} animate-slide-bottom animation-delay-300`
    if (index === 3) return `${baseClass} animate-slide-right animation-delay-400`

    return baseClass
  }

  // Get icon animation based on hover state
  const getIconAnimation = (index: number) => {
    return hoveredCard === index ? "animate-float" : ""
  }

  return (
    <>
      <style jsx global>
        {animationStyles}
      </style>
      <section ref={sectionRef} className="PricingSection_section__3gZyK">
        <div className="PricingSection_container__LQ9Ue">
          {/* Header section - slides in from top */}
          <div className={`pricing-initial ${isVisible ? "animate-slide-top" : ""}`}>
            <div>
              <h3 className="PricingSection_subtitle___e9gV">SIMPLE AND TRANSPARENT</h3>
              <h2 className="PricingSection_title__tzuTa">Pricing</h2>
              <p className="PricingSection_description__vsGox">
                Plans begin at ₦300K/month, choose the pace that fits you best: Starter, Growth, Scale, or Custom.
              </p>
            </div>
          </div>

          {/* Pricing cards grid */}
          <div className="PricingSection_cardsGrid__To4du">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={getCardAnimation(plan.index)}
                onMouseEnter={() => setHoveredCard(plan.index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 className="PricingSection_cardTitle__KOdiP">{plan.title}</h3>
                <p className="PricingSection_cardDescription__GTEFN">{plan.description}</p>
                <a href="#contactForm">
                  <button
                    className={
                      plan.isPrimary ? "PricingSection_primaryButton__Rukse" : "PricingSection_secondaryButton__jN_mz"
                    }
                  >
                    {plan.buttonText}
                  </button>
                </a>
              </div>
            ))}
          </div>

          {/* Footer text - fades in after cards */}
          <p
            className={`PricingSection_upgrade__MqnBf pricing-initial ${isVisible ? "animate-fade animation-delay-500" : ""}`}
          >
            UPGRADE ANYTIME TO GO FASTER
          </p>
        </div>
      </section>
    </>
  )
}
