export function About() {
  return (
    <div id="About" className="grid lg:grid-cols-2 gap-5 py-10 mt-5">
      <div className="flex gap-4 flex-col text-font_light font-interface text-xl my-auto">
        <h2 className="text-[45px] font-code text-font_light mb-10">About</h2>
        <p>
          HI!, thanks for checking out my portfolio, I do try to keep this updated. However if you are interested in
          working with me you can reach out via{" "}
          <a className="underline text-blue-600" href="mailto: jayleaton@gmail.com">
            email
          </a>{" "}
          or at one of the platforms I have linked in the header. I am available for hire on Upwork and love working
          with new businesses.
        </p>
        <p>
          As a strong communicator, I am able to blend into any range of team environments and I excel under pressure. I
          try to stay on the front line of the latest tech to make the development process easier at every step.
        </p>
        <p>
          If I am not writing code I am usually working on other personal projects. I also run an online etsy store
          selling 3d printed parts you can check that out{" "}
          <a className="underline text-blue-600" href="https://www.etsy.com/au/shop/BuildThingsLabs">
            here
          </a>{" "}
          or if I am not working you can catch me either in the gym, camping or mountain biking.
        </p>
        <p>I am always open to jumping on a 10-15 minute call to discuss how I can help you succeed on your journey.</p>
      </div>
      <div className="m-auto">
        <img src="/me.jpg" alt="JJ eaton picture" className=" max-h-[450px]" />
      </div>
    </div>
  )
}
