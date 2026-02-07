import { Button } from "@/components/Button"
import { SiNextdotjs } from "react-icons/si"
import { TbBrandSupabase } from "react-icons/tb"
import { SiTypescript } from "react-icons/si"

export function BannerSection() {
  return (
    <div className="grid xl:grid-cols-2  items-center py-20 relative overflow-hidden">
      <div className="relative flex flex-col gap-6 xl:pt-0 z-10">
        <h2 className="font-code text-sm md:text-xl bg-font_highlight/10 border border-font_highlight text-font_highlight w-fit p-1 px-4 rounded-full tracking-wide">
          Software Engineer
        </h2>
        <h1 className="text-[35px] md:text-[64px] font-code leading-tight font-bold text-white">
          Code. Create. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-font_highlight to-blue-500">
            Innovate. Deliver.
          </span>
        </h1>
        <p className="text-[18px] text-font_main leading-relaxed max-w-lg">
          With over 15 years of business management experience and 5 years as a Software Engineer, my problem-solving
          skills have evolved to prioritize efficient solutions. This has made SaaS and micro SaaS my speciality.
        </p>
        <p className="text-[18px] text-font_main leading-relaxed max-w-lg">
          AI has changed how we produce software. I leverage the latest tooling to ensure I can contribute as much as possible to any project while ensuring projects remain maintainable long term.
        </p>
        <Button
          className="bg-font_highlight text-background_highlight font-bold py-3 px-6 rounded-lg w-fit hover:bg-opacity-90 transition-all hover:scale-105"
          path="mailto: jayleaton@gmail.com"
        >
          LET'S CHAT!
        </Button>
        <div className="grid grid-cols-2 gap-y-8 mt-12 w-full">
          <div className="flex items-center gap-3 w-fit">
            <p className="text-[30px] md:text-[53px] text-font_light font-bold">15</p>
            <p className="text-[14px] md:text-[16px] w-[100px] font-light text-font_main leading-tight">
              YEARS IN BUSINESS
            </p>
          </div>
          <div className="flex items-center gap-3 w-fit">
            <p className="text-[30px] md:text-[53px] text-font_light font-bold">30+</p>
            <p className="text-[14px] md:text-[16px] w-[100px] font-light text-font_main leading-tight">
              PROJECTS COMPLETED
            </p>
          </div>
          <div className="flex items-center gap-3 w-fit">
            <p className="text-[30px] md:text-[53px] text-font_light font-bold">5</p>
            <p className="text-[14px] md:text-[16px] w-[120px] md:w-[180px] font-light text-font_main leading-tight">
              YEARS SOFTWARE ENGINEER
            </p>
          </div>
          <div className="flex items-center gap-3 w-fit">
            <p className="text-[30px] md:text-[53px] text-font_light font-bold">12+</p>
            <p className="text-[14px] md:text-[16px] w-[100px] font-light text-font_main leading-tight">
              COMPANIES HELPED
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex justify-center mt-[80px] xl:mt-0 relative z-10">
        <div className="lg:w-[580px] lg:h-[580px] w-[80vw] h-[80vw] bg-background_highlight/30 rounded-full mx-auto relative backdrop-blur-sm border border-white/5 shadow-2xl">
          <img src="/code-bubbles.png" alt="text bubbles" className="w-[800px] absolute top-10 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-0 left-10 md:w-[151px] md:h-[151px] w-[80px] h-[80px] bg-logo rounded-full flex justify-center items-center md:text-[85px] text-[50px] text-white shadow-xl shadow-red-500/20 border border-white/10 hover:scale-110 transition-transform duration-300">
          <SiNextdotjs />
        </div>
        <div className="absolute top-10 right-0 md:w-[151px] md:h-[151px] w-[80px] h-[80px] bg-logo rounded-full flex justify-center items-center md:text-[85px] text-[50px] text-font_highlight shadow-xl shadow-font_highlight/20 border border-white/10 hover:scale-110 transition-transform duration-300">
          <TbBrandSupabase />
        </div>
        <div className="absolute bottom-[-30px] right-10 md:w-[151px] md:h-[151px] w-[80px] h-[80px] bg-logo rounded-full flex justify-center items-center md:text-[80px] text-[40px] text-blue-500 shadow-xl shadow-blue-500/20 border border-white/10 hover:scale-110 transition-transform duration-300">
          <SiTypescript />
        </div>
      </div>
    </div>
  )
}
