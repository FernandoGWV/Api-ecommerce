import React, { useState } from "react";
import styles from "../../styles/Cadastro.module.css";
import { useAuthContext } from "../../Contexts/UserContext";
import { useRouter } from "next/router";

const CadastroPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(
    "https://i.pinimg.com/originals/56/a9/ad/56a9ad70fb92a77b8eed47ced71a495e.jpg"
  );

  const authContext = useAuthContext();

  const handleCadastro = async (event: any) => {
    event.preventDefault();
    authContext.cadastro(username, password, email, avatar);
  };
  if (authContext.isLoged) router.push("/");
  return (
    <section className={styles.mainContainer}>
      <div className={styles.cadastro}>
        <h1>cadastro</h1>
        <form action="" onSubmit={handleCadastro}>
          {" "}
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <button>cadastrar</button>
        </form>
      </div>
    </section>
  );
};

export default CadastroPage;
