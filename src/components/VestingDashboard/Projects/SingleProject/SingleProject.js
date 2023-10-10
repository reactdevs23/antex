import React from "react";
import { useTimer } from "react-timer-hook";
import clsx from "clsx";
import MenuContainer from "../../../../components/common/MenuContainer/MenuContainer";

import {
  chevronDown,
  cryptoProject,
  lockedToken,
  vestingCounts,
  availableCoin,
} from "../../../../images";
import classes from "./SingleProject.module.css";

const SingleProject = ({
  idx,
  name,
  remainingTokens,
  tokenPrice,
  claimNetworkName,

  icon,
  selectedFilter,
}) => {
  return (
    <div key={"project-" + idx} className={classes.projectInfo}>
      <div className={classes.top}>
        <div className={classes.left}>
          <img src={cryptoProject} alt="" />
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
              <img src={icon} alt="binance" /> {claimNetworkName} Network
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
              <span className={classes.green}> 0 BNB</span> ≈$ 12,000
            </div>
          </div>
          <div className={classes.actions}>
            <button className={classes.refund}>Claim Refund</button>
            <MenuContainer
              onSelect={(val) => {}}
              options={[{ label: "Yes" }, { label: "No" }]}
              defaultSelected={selectedFilter}
            >
              <button className={classes.claimBtn}>
                Claim <img src={chevronDown} alt="chevron" />
              </button>
            </MenuContainer>
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
              <div>$ 12,000</div>
            </div>
          </div>
          <div className={classes.div}></div>
          <div className={classes.network}>
            <div className={classes.shortTitle}>
              <img src={vestingCounts} alt="" /> Vesting counts
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
  );
};

export default SingleProject;
