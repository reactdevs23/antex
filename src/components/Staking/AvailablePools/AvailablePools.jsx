import { useState } from "react";
import {
  BiSolidChevronDownCircle,
  BiSolidChevronUpCircle,
} from "react-icons/bi";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

import classes from "./AvailablePools.module.css";
import clsx from "clsx";

import { walletBalance } from "../../../images";
import ProcedingComponent from "./ProcedingComponent/ProcedingComponent";

const AvailablePools = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const stakingPools = [
    {
      name: "HiDAO executives",
      access: "Contributors",
      apy: "30%",
      numberOfTimes: "3.5x",
      duration: "12 Months",
      lockedUntil: "24 Months",
      earningRate: "0.03%",
      minStake: "100,000,000 BST",
      stakingCap: "100,000,000 BST",
      poolAlocation: "40%",
      status: "active",
      description:
        "28% $BST APY, 3.5x multiplier on staking points generated per $BST and used for IDO allocation",
      icon: walletBalance,
      address: "0xf371.....cf47",
      walletBalance: 10000.56,
      remainingPoolSlot: 100389000.3,
      expectedApy: "13890.35k",
      bg: "#B1B2FF",
    },
    {
      name: "Cullinan",
      access: "Contributors",
      apy: "30%",
      numberOfTimes: "3.5x",
      duration: "12 Months",
      lockedUntil: "24 Months",
      earningRate: "0.03%",
      minStake: "100,000,000 BST",
      stakingCap: "100,000,000 BST",
      poolAlocation: "40%",
      status: "active",
      description:
        "28% $BST APY, 3.5x multiplier on staking points generated per $BST and used for IDO allocation",
      icon: walletBalance,
      address: "0xf371.....cf47",
      walletBalance: 10000.56,
      remainingPoolSlot: 100389000.3,
      expectedApy: "13890.35k",
      bg: "#ACFADF",
    },
    {
      name: "Legacy",
      access: "Contributors",
      apy: "30%",
      numberOfTimes: "2x",
      duration: "12 Months",
      lockedUntil: "24 Months",
      earningRate: "0.03%",
      minStake: "100,000,000 BST",
      stakingCap: "100,000,000 BST",
      poolAlocation: "40%",
      status: "closed",
      description:
        "28% $BST APY, 3.5x multiplier on staking points generated per $BST and used for IDO allocation",
      icon: walletBalance,
      address: "0xf371.....cf47",
      walletBalance: 10000.56,
      remainingPoolSlot: 100389000.3,
      expectedApy: "13890.35k",
      bg: "#B1B2FF",
    },
    {
      name: "Cullinan",
      access: "Contributors",
      apy: "30%",
      numberOfTimes: "3.5x",
      duration: "12 Months",
      lockedUntil: "24 Months",
      earningRate: "0.03%",
      minStake: "100,000,000 BST",
      stakingCap: "100,000,000 BST",
      poolAlocation: "40%",
      status: "active",
      description:
        "28% $BST APY, 3.5x multiplier on staking points generated per $BST and used for IDO allocation",
      icon: walletBalance,
      address: "0xf371.....cf47",
      walletBalance: 10000.56,
      remainingPoolSlot: 100389000.3,
      expectedApy: "13890.35k",
      bg: "#E8FFCE",
    },
  ];
  const [showProceidingCompoenent, setShowProcedingComponent] = useState(null);
  const handleShowProcedingComponent = (i) => {
    if (showProceidingCompoenent === i) {
      setShowProcedingComponent(null);
    } else {
      setShowProcedingComponent(i);
    }
  };

  return (
    <div className="mainWrapper">
      <div className="text-center">
        <SectionTitle>Available Staking Pools</SectionTitle>
      </div>

      <div className={classes.stakings}>
        {stakingPools.map((pools, i) => (
          <div key={i}>
            <div className={classes.stakingItem}>
              <div className={classes.stakingTitle}>
                <h4>{pools.name}</h4>
                <h4>Access:{pools.access}</h4>
              </div>

              <div className={classes.stakingItemContent}>
                <div
                  className={classes.percent1}
                  style={{ background: pools.bg }}
                >
                  <div className={classes.mainText}>{pools.apy}</div>
                  <div className={classes.subText}>APY</div>
                  <div className={classes.tag}>{pools.numberOfTimes}</div>
                </div>
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
                    <div className={classes.value}>
                      {pools.earningRate} daily
                    </div>
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
                        pools.status.toLowerCase() === "active" &&
                          classes.active,
                        pools.status.toLowerCase() === "closed" &&
                          classes.closed
                      )}
                    >
                      <div className={classes.statusDot}></div> {pools.status}
                    </div>
                  </div>
                </div>

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
        ))}
      </div>
    </div>
  );
};

export default AvailablePools;
