import styles from "../styles/Review.module.css";

import ReviewPhoto from "../images/review.jpg";
export default function Review() {
  return (
    <section className={styles.review} id="reviews">
      <h1>Reviews</h1>
      <div className={styles.review_flex}>
        <div className={styles.image}>
          <img src={ReviewPhoto} alt="Review" />
        </div>
        <div className={styles.image_info}>
          <h1>True Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum
            nibh, dignissim id turpis eget, pretium bibendum dolor. Pellentesque
            consectetur
          </p>

          <h2>
            Julia Craftword{" "}
            <span className={styles.normal}>Designer at Arizona Studio</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
