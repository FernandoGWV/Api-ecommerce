import React, { useEffect, useState } from "react";
import { ProductCategory } from "../../types/categoria";
import axios from "axios";
import Image from "next/image";
import styles from "./Categoria.module.css";
import Link from "next/link";

const Categoria = () => {
  const [produtosList, setProdutosList] = useState<ProductCategory[]>([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    Produtos();
  }, []);

  const Produtos = async () => {
    try {
      setloading(true);

      const produto = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      setProdutosList(produto.data);
      setloading(false);
    } catch (error) {
      setloading(true);
      window.alert("Error: Carregamento dos arquivos falhou");
    } finally {
      setloading(false);
    }
  };
  const ArrayNames: string[] = [
    "Clothes",
    "Electronics",
    "Furniture",
    "Shoes",
    "Others",
  ];

  return (
    <div className={`${styles.mainContainer}`}>
      {loading && <div>Carregando...</div>}
      <ul>
        {produtosList.map((item) => {
          if (item.image.includes("https://api.lorem.space/image"))
            return (
              <li key={item.id}>
                <figure>
                  <Link href={`/categoria/${item.id}/products`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={180}
                      height={130}
                    />
                  </Link>
                </figure>
                {ArrayNames.includes(item.name) ? item.name : " "}{" "}
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default Categoria;
