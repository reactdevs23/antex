import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styles from "./StakingState.module.css";

import "react-circular-progressbar/dist/styles.css";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

const StakingState = () => {
  const [beforeDecimal, afterDecimal] = (500555.555).toString().split(".");
  const customStyles = buildStyles({
    pathColor: "rgba(28, 237, 134, 0.8)",
    textColor: "#fff",
    trailColor: "#0A4D68",
  });

  const data = [
    {
      lack: "24 months lock",
      info: "HiDAO executives",
      progress: 50,
    },
    {
      lack: "24 months lock",
      info: "Cullinan",
      progress: 40,
    },
    {
      lack: "24 months lock",
      info: "Lagacy",
      progress: 30,
    },
    {
      lack: "24 months lock",
      info: "Regal",
      progress: 30,
    },
    {
      lack: "24 months lock",
      info: "Standard",
      progress: 30,
    },
  ];
  return (
    <div>
      <SectionTitle>Overtime Staking Stats</SectionTitle>
      <div className={[styles.wrapper].join(" ")}>
        <div className={styles.semiCircle}>
          <h4 className={styles.value} currency="bst">
            {parseInt(beforeDecimal).toLocaleString()}.
            <span className={styles.gray}>{parseInt(afterDecimal)}</span>{" "}
          </h4>
          <p className={styles.text}>Total BST Locked</p>
        </div>
        <div className={styles.progressbarWrapper}>
          {data.map((el, i) => (
            <div className={styles.progressbar} key={i}>
              <CircularProgressbar
                value={el.progress}
                text={`${el.progress}%`}
                styles={customStyles}
              />
              <div>
                <p className={styles.lack}>{el.lack}</p>
                <p className={styles.info}>{el.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StakingState;
