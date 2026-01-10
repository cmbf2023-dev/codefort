"use client"

import Image from "next/image"
import { useState } from "react"

export function Projects() {
  const [activePanel, setActivePanel] = useState(1)

  const projects = [
    {
      id: 1,
      name: "Scriptbank",
      description: "Decentralized banking system and fintech application that uses blockchain technology.",
      tags: "Finance, Security, Asset Management",
      href: "https://scriptbank.org",
    },
    {
      id: 2,
      name: "Jiamate",
      description: "Redefining The furniture Business.",
      tags: "Product design, Software development, Testing",
      href: "https://jiamate.vercel.app/",
    },
    {
      id: 3,
      name: "NFT Marketplace",
      description: "Nft Exchange: Your Gateway to Effortless Trading in NFT, Cryptocurrencies, Airtimes, and Bills!",
      tags: "Product design, Software development, Testing",
      href: "https://decentralizedwebpages.sbs",
    },
  ]

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 sm:mb-16 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Featured Projects<span className="text-accent">.</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              The work we have done & the people we have helped
            </p>
          </div>
          <div className="flex gap-4">
            <button className="p-3 border border-border rounded-full hover:bg-secondary transition-colors">
              <Image alt="arrow" width={32} height={32} src="/images/arrow-left.svg" />
            </button>
            <button className="p-3 border border-border rounded-full hover:bg-secondary transition-colors">
              <Image alt="arrow" width={32} height={32} src="/images/arrow-right.svg" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-3xl h-[400px] cursor-pointer transition-all duration-500 ${
                activePanel === project.id ? "lg:col-span-1 shadow-2xl" : "lg:col-span-1"
              }`}
              onClick={() => setActivePanel(project.id)}
            >
              <div className="absolute inset-0 bg-primary opacity-80 z-10" />
              <div className="relative z-20 h-full p-8 flex flex-col justify-end text-primary-foreground">
                <span className="inline-block bg-card/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium mb-4 w-fit">
                  {project.name}
                </span>
                <h3 className="text-xl font-bold mb-4 leading-snug">{project.description}</h3>
                <p className="text-sm text-primary-foreground/80 mb-6">{project.tags}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                >
                  View Product
                  <Image
                    alt="project image"
                    width={24}
                    height={24}
                    src="/images/learn-more.png"
                    className="brightness-0 invert"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
