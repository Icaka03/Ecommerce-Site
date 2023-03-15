import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import styles from "../styles/Account.module.css";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import profile from "../images/profile.png";

export default function Account() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  let emaillUser = "";
  if (user !== null) {
    emaillUser = user.email;
  }
  function logOut(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  }

  return (
    <>
      <Navbar />
      <section className={styles.account}>
        <div className={styles.sign_out}>
          <p>Hello {emaillUser}</p>
          <button className={styles.out} onClick={logOut}>
            Sign Out
          </button>
        </div>
        <div className={styles.line}></div>
        <div className={styles.profile}>
          <div className={styles.account_details}>
            <img src={profile} alt="profile" />
            <h1>Hristo Dobrikov</h1>
            <p>{emaillUser}</p>
            <h2 className={styles.active}>Personal Information</h2>
            <h2>Billing & Payments</h2>
            <h2>Order History</h2>
            <h2>Gift Cards</h2>
          </div>
          <div className={styles.personal_info}>
            <h1>Personal Information</h1>
            <p>
              Manage your personal information, including phone numbers and
              email adress where you can be contacted
            </p>
            <div className={styles.tabs}>
              <div className={styles.tab}>
                <div className={styles.title}>
                  <div>
                    {" "}
                    <h1>Name</h1>
                    <p className={styles.p}>Hristo Dobrikov</p>
                  </div>

                  <img src={profile} alt="profile" />
                </div>
              </div>
              <div className={styles.tab}>
                <div className={styles.title}>
                  <div>
                    {" "}
                    <h1>Name</h1>
                    <p className={styles.p}>Hristo Dobrikov</p>
                  </div>

                  <img src={profile} alt="profile" />
                </div>
              </div>
              <div className={styles.tab}>
                <div className={styles.title}>
                  <div>
                    {" "}
                    <h1>Name</h1>
                    <p className={styles.p}>Hristo Dobrikov</p>
                  </div>

                  <img src={profile} alt="profile" />
                </div>
              </div>
              <div className={styles.tab}>
                <div className={styles.title}>
                  <div>
                    {" "}
                    <h1>Name</h1>
                    <p className={styles.p}>Hristo Dobrikov</p>
                  </div>

                  <img src={profile} alt="profile" />
                </div>
              </div>
              <div className={styles.tab}>
                <div className={styles.title}>
                  <div>
                    {" "}
                    <h1>Name</h1>
                    <p className={styles.p}>Hristo Dobrikov</p>
                  </div>

                  <img src={profile} alt="profile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
