import Image from "next/image";
import Btn from "./Btn";
import styles from "../styles/Home.module.scss";
import { FaGithub } from "react-icons/fa";

function Project({ content }) {
	console.log(content);
	return (
		<div className={styles.projectCard}>
			<div className={styles.directLinks}>
				<a href={content.website}>
					<Btn content={content.btn} />
				</a>
				<a href={content.github} className={`${styles.faIcon} btnLink`}>
					<FaGithub />
				</a>
			</div>
			<div className={styles.cardContent}>
				<p>{content.about}</p>
				<Image src={content.images.src} width="400px" height="300px" />
			</div>
		</div>
	);
}

export default Project;
