import React, { useState } from "react";
import clsx from "clsx";
import classes from "./styles.module.css";
import Unlocked from "./Unlocked";
import Locked from "./Locked";
import { back } from "../../../images";

const LockedUnlock = ({ setModal }) => {
  const [tabActive, setTabActive] = useState("Unlocked");

  const lockedData = [
    {
      apy: "30%",
      duration: "1 Year",
      lockedUntill: "12 Month",
      earningRate: "0.03% daily",
      myStake: {
        bst: 10000000,
        usd: 17056.5,
      },
      availableEarnings: {
        bst: 10000000,
        usd: 17056.5,
      },
    },
    {
      apy: "30%",
      duration: "1 Year",
      lockedUntill: "12 Month",
      earningRate: "0.03% daily",
      myStake: {
        bst: 10000000,
        usd: 17056.5,
      },
      availableEarnings: {
        bst: 10000000,
        usd: 17056.5,
      },
    },
    {
      apy: "30%",
      duration: "1 Year",
      lockedUntill: "12 Month",
      earningRate: "0.03% daily",
      myStake: {
        bst: 10000000,
        usd: 17056.5,
      },
      availableEarnings: {
        bst: 10000000,
        usd: 17056.5,
      },
    },
    {
      apy: "30%",
      duration: "1 Year",
      lockedUntill: "12 Month",
      earningRate: "0.03% daily",
      myStake: {
        bst: 10000000,
        usd: 17056.5,
      },
      availableEarnings: {
        bst: 10000000,
        usd: 17056.5,
      },
    },
    {
      apy: "30%",
      duration: "1 Year",
      lockedUntill: "12 Month",
      earningRate: "0.03% daily",
      myStake: {
        bst: 10000000,
        usd: 17056.5,
      },
      availableEarnings: {
        bst: 10000000,
        usd: 17056.5,
      },
    },
    {
      apy: "30%",
      duration: "1 Year",
      lockedUntill: "12 Month",
      earningRate: "0.03% daily",
      myStake: {
        bst: 10000000,
        usd: 17056.5,
      },
      availableEarnings: {
        bst: 10000000,
        usd: 17056.5,
      },
    },
    {
      apy: "30%",
      duration: "1 Year",
      lockedUntill: "12 Month",
      earningRate: "0.03% daily",
      myStake: {
        bst: 10000000,
        usd: 17056.5,
      },
      availableEarnings: {
        bst: 10000000,
        usd: 17056.5,
      },
    },
    {
      apy: "30%",
      duration: "1 Year",
      lockedUntill: "12 Month",
      earningRate: "0.03% daily",
      myStake: {
        bst: 10000000,
        usd: 17056.5,
      },
      availableEarnings: {
        bst: 10000000,
        usd: 17056.5,
      },
    },
  ];
  return (
    <>
      <div className={classes.overlay} onClick={() => setModal(false)} />
      <div className={classes.myWrapper}>
        <div className={classes.row1}>
          <div className={classes.percent}>
            <h3>30%</h3>
            <div>APY</div>
          </div>
          <div className={classes.stats}>
            <div className={classes.item}>
              <h6>Duration</h6>
              <div>1 year</div>
            </div>
            <div className={classes.item}>
              <h6>Activities</h6>
              <div>1</div>
            </div>
            <div className={classes.item}>
              <h6>APY</h6>
              <div>20%</div>
            </div>
            <div className={classes.item}>
              <h6>Earning Rate</h6>
              <div>0.03% daily</div>
            </div>
            <div className={classes.item}>
              <h6>Total Staked</h6>
              <div>100,000,00 BST</div>
              <div>
                ≈ <span className={classes.green}>$17056.5</span>
              </div>
            </div>
            <div className={classes.item}>
              <h6>My Earnings</h6>
              <div>100,000,00 BST</div>
              <div>
                ≈ <span className={classes.green}>$17056.5</span>
              </div>
            </div>
          </div>

          <div className={classes.backWrap}>
            <button className={classes.back} onClick={() => setModal(false)}>
              <img src={back} alt="back" /> Back
            </button>
          </div>
        </div>
        <div className={classes.tabs}>
          {[
            { label: "Locked", total: lockedData.length },
            { label: "Unlocked", total: lockedData.length },
          ].map((el, idx) => {
            return (
              <button
                data-length={el.total}
                key={"tab-" + idx}
                className={clsx(
                  classes.tab,
                  tabActive === el.label && classes.active
                )}
                onClick={() => setTabActive(el.label)}
              >
                {el.label}
              </button>
            );
          })}
        </div>
        {tabActive.toLowerCase() === "unlocked" && (
          <Unlocked setModal={setModal} data={lockedData} />
        )}
        {tabActive.toLowerCase() === "locked" && (
          <Locked setModal={setModal} data={lockedData} />
        )}
      </div>
    </>
  );
};

export default LockedUnlock;
