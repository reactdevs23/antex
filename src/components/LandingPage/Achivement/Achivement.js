import React from "react";
import { athroi, fundsProjects, raisedon } from "../../../images";
import styles from "./Achivement.module.css";

const Achivement = () => {
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <div className={styles.achivement}>
        <img src={fundsProjects} alt="#" className={styles.icon} />
        <div className={styles.valueAndInfo}>
          {" "}
          <p className={styles.value}>248</p>
          <p className={styles.info}>Funded Projects</p>
        </div>
      </div>{" "}
      <div className={styles.achivement}>
        <img src={raisedon} alt="#" className={styles.icon} />
        <div className={styles.valueAndInfo}>
          {" "}
          <p className={styles.valueContainer}>
            {" "}
            <span className={styles.currency}>$</span>{" "}
            <span className={styles.value}>2,000,000</span>
          </p>
          <p className={styles.info}>Raised on Hinox</p>
        </div>
      </div>{" "}
      <div className={styles.achivement}>
        <img src={athroi} alt="#" className={styles.icon} />
        <div className={styles.valueAndInfo}>
          {" "}
          <p className={styles.value}>
            200<span className={styles.cross}>X</span>{" "}
          </p>
          <p className={styles.info}>Average ATH ROI</p>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
