import React from "react";
import styles from "./BalanceAndEarningSummary.module.css";
import { Link } from "react-scroll";
import { useDataContext } from "../../Context";

const BalanceSummary = () => {
  const { numberFormator } = useDataContext();
  return (
    <div className={styles.summary}>
      <h4 className={styles.title}>Balance Summery</h4>

      <div className={styles.infoContainer}>
        {" "}
        <div className={styles.info}>
          <p className={styles.label}>Wallet Balance</p>
          <p className={styles.value}>
            {numberFormator(10000.56)[0].toLocaleString()} .
            <span className={styles.gray}>
              {numberFormator(10000.56)[1]}BST
            </span>
          </p>
        </div>{" "}
        <div className={styles.info}>
          <p className={styles.label}>Total Staked </p>
          <p className={styles.value}>
            {numberFormator(10000)[0].toLocaleString()} .
            <span className={styles.gray}>56 BST</span>
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={[styles.button, styles.left].join(" ")}>
          Stake
        </button>

        <Link
          className={[styles.button, styles.right].join(" ")}
          to="manage"
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          Manage
        </Link>
      </div>
    </div>
  );
};

export default BalanceSummary;
