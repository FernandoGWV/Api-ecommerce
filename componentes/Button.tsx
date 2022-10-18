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
};

const Button = ({ name, titulo, price, img, id }: Props) => {
  const userContext = useAuthContext();
  const cartContext = useCartProvider();
  const handleCart = () => {
    cartContext.CartItem({ titulo, price, img, id });
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
    <button className={styles.btn} onClick={handleCart}>
      {name}
    </button>
  );
};

export default Button;
