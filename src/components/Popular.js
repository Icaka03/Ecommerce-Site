import styles from "../styles/Popular.module.css";
import { useState, useEffect, useContext } from "react";
import { Cartcontext } from "./Context";
export default function Popular() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const Globalstate = useContext(Cartcontext);
  console.log(Globalstate);
  const dispatch = Globalstate.dispatch;
  return (
    <section>
      <div className={styles.title}>Popular Collection</div>
      <div className={styles.products}>
        {items.map((item) => {
          item.quantity = 1;
          return (
            <div className={styles.product}>
              <img src={item.image} alt={item.title} />
              <div className={styles.product_name}>{item.title}</div>
              <div className={styles.center}>
                <div
                  className={styles.price}
                  onClick={() => dispatch({ type: "ADD", payload: item })}
                >
                  ${item.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
