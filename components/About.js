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
          I make a point of trying to learn one new thing per week even if its a
          simple fact or a boring life hack, the world is built on change and
          allowing the mind to still itself only slows us down on our path to
          success.
        </p>
        <p>
          My life experiences have taught me to keep my composure in tough
          situations and that anything is possible with patience. I consider
          myself what I call a team builder, Someone that is relatable and easy
          to get along with and usually that makes me an easy bridge between
          different personalities.
        </p>
        <hr className={styles.baseline} />
        <h4>Current Hobbies</h4>
        <div className={styles.hobbies}>
          <h6>&lt;Snowboarding /&gt;</h6>
          <h6>&lt;Mountain Biking /&gt;</h6>
          <h6>&lt;Videogames /&gt;</h6>
          <h6>&lt;Coding /&gt;</h6>
          <h6>&lt;Travel /&gt;</h6>
        </div>
      </div>
    </div>
  );
}

export default About;
