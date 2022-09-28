import React, { useEffect, useState } from "react";
import axios from "axios";
import { Products } from "../../types/products";
import Image from "next/image";

const Produtos = () => {
  const [produtosList, setProdutosList] = useState<Products[]>([]);
  useEffect(() => {
    ProdutosList();
  });
  const ProdutosList = async () => {
    const res = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=10&limit=10"
    );
    const data = await res.data;
    setProdutosList(data);
  };

  return (
    <div>
      <ul>
        {produtosList.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Produtos;
