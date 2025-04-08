"use client";

import React, { ChangeEvent, useState } from "react";
import styles from "./Form.module.scss";
import { useEvent } from "../contexts/eventContext";

function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { event } = useEvent();

  const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = () => {
    const data = {
      title: event?.title,
      date: event?.date,
      name,
      email,
    };
    localStorage.setItem("info", JSON.stringify(data));
  };

  return (
    <div className={styles.formContainer}>
      <h3>Enter your name and email</h3>
      <form className={styles.formBox} onSubmit={onSubmitHandler}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={onChangeNameHandler}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={onChangeEmailHandler}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
