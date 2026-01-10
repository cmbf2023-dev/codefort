import { Header } from "@/components/header2"
import { Session } from "@/components/session"
import { ServiceFeatures } from "@/components/service_features"
import { Projects } from "@/components/projects2"
import { WHyCodeFort } from "@/components/why_codefort"
import { Footer } from "@/components/footer2"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
       <Header page="startup-solutions" image="/_next/service-7-hero.webp"/>
      <Session page="startup"/>
      <ServiceFeatures page="startup-solutions"/>
     <Projects />
     <WHyCodeFort />
      <Footer />
    </main>
  )
}