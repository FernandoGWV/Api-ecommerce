import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import UserPng from "../Assets/user/user.svg";
import CartIcon from "../Assets/user/cart.svg";
import Link from "next/link";
import { useAuthContext } from "../Contexts/UserContext";

const Header = () => {
  const authContext = useAuthContext();

  const Deslogamento = () => {
    authContext.deslogar();
  };
  return (
    <header className={styles.header}>
      <div className={`${styles.mainContainer} container`}>
        <div className={styles.navigator}>
          <h1>
            <Link href="/"> Store Api</Link>{" "}
          </h1>

          <nav>
            <div>
              <ul>
                <li>categories</li>
                <li>about</li>
                <li>help</li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.login}>
          <ul>
            <Link href={authContext.isLoged ? "/" : "/login"}>
              <li className={styles.iconLogin}>
                <figure>
                  <Image src={UserPng} alt="userIcon" />
                </figure>
                <p>{authContext.dadosUsuario?.name}</p>
                {authContext.isLoged && (
                  <button onClick={Deslogamento}>SAIR</button>
                )}
              </li>
            </Link>
            <li>
              <Image src={CartIcon} alt="userIcon" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
