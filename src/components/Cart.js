import { useContext } from "react";
import { Cartcontext } from "./Context.js";
import styles from "../styles/Cart.module.css";
import Navbar from "./Navbar.js";
const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  return (
    <>
      <Navbar />
      <div>
        ss
        {state.map((item, index) => {
          return (
            <div className={styles.cart} key={index}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>

              <p>{item.quantity * item.price}</p>
              <div className={styles.quantity}>
                <button>+</button>
                <p>{item.quantity}</p>
                <button>-</button>
              </div>
              <h2>x</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
