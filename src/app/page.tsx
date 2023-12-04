import { Navigation } from "@/components/Navigation"
import { Content } from "@/components/Content"
import { BannerSection } from "@/components/BannerSection"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { About } from "@/components/About"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <div className="bg-background_highlight top-0 w-full">
        <Content>
          <Navigation />
          <BannerSection />
        </Content>
      </div>
      <div className="bg-background h-full w-full">
        <Content>
          <Projects />
          <Skills />
          <About />
          <Footer />
        </Content>
      </div>
    </>
  )
}
