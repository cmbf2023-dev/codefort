"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ScrollIndicatorProps {
  sections: string[]
}

export function ScrollIndicator({ sections }: ScrollIndicatorProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const checkVisibility = () => {
      const sectionElements = sections.map((id) => document.getElementById(id)).filter(Boolean)
      
      // Check if any section is currently in view
      let anySectionInView = false
      
      for (const element of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect()
          console.log(rect.bottom)
          const isInView = rect.top < window.innerHeight && rect.bottom > 150
          if (isInView) {
            anySectionInView = true
            break
          }
        }
      }

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      if (anySectionInView) {
        // Show immediately when a section is in view
        setIsVisible(true)
      } else {
        // Hide after a delay when no sections are in view
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false)
        }, 50) // 0.5 second delay before hiding
      }
    }

    const handleScroll = () => {
      const sectionElements = sections.map((id) => document.getElementById(id)).filter(Boolean)

      let activeIndex = 0

      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            activeIndex = i
          }
        }
      }

      setCurrentSectionIndex(activeIndex)
      checkVisibility()
    }

    // Initial check
    checkVisibility()
    
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [sections])

  const handleIndicatorClick = (index: number) => {
    const sectionId = sections[index]
    const element = document.getElementById(sectionId)
    
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "center"
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={indicatorRef}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.3
          }}
          className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50"
        >
          {sections.map((sectionId, index) => {
            const isActive = index === currentSectionIndex
            const isCompleted = index < currentSectionIndex

            return (
              <div key={sectionId} className="flex flex-col items-center group">
                {/* Clickable circle indicator */}
                <motion.button
                  onClick={() => handleIndicatorClick(index)}
                  className="relative focus:outline-none"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      isActive 
                        ? "bg-blue-600 ring-4 ring-blue-100 ring-opacity-60 shadow-lg" 
                        : isCompleted 
                          ? "bg-blue-500" 
                          : "bg-blue-200"
                    } group-hover:bg-blue-400 group-hover:scale-110 transition-all duration-200`}
                  />
                  
                  {/* Tooltip on hover */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg">
                      {sectionId.replace(/-/g, ' ')}
                      <div className="absolute top-1/2 left-full -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-800"></div>
                    </div>
                  </div>
                </motion.button>

                {/* Connector line between circles */}
                {index < sections.length - 1 && (
                  <div
                    className={`w-1 h-12 transition-colors duration-300 ${
                      isCompleted || isActive ? "bg-blue-500" : "bg-blue-100"
                    } group-hover:bg-blue-300 transition-colors duration-200`}
                  />
                )}
              </div>
            )
          })}
          
          {/* Optional: Add a subtle background for better visibility */}
          <motion.div 
            className="absolute inset-0 -z-10 bg-white bg-opacity-5 backdrop-blur-sm rounded-full -m-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}