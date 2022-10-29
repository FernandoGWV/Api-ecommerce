import React, { createContext, useContext, useEffect } from "react";
import { isMapIterator } from "util/types";
import { useAuthContext } from "../Contexts/UserContext";

type PropCart = {
  titulo: string;
  price: string;
  img: string;
  id: string;
  quantity: number;
};

type Props = {
  cart: PropCart[];
  CartItem: ({ titulo, price, img, id, quantity }: PropCart) => void;
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
    if (cart.length > 0) localStorage.setItem("@Cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (localStorage) {
      setCart(JSON.parse(localStorage.getItem("@Cart") || "[]"));
    }
  }, []);

  const CartItem = ({ titulo, price, img, id, quantity }: PropCart) => {
    const itens = {
      id,
      titulo,
      price,
      img,
      quantity,
    };
    const NewCart = cart.filter((item: any) => item.id !== id);
    NewCart.push(itens);
    setCart(NewCart);
    console.log(itens.id);
  }; // ta travando a ligação

  const ClearCart = (id: string | number): any => {
    const NewCart = cart.filter((item: any) => item.id !== id);
    setCart(NewCart);
    localStorage.setItem("@Cart", JSON.stringify(NewCart));
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
