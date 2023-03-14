import styles from "../styles/Register.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const authObject = getAuth();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    signInWithEmailAndPassword(authObject, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  }
  return (
    <section className={styles.body}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1>Log In</h1>
        <div className={styles.holder}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
        <div className={styles.info}>
          <p> Don't have an account?</p>
          <Link to="/register">Register here</Link>
          <p>{error}</p>
        </div>
      </form>
    </section>
  );
}
