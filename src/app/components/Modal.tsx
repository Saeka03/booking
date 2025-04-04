import React from "react";
import styles from "./Modal.module.scss";
import Form from "./Form";

type ModalProps = {
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: (event: React.MouseEvent<HTMLInputElement>) => void;
};

function Modal({ handleButtonClick, handleClose }: ModalProps) {
  return (
    <div>
      <button id="myBtn" onClick={handleButtonClick}>
        Open Modal
      </button>

      <div id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={handleClose}>
            &times;
          </span>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Modal;
