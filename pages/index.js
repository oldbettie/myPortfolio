import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Btn from "../components/Btn";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Project from "../components/Project";
import tictacdark from "../public/tictactoedark.png";

export default function Home() {
	const [lightMode, setLightMode] = useState("Dark");
	const [classMode, setClassMode] = useState("light body");
	const projects = {
		tictactoe: {
			website: "https://oldbettie.github.io/tictactoe/",
			github: "https://github.com/oldbettie/tictactoe",
			btn: "Tictactoe",
			images: tictacdark,
			about: "Simple tictactoe game using basic JS and jQuery with added light/dark mode button.",
		},
		cookBook: {
			website: "https://jayleaton-cookbook.herokuapp.com/",
			github: "https://github.com/oldbettie/cookbook",
			btn: "Cookbook",
			images: tictacdark,
			about: "Recipe finder app utilizing RESTful best practices to build a CRUD app using Ruby on Rails, Heroku and Cloudinary ",
		},
		petPals: {
			website: "https://project-2-5825e.web.app/",
			github: "https://github.com/oldbettie/Project-2",
			btn: "Petpals",
			images: tictacdark,
		},
	};

	function onBtnClick() {
		if (lightMode === "Light") {
			setLightMode("Dark");
			setClassMode(`light body`);
		} else {
			setLightMode("Light");
			setClassMode(`dark body`);
		}
	}
	return (
		<div className={classMode}>
			<div className={styles.container}>
				<Head>
					<title>Jayj Eaton Portfolio</title>
					<meta
						name="JayJ Eaton"
						content="Generated by create next app"
					/>
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossorigin
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<div className={styles.header}>
					<div className={styles.headerTitle}>
						<Link href="/">
							<h1 className={styles.title}>JJ Eaton</h1>
						</Link>
						<p className={styles.description}>
							&lt;Software Engineer/&gt;
						</p>
					</div>
					<Btn content={lightMode} onClick={onBtnClick} />
				</div>
				<hr className={styles.lineBreak} />
				<div className={styles.myLinks}>
					<a className="btnLink" href="https://github.com/oldbettie">
						<FaGithub />
					</a>
					<a className="btnLink" href="mailto: jayleaton@gmail.com">
						<MdEmail />
					</a>
					<a
						className="btnLink"
						href="https://www.linkedin.com/in/jayj-eaton/"
					>
						<FaLinkedin />
					</a>
				</div>
				{/* start of main content */}
				<div className={styles.mainContent}>
					<div className={styles.projects}>
						<Project content={projects.tictactoe} />
						<Project content={projects.cookBook} />
						<Project content={projects.petPals} />
					</div>
					<div className={styles.skills}></div>
					<div className={styles.resume}></div>
					<div className={styles.about}></div>
				</div>
				{/* end of main content */}
			</div>
		</div>
	);
}
