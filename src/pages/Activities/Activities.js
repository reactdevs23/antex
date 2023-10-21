import React, { useState } from "react";
import clsx from "clsx";
import StakingTable from "../../components/Activities/ActivitiesHistory/ActivitiesHistory";
import styles from "./Activities.module.css";
import ActivitiesHistory from "../../components/Activities/ActivitiesHistory/ActivitiesHistory";
import LeaderBoard from "../../components/Activities/LeaderBoard/LeaderBoard";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../components/Activities/Dashboard/Dashboard";

const Activities = () => {
  const navigate = useNavigate("/staking");
  const [selectedTab, setSelectedTab] = useState(1);
  const tabs = ["Dashboard", "Activities History", "Leaderboard"];
  return (
    <>
      <div className={styles.wrapper}>
        <div className="mainWrapper">
          <div className={styles.tabs}>
            <button
              onClick={() => {
                navigate("/staking");
              }}
              className={clsx(styles.tab)}
            >
              Stake
            </button>
            {tabs.map((el, idx) => {
              return (
                <button
                  key={"tab-item-" + idx}
                  className={clsx(
                    styles.tab,
                    selectedTab === idx + 1 && styles.active
                  )}
                  onClick={() => setSelectedTab(idx + 1)}
                >
                  {el}
                </button>
              );
            })}
            <button className={styles.buy}>Buy $BST</button>
          </div>
          {selectedTab === 1 && <Dashboard title="Activities History" />}
          {selectedTab === 2 && (
            <ActivitiesHistory title="Activities History" />
          )}
          {selectedTab === 3 && <LeaderBoard title="staking Leaderboard" />}
        </div>
      </div>
    </>
  );
};

export default Activities;
