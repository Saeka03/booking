import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  name: string;
  type: "button" | "reset" | "submit";
};

function Button({ name, type }: ButtonProps) {
  return (
    <button className={styles.button} type={type}>
      {name}
    </button>
  );
}

export default Button;
