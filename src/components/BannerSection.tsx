import { Button } from "@/components/Button"
import { SiNextdotjs } from "react-icons/si"
import { TbBrandSupabase } from "react-icons/tb"
import { SiTypescript } from "react-icons/si"

export function BannerSection() {
  return (
    <div className="grid xl:grid-cols-2 xl:h-[750px] md:h-[1450px] h-[1100px] ">
      <div className="relative flex flex-col gap-6 pt-10">
        <h2 className="font-code text-xl bg-font_highlight w-fit text-background_highlight p-1 px-3 rounded-lg">
          Software Engineer
        </h2>
        <h1 className="text-[30px] md:text-[58px] font-code leading-tight">Code. Create. Innovate. Deliver</h1>
        <p className="text-[18px] text-font_main">
          With over 13 years of business management experience, my problem-solving skills have evolved to prioritize
          efficient solutions. This has made SaaS and micro SaaS my speciality.
        </p>
        <Button className="underline text-left pl-0" path="mailto: jayleaton@gmail.com">
          LETS CHAT!
        </Button>
        <div className="grid grid-cols-2 absolute top-[440px] mx-auto w-full">
          <div className="flex items-center gap-3 w-fit">
            <p className="text-[30px] md:text-[53px] text-font_light">13</p>
            <p className="text-[16px] md:text-[18px] w-[100px] font-light text-font_main">YEARS IN BUSINESS</p>
          </div>
          <div className="flex items-center gap-3 w-fit">
            <p className="text-[30px] md:text-[53px] text-font_light">30+</p>
            <p className="text-[16px] md:text-[18px] w-[100px] font-light text-font_main">PROJECTS COMPLETED</p>
          </div>
        </div>
        <div className="grid grid-cols-2 absolute top-[540px] mx-auto w-full">
          <div className="flex items-center gap-3 w-fit">
            <p className="text-[30px] md:text-[53px] text-font_light">3</p>
            <p className="text-[16px] md:text-[18px] w-[120px] md:w-[180px] font-light text-font_main">
              YEARS SOFTWARE ENGINEER
            </p>
          </div>
          <div className="flex items-center gap-3 w-fit">
            <p className="text-[30px] md:text-[53px] text-font_light">10+</p>
            <p className="text-[16px] md:text-[18px] w-[100px] font-light text-font_main">COMPANIES HELPED</p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex justify-center mt-[80px] relative">
        <div className="lg:w-[580px] lg:h-[580px] w-[80vw] h-[80vw] bg-background rounded-full mx-auto relative">
          <img src="/code-bubbles.png" alt="text bubbles" className="w-[800px] absolute top-10" />
        </div>
        <div className="absolute bottom-0 left-10 md:w-[151px] md:h-[151px] w-[80px] h-[80px] bg-logo rounded-full flex justify-center items-center md:text-[85px] text-[50px] text-red-600">
          <SiNextdotjs />
        </div>
        <div className="absolute top-10 right-0 md:w-[151px] md:h-[151px] w-[80px] h-[80px] bg-logo rounded-full flex justify-center items-center md:text-[85px] text-[50px] text-font_highlight">
          <TbBrandSupabase />
        </div>
        <div className="absolute bottom-[-30px] right-10 md:w-[151px] md:h-[151px] w-[80px] h-[80px] bg-logo rounded-full flex justify-center items-center md:text-[80px] text-[40px] text-blue-600">
          <SiTypescript />
        </div>
      </div>
    </div>
  )
}
