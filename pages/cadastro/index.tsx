import React, { useState } from "react";
import styles from "../../styles/Cadastro.module.css";
import { useAuthContext } from "../../Contexts/UserContext";
import { useRouter } from "next/router";
import useForm from "../../services/useForm";
import Input from "../../componentes/Form/Input";

const CadastroPage = () => {
  const router = useRouter();

  const email: any = useForm("email");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  const authContext = useAuthContext();

  const moduleChange = ({ target }: any) => {
    setAvatar(target.value);
  };

  const handleCadastro = async (event: any) => {
    event.preventDefault();
    authContext.cadastro(email.value, password, username, avatar);
  };
  if (authContext.isLoged) router.push("/");
  return (
    <section className={styles.mainContainer}>
      <div className={styles.cadastro}>
        <h1>cadastro</h1>
        <form action="" onSubmit={handleCadastro}>
          {" "}
          <label htmlFor="email">email</label>
          <Input type="text" id="email" {...email} />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <label htmlFor="name">name</label>
          <Input
            type="text"
            id="name"
            value={username}
            onChange={({ target }: any) => {
              setUsername(target.value);
            }}
          />
          <label>Url de Icon Perfil</label>
          <input type="url" name="teste" onChange={moduleChange} />
          <button>cadastrar</button>
        </form>
      </div>
    </section>
  );
};

export default CadastroPage;
