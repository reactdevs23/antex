import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { binance, copyIcon } from "../../../../images";

import styles from "./TokenInfo.module.css";

const TokenInfo = () => {
  return (
    <div className={styles.tokenInfo}>
      <div className={styles.keyValue}>
        <p className={styles.key}>Token name</p>
        <p className={styles.value}>Binance Project</p>
      </div>
      <div className={styles.keyValue}>
        <p className={styles.key}>Token Symbol</p>
        <p className={styles.value}>BNB</p>
      </div>
      <div className={styles.keyValue}>
        <p className={styles.key}>Decimal</p>
        <p className={styles.value}>18</p>
      </div>
      <div className={styles.keyValue}>
        <p className={styles.key}>Token Standard</p>
        <p className={styles.value}>
          {" "}
          <img src={binance} alt="#" className={styles.binanceIcon} /> Binance
          Bep20
        </p>
      </div>{" "}
      <div className={styles.keyValue}>
        <p className={styles.key}>Total Supply</p>
        <p className={styles.value}> 100,000,0000</p>
      </div>{" "}
      <div className={styles.keyValue}>
        <p className={styles.key}>Initial MCAP</p>
        <p className={styles.value}>$230,000,000</p>
      </div>{" "}
      <div className={styles.keyValue}>
        <p className={styles.key}>FD MCAP</p>
        <p className={styles.value}> $330,500,000</p>
      </div>{" "}
      <div className={styles.keyValue}>
        <p className={styles.key}>Token Adrress</p>
        <CopyToClipboard text="0xhd646584w*****58gdg56!">
          <p className={styles.value}>
            0xhd646584w*****58gdg56
            <img src={copyIcon} alt="#" className={styles.copyIcon} />{" "}
          </p>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default TokenInfo;
