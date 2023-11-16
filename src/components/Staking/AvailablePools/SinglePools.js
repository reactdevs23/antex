import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import clsx from "clsx";
import {
  BiSolidChevronDownCircle,
  BiSolidChevronUpCircle,
} from "react-icons/bi";
import ProcedingComponent from "./ProcedingComponent/ProcedingComponent";
import classes from "./AvailablePools.module.css";

const SinglePools = ({
  stakingPools,
  showProceidingCompoenent,
  setShowProcedingComponent,
  pools,
  i,
  showBox,
  setShowBox,
}) => {
  const handleShowProcedingComponent = (i) => {
    if (showProceidingCompoenent === i) {
      setShowProcedingComponent(null);
    } else {
      setShowProcedingComponent(i);
    }
  };
  return (
    <div key={i}>
      <div className={classes.stakingItem}>
        <div className={classes.header}>
          <span className={classes.arrow}></span>
          <div className={classes.stakingTitle}>
            <h4>{pools.name}</h4>

            <h4>Access:{pools.access}</h4>
          </div>
          {showBox ? (
            <IoIosArrowUp
              className={classes.show}
              onClick={() => setShowBox((prev) => !prev)}
            />
          ) : (
            <IoIosArrowDown
              className={classes.show}
              onClick={() => setShowBox((prev) => !prev)}
            />
          )}
        </div>

        <div className={classes.stakingItemContent}>
          <div className={classes.percent1} style={{ background: pools.bg }}>
            <div className={classes.mainText}>{pools.apy}</div>
            <div className={classes.subText}>APY</div>
            <div className={classes.tag}>{pools.numberOfTimes}</div>
          </div>
          {showBox && (
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
              <div>
                <p className={clsx(classes.label, classes.statusLabel)}>
                  Status
                </p>
                <div
                  className={clsx(
                    classes.status,
                    pools.status.toLowerCase() === "active" && classes.active,
                    pools.status.toLowerCase() === "closed" && classes.closed
                  )}
                >
                  <div className={classes.statusDot}></div> {pools.status}
                </div>
              </div>
            </div>
          )}
          <div
            className={classes.proceed}
            onClick={() => handleShowProcedingComponent(i)}
          >
            {showProceidingCompoenent === i ? (
              <BiSolidChevronUpCircle
                color={pools.bg}
                className={clsx(classes.arrow, "arrow")}
              />
            ) : (
              <BiSolidChevronDownCircle
                color={pools.bg}
                className={clsx(classes.arrow, "arrow")}
              />
            )}
            {showProceidingCompoenent === i ? " Back" : "Proceed"}
          </div>
        </div>

        {showProceidingCompoenent === i && (
          <p className={classes.description}>{pools.description}</p>
        )}
      </div>
      {showProceidingCompoenent === i && (
        <ProcedingComponent pools={stakingPools[i]} />
      )}
    </div>
  );
};

export default SinglePools;
