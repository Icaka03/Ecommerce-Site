import { useContext } from "react";
import { Cartcontext } from "./Context.js";
import styles from "../styles/Cart.module.css";
import Navbar from "./Navbar.js";
const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <>
      <Navbar />
      <div className={styles.cart_details}>
        {state.map((item, index) => {
          return (
            <div className={styles.cart} key={index}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>

              <p>{item.quantity * item.price}$</p>
              <div className={styles.quantity}>
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                >
                  -
                </button>
              </div>
              <button
                className={styles.x}
                onClick={() => dispatch({ type: "REMOVE", payload: item })}
              >
                x
              </button>
            </div>
          );
        })}
        {state.length > 0 && (
          <div>
            <h2>Total price:{total}$</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
