import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { Products } from "../../../types/products";
import Button from "../../../componentes/Button";
import styles from "../../../styles/Product.module.css";
import Img from "../../../help/Img";

const ProductSingle = () => {
  const router = useRouter();
  const { productID } = router.query;

  const [contar, setContar] = useState(0);

  const [single, setProductSingle] = useState<Products>();
  useEffect(() => {
    InitProduct();
  });

  const moduleRemove = () => {
    if (contar <= 0) {
      setContar(contar);
    } else {
      setContar(contar - 1);
    }
  };

  const InitProduct = async () => {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${productID}/`
    );
    const data = res.data;
    setProductSingle(data);
  };

  return (
    <section className={styles.mainContainer}>
      <figure>
        <Img
          src={single?.images[0] || ""}
          alt={single?.title || ""}
          width={400}
          height={400}
        />
      </figure>

      <div>
        <h1>{single?.title}</h1>
        <p>{single?.description}</p>
        <span>${single?.price}</span>

        <Button
          id={single?.id ? single?.id.toString() : ""}
          titulo={single?.title ? single?.title : ""}
          price={single?.price ? single?.price.toString() : ""}
          img={single?.images[0] ? single?.images[0] : ""}
          quantity={contar}
          name="comprar "
        />
        <div className={styles.moduleBtn}>
          <button
            className={styles.btnAd}
            onClick={() => {
              setContar(contar + 1);
            }}
          >
            ADICIONAR{" "}
          </button>
          <div className={styles.span}>
            <span>{contar}</span>
          </div>
          <button className={styles.btnRe} onClick={moduleRemove}>
            REMOVER
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSingle;
