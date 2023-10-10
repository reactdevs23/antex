import React from "react";
import styles from "./HeroSection.module.css";
import { bybt, heroImg, kuCoin, uniswap } from "../../../images";

const HeroSection = () => {
  const trendingOn = [uniswap, kuCoin, bybt, bybt];
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
            <button className={[styles.button, styles.buyButton].join(" ")}>
              Buy $BST
            </button>
          </div>
          <div className={styles.tradingsOn}>
            <h4 className={styles.tradingsOnTitle}>Trading on:</h4>

            <div className={styles.tradings}>
              {trendingOn.map((el, i) => (
                <img src={el} alt="#" key={i} className={styles.trading} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
