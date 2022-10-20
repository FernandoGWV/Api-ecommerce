import React, { useEffect } from "react";
import { useCartProvider } from "../Contexts/CartContext";
import { useAuthContext } from "../Contexts/UserContext";

import styles from "./Button.module.css";

type Props = {
  name: string;
  titulo: string;
  price: string;
  img: string;
  id: string;
  quantity: number;
  disabled: boolean;
};

const Button = ({
  name,
  titulo,
  price,
  img,
  id,
  quantity,
  disabled,
}: Props) => {
  const userContext = useAuthContext();
  const cartContext = useCartProvider();
  const handleCart = () => {
    cartContext.CartItem({ titulo, price, img, id, quantity });
  };
  /* 
  const handleUser = () => {
    if (userContext.isLoged) {
      localStorage.setItem(
        "@CartUser",
        JSON.stringify({ titulo, price, img, id })
   
      );
           handleCart()
    } else {
      localStorage.setItem("@CartUser", "[]");
    }
  }; */

  return (
    <button className={styles.btn} onClick={handleCart} disabled={disabled}>
      {name}
    </button>
  );
};

export default Button;
