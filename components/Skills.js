import styles from "../styles/Home.module.scss";
import { FaGithub } from "react-icons/fa";
import {
	DiJavascript1,
	DiCss3,
	DiHtml5,
	DiReact,
	DiRuby,
	DiJqueryLogo,
	DiSass,
} from "react-icons/di";
import {
	SiNextdotjs,
	SiRubyonrails,
	SiNodedotjs,
	SiExpress,
	SiPostgresql,
	SiFirebase,
	SiKotlin,
} from "react-icons/si";

function Skills() {
	return (
		<div className={styles.skills}>
			<h4 id="skills">Skills</h4>
			<div className={styles.tech}>
				<FaGithub />
				<DiJavascript1 />
				<DiCss3 />
				<DiHtml5 />
				<DiReact />
				<SiNextdotjs />
				<DiRuby />
				<SiRubyonrails />
				<DiJqueryLogo />
				<SiNodedotjs />
				<SiExpress />
				<DiSass />
				<SiPostgresql />
				<SiFirebase />
				<SiKotlin />
			</div>
		</div>
	);
}

export default Skills;
