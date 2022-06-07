import Btn from "./Btn";
import styles from "../styles/Home.module.scss";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

function Project({ content }) {
	const [active, setActive] = useState(false);
	return (
		<div className={styles.projectCard}>
			<div className={styles.directLinks}>
				<div className={styles.leftBtns}>
					<a href={content.website}>
						<Btn content={content.btn} />
					</a>
					<Btn content={"Info"} onClick={() => setActive(!active)} />
				</div>
				<a href={content.github} className={`${styles.faIcon} btnLink`}>
					<FaGithub />
				</a>
			</div>
			<div className={styles.cardContent}>
				{active && <p>{content.about}</p>}
				<a href={content.website}>
					<img src={content.images.src} alt="" />
				</a>
				{/* <Image src={content.images.src} width="400px" height="300px" /> */}
			</div>
		</div>
	);
}

export default Project;
