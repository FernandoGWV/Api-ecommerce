import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import UserPng from "../Assets/user/user.svg";
import ClearPng from "../Assets/user/lixeira.svg";
import CartIcon from "../Assets/user/cart.svg";
import Link from "next/link";
import { useAuthContext } from "../Contexts/UserContext";
import { useCartProvider } from "../Contexts/CartContext";

const Header = () => {
  const authContext = useAuthContext();
  const cartContext = useCartProvider();
  const [active, setActive] = useState(false);

  const handleClear = ({ titulo, price, img, id }: any) => {
    cartContext.ClearCart({ titulo, price, img, id });
  };

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
              <div>
                <Image
                  src={CartIcon}
                  alt="userIcon"
                  className={styles.iconCart}
                  onClick={() => {
                    setActive(!active);
                  }}
                />
                <span className={styles.span}>
                  {cartContext.cart.length || ""}
                </span>
                <div
                  className={styles.products}
                  style={{ display: active ? "block" : "none" }}
                >
                  {cartContext.cart.length ? (
                    <ul>
                      {cartContext.cart.map((item) => {
                        return (
                          <li key={item.id}>
                            <Image
                              src={item.img}
                              alt={item.titulo}
                              width={100}
                              height={100}
                            />
                            <h2>{item.titulo}</h2>
                            <span>${item.price}</span>

                            <div className={styles.btn}>
                              <button>
                                <Image
                                  src={ClearPng}
                                  alt=""
                                  width={40}
                                  height={40}
                                  onClick={handleClear}
                                />
                              </button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <h2 className={styles.title}>Carrinho vazio...</h2>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
