import React from "react";
import styles from "./Img.module.css";
import Image from "next/image";

type Props = {
  alt: string;
  src: string;
};

const Img = ({ alt, src, ...props }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.skeleton}></div>
      <Image src={src} alt={alt} />
    </div>
  );
};

export default Img;
