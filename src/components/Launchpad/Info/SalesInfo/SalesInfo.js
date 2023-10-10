import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { binance2, copyIcon } from "../../../../images";

import styles from "./SalesInfo.module.css";

const SalesInfo = () => {
  return (
    <div className={styles.salesInfo}>
      <div className={styles.keyValue}>
        <p className={styles.key}>Project Name</p>
        <p className={styles.value}>Binance Project</p>
      </div>
      <div className={styles.keyValue}>
        <p className={styles.key}>Project website</p>
        <a
          href="https//:BinanceProject.com"
          target="_blank"
          rel="noreferrer"
          className={[styles.value, styles.link].join(" ")}
        >
          https//:BinanceProject.com
        </a>
      </div>
      <div className={styles.keyValue}>
        <p className={styles.key}>Registered</p>
        <p className={styles.value}>600</p>
      </div>
      <div className={styles.keyValue}>
        <p className={styles.key}>vesting</p>
        <p className={styles.value}>
          25% TGE, 2months cliff, 6% monthly for 12 months
        </p>
      </div>
      <div className={styles.keyValue}>
        <p className={styles.key}>TGE</p>
        <p className={styles.value}>20 April 2023 at 13:00 UTC</p>
      </div>{" "}
      <div className={styles.keyValue}>
        <p className={styles.key}>Sales Contract</p>
        <CopyToClipboard text="0xhd6*****58gdg56">
          <p className={styles.value}>
            0xhd6*****58gdg56
            <img src={copyIcon} alt="#" className={styles.copyIcon} />{" "}
          </p>
        </CopyToClipboard>
      </div>
      <div className={styles.keyValue}>
        <p className={styles.key}>Token Standard</p>
        <p className={styles.value}>
          <img src={binance2} alt="#" className={styles.binanceIcon} /> Binance
          Arbitrum Network
        </p>
      </div>{" "}
      <div className={styles.keyValue}>
        <p className={styles.key}>Token Standard</p>
        <div className={styles.valueContainer}>
          <p className={styles.value}>
            <img src={binance2} alt="#" className={styles.binanceIcon} />
            uniswap
          </p>{" "}
          <p className={styles.value}>
            <img src={binance2} alt="#" className={styles.binanceIcon} />
            BitMart
          </p>{" "}
          <p className={styles.value}>
            <img src={binance2} alt="#" className={styles.binanceIcon} />
            ByBIT
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesInfo;
