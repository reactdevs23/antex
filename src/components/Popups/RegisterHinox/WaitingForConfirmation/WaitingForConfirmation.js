import React, { useEffect } from "react";

import styles from "./WaitingForConfirmation.module.css";

const WaitingForConfirmation = ({
  setWaitingForConfirmatinModal,
  setRegistrationCompletedModal,
  setRegisterd,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setWaitingForConfirmatinModal(false);
      setRegistrationCompletedModal(true);
      setRegisterd(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className={[styles.wrapper, "overflow"].join(" ")}>
        <p className={styles.text}>Waiting for confirmation.Please wait!</p>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
        </div>
        <p className={styles.text}>Don’t close this page yet </p>
      </div>{" "}
      <div className={styles.overlay} />
    </>
  );
};

export default WaitingForConfirmation;
