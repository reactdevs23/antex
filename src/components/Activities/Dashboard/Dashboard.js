import React from "react";

import styles from "./Dashboard.module.css";
import StakingState from "../../Dashboard/StakingState/StakingState";
import Chart from "../../Dashboard/Chart/Chart";
import BalanceAndEarningSummary from "../../Dashboard/BalanceAndEarningSummary/BalanceAndEarningSummary";
import ManageStaking from "../../Dashboard/ManageStaking/ManageStaking";
import Stats from "../../Dashboard/Stats/Stats";

import Tabs from "../../Staking/Tabs/Tabs";

const Dashboard = () => {
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <Tabs />
      <Stats />
      <BalanceAndEarningSummary />
      <ManageStaking />
      <StakingState />
      <div className={[styles.chart].join(" ")}>
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
