import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { Products } from "../../../types/products";
import Button from "../../../componentes/Button";
import styles from "../../../styles/Product.module.css";
import Img from "../../../help/Img";
import Loading from "../../../componentes/Loading";

const ProductSingle = () => {
  const router = useRouter();
  const { productID } = router.query;
  const [contar, setContar] = useState(+"") as any;
  const [single, setProductSingle] = useState<Products>();
  const [img, setImg] = useState(0);
  const ids = ["1", "2", "3"];
  const [loading, setLoading] = useState(false);
  const moduleImage = (event: any) => {
    setLoading(true);
    setImg(+event.target.alt);
    setLoading(false);
  };

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
  const moduleChange = ({ target }: any) => {
    setContar(+target.value);
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
      <div>
        <figure>
          {<Loading /> && (
            <Img
              src={single?.images[img] || ""}
              alt={single?.title || ""}
              width={400}
              height={400}
            />
          )}
        </figure>

        <ul className={styles.listImgs}>
          {single?.images.map((img, i) => {
            return (
              <li key={i} onClick={moduleImage}>
                <Image src={img} alt={i.toString()} width={100} height={100} />
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h1>{single?.title}</h1>
        <p>{single?.description}</p>
        <span>${single?.price}</span>

        {contar > 0 ? (
          <Button
            disabled={false}
            id={single?.id ? single?.id.toString() : ""}
            titulo={single?.title ? single?.title : ""}
            price={single?.price ? single?.price.toString() : ""}
            img={single?.images[0] ? single?.images[0] : ""}
            quantity={contar}
            name="comprar"
          />
        ) : (
          <Button
            disabled
            id={single?.id ? single?.id.toString() : ""}
            titulo={single?.title ? single?.title : ""}
            price={single?.price ? single?.price.toString() : ""}
            img={single?.images[0] ? single?.images[0] : ""}
            quantity={contar}
            name="comprar"
          />
        )}
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
            <input
              type="number"
              onChange={moduleChange}
              value={contar == 0 ? "" : contar.toString()}
              placeholder="0"
            />
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
