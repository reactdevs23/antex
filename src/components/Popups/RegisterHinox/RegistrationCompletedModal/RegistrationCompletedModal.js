import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import styles from "./RegistrationCompletedModal.module.css";

const RegistrationCompletedModal = ({
  setModal,
  setReserveSpotModal,
  setRegistrationCompletedModal,
}) => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={[styles.wrapper, "overflow"].join(" ")}>
        <div
          className={styles.closeContainer}
          onClick={() => setRegistrationCompletedModal(false)}
        >
          <MdOutlineClose className={styles.close} />
        </div>

        <p className={styles.text}>
          <span className={styles.bold}>Registration Completed! </span> Check
          allocation section for more information!
        </p>
        <BsCheckCircle className={styles.successIcon} />
        <p className={styles.done}>Done</p>

        <div className={styles.buttonContainer}>
          <button
            className={[styles.button, styles.dismissButton].join(" ")}
            onClick={() => setRegistrationCompletedModal(false)}
          >
            dismiss
          </button>{" "}
          <button
            className={[styles.button, styles.reseveSpotButton].join(" ")}
            onClick={() => {
              setReserveSpotModal(true);
              setRegistrationCompletedModal(false);
            }}
          >
            Reserve spot
          </button>
        </div>
      </div>
    </>
  );
};

export default RegistrationCompletedModal;
