import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Btn from "../components/Btn";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Project from "../components/Project";
import tictacdark from "../public/tictactoedark.png";
import cookbook from "../public/cookbook.png";
import petpals from "../public/petpals.png";
import teamnotes from "../public/teamnotes.png";
import Skills from "../components/Skills";
import About from "../components/About";

export default function Home() {
  const [lightMode, setLightMode] = useState("Dark");
  const [classMode, setClassMode] = useState("light body");
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("#07020d");
  const projects = {
    tictactoe: {
      website: "https://oldbettie.github.io/tictactoe/",
      github: "https://github.com/oldbettie/tictactoe",
      btn: "<Tictactoe />",
      images: tictacdark,
      about:
        "Simple tictactoe game using basic JS and jQuery with added light/dark mode button. ",
    },
    cookBook: {
      website: "https://jayleaton-cookbook.herokuapp.com/",
      github: "https://github.com/oldbettie/cookbook",
      btn: "<Cookbook />",
      images: cookbook,
      about:
        "Recipe finder app to find, post, edit or delete recipes utilizing RESTful best practices to build a CRUD app using Ruby on Rails, Heroku and Cloudinary ",
    },
    petPals: {
      website: "https://project-2-5825e.web.app/",
      github: "https://github.com/oldbettie/Project-2",
      btn: "<Petpals />",
      images: petpals,
      about:
        "Pet adoption site based on Tinder where u can swipe left or right on pets then communicate with the owner about adoption. built using React, FireBase, Framer Motion, Javascript and SCSS Modules with a mobile first design.",
    },
    teamNotes: {
      website: "https://noteteams.netlify.app/",
      github: "https://github.com/oldbettie/notepad",
      btn: "<Team Notes />",
      images: teamnotes,
      about:
        "Team Notes is the final project of SEI-52, I wanted to build an application to allow students or groups to collaborate on notes from the session. Built using React for the front-end and an Express/mySQL back-end that can also be found on my github. Utilizing RESTful best practices and a mobile friendly design it is available on all screen sizes but best experienced on desktop due to the canvas style of the main component.",
    },
  };

  // darkmode #f1e9db
  // light #07020d
  function onBtnClick() {
    if (lightMode === "Light") {
      setLightMode("Dark");
      setClassMode(`light body`);
      setColor("#07020d");
    } else {
      setLightMode("Light");
      setClassMode(`dark body`);
      setColor("#f1e9db");
    }
  }
  return (
    <div className={classMode}>
      <div className={styles.container}>
        <Head>
          <title>Jayj Eaton Portfolio</title>
          <meta name="JayJ Eaton" content="personal portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <Link href="/">
              <h1>JJ Eaton</h1>
            </Link>
            <p>&lt;Software Engineer /&gt;</p>
          </div>
          <div className={styles.navBtns}>
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
              <Btn content="Resume" />
            </a>

            <Btn content={lightMode} onClick={onBtnClick} />
          </div>
        </div>
        <hr className={styles.lineBreak} />
        <div className={styles.subheader}>
          <div className={styles.inPageJump}>
            <a href="#projects" className="btnLink">
              <h4>Projects</h4>
            </a>
            |
            <a href="#skills" className="btnLink">
              <h4>Skills</h4>
            </a>
            |
            <a href="#about" className="btnLink">
              <h4>About</h4>
            </a>
          </div>
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
        </div>

        <div>
          <div className={styles.projects} id="projects">
            <div className={styles.latestUpdate}>
              <p>
                <span>Please note </span> this has not been updated in some time
                and although I do plan on updating it at some point. To see what
                I am currently working on you can checkout my{" "}
                <a href="https://github.com/oldbettie">github</a> or see my
                latest work at{" "}
                <a href="https://www.globalpoker.com">www.globalpoker.com</a>{" "}
                you will need a vpn to access the site and I cannot share any of
                the code base as it is company policy.
              </p>
              <p className={styles.latestUpdate}>
                Some production code I have contributed to include:
              </p>
              <ul className={styles.list}>
                <li>
                  Ring Master - Casino slots game built from scratch in Pixi.js.
                </li>
                <li>
                  Hand Counter - Read Modal that tracks the count of hands a
                  user has played of poker.
                </li>
                <li>
                  Library Adjustments - Updating the React game-client website.
                </li>
                <li>
                  <a href="https://globalpokeracademy.com/">
                    Global Poker Academy
                  </a>{" "}
                  - A new blog format website to help players better learn
                  poker.
                </li>
                <li>
                  Poker Only Downtime - Adjust the website to allow all other
                  services to remain available when poker is under maintenance.
                </li>
              </ul>
            </div>
            <Project content={projects.teamNotes} />
            <Project content={projects.petPals} />
            <button
              style={{ color: color, border: `2px solid ${color}` }}
              className={styles.moreProjects}
              onClick={() => setActive(!active)}
            >
              {!active ? "More Projects" : "Less Projects"}
            </button>
            {active && (
              <div>
                <Project content={projects.cookBook} />
                <Project content={projects.tictactoe} />
              </div>
            )}
          </div>
          <hr />
          <div id="skills">
            <Skills />
          </div>
          <hr />
          <div className={styles.about} id="about">
            <About />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
