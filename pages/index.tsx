import type { NextPage } from "next";
import Head from "next/head";
import Categoria from "../componentes/products";
import Produtos from "../componentes/products/Produtos";
import { useAuthContext } from "../Contexts/UserContext";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const authContext = useAuthContext();

  return (
    <>
      <Head>
        <title>STORE API</title>
      </Head>
      <section>
        <h1 className={styles.title}>categorias</h1>
        <Categoria />
        <h1 className={styles.title}>Produtos </h1>
        <Produtos />
      </section>
    </>
  );
};

export default Home;
