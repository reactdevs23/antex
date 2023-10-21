import React from "react";
import styles from "./BalanceAndEarningSummary.module.css";
import { useDataContext } from "../../Context";

const EarningSummary = () => {
  const { numberFormator } = useDataContext();
  return (
    <div className={styles.summary}>
      <h4 className={styles.title}>My earning Summery</h4>

      <div className={styles.infoContainer}>
        {" "}
        <div className={styles.info}>
          <p className={styles.label}>Available Balance</p>
          <p className={styles.value}>
            {numberFormator(10000.56)[0].toLocaleString()} .
            <span className={styles.gray}>56 BST</span>
          </p>
        </div>{" "}
        <div className={styles.info}>
          <p className={styles.label}>unclaimed earnings</p>
          <p className={styles.value}>
            {numberFormator(10000)[0].toLocaleString()} .
            <span className={styles.gray}>56 BST</span>
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={[styles.button, styles.left].join(" ")}>
          Withdraw
        </button>
        <button className={[styles.button, styles.right].join(" ")}>
          Harvest All
        </button>
      </div>
    </div>
  );
};

export default EarningSummary;
