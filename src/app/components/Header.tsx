import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image
            src="/booking_logo.png"
            alt="logo"
            width={75}
            height={75}
          ></Image>
        </Link>
        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>Home</li>
            <li className={styles.menuItem}>About Us</li>
            <li className={styles.menuItem}>Contact Us</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
