import React from "react";
import StakingTable from "../../components/Activities/StakingTable/StakingTable";
import styles from "./Activities.module.css";
const Activities = () => {
  return (
    <div className={styles.wrapper}>
      <StakingTable />
    </div>
  );
};

export default Activities;
