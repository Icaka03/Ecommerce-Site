import { useState } from "react";
import styles from "../styles/BurgerMenu.module.css";
import { Link } from "react-router-dom";
export default function Burger() {
  const [hidden, setHidden] = useState(true);
  return (
    <section className={styles.menu}>
      <div className={styles.burger} onClick={() => setHidden(!hidden)}></div>
      {!hidden ? (
        <div className={styles.sidebar}>
          <nav className={styles.sidebar_menu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/">Pages</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </nav>
        </div>
      ) : null}
    </section>
  );
}
