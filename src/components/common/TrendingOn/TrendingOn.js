import React from "react";
import styles from "./TrendingOn.module.css";
import { uniswap, kuCoin, bybt } from "../../../images";
const TrendingOn = () => {
  const trendingOn = [uniswap, kuCoin, bybt, bybt];
  return (
    <div className={styles.tradingsOn}>
      <h4 className={styles.tradingsOnTitle}>Trading on:</h4>

      <div className={styles.tradings}>
        {trendingOn.map((el, i) => (
          <img src={el} alt="#" key={i} className={styles.trading} />
        ))}
      </div>
    </div>
  );
};

export default TrendingOn;
