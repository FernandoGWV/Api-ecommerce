import React, { createContext, useContext, useEffect } from "react";
import { isMapIterator } from "util/types";
import { useAuthContext } from "../Contexts/UserContext";

type PropCart = {
  titulo: string;
  price: string;
  img: string;
  id: string;
};

type Props = {
  cart: PropCart[];
  CartItem: ({ titulo, price, img, id }: PropCart) => void;
  ClearCart: (id: string | number) => void;
};

const cartProvider = createContext({
  cart: [],
  CartItem: () => {},
  ClearCart: () => {},
} as Props);

const CartContext = ({ children }: any) => {
  const userContext = useAuthContext();

  const [cart, setCart] = React.useState<any>([]);

  useEffect(() => {
    localStorage.setItem("@Cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    if (localStorage) {
      setCart(JSON.parse(localStorage.getItem("@Cart") || "[]"));
    }
  }, []);

  const CartItem = ({ titulo, price, img, id }: PropCart) => {
    const itens = {
      id,
      titulo,
      price,
      img,
    };
    const NewCart = cart.filter((item: any) => item.id !== id);
    NewCart.push(itens);
    setCart(NewCart);
    console.log(itens.id);
  }; // ta travando a ligação

  const ClearCart = (id: string | number): any => {
    const NewCart = cart.filter((item: any) => item.id !== id);
    setCart(NewCart);
  };

  return (
    <cartProvider.Provider
      value={{
        CartItem,
        cart,
        ClearCart,
      }}
    >
      {children}
    </cartProvider.Provider>
  );
};

export const useCartProvider = () => {
  return useContext(cartProvider);
};

export default CartContext;
