import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section>
      <div className={styles.about}>
        <h1 className={styles.title}>What We Do</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
          urnasdsdsd nunc. Suspendisse id pretium orci. Mauris sit amet nibh
          euismod, vulputate nisl volutpat, fermentum ligula. Suspendisse varius
          ante eu turpis tristique convallis. Quisque sodales tellus quis nunc
          vestibulum pharetra. Duis aliquet sagittis metus, vel consequat lectus
          molestie quis. Integer in sollicitud
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
}
