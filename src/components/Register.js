import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Register.module.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const validatePassword = () => {
    let isValid = false;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        setError("Passwords does not match");
      }
      isValid = password === confirmPassword;
    }

    return isValid;
  };

  function submitHandler(e) {
    e.preventDefault();
    setError("");
    if (!validatePassword()) {
      return;
    }
    // Create a new user with email and password using firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => setError(err.message));
  }
  return (
    <section className={styles.body}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1>Register Here</h1>
        <div className={styles.holder}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        <div className={styles.info}>
          <p> Already have an account</p>
          <Link to="/login">Click here</Link>
          <p> {error}</p>
        </div>
      </form>
    </section>
  );
}
