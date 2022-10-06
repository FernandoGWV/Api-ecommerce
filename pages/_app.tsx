import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../componentes/Layout";
import AuthContext from "../Contexts/UserContext";
import CartContext from "../Contexts/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <CartContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext>
    </AuthContext>
  );
}

export default MyApp;
