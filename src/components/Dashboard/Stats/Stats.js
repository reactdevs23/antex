import React from "react";
import classes from "./Stats.module.css";
import Counter from "../../common/Counter/Counter";
import { approx, bst, coins, points, reward, wave } from "../../../images";

const Stats = () => {
  return (
    <div className={classes.stats}>
      <div className={classes.statsCard}>
        <div className={classes.mainText}>
          <p>
            <span className={classes.currency}>$</span>{" "}
            <Counter start={0} end={530000000} durationTime={10} />
          </p>
        </div>
        <div className={classes.subText}>
          <img src={approx} alt="approx" /> 170.5k{" "}
          <span className={classes.light}>Bst</span>
        </div>
        <div className={classes.iconText}>
          <img src={coins} alt="coins" />
          Total Value Locked
        </div>
      </div>
      <div className={classes.statsCard}>
        <div className={classes.mainText}>
          <p>
            <span className={classes.currency}>$</span>{" "}
            <Counter start={0} end={0.098} durationTime={10} />
          </p>
        </div>
        <p className={classes.subText}>
          <span className={classes.green}> 0.45%</span>{" "}
          <span className={classes.light}>24hrs </span>
          <img src={wave} alt="" />
        </p>
        <div className={classes.iconText}>
          <img src={bst} alt="bst" />
          BST Price
        </div>
      </div>
      <div className={classes.statsCard}>
        <div className={classes.mainText}>
          <p>
            <Counter start={0} end={2000.98} durationTime={10} />
            <span className={classes.currency}> BP</span>
          </p>
        </div>
        <div className={classes.iconText}>
          <img src={points} alt="points" />
          My Total Points
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
      </div>
    </div>
  );
};

export default Stats;
