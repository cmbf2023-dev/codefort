import { Header } from "@/components/header2"
import { Video } from "@/components/video"
import { Companies } from "@/components/companies"
import { Industries } from "@/components/industries2"
import { Attributes } from "@/components/attributes"
import { Contact } from "@/components/contact2"
import { Footer } from "@/components/footer2"

export const metadata = {
  title: 'About Us | CodeFort Tech', // Specific title
  description: 'Setting the pace in Software Development',
  keywords: ['software', 'coding', "web design", "App Design"],
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header page="about-us"/>
      <Video />
      <Companies />
      <Attributes />
      <Industries />
      <Contact />
      <Footer />
    </main>
  )
}
