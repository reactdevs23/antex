import React, { useState } from "react";

import TokenInfo from "./TokenInfo/TokenInfo";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import styles from "./Info.module.css";
import SalesInfo from "./SalesInfo/SalesInfo";
const Info = () => {
  const [activeTab, setAtiveTab] = useState(0);
  const tabs = [
    "Sales Info",
    "project  Overview",
    "Token  Info",
    "Investors & partners",
    "Media & News",
  ];
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <div className={styles.header}>
        {tabs.map((el, i) => (
          <p
            className={[styles.tab, activeTab === i && styles.activeTab].join(
              " "
            )}
            key={i}
            onClick={() => setAtiveTab(i)}
          >
            {el}
          </p>
        ))}
      </div>
      {activeTab === 0 && <SalesInfo />}
      {activeTab === 1 && <ProjectOverview />}
      {activeTab === 2 && <TokenInfo />}
    </div>
  );
};

export default Info;
