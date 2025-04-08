"use client";

import { EventClickArg } from "@fullcalendar/core";
import { useEvent } from "../contexts/eventContext";
import Header from "./Header";
import BookingTable from "./BookingTable";
import Modal from "./Modal";
import { useState } from "react";

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
    <div>
      <main>
        <Header />
        <BookingTable openModalHandler={openModalHandler} />
      </main>
      <footer>
        <h3>Footer Placeholder</h3>
      </footer>
      {isOpenModal && <Modal closeModalHandler={closeModalHandler} />}
    </div>
  );
}
