import React from "react";
import styles from "./Modal.module.scss";
import Form from "./Form";

type ModalProps = {
  closeModalHandler: () => void;
};

function Modal({ closeModalHandler }: ModalProps) {
  return (
    <div>
      <div id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={closeModalHandler}>
            &times;
          </span>
          <Form closeModalHandler={closeModalHandler} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
