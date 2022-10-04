import React, { useEffect, useState } from "react";
import axios from "axios";
import { Products } from "../../types/products";
import Image from "next/image";
import styles from "./Product.module.css";
import Link from "next/link";

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
            <Link href={`/products/${item.id}`} key={item.id}>
              <li>
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
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Produtos;
