import React from "react";

import StakingState from "../../components/Dashboard/StakingState/StakingState";
import Chart from "../../components/Dashboard/Chart/Chart";
import BalanceAndEarningSummary from "../../components/Dashboard/BalanceAndEarningSummary/BalanceAndEarningSummary";
import ManageStaking from "../../components/Dashboard/ManageStaking/ManageStaking";
import Stats from "../../components/Dashboard/Stats/Stats";

import Tabs from "../../components/Staking/Tabs/Tabs";
import styles from "./Dashboard.module.css";

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
