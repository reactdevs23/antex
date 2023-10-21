import React from "react";
import styles from "./HeroSection.module.css";

import { useDataContext } from "../../Context";
import TrendingOn from "../../common/TrendingOn/TrendingOn";

const HeroSection = () => {
  const { setShowBuyBstModal } = useDataContext();
  return (
    <section>
      <div className={styles.heroSection}>
        <div className={["mainWrapper", styles.wrapper].join(" ")}>
          <h2 className={styles.heading}>
            HINOX <br /> AIRDROPS
          </h2>
          <p className={styles.subHeading}>..All for your reward </p>
          <p className={styles.text}>
            Connect your wallet to see your eligibility
          </p>

          <div className={styles.buttonContainer}>
            <button
              className={[styles.button, styles.launchPadButton].join(" ")}
            >
              Launchpad
            </button>{" "}
            <button
              className={[styles.button, styles.buyButton].join(" ")}
              onClick={() => {
                setShowBuyBstModal(true);
              }}
            >
              Buy $BST
            </button>
          </div>
          <TrendingOn />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
