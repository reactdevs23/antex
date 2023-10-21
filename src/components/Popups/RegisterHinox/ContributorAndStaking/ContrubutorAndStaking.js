import React, { useState } from "react";

import Dropdown from "./DropDown/DropDown";
import styles from "./ContributorAndStaking.module.css";

const ContributorAndStaking = ({ setEnterAposModal, contributor, staker }) => {
  const [active, setActive] = useState(0);
  const dropdownItems = [
    "What if i’m staking too?",
    "What if i’m staking too?",
    "What if i’m staking too?",
  ];
  const handleClick = () => {
    setEnterAposModal(true);
  };
  return (
    <>
      <button
        className={[contributor && styles.activeButton, styles.button].join(
          " "
        )}
        onClick={contributor ? handleClick : null}
      >
        Contributor
      </button>{" "}
      <div>
        <p className={styles.text}>
          The connected wallet address is a HiDAO executive/contributor and can
          participate in the contributors round when it starts on August
          12,2023,11:12 PM UTC.
        </p>
        <p className={[styles.text, styles.highlight].join(" ")}>
          Your allocation size is determined by your contributed and staked
          amount. The bigger the contribution and staked amount, the bigger your
          allocation.
        </p>
      </div>
      <Dropdown
        dropdownItems={dropdownItems}
        active={active}
        setActive={setActive}
      />
      <button
        className={[staker && styles.activeButton, styles.button].join(" ")}
        onClick={staker ? handleClick : null}
      >
        Staking
      </button>
      <p className={styles.text}>
        The connected wallet address is staking (3000 BST). As a contributor,You
        are required to register only as a contributor, and your allocation from
        both the stakers' pool and the contributors' pool will be combined and
        placed into the contributors' round.{" "}
        <span className={styles.highlight}>
          {" "}
          Your allocation size is determined by your staked amount and the lock
          period. The bigger and longer the staking , the bigger your
          allocation.
        </span>
      </p>
    </>
  );
};

export default ContributorAndStaking;
