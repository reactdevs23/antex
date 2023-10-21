import React, { useState } from "react";

import classes from "./ProcedingComponent.module.css";
import { amountToLock, openLink } from "../../../../images";
import { handleKeyDown } from "../../../utils";
import { useDataContext } from "../../../Context";

const ProcedingComponent = ({ pools }) => {
  const [amount, setAmount] = useState("");
  const { numberFormator } = useDataContext();
  return (
    <div className={classes.wrapper}>
      <div className={classes.percent1} style={{ background: pools.bg }}>
        <div className={classes.mainText}>{pools.apy}</div>
        <div className={classes.subText}>APY</div>
        <div className={classes.tag}>{pools.numberOfTimes}</div>
      </div>

      <div className={classes.stakingItemContent}>
        <div className={classes.stakingNumbers}>
          <div>
            <div className={classes.label}>Duration</div>
            <div className={classes.value}>{pools.duration}</div>
          </div>
          <div>
            <div className={classes.label}>locked until</div>
            <div className={classes.value}>{pools.lockedUntil}</div>
          </div>
          <div>
            <div className={classes.label}>Earning Rate</div>
            <div className={classes.value}>{pools.earningRate} daily</div>
          </div>
          <div>
            <div className={classes.label}>Min.Stake</div>
            <div className={classes.value}>{pools.minStake}</div>
          </div>
          <div>
            <div className={classes.label}>Staking Cap</div>
            <div className={classes.value}>{pools.stakingCap}</div>
          </div>
          <div>
            <div className={classes.label}>Pool Allocation</div>
            <div className={classes.value}>{pools.poolAlocation}</div>
          </div>
        </div>
        <div className={classes.balanceContainer}>
          <div className={classes.imgAndText}>
            <img src={pools.icon} alt="#" />
            <div className={classes.titleAndAddress}>
              <p className={classes.title}>Wallet Balance</p>
              <p className={classes.address}>
                <span> {pools.address}</span>{" "}
                <a href="#/">
                  {" "}
                  <img src={openLink} alt="" />
                </a>
              </p>
            </div>
          </div>
          <p className={classes.walletBalance}>
            {numberFormator(pools.walletBalance)[0]}
            <span className={classes.gray}>
              .{numberFormator(pools.walletBalance)[1]}
            </span>{" "}
            <span className={classes.currency}>BST</span>
          </p>
        </div>
        <div className={classes.myContainer}>
          <div className={classes.spaceBetween}>
            <p className={classes.text}>Amount to Lock</p>
            <p className={[classes.text, classes.rightText].join(" ")}>
              Remaining pool slot: ≈ {pools.remainingPoolSlot}{" "}
              <span className={classes.green}>BST</span>{" "}
            </p>
          </div>
          <div className={classes.amountContainer}>
            <div className={classes.amountWrapper}>
              <img src={amountToLock} alt="" />
              <input
                type="number"
                className={classes.input}
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onKeyDown={handleKeyDown}
              />{" "}
              <button className={classes.max}>Max</button>
            </div>

            <div className={classes.currencyContainer}>
              <span className={classes.currency}>BST</span>
            </div>
          </div>{" "}
          <p className={classes.text}>
            Expected APY: ≈ <span className={classes.green}>13890.35k</span> BST{" "}
          </p>
        </div>
      </div>
      <button className={classes.stakeButton}>Stake</button>
    </div>
  );
};

export default ProcedingComponent;
