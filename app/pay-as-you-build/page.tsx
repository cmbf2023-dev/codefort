import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { Team } from "@/components/team"
import { WhatBuild } from "@/components/whatBuild"
import { WeServe } from "@/components/we-serve"
import { OurProcess } from "@/components/our-process"
import { OurProof } from "@/components/our-proof"
import { WhyChoose } from "@/components/why-choose"
import { PricingSection } from "@/components/pricing"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact2"
import { Footer } from "@/components/footer2"
import "./data.css"
import "./index.css"

export const metadata = {
  title: 'Pay As You Build | CodeFort Tech', // Specific title
  description: 'Start with N300k Developing your Software Products with Us',
  keywords: ['software', 'coding', "web design", "App Design"],
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Problem />
      <Solution />
      <Team />
      <WhatBuild />
      <WeServe />
      <OurProcess />
      <OurProof />
      <WhyChoose />
      <PricingSection />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
