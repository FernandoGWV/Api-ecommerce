import React from "react";
import { useCartProvider } from "../Contexts/CartContext";

import styles from "./Button.module.css";

type Props = {
  name: string;
  titulo: string;
  price: string;
  img: string;
  id: string;
};

const Button = ({ name, titulo, price, img, id }: Props) => {
  const cartContext = useCartProvider();

  const handleCart = () => {
    cartContext.CartItem({ titulo, price, img, id });
  };

  return (
    <button className={styles.btn} onClick={handleCart}>
      {name}
    </button>
  );
};

export default Button;
