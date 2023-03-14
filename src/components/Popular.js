import styles from "../styles/Popular.module.css";
import { useState, useEffect } from "react";

export default function Popular() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);
  return (
    <section>
      <div className={styles.title}>Popular Collection</div>
      <div className={styles.products}>
        {items.map((item) => {
          return (
            <div className={styles.product}>
              <img src={item.image} alt={item.title} />
              <div className={styles.product_name}>{item.title}</div>
              <div className={styles.price}>${item.price}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
