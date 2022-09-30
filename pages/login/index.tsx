import Link from "next/link";
import React from "react";
import styles from "../../styles/Login.module.css";

const Login = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.login}>
        <h1>Login</h1>
        <form action="">
          <label htmlFor="login">Login</label>
          <input type="text" id="login" />

          <label htmlFor="password">Senha</label>
          <input type="text" id="password" />
          <button>Logar</button>
        </form>
      </div>
      <div>
        <Link href="/cadastro">
          <a>Cadastra-se</a>
        </Link>
        <Link href="/recuperar">
          <a>Esqueceu a senha?</a>
        </Link>
      </div>
    </section>
  );
};

export default Login;
