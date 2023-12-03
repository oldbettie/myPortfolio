import tictacdark from "../../public/tictactoedark.png"
import cookbook from "../../public/cookbook.png"
import petpals from "../../public/petpals.png"
import pricemates from "../../public/pricemates.png"
import teamnotes from "../../public/teamnotes.png"
import { StaticImageData } from "next/image"

export interface Project {
  website: string
  github: string | null
  btn: string
  image: StaticImageData
  about: string
}

const projects: Project[] = [
  {
    website: "https://oldbettie.github.io/tictactoe/",
    github: "https://github.com/oldbettie/tictactoe",
    btn: "<Tictactoe />",
    image: tictacdark,
    about: "Simple tictactoe game using basic JS and jQuery with added light/dark mode button. ",
  },
  {
    website: "https://jayleaton-cookbook.herokuapp.com/",
    github: "https://github.com/oldbettie/cookbook",
    btn: "<Cookbook />",
    image: cookbook,
    about:
      "Recipe finder app to find, post, edit or delete recipes utilizing RESTful best practices to build a CRUD app using Ruby on Rails, Heroku and Cloudinary ",
  },
  {
    website: "https://project-2-5825e.web.app/",
    github: "https://github.com/oldbettie/Project-2",
    btn: "<Petpals />",
    image: petpals,
    about:
      "Pet adoption site based on Tinder where u can swipe left or right on pets then communicate with the owner about adoption. built using React, FireBase, Framer Motion, Javascript and SCSS Modules with a mobile first design.",
  },
  {
    website: "https://noteteams.netlify.app/",
    github: "https://github.com/oldbettie/notepad",
    btn: "<Team Notes />",
    image: teamnotes,
    about:
      "Team Notes is the final project of SEI-52, I wanted to build an application to allow students or groups to collaborate on notes from the session. Built using React for the front-end and an Express/mySQL back-end that can also be found on my github. Utilizing RESTful best practices and a mobile friendly design it is available on all screen sizes but best experienced on desktop due to the canvas style of the main component.",
  },
  {
    website: "https://pricemates.net",
    github: null,
    btn: "<Pricemates />",
    image: pricemates,
    about: "Pricemates is my current work and represents a micro SaaS idea I came up with to help people save money",
  },
]
