import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import BurgerMenu from "../components/BurgerMenu.js";
import Cart from "../images/cart.png";
const Navbar = () => {
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
      <div>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>

      <div className={styles.ul}>
        <div className={styles.relative}>
          <Link to="/cart">
            <div className={styles.red_counter}></div>
            <img src={Cart} alt="cart" className={styles.cart} />
          </Link>
        </div>
        <div className={styles.info}>
          <Link to={accountLink}>Account</Link>
          <div>
            <p className={styles.status}>{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
