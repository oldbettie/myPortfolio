"use client"

import { projects } from "@/utils/projects"
import { useState } from "react"
import { Button } from "@/components/Button"
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa"
import Link from "next/link"

export function Projects() {
  const [counter, setCounter] = useState<number>(4)
  return (
    <div id="Projects">
      <h2 className="text-[30px] md:text-[40px] md:text-right relative md:top-20 top-5 font-code">Latest Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
        {projects.map((project, num) => {
          if (num < counter) {
            return (
              <div key={project.name} className="h-fit bg-background_highlight rounded-lg p-5 my-auto">
                <div className="flex justify-between">
                  <h3 className="text-font_light text-2xl font-code my-2 mb-5">{project.name}</h3>
                  <div className="text-2xl">
                    {project.github && (
                      <Button path={project.github} target="_blank">
                        <FaGithub />
                      </Button>
                    )}
                    <Button className="text-font_highlight" path={project.website} target="_blank">
                      <FaExternalLinkSquareAlt />
                    </Button>
                  </div>
                </div>
                <Link href={project.website} target="_blank">
                  <img src={project.image} alt={project.name} className="w-fit content-end" />
                </Link>
                <div>
                  <p className="text-font_light my-2">{project.about}</p>
                  <div className="flex w-full justify-around mt-5 text-font_light">
                    {project.stack.map((Icon, idx) => (
                      <Icon key={idx} size={40} />
                    ))}
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
      <div className="py-5">
        {counter === 4 && (
          <Button
            className="font-code text-2xl border-2 rounded-lg hover:text-font_highlight hover:border-font_highlight"
            click={() => setCounter(10)}
          >
            Show More
          </Button>
        )}
        {counter === 10 && (
          <Button
            className="font-code text-2xl border-2 rounded-lg hover:text-font_highlight hover:border-font_highlight"
            click={() => setCounter(4)}
          >
            Show Less
          </Button>
        )}
      </div>
    </div>
  )
}
