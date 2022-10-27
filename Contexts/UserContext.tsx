import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "../services/api";
import { truncate } from "fs";

type IUser = {
  id: number;
  email: string;
  password: string;
  name: string;
  avatar: string;
};

interface IAuthContext {
  isLoged: boolean;
  logar(email: string, password: string): void;
  cadastro(email: string, password: string, name: string, avatar: string): void;
  fetchData(): void;
  dadosUsuario: IUser | null;
  deslogar(): void;
}

const AuthProvider = createContext({} as IAuthContext);

const AuthContext = ({ children }: any) => {
  const [isLoged, setIsLoged] = useState(false);
  const [dadosUsuario, setDadosUsuario] = useState<IUser | null>(null);
  const router = useRouter();

  const fetchData = async () => {
    const data = await api.get("/auth/profile");
    setDadosUsuario(data.data);
    console.log(data);
  };

  useEffect(() => {
    if (localStorage.getItem("@token")) {
      fetchData();
      setIsLoged(true);
    }
  }, []);

  const logar = async (email: string, password: string) => {
    const res = await axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email,
        password,
      })
      .then((dados) => {
        localStorage.setItem("@token", dados.data.access_token);
        fetchData();
        setIsLoged(true);
        router.push("/");
      })
      .catch((err) => {
        alert("Usuário ou senha inválidos");
      });
  };

  const deslogar = () => {
    if (localStorage.getItem("@token")) {
      localStorage.setItem("@token", "");
      setIsLoged(false);
      setDadosUsuario(null);
    }
  };

  const cadastro = async (
    email: string,
    password: string,
    name: string,
    avatar: string
  ) => {
    const res = await axios
      .post("https://api.escuelajs.co/api/v1/users/", {
        email,
        password,
        name,
        avatar,
      })
      .then((dados) => {
        alert("cadastro feito com sucesso");

        router.push("/");
      })
      .then(() => {
        logar(email, password);
      })
      .catch((err) => {
        alert("erro no cadastro");
      });
  };

  return (
    <AuthProvider.Provider
      value={{ isLoged, logar, fetchData, dadosUsuario, cadastro, deslogar }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthProvider);
};

export default AuthContext;
