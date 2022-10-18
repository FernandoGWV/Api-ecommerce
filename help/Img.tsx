import React, { useState } from "react";
import styles from "./Img.module.css";
import Image from "next/image";

type Props = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

const Img = ({ alt, src, width, height, ...props }: Props) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }: any) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <Image
        onLoad={handleLoad}
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...props}
        className={styles.img}
      />
    </div>
  );
};

export default Img;
