"use client"

// Optional: Extract SVG to a reusable component
const CheckCircleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#3b85b7" />
    <circle cx="15.9996" cy="16" r="10.4" fill="white" />
    <path d="M16.0007 5.33255C10.1233 5.33255 5.33398 10.1219 5.33398 15.9992C5.33398 21.8766 10.1233 26.6659 16.0007 26.6659C21.878 26.6659 26.6673 21.8766 26.6673 15.9992C26.6673 10.1219 21.878 5.33255 16.0007 5.33255ZM21.0993 13.5459L15.0513 19.5939C14.902 19.7432 14.6993 19.8286 14.486 19.8286C14.2727 19.8286 14.07 19.7432 13.9207 19.5939L10.902 16.5752C10.5927 16.2659 10.5927 15.7539 10.902 15.4446C11.2113 15.1352 11.7233 15.1352 12.0327 15.4446L14.486 17.8979L19.9687 12.4152C20.278 12.1059 20.79 12.1059 21.0993 12.4152C21.4087 12.7246 21.4087 13.2259 21.0993 13.5459Z" fill="#3b85b7" />
  </svg>
);

// Optional: Industry data array for cleaner code
const industries = [
  "E-Commerce",
  "Fintech",
  "Healthcare",
  "Education",
  "Real Estate",
  "Logistics",
  "Media/Entertainment",
  "Hospitality"
];

// Animation styles to add to your CSS/global styles
// Add these styles to your global CSS file or a CSS module
const animationStyles = `
@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-top {
  animation: slideInFromTop 0.6s ease-out forwards;
}

.animate-slide-in-bottom {
  animation: slideInFromBottom 0.6s ease-out forwards;
}

.animate-slide-in-left {
  animation: slideInFromLeft 0.6s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInFromRight 0.6s ease-out forwards;
}

.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}
`;

export function WeServe() {
  // Function to determine animation direction based on position in grid
  const getAnimationDirection = (index: number) => {
    // First row (index 0-3) slides from top
    if (index < 4) return "animate-slide-in-top";
    // Second row (index 4-7) slides from bottom
    if (index < 8) return "animate-slide-in-bottom";
    return "animate-slide-in-top"; // fallback
  };

  // Function to determine column-based animation (alternating approach)
  const getColumnAnimation = (index: number) => {
    const column = index % 4;
    switch (column) {
      case 0: // First column - slide from left
        return "animate-slide-in-left";
      case 1: // Second column - slide from top
        return "animate-slide-in-top";
      case 2: // Third column - slide from bottom
        return "animate-slide-in-bottom";
      case 3: // Fourth column - slide from right
        return "animate-slide-in-right";
      default:
        return "animate-slide-in-top";
    }
  };

  // Function to get animation delay for staggered effect
  const getAnimationDelay = (index: number) => {
    const delays = [
      "animation-delay-100",
      "animation-delay-200",
      "animation-delay-300",
      "animation-delay-400",
      "animation-delay-500",
      "animation-delay-200",
      "animation-delay-300",
      "animation-delay-400"
    ];
    return delays[index % delays.length];
  };

  // Hybrid approach: Combine grid position and staggered delays
  const getAnimationClass = (index: number) => {
    const direction = getColumnAnimation(index);
    const delay = getAnimationDelay(index);
    return `${direction} ${delay}`;
  };

  return (
    <>
      <style jsx global>{animationStyles}</style>
      <section className="IndustriesWeServe_section__YcWLJ">
        <div className="IndustriesWeServe_container__MfoNg">
          <div 
            className="IndustriesWeServe_headerWrapper__OxLhv animate-slide-in-top" 
            style={{ opacity: 0 }} // Start with opacity 0, animation will bring to 1
          >
            <h3 className="IndustriesWeServe_subtitle__DBTnX">TARGET AUDIENCE</h3>
            <h2 className="IndustriesWeServe_title__WLp9q">Industries We Serve</h2>
          </div>
          <div className="IndustriesWeServe_industriesGrid__y9r__">
            {industries.map((industry, index) => (
              <div 
                key={industry}
                className={`IndustriesWeServe_industryCard__Yj_z6 ${getAnimationClass(index)}`}
                style={{ opacity: 0 }} // Start with opacity 0, animation will bring to 1
              >
                <CheckCircleIcon />
                <span className="IndustriesWeServe_industryName__vh5sA">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}