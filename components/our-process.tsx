"use client"

import { useEffect, useRef, useState } from 'react';

export function OurProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Initial Meeting",
      description: "We understand your vision and goals."
    },
    {
      number: 2,
      title: "Feature Planning",
      description: "Together, we map features into MVP → Growth → Scale."
    },
    {
      number: 3,
      title: "Plan Selection",
      description: "Choose the monthly plan that fits your budget & timeline."
    },
    {
      number: 4,
      title: "First Commitment",
      description: "Get your milestone roadmap."
    },
    {
      number: 5,
      title: "Monthly Development Cycle",
      description: "Deliverables every month, with reviews."
    },
    {
      number: 6,
      title: "Milestone Completion",
      description: "Each milestone = usable product increments."
    }
  ];

  const leftColumnSteps = steps.slice(0, 3);
  const rightColumnSteps = steps.slice(3);

  const connectorSVG = (
    <svg width="30" height="78" viewBox="0 0 30 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="OurProcess_connector__ilAiP">
      <path d="M16.4132 5.12938C16.7536 5.49667 17.0795 5.82324 17.4326 6.11028C17.4397 6.1146 17.4476 6.11311 17.4553 6.10605C17.4629 6.09898 17.4698 6.08668 17.475 6.07089C17.4802 6.05511 17.4835 6.03664 17.4844 6.01809C17.4853 5.99955 17.4838 5.98187 17.48 5.96756C17.3656 5.60061 17.2117 5.31913 17.0303 5.1453C16.8488 4.97148 16.6449 4.91006 16.4346 4.9659C16.4269 4.96877 16.4192 4.97749 16.4129 4.99076C16.4066 5.00403 16.4019 5.02113 16.3994 5.03952C16.397 5.05791 16.3971 5.07659 16.3996 5.09278C16.402 5.10898 16.4068 5.12182 16.4132 5.12938Z" fill="#17C2C2" />
      <path d="M22.5529 76.6661C22.2289 81.2137 19.5352 70.891 17.2143 70.0798C17.2143 70.0798 17.1473 70.0737 17.154 69.9299C17.1608 69.7861 17.2312 69.7662 17.2312 69.7662C18.8458 69.3363 20.1932 71.6523 21.3255 73.6835C18.5829 58.2617 11.9541 59.3804 3.71206 58.2192C2.01076 57.9795 2.51223 55.31 3.28487 53.6238C5.25885 50.0991 7.92484 48.7674 10.1129 46.6041C12.8255 44.095 16.0675 42.0203 18.6967 38.7603C19.584 37.6598 19.714 36.2037 18.6797 35.8884C16.718 35.2861 14.246 35.3646 12.2401 35.1154C11.0991 34.9952 9.91029 35.0571 8.79508 34.5375C7.96059 34.2878 7.76591 32.1875 8.6408 30.9651C11.2171 27.8263 19.3008 25.1311 21.2785 18.416C23.8359 9.72131 18.4809 1.61567 15.396 1.23622C15.3762 1.23372 15.3591 1.21221 15.3484 1.17633C15.3376 1.14045 15.3341 1.0931 15.3385 1.04451C15.3448 0.975439 15.3621 0.910219 15.3865 0.863206C15.4109 0.816192 15.4404 0.79123 15.4686 0.793809C19.4893 0.7258 25.6409 11.9663 21.0985 21.4247C18.6802 26.4556 13.7734 28.0208 10.4058 31.4574C10.2238 31.643 9.65758 32.2792 10.4089 32.2666C13.6049 32.2045 16.8443 31.9494 19.9326 33.0881C22.7332 34.3266 21.1323 39.2668 19.0833 41.5268C15.33 46.2386 10.5234 49.5777 6.65605 53.6855C6.04119 54.3383 5.89375 54.9892 6.61735 55.0921C13.6469 56.082 20.01 58.4763 21.6859 72.3798C21.8846 68.7215 22.6198 64.5161 24.0296 62.1556C24.0296 62.1556 24.0852 62.0399 24.1243 62.117C24.1633 62.1941 24.1228 62.3322 24.1228 62.3322C23.0375 67.1069 22.8114 73.0448 22.5529 76.6661ZM9.01991 33.1111C9.00735 33.1546 9.00878 33.139 9.01991 33.1111V33.1111ZM20.0611 36.8841C20.0699 36.9164 20.0709 36.906 20.0611 36.8841V36.8841Z" fill="#17C2C2" />
      <path d="M18.0111 6.74453C19.3035 9.23939 20.6435 13.112 20.0196 17.8213C20.0176 17.8319 20.0172 17.8432 20.0185 17.853C20.0198 17.8629 20.0227 17.8705 20.0266 17.8745C20.0305 17.8784 20.0352 17.8784 20.0397 17.8745C20.0442 17.8705 20.0482 17.8629 20.051 17.8531C21.4759 13.2906 19.8518 7.49858 18.0315 6.66236C18.0274 6.6578 18.0223 6.65776 18.0175 6.66225C18.0127 6.66673 18.0084 6.67536 18.0057 6.68626C18.003 6.69716 18.0021 6.70942 18.0031 6.72034C18.0041 6.73127 18.007 6.73997 18.0111 6.74453Z" fill="#17C2C2" />
      <path d="M10.1592 43.2758C10.0192 43.2385 9.87181 43.2777 9.72726 43.3906C9.58272 43.5035 9.44456 43.6873 9.32247 43.9293C9.31011 43.9551 9.30041 43.9875 9.29444 44.0228C9.28848 44.0581 9.28649 44.0949 9.28869 44.1291C9.29089 44.1633 9.29719 44.1936 9.3069 44.2166C9.31661 44.2397 9.32935 44.2545 9.34369 44.2595C9.48367 44.2967 9.6311 44.2576 9.77564 44.1447C9.92019 44.0318 10.0583 43.8479 10.1804 43.606C10.1928 43.5801 10.2025 43.5477 10.2085 43.5125C10.2144 43.4772 10.2164 43.4404 10.2142 43.4062C10.212 43.3719 10.2057 43.3416 10.196 43.3186C10.1863 43.2956 10.1736 43.2808 10.1592 43.2758Z" fill="#17C2C2" />
      <path d="M8.34639 44.8656C6.27804 45.2173 2.78765 47.5477 2.07646 53.0945C2.07466 53.1143 2.07559 53.1337 2.07912 53.1497C2.08266 53.1657 2.08859 53.1774 2.09597 53.1829C2.10335 53.1884 2.11176 53.1874 2.11985 53.1801C2.12795 53.1728 2.13527 53.1595 2.14066 53.1424C3.44189 48.4085 6.30384 47.0317 8.34719 45.0443C8.35728 45.0396 8.36691 45.0258 8.37397 45.0057C8.38103 44.9857 8.38493 44.9611 8.38483 44.9374C8.38472 44.9137 8.38061 44.8929 8.37341 44.8794C8.3662 44.8659 8.35648 44.861 8.34639 44.8656Z" fill="#17C2C2" />
      <path d="M15.194 63.4046C16.0548 63.9998 16.8423 64.9518 17.5252 66.223C17.53 66.2325 17.5364 66.2367 17.5432 66.2348C17.55 66.2328 17.5567 66.2249 17.562 66.2125C17.5673 66.2001 17.5708 66.1842 17.5718 66.1679C17.5729 66.1516 17.5713 66.1361 17.5675 66.1244C17.1051 64.2911 16.1788 63.2295 15.2148 63.283C15.1825 63.2722 15.1657 63.3862 15.194 63.4046Z" fill="#17C2C2" />
    </svg>
  );

  return (
    <section 
      ref={sectionRef}
      className="OurProcess_mainSection__LRGoV"
    >
      <div className="OurProcess_section__a3tY0">
        <div className={`OurProcess_backgroundWrapper__pJK6I transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <svg width="1440" height="614" viewBox="0 0 1440 614" fill="none" xmlns="http://www.w3.org/2000/svg" className="OurProcess_backgroundSvg__jxAmL">
            <g opacity="0.3">
              <path opacity="0.3" d="M799.244 1059.27C853.381 1109.85 830.528 883.47 890.266 797.064C890.266 797.064 892.159 794.803 890.549 793.089C888.94 791.375 886.691 793.398 886.691 793.398C835.361 840.147 818.815 915.109 805.742 979.246C734.209 682.734 938.582 482.127 1167.61 198.395C1214.89 139.827 1174.03 120.259 1134.92 122.73C1042.7 139.568 951.837 208.397 866.75 250.499C762.959 305.019 647.997 382.597 539.263 424.309C502.564 438.382 484.462 423.04 511.536 385.157C562.847 313.243 635.733 233.879 691.8 165.276C723.906 126.541 759.194 88.7003 786.622 45.4369C808.513 14.9339 793.554 -19.6304 756.019 -7.60082C650.019 34.02 387.712 260.767 264.035 234.842C103.991 201.17 180.56 -81.9867 266.826 -187.443C267.378 -188.12 267.666 -188.965 267.627 -189.797C267.588 -190.63 267.226 -191.381 266.619 -191.89C265.756 -192.612 264.611 -192.928 263.438 -192.766C262.264 -192.604 261.157 -191.978 260.36 -191.027C142.398 -61.1426 73.3948 290.066 298.849 269.43C418.832 258.382 577.355 119.796 709.368 56.4351C716.501 53.008 739.27 43.1407 717.228 67.4122C623.381 170.549 526.374 272.503 447.47 388.275C377.94 496.027 473.186 510.352 555.169 474.073C710.962 415.305 883.992 303.824 1037.18 233.227C1061.53 222 1072.23 225.952 1052.13 250.876C856.786 492.863 694.686 732.045 782.417 973.447C740.673 930.736 677.901 898.129 613.577 912.264C613.577 912.264 610.818 912.518 610.437 914.824C610.056 917.13 612.595 917.668 612.595 917.668C691.173 946.542 756.118 1019 799.244 1059.27ZM766.047 33.5781C766.841 33.7544 766.645 33.5908 766.047 33.5781V33.5781ZM481.022 443.478C481.082 444.199 480.952 444.09 481.022 443.478V443.478Z" fill="#00FFFF" />
              <path d="M244.581 -28.3651C231.394 47.2129 230.359 142.857 294.832 185.862C294.995 185.939 295.118 186.077 295.178 186.251C295.237 186.425 295.228 186.622 295.153 186.802C295.077 186.983 294.941 187.135 294.77 187.229C294.599 187.322 294.406 187.351 294.229 187.31C207.83 172.337 198.293 41.6511 243.179 -28.8067C243.255 -29.0023 243.401 -29.1667 243.586 -29.2636C243.771 -29.3606 243.98 -29.3822 244.166 -29.3236C244.352 -29.2651 244.5 -29.1312 244.578 -28.9514C244.656 -28.7717 244.657 -28.5608 244.581 -28.3651Z" fill="#00FFFF" />
              <path d="M832.571 207.347C836.289 202.292 840.974 198.023 846.3 194.838C851.626 191.653 857.463 189.63 863.403 188.91C864.017 188.856 864.618 188.975 865.139 189.256C865.66 189.536 866.079 189.966 866.352 190.497C866.624 191.029 866.738 191.641 866.68 192.267C866.623 192.892 866.398 193.505 866.028 194.039C862.311 199.094 857.625 203.363 852.299 206.548C846.973 209.733 841.136 211.756 835.197 212.476C834.582 212.53 833.981 212.411 833.46 212.131C832.94 211.85 832.52 211.421 832.248 210.889C831.976 210.358 831.862 209.745 831.919 209.12C831.976 208.494 832.202 207.881 832.571 207.347Z" fill="#00FFFF" />
              <path d="M901.175 169.724C964.97 107.165 1089.69 24.9407 1164.94 76.3624C1165.19 76.5691 1165.35 76.8606 1165.41 77.1909C1165.46 77.5212 1165.41 77.8713 1165.24 78.1853C1165.08 78.4994 1164.83 78.7595 1164.52 78.9243C1164.21 79.0891 1163.87 79.149 1163.54 79.0947C1079.06 57.7948 982.045 132.392 902.907 172.151C902.567 172.417 902.15 172.544 901.747 172.504C901.344 172.464 900.989 172.261 900.759 171.939C900.529 171.617 900.444 171.203 900.522 170.788C900.6 170.372 900.835 169.99 901.175 169.724Z" fill="#00FFFF" />
            </g>
          </svg>
        </div>
        <div className="OurProcess_container__KGh7o">
          <div className={`OurProcess_headerWrapper__2t9hE transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ opacity: 1, transform: "none" }}>
            <h3 className={`OurProcess_subtitle__cvubV transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              SIMPLE & TRANSPARENT
            </h3>
            <h2 className={`OurProcess_title__oIv9s transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Our Process
            </h2>
          </div>
          <div className="OurProcess_stepsContainer__gihM5">
            <div className="OurProcess_leftColumn__eBc08">
              {leftColumnSteps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`OurProcess_stepWrapper__fzWoT transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                  style={{ 
                    transitionDelay: isVisible ? `${600 + index * 200}ms` : '0ms',
                    opacity: 1, 
                    transform: "none" 
                  }}
                >
                  <div className="OurProcess_step__6FUJt">
                    <div className={`OurProcess_stepNumber__0nwef transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                      {step.number}
                    </div>
                    <div className="OurProcess_stepContent__YqM46">
                      <h3 className={`OurProcess_stepTitle__NAJfS transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                        {step.title}
                      </h3>
                      <p className={`OurProcess_stepDescription__dQXCc transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < leftColumnSteps.length - 1 && connectorSVG}
                </div>
              ))}
            </div>
            <div className="OurProcess_rightColumn__OAj7U">
              {rightColumnSteps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`OurProcess_stepWrapper__fzWoT transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                  style={{ 
                    transitionDelay: isVisible ? `${600 + (index + 3) * 200}ms` : '0ms',
                    opacity: 1, 
                    transform: "none" 
                  }}
                >
                  <div className="OurProcess_step__6FUJt">
                    <div className={`OurProcess_stepNumber__0nwef transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                      {step.number}
                    </div>
                    <div className="OurProcess_stepContent__YqM46">
                      <h3 className={`OurProcess_stepTitle__NAJfS transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                        {step.title}
                      </h3>
                      <p className={`OurProcess_stepDescription__dQXCc transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < rightColumnSteps.length - 1 && connectorSVG}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}