import React, { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import TokenInfo from "./TokenInfo/TokenInfo";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import styles from "./Info.module.css";
import SalesInfo from "./SalesInfo/SalesInfo";
import MediaAndNews from "./MediaAndNews/MediaAndNews";
import PartnerAndInvestors from "./PartnerAndInvestors/PartnerAndInvestors";
import NoInfo from "./NoInfo/NoInfo";
const Info = () => {
  const [activeTab, setAtiveTab] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const tabs = [
    "Sales Info",
    "project  Overview",
    "Token  Info",
    "Investors & partners",
    "Media & News",
  ];
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      {/* <div
        className={styles.iconContainer}
        onClick={() => setSidebar((prev) => !prev)}
      >
        <AiOutlineAlignRight className={styles.icon} />
      </div> */}
      <div className={[styles.header, sidebar && styles.showSidebar].join(" ")}>
        {tabs.map((el, i) => (
          <p
            className={[styles.tab, activeTab === i && styles.activeTab].join(
              " "
            )}
            key={i}
            onClick={() => {
              setAtiveTab(i);
              setSidebar(false);
            }}
          >
            {el}
          </p>
        ))}
      </div>
      <div className={styles.container}>
        {/* when ther is no Info is NoInfo component I have already made is just import */}
        {activeTab === 0 && <SalesInfo />}
        {activeTab === 1 && <ProjectOverview />}
        {activeTab === 2 && <TokenInfo />}
        {activeTab === 3 && <PartnerAndInvestors />}
        {activeTab === 4 && <MediaAndNews />}
      </div>
    </div>
  );
};

export default Info;
