import React, { useState } from "react";
import styles from "./EnterAptosWallet.module.css";
import { aptosMark } from "../../../../images";
const EnterAptosWallet = ({ setWaitingForConfirmatinModal, setModal }) => {
  const [aptosWalletAddress, setAptosWalletAddress] = useState("");
  const [confirmAptosWalletAddress, setConfirmAptosWalletAddress] =
    useState("");

  const handleConfirm = () => {
    setWaitingForConfirmatinModal(true);
    setModal(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.labelContainer}>
        <img src={aptosMark} alt="" />
        <p className={styles.label}>enter your Aptos wallet</p>
      </div>

      <input
        type="text"
        placeholder="Add your Aptos wallet address"
        className={styles.input}
        value={aptosWalletAddress}
        onChange={(e) => setAptosWalletAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Confirm your Aptos wallet address"
        value={confirmAptosWalletAddress}
        onChange={(e) => setConfirmAptosWalletAddress(e.target.value)}
        className={styles.input}
      />
      <button className={styles.confirmButton} onClick={handleConfirm}>
        Confirm and summit
      </button>
    </div>
  );
};

export default EnterAptosWallet;
