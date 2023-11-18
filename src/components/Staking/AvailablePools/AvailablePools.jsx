import { useState } from "react";
import {
  BiSolidChevronDownCircle,
  BiSolidChevronUpCircle,
} from "react-icons/bi";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

import classes from "./AvailablePools.module.css";

import { walletBalance } from "../../../images";

import SinglePools from "./SinglePools";

const AvailablePools = () => {
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
  const [showBox, setShowBox] = useState(null);
  const [showProceidingCompoenent, setShowProcedingComponent] = useState(null);

  return (
    <div className="mainWrapper">
      <div className="text-center">
        <SectionTitle>Available Staking Pools</SectionTitle>
      </div>

      <div className={classes.stakings}>
        {stakingPools.map((pools, i) => (
          <SinglePools
            stakingPools={stakingPools}
            pools={pools}
            showProceidingCompoenent={showProceidingCompoenent}
            setShowProcedingComponent={setShowProcedingComponent}
            showBox={showBox}
            setShowBox={setShowBox}
            i={i}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailablePools;
