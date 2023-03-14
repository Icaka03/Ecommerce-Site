import React from "react";
import model from "../images/model.png";
import styles from "../styles/Header.module.css";
import logo from "../images/logo.png";
export default function Header() {
  return (
    <section>
      <div className={styles.header}>
        <nav>
          <ul>
            <li>
              <a href="default.asp">Home</a>
            </li>
            <li>
              <a href="default.asp">Pages</a>
            </li>
            <li>
              <a href="default.asp">Shop</a>
            </li>
            <li>
              <a href="default.asp">Blog</a>
            </li>
            <li>
              <a href="default.asp">Contact</a>
            </li>
          </ul>
        </nav>
        <img src={logo} alt="logo" classname={styles.logo} />
        <ul>
          <li>
            <a href="default.asp">Shops</a>
          </li>
          <li>
            <a href="default.asp">Account</a>
          </li>
        </ul>
      </div>
      <div className={styles.main_section}>
        <div className={styles.left_side}>
          <div className={styles.content}>
            <p>Just Dropped</p>
            <h1>
              Feel<br></br>
              Authentic<br></br>
              Peace
            </h1>
            <button>Shop Now </button>
          </div>
        </div>
        <div className={styles.right_side}>
          <img src={model} alt="model" />
        </div>
      </div>
    </section>
  );
}
