import React from "react";
import styles from "./Form.module.scss";
function Form() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.formBox}>
        <input type="text" defaultValue={""} placeholder="Full Name" />
        <input type="email" defaultValue={""} placeholder="Your Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
