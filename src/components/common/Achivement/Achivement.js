import React from "react";
import { athroi, fundsProjects, raisedon } from "../../../images";
import styles from "./Achivement.module.css";
import Counter from "../Counter/Counter";

const Achivement = () => {
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <div className={styles.achivement}>
        <img src={fundsProjects} alt="#" className={styles.icon} />
        <div className={styles.valueAndInfo}>
          {" "}
          <p className={styles.value}>
            <Counter start={0} end={240} durationTime={10} />
          </p>
          <p className={styles.info}>Funded Projects</p>
        </div>
      </div>{" "}
      <div className={styles.achivement}>
        <img src={raisedon} alt="#" className={styles.icon} />
        <div className={styles.valueAndInfo}>
          {" "}
          <div className={styles.valueContainer}>
            {" "}
            <span className={styles.currency}>$</span>{" "}
            <p className={styles.value}>
              <Counter start={0} end={2000000} durationTime={10} />
            </p>
          </div>
          <p className={styles.info}>Raised on Hinox</p>
        </div>
      </div>{" "}
      <div className={styles.achivement}>
        <img src={athroi} alt="#" className={styles.icon} />
        <div className={styles.valueAndInfo}>
          {" "}
          <p className={styles.value}>
            <Counter start={0} end={200} durationTime={10} />
            <span className={styles.cross}>X</span>{" "}
          </p>
          <p className={styles.info}>Average ATH ROI</p>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
