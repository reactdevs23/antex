import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./LaunchProject.module.css";
import { arrowRight } from "../../../images";

const LaunchProject = () => {
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <div className={styles.infoContainer}>
        <h4 className={styles.heading}>
          you want to Launch your project on{" "}
          <span className={styles.hinox}>Hinox?</span>
          <img src={arrowRight} alt="#" className={styles.arrow} />
        </h4>
        <li className={styles.info}>Streamlined fundraising</li>
        <li className={styles.info}>Expert and Advisory supports</li>
        <li className={styles.info}>Technical support</li>
        <li className={styles.info}>Community Driven</li>
      </div>
      <div className={styles.applyContainer}>
        <button className={styles.applyButton}>APPLY HERE</button>
        <h4 className={styles.title}>
          for Incubation or just Launching? <br />
          <span className={styles.highlight}>Anyone, we got you covered!</span>
        </h4>
        <p className={styles.text}>
          We exist to help your project defy gravity
        </p>
      </div>
    </div>
  );
};

export default LaunchProject;
