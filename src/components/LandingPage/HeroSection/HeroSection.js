import React from "react";
import styles from "./HeroSection.module.css";
import { wallet } from "../../../images";
import { useDataContext } from "../../Context";
import TrendingOn from "../../common/TrendingOn/TrendingOn";

const HeroSection = () => {
  const { setShowBuyBstModal } = useDataContext();
  return (
    <section>
      <div className={styles.heroSection}>
        <div className={["mainWrapper", styles.wrapper].join(" ")}>
          <p className={styles.subHeading}>WELCOME TO </p>
          <h2 className={styles.heading}>
            HINOX <br />
            HINOX ECOSYSTEM
          </h2>

          <p className={styles.text}>
            Hinox is an innovative blockchain ecosystem delivering streamlined
            solutions and agile services aimed at seamless onboarding of both
            new and existing projects; helping them to defy gravity.
          </p>

          <div className={styles.buttonContainer}>
            <button
              className={[styles.button, styles.launchPadButton].join(" ")}
            >
              Launchpad
            </button>{" "}
            <button
              className={[styles.button, styles.buyButton].join(" ")}
              onClick={() => setShowBuyBstModal(true)}
            >
              Buy $BST
            </button>
          </div>
          <div className={styles.tradingAndFeature}>
            <TrendingOn />
            <div className={styles.feature}>
              <div className={styles.valueAndInfo}>
                {" "}
                <img src={wallet} alt="#" className={styles.icon} />
                <p className={styles.value}>2,000</p>
                <p className={styles.info}>Unique Wallets locked $BST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
