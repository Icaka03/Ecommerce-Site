import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import BurgerMenu from "../components/BurgerMenu.js";

export default function Navbar() {
  const [accountLink, setAccountLink] = useState("");
  const auth = getAuth();
  let [status, setStatus] = useState("");
  onAuthStateChanged(auth, (user) => {
    setAccountLink(user ? "/account" : "/register");
  });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setStatus("logged");
    } else {
      setStatus("not logged");
    }
  });
  return (
    <div className={styles.header}>
      <div className={styles.burger}>
        <BurgerMenu />
      </div>
      <nav className={styles.main_menu}>
        <ul>
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
        </ul>
      </nav>
      <img src={logo} alt="logo" className={styles.logo} />
      <ul>
        <li>
          <a href="/">Shops</a>
        </li>
        <li>
          <Link to={accountLink}>Account</Link>
          <div>
            <p className={styles.status}>{status}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
