import styles from "../styles/Footer.module.css";
import Instagram from "../images/instagram.png";
export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.upper_footer}>
        <div className={styles.logo}>
          <h1>COMPANY NAME</h1> <p>some text</p>
        </div>
        <div className={styles.text}>
          <p>Shop</p>
          <p>Lookbook</p>
          <p>Legal</p>
        </div>
        <div className={styles.text}>
          <p>About</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className={styles.subscribe}>
          <p>Subscribe to the newsletter</p>
          <input placeholder="Your Email" name="Email"></input>
        </div>
        <div className={styles.media}>
          <p>Social Media</p>
          <div className={styles.icon_holder}>
            <img src={Instagram} alt="icon" />
            <img src={Instagram} alt="icon" />
            <img src={Instagram} alt="icon" />
          </div>
        </div>
      </div>
      <div className={styles.lower_footer}>
        <div className={styles.lower_text}>Company Design @2023</div>
        <div className={styles.line}></div>
        <div className={styles.lower_text}>Creadted by Hristo Dobrikov</div>
      </div>
    </section>
  );
}
