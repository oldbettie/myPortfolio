import { FaGithub, FaStripe, FaDocker } from "react-icons/fa"
import { DiCss3, DiHtml5, DiReact, DiRuby, DiSass, DiNodejs, DiJava } from "react-icons/di"
import {
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiKotlin,
  SiTerraform,
  SiObservable,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiAmazonaws,
  SiJquery,
  SiPixiv,
  SiThreedotjs,
  SiUnity,
  SiSupabase,
  SiAuth0,
  SiJira,
  SiCircleci,
} from "react-icons/si"
import { TbBrandSupabase } from "react-icons/tb"
export function Skills() {
  return (
    <div id="Skills" className="py-5">
      <h2 className="text-[45px] font-code text-font_light mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 md:text-[76px] text-[55px] text-font_main my-5">
        <TbBrandSupabase />
        <FaGithub />
        <SiJavascript />
        <FaDocker />
        <FaStripe />
        <DiCss3 />
        <DiHtml5 />
        <DiReact />
        <SiNextdotjs />
        <DiRuby />
        <SiJquery />
        <SiTypescript />
        <DiNodejs />
        <SiTailwindcss />
        <SiAmazonaws />
        <SiExpress />
        <DiSass />
        <SiPostgresql />
        <SiFirebase />
        <SiKotlin />
        <SiTerraform />
        <SiObservable />
        <DiJava />
        <SiPixiv />
        <SiThreedotjs />
        <SiUnity />
        <SiSupabase />
        <SiAuth0 />
        <SiJira />
        <SiCircleci />
      </div>
    </div>
  )
}
