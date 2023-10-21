import React from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import ClaimingComponent from "../ClaimingComponent/ClaimingComponent";

import {
  lockedToken,
  vestingCountsIcon,
  availableCoin,
} from "../../../../images";
import classes from "./SingleProject.module.css";
import { useState } from "react";

const SingleProject = ({
  img,
  idx,
  name,
  remainingTokens,
  tokenPrice,

  networkName,
  networkIcon,

  avialableTokenUsdPrice,
  lockedokenUsdPirce,
  selectedNetwork,
  claimInfo,
}) => {
  const [showClaimComponent, setShowClaimComponent] = useState(null);

  const handleShowClaimComponent = (idx) => {
    if (showClaimComponent) {
      setShowClaimComponent(null);
    } else {
      setShowClaimComponent(idx);
    }
  };
  return (
    <>
      <div
        key={"project-" + idx}
        className={[
          classes.projectInfo,
          networkName.toLowerCase() === selectedNetwork.toLowerCase() &&
            classes.selected,
        ].join(" ")}
      >
        <div className={classes.top}>
          <div className={classes.left}>
            <img src={img} alt="" />
            <div>
              <h5 className={classes.title}>{name}</h5>
              <div className={classes.remaining}>
                <div>Remaining tokens:</div>
                <div className={classes.green}>{remainingTokens}</div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.price}>
              <div className={classes.shortTitle}>Token price</div>
              <div className={classes.priceNum}>{tokenPrice}</div>
            </div>
            <div className={classes.div}></div>
            <div className={classes.network}>
              <div className={classes.shortTitle}>Claim network</div>
              <div className={classes.networkName}>
                <img src={networkIcon} alt="binance" /> {networkName} Network
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}>
            <div>
              <div className={classes.availableToken}>
                <img src={availableCoin} alt="" />
                Available Token
              </div>
              <div className={classes.bnb}>
                <span className={classes.green}> 0 BNB</span> ≈{" "}
                {avialableTokenUsdPrice}
              </div>
            </div>
            <div className={classes.actions}>
              <button className={classes.refund}>Claim Refund</button>

              <button
                className={classes.claimBtn}
                onClick={() => handleShowClaimComponent(idx)}
              >
                <span className={classes.text}>Claim</span>{" "}
                {idx === showClaimComponent ? (
                  <BiSolidChevronUp className={classes.arrow} />
                ) : (
                  <BiSolidChevronDown className={classes.arrow} />
                )}
              </button>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.price}>
              <div className={classes.shortTitle}>
                <img src={lockedToken} alt="locked token" /> Locked Token
              </div>
              <div className={classes.lockedToken}>
                <div className={classes.green}>0 BNB</div>
                <div>≈</div>
                <div>{lockedokenUsdPirce}</div>
              </div>
            </div>
            <div className={classes.div}></div>
            <div className={classes.network}>
              <div className={classes.shortTitle}>
                <img src={vestingCountsIcon} alt="" /> Vesting counts
              </div>
              <div className={classes.vestingCounts}>
                <div>02</div>
                <div>of</div>
                <div>06</div>
                <div>Months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {idx === showClaimComponent && (
        <ClaimingComponent
          info={claimInfo}
          setShowClaimComponent={setShowClaimComponent}
        />
      )}
    </>
  );
};

export default SingleProject;
