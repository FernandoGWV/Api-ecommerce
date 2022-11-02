import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ProductsList } from "../../../types/listProdutos";
import Image from "next/image";
import styles from "../../../styles/ProductsList.module.css";
import Link from "next/link";
import Img from "../../../help/Img";
import Loading from "../../../help/Loading";
import useMedia from "../../../services/useMedia";

const CategoriaID = () => {
  const router = useRouter();
  const { categoriaID } = router.query;
  const [produtosList, setProdutosList] = useState<ProductsList[]>([]);
  const [loading, setLoading] = useState(false);
  const resize = useMedia("max-width: 1220px");
  useEffect(() => {
    produtos();
  });

  const produtos = async () => {
    try {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${categoriaID}/products`
      );
      const data = await res.data;
      setProdutosList(data);
    } catch (err) {
      console.log(err);
    }
  };
  const url = "api.lorem.space";

  if (loading) return <Loading />;
  return (
    <section>
      <div>
        <div className={styles.mainContainer}>
          <ul>
            {produtosList.map((item) => {
              return (
                <Link href={`/products/${item.id}`} key={item.id}>
                  <li>
                    <h1> {item.title}</h1>{" "}
                    <Image
                      src={item.images[0].includes(url) ? item.images[0] : ""}
                      alt={item.title}
                      width={resize ? 500 : 450}
                      height={450}
                    />
                    <span>${item.price}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategoriaID;
