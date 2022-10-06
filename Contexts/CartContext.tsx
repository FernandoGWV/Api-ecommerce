import React, { createContext, useContext, useEffect, useState } from "react";

interface Cart {
  CartItem({ titulo, price, img, id }: any): string;
  CartGet(id: string | number): void;
}
const cartProvider = createContext({} as Cart);

const CartContext = ({ children }: any) => {
  type PropCart = {
    titulo: string;
    price: string;
    img: string;
    id: string;
  };

  const CartGet = (id: string | number) => {
    if (localStorage.getItem(`@Cart id=${id}`)) {
      return localStorage.getItem(`@Cart id=${id}`);
    } else return null;
  };

  const CartItem = ({ titulo, price, img, id }: PropCart): any => {
    const itens: any = {
      id,
      titulo,
      price,
      img,
    };
    localStorage.setItem(`@Cart id=${id}`, JSON.stringify(itens));
  };

  return (
    <cartProvider.Provider value={{ CartItem, CartGet }}>
      {children}
    </cartProvider.Provider>
  );
};

export const useCartProvider = () => {
  return useContext(cartProvider);
};

export default CartContext;
