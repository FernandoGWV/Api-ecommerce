import React, { createContext, useContext, useEffect } from "react";

type PropCart = {
  titulo: string;
  price: string;
  img: string;
  id: string;
};

type Props = {
  cart: [];
  CartItem: ({ titulo, price, img, id }: PropCart) => void;
  ClearCart: ({ titulo, price, img, id }: PropCart) => void;
};

const cartProvider = createContext({
  cart: [],
  CartItem: () => {},
  ClearCart: () => {},
} as Props);

const CartContext = ({ children }: any) => {
  const [cart, setCart] = React.useState<any>([]);

  useEffect(() => {
    if (cart && localStorage) {
      localStorage.setItem("@Cart", JSON.stringify(cart));
    }
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
  };

  const ClearCart = ({ titulo, price, img, id }: PropCart): any => {
    const itens = {
      id,
      titulo,
      price,
      img,
    };
    const NewCart = cart.filter((item: any) => item.id !== id);
    NewCart.pop(itens);
    setCart(NewCart);
  };

  return (
    <cartProvider.Provider value={{ CartItem, cart, ClearCart }}>
      {children}
    </cartProvider.Provider>
  );
};

export const useCartProvider = () => {
  return useContext(cartProvider);
};

export default CartContext;
