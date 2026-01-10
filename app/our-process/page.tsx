import { Header } from "@/components/header2"
import { Video } from "@/components/video"
import { Companies } from "@/components/companies"
import { Industries } from "@/components/industries2"
import { Attributes } from "@/components/attributes"
import { Contact } from "@/components/contact2"
import { Footer } from "@/components/footer2"
import {HowWeWork} from "@/components/how-we-work"
import { FaqBackground } from "@/components/faq-background"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header page="our-process" image="/_next/process-background.webp"/>
      <HowWeWork />
      <FaqBackground />
      <Contact />
      <Footer />
    </main>
  )
}
