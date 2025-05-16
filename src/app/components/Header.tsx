import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

function Header({ isUser }: { isUser: boolean }) {
  const logoutHandler = async () => {
    const supabase = await createClient();
    await supabase.auth.signOut();
    location.reload();
  };

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
        {isUser ? (
          <button onClick={logoutHandler}>Logout</button>
        ) : (
          <Link href="/login">
            <button>Login</button>
          </Link>
        )}
      </header>
    </>
  );
}

export default Header;
