import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TOKEN_POST } from "../../Contexts/api";
import { useAuthContext } from "../../Contexts/UserContext";
import styles from "../../styles/Login.module.css";

const Login = () => {
  const router = useRouter();
  const [username, setUrsername] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useAuthContext();

  const pegarDados = async () => {
    const dadosDoUsuario = authContext.fetchData();
  };
  const handleLogin = async (event: any) => {
    event.preventDefault();
    await authContext.logar(username, password);
  };
  if (authContext.isLoged) router.push("/");
  return (
    <section className={styles.mainContainer}>
      <div className={styles.login}>
        <h1>Login</h1>
        <form action="" onSubmit={handleLogin}>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            value={username}
            onChange={({ target }) => setUrsername(target.value)}
          />
          <p>{username}</p>

          <label htmlFor="password">Senha</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
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
