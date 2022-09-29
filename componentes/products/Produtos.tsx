import React, { useEffect, useState } from "react";
import axios from "axios";
import { Products } from "../../types/products";
import Image from "next/image";
import styles from "./Product.module.css";

const Produtos = () => {
  const [produtosList, setProdutosList] = useState<Products[]>([]);
  useEffect(() => {
    ProdutosList();
  }, []);
  const ProdutosList = async () => {
    const res = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=10&limit=9"
    );
    const data = await res.data;
    console.log(data);
    setProdutosList(data);
  };

  return (
    <div className={styles.listProduct}>
      <ul>
        {produtosList.map((item) => {
          return (
            <li key={item.id}>
              <figure>
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={1040}
                  height={940}
                />
              </figure>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span>${item.price}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Produtos;
