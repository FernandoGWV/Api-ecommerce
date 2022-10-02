import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ProductsList } from "../../../types/listProdutos";
import Image from "next/image";
import styles from "../../../styles/ProductsList.module.css";

const CategoriaID = () => {
  const router = useRouter();
  const { categoriaID } = router.query;
  const [produtosList, setProdutosList] = useState<ProductsList[]>([]);
  const [loading, setLoading] = useState(false);
  const produtos = async () => {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/categories/${categoriaID}/products`
    );
    const data = await res.data;
    setProdutosList(data);
  };
  useEffect(() => {
    produtos();
  }, [produtos]);

  return (
    <section>
      <div>
        <div className={styles.mainContainer}>
          <ul>
            {produtosList.map((item) => {
              return (
                <li key={item.id}>
                  <h1> {item.title}</h1>{" "}
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={450}
                    height={450}
                  />
                  <span>${item.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategoriaID;
