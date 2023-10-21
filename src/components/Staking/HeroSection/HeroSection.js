import React from "react";
import styles from "./HeroSection.module.css";
import { bybt, kuCoin, uniswap, wallet } from "../../../images";
import TrendingOn from "../../common/TrendingOn/TrendingOn";
import { useDataContext } from "../../Context";

const HeroSection = () => {
  const { setShowBuyBstModal } = useDataContext();
  return (
    <section>
      <div className={styles.heroSection}>
        <div className={["mainWrapper", styles.wrapper].join(" ")}>
          <h2 className={styles.heading}>
            HINOX <br />
            STAKING
          </h2>

          <p className={styles.text}>
            Stake Your $BST to Join the best IDOs, Vote on Incubation, and
            Empower Governance!
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
