import React from "react";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../../Context";

import styles from "./Tabs.module.css";

const Tabs = () => {
  const { setShowBuyBstModal } = useDataContext();

  const tabs = [
    { label: "Staking", to: "/staking" },
    { label: "Dashboard", to: "/staking-dashboard" },
    { label: "Activities History", to: "/activitiesHistory" },
    { label: "Leaderboard", to: "/leaderboard" },
  ];
  return (
    <div className={styles.tabs}>
      {tabs.map((el, idx) => {
        return (
          <NavLink
            to={el.to}
            key={"tab-item-" + idx}
            className={({ isActive }) =>
              isActive
                ? [styles.tab, styles.active].join(" ")
                : [styles.tab].join(" ")
            }
          >
            {el.label}
          </NavLink>
        );
      })}
      <button className={styles.buy} onClick={() => setShowBuyBstModal(true)}>
        Buy $BST
      </button>
    </div>
  );
};

export default Tabs;
