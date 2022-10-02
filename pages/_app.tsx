import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../componentes/Layout";
import AuthContext from "../Contexts/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContext>
  );
}

export default MyApp;
