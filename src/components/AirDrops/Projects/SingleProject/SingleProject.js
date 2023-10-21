import React from "react";
import { useTimer } from "react-timer-hook";
import clsx from "clsx";

import { coin, unlockNextIcon, vestingCountsIcon } from "../../../../images";
import classes from "./SingleProject.module.css";
import MyCountDown from "../../../common/CountDown/CountDown";

const SingleProject = ({
  user,
  title,
  totalClaimedbst,
  totalUnClaimedbst,
  token,
  bst,
  description,
  claimOn,
  myUnclaimedBst,
  unlockNext,
  vestingCounts,
  vestings,
  availableToken,
}) => {
  const showViewAllButton = vestings.length > 4;
  const [showAllVestings, setShowAllVestings] = React.useState(false);
  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <img src={user} alt="User" />
        <div className={classes.infoWrapper}>
          <h5 className={classes.title}>{title}</h5>

          <div className={classes.infoItems}>
            {" "}
            <div className={classes.infoItem}>
              <h4 className={classes.heading}>Total Claimed $BST:</h4>
              <div className={classes.amount}>
                <div>{totalClaimedbst.amount}</div>
                <div className={classes.approx}>
                  ≈{" "}
                  <span className={classes.green}>
                    {totalClaimedbst.usdAmount}
                  </span>
                </div>
              </div>
              <div className={classes.token}>Token: {token}</div>
            </div>
            <div className={classes.infoItem}>
              <h4 className={classes.heading}>Total Unclaimed $BST:</h4>

              <div className={classes.amount}>
                <p>{totalUnClaimedbst.amount}</p>
                <div className={classes.approx}>
                  ≈{" "}
                  <span className={classes.green}>
                    {totalUnClaimedbst.usdAmount}
                  </span>
                </div>
              </div>
              <p className={classes.token}>$BST≈ {bst}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.description}>{description}</div>

      <div className={classes.detailsBox}>
        <div className={classes.shortDescItem}>
          <div className={classes.left}>Claim on:</div>
          <div className={classes.right}>
            <img src={claimOn.networkIcon} alt="" /> {claimOn.networkName}
          </div>
        </div>
        <div className={classes.shortDescItem}>
          <div className={classes.left}>My Unclaimed BST:</div>
          <div className={classes.right}>
            {myUnclaimedBst.amount}{" "}
            <span className={classes.green}>≈ {myUnclaimedBst.usdAmount}</span>
          </div>
        </div>

        <div className={classes.vestingBox}>
          <div className={classes.vestingItem}>
            <div className={classes.left}>
              <img src={unlockNextIcon} alt="unlock" />
              <div>Unlock Next:</div>
            </div>
            <div className={classes.right}>
              <MyCountDown dayCount="2023-10-15T00:00:00" />
            </div>
          </div>
          <div className={classes.vestingItem}>
            <div className={classes.left}>
              <img src={vestingCountsIcon} alt="counts" />
              <div>Vesting counts:</div>
            </div>
            <div className={classes.right}>
              <span className={classes.vestingCounts}> {vestingCounts}</span>
              {/* <div>02</div>
            <div>of</div>
            <div>06</div>
            <div>Months</div> */}
            </div>
          </div>
          <div className={classes.divider}></div>

          <div className={classes.vestingList}>
            {vestings
              .slice(0, showAllVestings ? vestings.length : 4)
              .map((vesting, i) => (
                <button
                  key={i}
                  className={clsx(
                    vesting.active && classes.highlighted,
                    classes.vestingNum
                  )}
                >
                  {vesting.name}
                </button>
              ))}
          </div>

          {showViewAllButton && !showAllVestings && (
            <button
              className={classes.viewAll}
              onClick={() => setShowAllVestings(true)}
            >
              View all vesting
            </button>
          )}

          {showAllVestings && (
            <button
              className={classes.showLess}
              onClick={() => setShowAllVestings(false)}
            >
              Show Less
            </button>
          )}
        </div>

        <div className={classes.claimBox}>
          <div className={classes.desc}>
            <div className={classes.left}>
              <img src={coin} alt="coin" />
              Available Token:
            </div>
            <div className={classes.right}>
              <div>{availableToken.bnbAmount}</div>
              <div>≈</div>
              <div className={classes.green}>{availableToken.usdAmount}</div>
            </div>
          </div>

          <button className={classes.claim}>Claim Vesting</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
