import React from "react";
import classes from "./Stats.module.css";
import Counter from "../../../common/Counter/Counter";

import { approx, charityCoin, coins, reward } from "../../../../images";

const Stats = () => {
  return (
    <div className={classes.stats}>
      <div className={classes.statsCard}>
        <div className={classes.mainText}>
          <p>
            <Counter start={0} end={530000000} durationTime={10} />{" "}
            <span className={classes.currency}> BST</span>
          </p>
        </div>
        <div className={classes.subText}>
          <img src={approx} alt="approx" /> $170.5k{" "}
          <span className={classes.light}>Bst</span>
        </div>
        <div className={classes.iconText}>
          <img src={charityCoin} alt="coins" />
          Total BST Locked
        </div>
      </div>
      <div className={classes.statsCard}>
        <div className={classes.mainText}>
          <p>
            <Counter start={0} end={500555.555} durationTime={10} />

            <span className={classes.currency}> BST</span>
          </p>
          <div className={classes.subText}>
            <img src={approx} alt="approx" /> $300,000.00
          </div>
          <div className={classes.iconText}>
            <img src={reward} alt="reward" />
            Total Reward Distributed
          </div>
        </div>
      </div>{" "}
      <div className={classes.statsCard}>
        <div className={classes.mainText}>
          <p>
            <Counter start={0} end={2000.98} durationTime={10} />
            <span className={classes.currency}> BST</span>
          </p>
        </div>{" "}
        <div className={classes.subText}>
          <img src={approx} alt="approx" /> $300,000.00
        </div>
        <div className={classes.iconText}>
          <img src={coins} alt="points" />
          Total Points Generated
        </div>
      </div>
    </div>
  );
};

export default Stats;
