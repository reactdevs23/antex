import React from "react";

import styles from "./SupportedChain.module.css";
import {
  arbitrum,
  avalanche,
  binanceIcon,
  ethereumLogo,
  optimism,
  polygone,
} from "../../../images";

const SupportedChain = () => {
  const supportedChain = [
    { logo: arbitrum, name: "Arbitrum" },
    { logo: binanceIcon, name: "Binance " },
    { logo: avalanche, name: "Avalanche" },
    { logo: ethereumLogo, name: "Ethereum" },
    { logo: optimism, name: "Optimism" },
    { logo: polygone, name: "Polygone" },
    { logo: optimism, name: "Optimism" },
    { logo: polygone, name: "Polygone" },
  ];

  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <h3 className={styles.title}>Supported Chains:</h3>
      <div className={styles.marquee}>
        <div className={styles.marqueGroup}>
          {supportedChain.map((el, i) => (
            <div className={styles.imageGroup} key={i}>
              <img src={el.logo} alt="#" className={styles.image} />
              <p className={styles.name}>{el.name}</p>
            </div>
          ))}
        </div>
        <div className={styles.marqueGroup}>
          {supportedChain.map((el, i) => (
            <div className={styles.imageGroup} key={i}>
              <img src={el.logo} alt="#" className={styles.image} />{" "}
              <p className={styles.name}>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportedChain;
