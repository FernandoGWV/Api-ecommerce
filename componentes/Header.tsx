import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import UserPng from "../Assets/user/user.svg";
import Exit from "../Assets/user/exit.svg";
import ClearPng from "../Assets/user/lixeira.svg";
import CartIcon from "../Assets/user/cart.svg";
import Link from "next/link";
import { useAuthContext } from "../Contexts/UserContext";
import { useCartProvider } from "../Contexts/CartContext";
import useMedia from "../services/useMedia";

const Header = () => {
  const authContext = useAuthContext();
  const cartContext = useCartProvider();
  const [active, setActive] = useState(false);

  const resize = useMedia("(max-width: 600px)");
  const resizeTwo = useMedia("(max-width: 480px)");

  const handleCart = (event: any) => {
    setActive(!active);
  };

  const handleClear = (item: any) => {
    cartContext.ClearCart(item.id);
  };
  console.log(authContext.dadosUsuario?.avatar);

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
              {resizeTwo ? (
                ""
              ) : (
                <ul>
                  <li>categories</li>
                  <li>about</li>
                  <li>help</li>
                </ul>
              )}
            </div>
          </nav>
        </div>

        <div className={styles.login}>
          <ul>
            <li className={styles.iconLogin}>
              <Link href={authContext.isLoged ? "/" : "/login"}>
                <figure>
                  <Image
                    className={styles.iconImg}
                    src={UserPng}
                    alt="userIcon"
                  />
                </figure>
              </Link>
              <p>{authContext.dadosUsuario?.name}</p>
              {authContext.isLoged && (
                <button className={styles.exit} onClick={Deslogamento}>
                  <Image src={Exit} alt="exit" />
                </button>
              )}
            </li>

            <li>
              <div>
                <Image
                  src={CartIcon}
                  alt="userIcon"
                  className={`${styles.iconCart}`}
                  onClick={handleCart}
                />
                <span className={styles.span}>
                  {cartContext.cart.length || ""}
                </span>
                <div
                  className={`${styles.products} products`}
                  style={{ display: active ? "block" : "none" }}
                >
                  {cartContext.cart.length ? (
                    <ul>
                      {cartContext.cart.map((item) => {
                        return (
                          <li key={item.id}>
                            {resize ? null : (
                              <Image
                                src={item.img}
                                alt={item.titulo}
                                width={100}
                                height={100}
                              />
                            )}
                            <h2>{item.titulo}</h2>
                            <span>{item.quantity}</span>
                            <span>
                              $
                              {item.quantity > 1
                                ? +item.price * item.quantity
                                : item.price}
                            </span>

                            <div className={styles.btn}>
                              <button>
                                <Image
                                  src={ClearPng}
                                  alt=""
                                  width={50}
                                  height={50}
                                  onClick={() => {
                                    handleClear({ ...item });
                                  }}
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
