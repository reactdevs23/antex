import React from "react";
import { binanceLogo, solidash } from "../../../images";
import styles from "./Partners.module.css";

const Partners = () => {
  const partners = [
    binanceLogo,
    solidash,
    binanceLogo,
    solidash,
    binanceLogo,
    solidash,
    binanceLogo,
    solidash,
  ];

  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <h2 className={styles.title}>Our Partners</h2>
      <div className={styles.marquee}>
        <div className={styles.marqueGroup}>
          {partners.map((el, i) => (
            <div className={styles.imageGroup} key={i}>
              <img src={el} alt="#" className={styles.image} />
            </div>
          ))}
        </div>
        <div className={styles.marqueGroup}>
          {partners.map((el, i) => (
            <div className={styles.imageGroup} key={i}>
              <img src={el} alt="#" className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
