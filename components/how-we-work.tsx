"use client"

import { useEffect, useRef, useState } from 'react';

export function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const [isStepsVisible, setIsStepsVisible] = useState(false);
  const componentRef = useRef<HTMLElement>(null);
  const processRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps = [
    { id: 1, name: "Research", icon: "/images/unselected.svg" },
    { id: 2, name: "Design", icon: "/images/unselected.svg" },
    { id: 3, name: "Develop", icon: "/images/unselected.svg" },
    { id: 4, name: "Support", icon: "/images/unselected.svg" }
  ];

  const processes = [
    {
      id: 1,
      title: "Research and Validation",
      description: [
        "Our meticulous research dives deep into understanding your vision and business goals, ensuring your project is carefully validated.",
        "By aligning our expertise with your aspirations, we set the stage for a development process that brings your dreams to life."
      ],
      deliverables: [
        "Clear business goals.",
        "Clear product goals and documentation.",
        "Clear user needs and goals.",
        "Product roadmap."
      ],
      teamMembers: [
        "Project manager",
        "Tech researcher",
        "UX researcher",
        "Domain expert"
      ],
      tools: ["Google forms", "Miro", "Google docs", "Notion", "Hotjar", "Zendesk"],
      image: "/coded/how-it-works-1.webp"
    },
    {
      id: 2,
      title: "Design",
      description: [
        "During this phase, we provide brainstorm different solutions, prototype and test out different approach to solutions ideas with your users in mind.",
        "Our great attention to detail and love for beautifully designed products/processes ensures we serve you and your customers with the best solutions."
      ],
      deliverables: [
        "Captivating visual mockups.",
        "Interactive prototypes.",
        "Responsive design.",
        "Final design assets."
      ],
      teamMembers: [
        "Project manager",
        "UI/UX designer lead",
        "Graphic designer",
        "Content strategists"
      ],
      tools: ["Figma", "Invision", "Protopie", "Rive", "Adobe XD", "Sketch"],
      image: "/coded/how-it-works-2.webp"
    },
    {
      id: 3,
      title: "Development",
      description: [
        "With your ideas in place, we embark on the development phase where innovation and creativity come to life. Our engineers collaborate with you to transform your ideas into functional and user-centric solutions.",
        "By adhering to the latest industry standards, we guarantee the delivery of top-notch software that leaves a lasting impact on your audience."
      ],
      deliverables: [
        "Scalable infrastructure setup.",
        "Comprehensive documentation.",
        "Performance optimization.",
        "Integration of third-party services."
      ],
      teamMembers: [
        "Frontend developers",
        "Project managers",
        "Backend developers",
        "QA engineers",
        "DevOps engineers"
      ],
      tools: ["React", "Angular", "Vue", "Express", "Nest", "React Native", "Flutter", "Springboot", "Laravel", "Django"],
      image: "/coded/how-it-works-3.webp"
    },
    {
      id: 4,
      title: "Maintenance and Support",
      description: [
        "At Codefort we believe that technology should empower your business, not hinder it. That's why our dedicated team of experts is committed to providing round-the-clock assistance, ensuring your systems are always functioning at their best. From troubleshooting and bug fixes to regular updates and performance optimization, we have got you covered.",
        "Our seamless support ensures your business thrives and achieves new heights of excellence."
      ],
      deliverables: [
        "Bug fixes and issue resolution.",
        "Performance monitoring and optimization.",
        "Security audits and enhancements.",
        "User support and helpdesk services.",
        "Proactive maintenance."
      ],
      teamMembers: [
        "Project manager",
        "Consultant",
        "Data Backup and recovery specialists",
        "Technical support specialists"
      ],
      tools: ["Jira", "Jenkins", "Git", "Selenium", "Splunk", "Crucible"],
      image: "/coded/how-it-works-4.webp"
    }
  ];

  // Simple reveal animation like in ServiceFeatures
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            const content = entry.target.querySelector('.how-animated-content');
            const cover = entry.target.querySelector('.how-cover');
            
            if (content) content.classList.add('revealed');
            if (cover) cover.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const containers = document.querySelectorAll('.how-animate-container');
    containers.forEach(container => {
      observer.observe(container);
    });

    return () => {
      containers.forEach(container => {
        observer.unobserve(container);
      });
    };
  }, []);

  // Handle scroll-based step activation
  useEffect(() => {
    const handleScroll = () => {
      const processesSection = document.querySelector('.HowWeWork_allProcesses__8ZzhU');
      if (!processesSection || !stepsRef.current) return;

      const processesRect = processesSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Show/hide steps based on processes section visibility
      console.log("bottom: ", processesRect.bottom, "height: ", viewportHeight, viewportHeight * 0.6)
      if (processesRect.top <= viewportHeight * 0.35 && processesRect.bottom >= 500) {
        setIsStepsVisible(true);
        
        // Find which process is most visible
        let mostVisibleIndex = -1;
        let maxVisibility = 0;
        
        processRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            const visibility = visibleHeight / rect.height;
            
            if (visibility > maxVisibility && visibility > 0.3) {
              maxVisibility = visibility;
              mostVisibleIndex = index;
            }
          }
        });
        
        if (mostVisibleIndex >= 0) {
          setActiveStep(mostVisibleIndex + 1);
        }
      } else {
        setIsStepsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Update step icons based on active step
  const updatedSteps = steps.map((step, index) => ({
    ...step,
    icon: step.id <= activeStep ? "/images/selected.svg" : "/images/unselected.svg"
  }));

  return (
    <section ref={componentRef} className="HowWeWork_wrapper__UefUx">
      <div className="HowWeWork_header__pzIiG">
        <div className="how-animate-container">
          <div className="how-animated-content">
            <h3 className="HowWeWork_sectionTitle__Jx7iQ">
              How we work<span className="HowWeWork_sectionTitle__Jx7iQ HowWeWork_dot___bmvp">.</span>
            </h3>
          </div>
          <div className="how-cover"></div>
        </div>
        <div className="how-animate-container">
          <div className="how-animated-content">
            <p className="HowWeWork_sectionBody__POd95">
              The steps we take to help you achieve your goals.
            </p>
          </div>
          <div className="how-cover"></div>
        </div>
      </div>
      
      <div className="HowWeWork_mainWrapper__Gri10">
        <div 
          ref={stepsRef}
          className={`HowWeWork_steps__6wo_D ${isStepsVisible ? 'HowWeWork_stepsShow__3zC4v' : ''}`}
        >
          <div className="HowWeWork_stepsInner__ms51S">
            <div className="HowWeWork_line__qHiJQ">
              <div className={`HowWeWork_lineInner__bozv2 ${
                activeStep === 2 ? "HowWeWork_lineInner1__b0dfE":"false"
              } ${activeStep === 3 ? "HowWeWork_lineInner2__BJ3_e":"false"} ${activeStep === 4 ? "HowWeWork_lineInner3__WGk7u":"false"}`}></div>
            </div>
            {updatedSteps.map((step) => (
              <div key={step.id} className="HowWeWork_stepWrapper__prLN_">
                <img 
                  alt={step.name} 
                  loading="lazy" 
                  width="16" 
                  height="16" 
                  decoding="async"
                  style={{ color: "transparent" }} 
                  src={step.icon}
                />
                <p className={`HowWeWork_stepText__Onfk7 ${
                  step.id <= activeStep ? "HowWeWork_stepTextEnabled__CdNRn" : "false"
                }`}>
                  {step.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="HowWeWork_allProcesses__8ZzhU">
          {processes.map((process, processIndex) => (
            <div 
              key={process.id} 
              ref={el => {processRefs.current[processIndex] = el}}
              className="HowWeWork_process__HLBta"
            >
              <div className="how-animate-container">
                <div className="how-animated-content">
                  <div className="HowWeWork_headerTexts__MJazK">
                    <p className="HowWeWork_headerText__Cx24R">{process.id}.</p>
                    <h3 className="HowWeWork_headerText__Cx24R">{process.title}</h3>
                  </div>
                </div>
                <div className="how-cover"></div>
              </div>

              <div className="HowWeWork_processSection__sh4bF">
                {process.description.map((desc, index) => (
                  <div key={index} className="how-animate-container">
                    <div className="how-animated-content">
                      <p className="HowWeWork_headerBodyText__0in5h">{desc}</p>
                    </div>
                    <div className="how-cover"></div>
                  </div>
                ))}
              </div>

              <div className="HowWeWork_processSection__sh4bF">
                <div className="how-animate-container">
                  <div className="how-animated-content">
                    <h3 className="HowWeWork_processTitle__wxr_n">Deliverables</h3>
                  </div>
                  <div className="how-cover"></div>
                </div>
                <div className="HowWeWork_processList__G0cf_">
                  {process.deliverables.map((item, index) => (
                    <div key={index} className="how-animate-container">
                      <div className="how-animated-content">
                        <div className="HowWeWork_processItem__c_cnm">
                          <li className="HowWeWork_processItemText__qMHoR">{item}</li>
                        </div>
                      </div>
                      <div className="how-cover"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="HowWeWork_processSection__sh4bF">
                <div className="how-animate-container">
                  <div className="how-animated-content">
                    <h3 className="HowWeWork_processTitle__wxr_n">Team members</h3>
                  </div>
                  <div className="how-cover"></div>
                </div>
                <div className="HowWeWork_processListGrid__nRL8g">
                  {process.teamMembers.map((member, index) => (
                    <div key={index} className="how-animate-container">
                      <div className="how-animated-content">
                        <div className="HowWeWork_processItem__c_cnm">
                          <li className="HowWeWork_processItemText__qMHoR">{member}</li>
                        </div>
                      </div>
                      <div className="how-cover"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="HowWeWork_toolsWrapper__O61gV">
                <img 
                  alt="tool icon" 
                  loading="lazy" 
                  width="32" 
                  height="32" 
                  decoding="async"
                  style={{ color: "transparent" }} 
                  srcSet="/coded/tools.webp, /coded/tools.webp 2x" 
                  src="/coded/tools.webp" 
                />
                <div className="HowWeWork_tools__Godl6">
                  {process.tools.map((tool, index) => (
                    <div key={index} className="how-animate-container">
                      <div className="how-animated-content">
                        <p className="HowWeWork_tool__veU0x">
                          {tool}{index < process.tools.length - 1 ? "," : ""}
                        </p>
                      </div>
                      <div className="how-cover"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="HowWeWork_processImageWrapper__OAonp">
                <img 
                  alt="process image" 
                  loading="lazy" 
                  decoding="async"
                  className="HowWeWork_processImage__LtqqE"
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
                  srcSet={`${process.image}, ${process.image}, ${process.image}, ${process.image}, ${process.image}, ${process.image}, ${process.image}, ${process.image}`}
                  src={process.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Animation styles like ServiceFeatures */
        .how-animate-container {
          position: relative !important;
          width: fit-content !important;
          overflow: hidden !important;
        }
        
        .how-animated-content {
          opacity: 0 !important;
          transform: translateY(75px) translateZ(0px) !important;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
          height: 100% !important;
        }
        
        .how-cover {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 4px !important;
          background-color: rgb(59, 133, 183) !important;
          transform: translateY(0) !important;
          opacity: 1 !important;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                      opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
          z-index: 20 !important;
          pointer-events: none !important;
        }
        
        /* Revealed states */
        .how-animate-container.revealed .how-animated-content,
        .how-animated-content.revealed {
          opacity: 1 !important;
          transform: translateY(0) translateZ(0px) !important;
        }
        
        .how-animate-container.revealed .how-cover,
        .how-cover.revealed {
          transform: translateY(100%) !important;
          opacity: 0 !important;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
          .how-animate-container {
            width: 100% !important;
          }
          
          .how-animated-content,
          .how-cover {
            transition-duration: 0.6s !important;
          }
        }
      `}</style>
    </section>
  );
}