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
    <div id="Skills" className="py-20 relative">
      <h2 className="text-[35px] md:text-[50px] font-bold font-code text-left leading-tight mb-12">
        Technical <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-font_highlight to-blue-500">
          Skills
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:text-[60px] text-[40px] text-font_main my-5">
        {[
          TbBrandSupabase,
          FaGithub,
          SiJavascript,
          FaDocker,
          FaStripe,
          DiCss3,
          DiHtml5,
          DiReact,
          SiNextdotjs,
          DiRuby,
          SiJquery,
          SiTypescript,
          DiNodejs,
          SiTailwindcss,
          SiAmazonaws,
          SiExpress,
          DiSass,
          SiPostgresql,
          SiFirebase,
          SiKotlin,
          SiTerraform,
          SiObservable,
          DiJava,
          SiPixiv,
          SiThreedotjs,
          SiUnity,
          SiSupabase,
          SiAuth0,
          SiJira,
          SiCircleci,
        ].map((Icon, index) => (
          <div key={index} className="hover:text-font_highlight transition-all duration-300 hover:scale-110 cursor-default">
            <Icon />
          </div>
        ))}
      </div>
    </div>
  )
}
