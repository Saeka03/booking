"use client";

import { EventClickArg } from "@fullcalendar/core";
import { useEvent } from "../contexts/eventContext";
import Header from "./Header";
import BookingTable from "./BookingTable";
import Modal from "./Modal";
import { useState } from "react";
import styles from "./Contents.module.scss";

export default function Contents() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { eventHandler } = useEvent();

  const openModalHandler = (arg: EventClickArg) => {
    setIsOpenModal(true);
    if (!arg?.event.title || !arg?.event.start) return;
    eventHandler(arg.event.title, arg.event.start);
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <BookingTable openModalHandler={openModalHandler} />
      </main>
      <footer>
        <p>© Copyright 2025 by Booking Service. All right reserved</p>
      </footer>
      {isOpenModal && <Modal closeModalHandler={closeModalHandler} />}
    </div>
  );
}
