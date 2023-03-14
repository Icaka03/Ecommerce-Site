import styles from "../styles/Register.module.css";

export default function Register() {
  return (
    <section className={styles.body}>
      <form className={styles.form}>
        <h1>Register Here</h1>
        <div className={styles.holder}>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
        </div>
        <button>Register</button>
      </form>
    </section>
  );
}
