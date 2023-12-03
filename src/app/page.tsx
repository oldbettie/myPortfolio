import { Navigation } from "@/components/Navigation"
import { Page } from "@/components/Page"
import { BannerSection } from "@/components/BannerSection"

export default function Home() {
  return (
    <Page>
      <Navigation/>
      <BannerSection/>
      <h2 className='relative'>test</h2>
    </Page>
  )
}
