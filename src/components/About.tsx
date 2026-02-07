export function About() {
  return (
    <div id="About" className="grid lg:grid-cols-2 gap-12 py-20 items-center">
      <div className="flex gap-6 flex-col text-font_light font-interface text-lg leading-relaxed">
        <h2 className="text-[35px] md:text-[50px] font-bold font-code leading-tight mb-4">
          About <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-font_highlight to-blue-500">
            Me
          </span>
        </h2>
        <p>
          HI!, thanks for checking out my portfolio, I do try to keep this updated. However if you are interested in
          working with me you can reach out via{" "}
          <a className="text-font_highlight hover:underline font-bold" href="mailto: jayleaton@gmail.com">
            email
          </a>{" "}
          or at one of the platforms I have linked in the header. I am available for hire on Upwork and love working
          with new businesses.
        </p>
        <p>
          My specialty is early stage SaaS and software achitecture, I love building things the right way and no one wants to rewrite code 100 times so lets build it right the first time.
        </p>
        <p>
          If I am not writing code I am usually working on other personal projects or you can catch me either in the gym, camping or mountain biking.
        </p>
        <p className="font-bold text-white">I am always open to jumping on a 10-15 minute call to discuss how I can help you succeed on your journey.</p>
      </div>
      <div className="relative group mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-font_highlight to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <img
          src="/me.jpg"
          alt="JJ eaton picture"
          className="relative max-h-[450px] rounded-2xl shadow-2xl border border-white/10"
        />
      </div>
    </div>
  )
}
