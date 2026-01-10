import { Header } from "@/components/header2"
import { Services } from "@/components/services2"
import { Projects } from "@/components/projects2"
import { Industries } from "@/components/industries2"
import { Contact } from "@/components/contact2"
import { Footer } from "@/components/footer2"
import {TawkToChat} from "@/components/twak"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header page={"home"}  />
      <Services />
      <Projects />
      <Industries />
      <Contact />
      <Footer />
      <TawkToChat />
    </main>
  )
}
