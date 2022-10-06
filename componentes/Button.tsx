import React from "react";
import { useCartProvider } from "../Contexts/CartContext";

import styles from "./Button.module.css";

type Props = {
  name: string;
  titulo: string | undefined;
  price: number | undefined;
  img: string | undefined;
  id: number | undefined;
};

const Button = ({ name, titulo, price, img, id }: Props) => {
  const cartContext = useCartProvider();

  const handleCart = () => {
    cartContext.CartItem({ titulo, price, img, id });
  };

  return (
    <button title={titulo} className={styles.btn} onClick={handleCart}>
      {name}
    </button>
  );
};

export default Button;
