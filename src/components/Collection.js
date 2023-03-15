import { useState, useEffect } from "react";

import styles from "../styles/Collection.module.css";
export default function Collection() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);
  return (
    <section className={styles.collection}>
      <div className={styles.title}>Featured Collection</div>
      <div className={styles.row}>
        {items.map((item) => {
          return (
            <div className={styles.product} key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className={styles.product_name}>{item.title}</div>
              <div className={styles.center}>
                <div className={styles.price}>${item.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
