import styles from "../styles/Home.module.scss";
import { FaGithub } from "react-icons/fa";
import {
  DiCss3,
  DiHtml5,
  DiReact,
  DiRuby,
  DiSass,
  DiNodejs,
  DiJava,
} from "react-icons/di";
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
} from "react-icons/si";

function Skills() {
  return (
    <div className={styles.skills}>
      <h4 id="skills">Skills</h4>
      <div className={styles.tech}>
        <FaGithub />
        <SiJavascript />
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
  );
}

export default Skills;
