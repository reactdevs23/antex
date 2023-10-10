import React from "react";
import { useTimer } from "react-timer-hook";
import clsx from "clsx";

import {
  binanceNetwork,
  coin,
  person,
  unlockNext,
  vestingCounts,
} from "../../../../images";
import classes from "./SingleProject.module.css";

const SingleProject = ({
  // person,
  title,
  totalClaimed,
  approxClaimed,
  claimedToken,
  totalUnclaimed,
  approxUnClaimed,
  unclaimedToken,
}) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60 * 60 * 25 * 2);
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: time,
  });
  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <img src={person} alt="person" />
        <div className={classes.infoWrapper}>
          <h5 className={classes.title}>Hinox Point/ANT-P tesnet Airdrop</h5>

          <div className={classes.infoItems}>
            {" "}
            <div className={classes.infoItem}>
              <h4 className={classes.heading}>Total Claimed $BST:</h4>
              <div className={classes.amount}>
                <div>100,000,00</div>
                <div className={classes.approx}>
                  ≈ <span className={classes.green}>$17056.5</span>
                </div>
              </div>
              <div className={classes.token}>Token: BST</div>
            </div>
            <div className={classes.infoItem}>
              <h4 className={classes.heading}>Total Unclaimed $BST:</h4>

              <div className={classes.amount}>
                <p>100,000,00</p>
                <div className={classes.approx}>
                  ≈ <span className={classes.green}>$17056.5</span>
                </div>
              </div>
              <p className={classes.token}>$BST≈ $0.235</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.description}>
        All Hinox users who participated in testnet and claimed ANT-point are
        eligabile for this airdrop to redeem their ANT point for 1000:1 and also
        those who qualifies for free token from crew 3 and others campaign
        during and after the beta testing.
      </div>

      <div className={classes.shortDescItem}>
        <div className={classes.left}>Claim on:</div>
        <div className={classes.right}>
          <img src={binanceNetwork} alt="" /> Binance Network
        </div>
      </div>
      <div className={classes.shortDescItem}>
        <div className={classes.left}>My Unclaimed BST:</div>
        <div className={classes.right}>
          50000 <span className={classes.green}>≈ $1000</span>
        </div>
      </div>

      <div className={classes.vestingBox}>
        <div className={classes.vestingItem}>
          <div className={classes.left}>
            <img src={unlockNext} alt="unlock" />
            <div>Unlock Next:</div>
          </div>
          <div className={classes.right}>
            <div>{days}</div>
            <div>:</div>
            <div>{hours}</div>
            <div>:</div>
            <div>{minutes}</div>
            <div>:</div>
            <div>{seconds}</div>
          </div>
        </div>
        <div className={classes.vestingItem}>
          <div className={classes.left}>
            <img src={vestingCounts} alt="counts" />
            <div>Vesting counts:</div>
          </div>
          <div className={classes.right}>
            <div>02</div>
            <div>of</div>
            <div>06</div>
            <div>Months</div>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.vestingList}>
          <div className={clsx(classes.highlighted, classes.vestingNum)}>
            Vesting 1
          </div>
          <div className={clsx(classes.highlighted, classes.vestingNum)}>
            Vesting 2
          </div>
          <div className={classes.vestingNum}>Vesting 3</div>
          <div className={classes.vestingNum}>Vesting 4</div>
        </div>
        <button className={classes.viewAll}>View all vesting</button>
      </div>

      <div className={classes.claimBox}>
        <div className={classes.desc}>
          <div className={classes.left}>
            <img src={coin} alt="coin" />
            Available Token:
          </div>
          <div className={classes.right}>
            <div>5806 BNB</div>
            <div>≈</div>
            <div className={classes.green}>$5,000</div>
          </div>
        </div>

        <button className={classes.claim}>Claim Vesting</button>
      </div>
    </div>
  );
};

export default SingleProject;
