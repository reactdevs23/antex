import React from "react";
import { notConnected } from "../../../images";
import { MdOutlineClose } from "react-icons/md";

import { useDataContext } from "../../Context";
import styles from "./WalletNotConnected.module.css";

const WalletNotConnected = () => {
  const { setShowWalletNotConnectedModal } = useDataContext();
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.wrapper}>
          <div
            className={styles.closeContainer}
            onClick={() => setShowWalletNotConnectedModal(false)}
          >
            <MdOutlineClose className={styles.close} />
          </div>
          <img src={notConnected} alt="#" className={styles.image} />
          <h3 className={styles.title}>Wallet Not Connected</h3>
          <p className={styles.tagline}>
            You need to Connect your wallet in order to see your Vested
            Allocations
          </p>
          <button className={styles.button}>Connect Wallet</button>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};

export default WalletNotConnected;
