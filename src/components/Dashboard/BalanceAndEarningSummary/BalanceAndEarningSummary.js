import React from "react";
import styles from "./BalanceAndEarningSummary.module.css";
import BalanceSummary from "./BalanceSummary";
import EarningSummary from "./EarningSummary";

const BalanceAndEarningSummary = () => {
  return (
    <div className={[styles.wrapper].join(" ")}>
      <BalanceSummary />
      <EarningSummary />
    </div>
  );
};

export default BalanceAndEarningSummary;
