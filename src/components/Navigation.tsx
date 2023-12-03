"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { UseMediaQuery } from "@/hooks/useMediaQuery";

const getIsDesktop = (): boolean => {
  return UseMediaQuery(650);
};

enum NavSections {
  "PROJECTS" = "Projects",
  "SKILLS" = "Skills",
  "ABOUT" = "About",
  "RESUME" = "Resume",
}

export function Navigation() {
  const isDesktop = getIsDesktop();
  const [activeSection, setActiveSection] = useState<NavSections>(
    NavSections.PROJECTS
  );

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "Projects")
              setActiveSection(NavSections.PROJECTS);
            if (entry.target.id === "Skills")
              setActiveSection(NavSections.SKILLS);
            if (entry.target.id === "About")
              setActiveSection(NavSections.ABOUT);
            else setActiveSection(NavSections.PROJECTS);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  if (isDesktop) {
    return (
      <div className="flex w-full justify-between text-center ">
        <h1 className="font-interface text-4xl text-font_main">JJ Eaton</h1>

        <div className="w-fit">
          <div className="text-right lg:space-x-6 space-x-2 pl-5 text-[16px]">
            <Button
              path="#Projects"
              className={`font-code ${
                activeSection === NavSections.PROJECTS
                  ? "text-font_highlight"
                  : "#FFF"
              }`}
              click={() => setActiveSection(NavSections.PROJECTS)}
            >
              {activeSection === NavSections.PROJECTS
                ? `< Projects />`
                : `Projects`}
            </Button>
            <Button
              path="#Skills"
              className={`font-code ${
                activeSection === NavSections.SKILLS
                  ? "text-font_highlight"
                  : "#FFF"
              }`}
              click={() => setActiveSection(NavSections.SKILLS)}
            >
              {activeSection === NavSections.SKILLS ? `< Skills />` : `Skills`}
            </Button>
            <Button
              path="#About"
              className={`font-code ${
                activeSection === NavSections.ABOUT
                  ? "text-font_highlight"
                  : "#FFF"
              }`}
              click={() => setActiveSection(NavSections.ABOUT)}
            >
              {activeSection === NavSections.ABOUT ? `< About />` : `About`}
            </Button>
            <Button
              path="resume.pdf"
              target="_blank"
              className={`font-code ${
                activeSection === NavSections.RESUME
                  ? "text-font_highlight"
                  : "#FFF"
              }`}
              click={() => setActiveSection(NavSections.RESUME)}
            >
              {activeSection === NavSections.RESUME ? `< Resume />` : `Resume`}
            </Button>
          </div>
        </div>

        <div className="flex">
          <Button path="https://github.com/oldbettie" target="_blank">
            <div>
              {/*  github logo*/}
              Github
            </div>
          </Button>
          <Button path="https://www.linkedin.com/in/jayj-eaton" target="_blank">
            <div>
              {/*  Linkedin logo*/}
              Linkedin
            </div>
          </Button>
        </div>
      </div>
    );
  } else {
    return <div>{/*<HamburgerMenu session={!!userState.userId} />*/}</div>;
  }
}
