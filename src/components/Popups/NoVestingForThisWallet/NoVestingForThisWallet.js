import React from "react";
import { notConnected } from "../../../images";
import { MdOutlineClose } from "react-icons/md";

import { useDataContext } from "../../Context";
import styles from "./NoVestingForThisWallet.module.css";
import { notAllowed } from "../../../images";

const NoVestingForThisWallet = () => {
  const { setShowNoVestingForThisWallet } = useDataContext();
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.wrapper}>
          <div
            className={styles.closeContainer}
            onClick={() => setShowNoVestingForThisWallet(false)}
          >
            <MdOutlineClose className={styles.close} />
          </div>
          <img src={notAllowed} alt="#" className={styles.image} />
          <h3 className={styles.title}>No vesting for this wallet</h3>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};

export default NoVestingForThisWallet;
