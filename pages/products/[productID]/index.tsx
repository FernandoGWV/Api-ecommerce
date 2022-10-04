import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Products } from "../../../types/products";
import Image from "next/image";

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
    <section>
      <figure>
        <Image
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
      </div>
    </section>
  );
};

export default ProductSingle;
