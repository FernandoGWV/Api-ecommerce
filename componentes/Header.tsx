import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import UserPng from "../Assets/user/user.svg";
import CartIcon from "../Assets/user/cart.svg";
import Link from "next/link";

const Header = () => {
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
            <li>
              <Image src={UserPng} alt="userIcon" />
            </li>
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
