"use client";
import styles from "./page.module.css";
import Header from "./components/Header";
import BookingTable from "./components/BookingTable";
import Modal from "./components/Modal";

export default function Home() {
  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    // Get the modal
    const modal = document.getElementById("myModal");

    // When the user clicks the button, open the modal
    if (modal) modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal && modal) {
        modal.style.display = "none";
      }
    };
  }
  function handleClose(event: React.MouseEvent<HTMLInputElement>) {
    // When the user clicks on <span> (x), close the modal
    const modal = document.getElementById("myModal");
    if (modal) modal.style.display = "none";
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <BookingTable />
      </main>
      <footer className={styles.footer}>
        <h3>Footer Placeholder</h3>
      </footer>
      <Modal handleButtonClick={handleButtonClick} handleClose={handleClose} />
    </div>
  );
}
