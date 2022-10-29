import Image from "next/image";
import React, { useState } from "react";
import styles from "./Loading.module.css";
//tes
const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
