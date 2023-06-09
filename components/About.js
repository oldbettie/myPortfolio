import styles from "../styles/Home.module.scss";

function About() {
  return (
    <div id="about">
      <div>
        <h4>About</h4>
      </div>
      <div>
        <p>
          With 10 years of experience running and managing small business&apos;s
          my problem solving skills have evolved to not just find the best
          solution but also how to do it as efficiently as possible.
        </p>
        <p>
          I consider myself a "maker" someone that loves building and creation,
          I could be building the next big app, a game, designing some new handy
          3d printed components. I once built from the ground up a van life van
          with a dream tech setup that I lived in while I traveled America for a
          year. I am someone that finds value in learning and evolving even if
          it's the small things.
        </p>
        <p>
          My life experiences have taught me to keep my composure in tough
          situations and that anything is possible with patience. I consider
          myself what I call a team builder, Someone that is relatable and easy
          to get along with and usually that makes me an easy bridge between
          different personalities.
        </p>
        <hr className={styles.baseline} />
        <h4>Hobbies</h4>
        <div className={styles.hobbies}>
          <h6>&lt;Snowboarding /&gt;</h6>
          <h6>&lt;Mountain Biking /&gt;</h6>
          <h6>&lt;Gaming /&gt;</h6>
          <h6>&lt;Coding /&gt;</h6>
          <h6>&lt;Travel /&gt;</h6>
        </div>
      </div>
    </div>
  );
}

export default About;
