import React, { useState } from "react";
import styles from "../../styles/Cadastro.module.css";
import { useAuthContext } from "../../Contexts/UserContext";
import { useRouter } from "next/router";
import useForm from "../../services/useForm";
import Input from "../../componentes/Form/Input";

const CadastroPage = () => {
  const router = useRouter();

  const email: any = useForm("email");
  const password = useForm("password");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("https://www.null.com");

  const authContext = useAuthContext();

  const handleCadastro = async (event: any) => {
    event.preventDefault();
    authContext.cadastro(email.value, password.value, username, avatar);
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
          <Input type="password" id="password" {...password} />
          <label htmlFor="name">name</label>
          <Input
            type="text"
            id="name"
            value={username}
            onChange={({ target }: any) => {
              setUsername(target.value);
            }}
          />
          <button>cadastrar</button>
        </form>
      </div>
    </section>
  );
};

export default CadastroPage;
