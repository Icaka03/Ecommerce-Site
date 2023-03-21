import { useContext, useState, useEffect } from "react";

import styles from "../styles/Collection.module.css";
import { Cartcontext } from "./Context";
export default function Collection() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);
  const Globalstate = useContext(Cartcontext);
  console.log(Globalstate);
  const dispatch = Globalstate.dispatch;
  return (
    <section className={styles.collection} id="collection">
      <div className={styles.title}>Featured Collection</div>
      <div className={styles.row}>
        {items.map((item) => {
          item.quantity = 1;
          return (
            <div className={styles.product} key={item.id}>
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
