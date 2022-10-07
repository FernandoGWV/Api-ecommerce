import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { Products } from "../../../types/products";
import Button from "../../../componentes/Button";
import styles from "../../../styles/Product.module.css";

const ProductSingle = () => {
  const router = useRouter();
  const { productID } = router.query;

  const [single, setProductSingle] = useState<Products>();
  useEffect(() => {
    InitProduct();
  });

  const InitProduct = async () => {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${productID}`
    );
    const data = res.data;
    setProductSingle(data);
  };

  return (
    <section className={styles.mainContainer}>
      <figure>
        <Image
          className={styles.img}
          src={single?.images[0] || ""}
          alt={single?.title}
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
          name="comprar "
        />
      </div>
    </section>
  );
};

export default ProductSingle;
