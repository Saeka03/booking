"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Form.module.scss";
import Button from "./Button";
import { useEventStore } from "../stores/eventStore";

type FormProps = {
  closeModalHandler: () => void;
};

function Form({ closeModalHandler }: FormProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const event = useEventStore((state) => state.events);

  const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title: event?.title,
      date: event?.date,
      name,
      email,
    };
    localStorage.setItem("info", JSON.stringify(data));

    closeModalHandler();
    alert("Successfully booked!");
  };

  return (
    <div className={styles.formContainer}>
      <h2>Booking Form</h2>
      <div>
        <p>
          Event: <span>{event?.title}</span>
        </p>
        <p>
          Date: <span>{event?.date?.toISOString().split("T")[0]}</span>
        </p>
      </div>
      <div className={styles.line}></div>
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
        <div className={styles.buttonWrapper}>
          <Button type={"submit"} name="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Form;
