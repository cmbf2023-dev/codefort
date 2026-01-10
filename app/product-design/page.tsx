import { Header } from "@/components/header2"
import { Session } from "@/components/session"
import { ServiceFeatures } from "@/components/service_features"
import { Projects } from "@/components/projects2"
import { WHyCodeFort } from "@/components/why_codefort"
import { Footer } from "@/components/footer2"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header page="product-design" image="/_next/service-2-hero.png"/>
      <Session page="product-design"/>
      <ServiceFeatures page="product-design"/>
     <Projects />
     <WHyCodeFort />
      <Footer />
    </main>
  )
}