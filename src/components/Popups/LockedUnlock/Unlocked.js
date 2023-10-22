import React from "react";

import LoadMore from "../../common/LoadMore/LoadMore";
import classes from "./styles.module.css";
const Unlocked = ({ data }) => {
  return (
    <div className={[classes.wrapper].join(" ")}>
      <div className={classes.tablesModal}>
        <div className={classes.otherRows}>
          {data.map((el, idx) => {
            return (
              <div key={"other-row-" + idx} className={classes.row}>
                <div className={classes.percent}>
                  <h3>{el.apy}</h3>
                  <div>APY</div>
                </div>
                <div className={classes.stats}>
                  <div className={classes.item}>
                    <h6>Duration</h6>
                    <div>{el.duration}</div>
                  </div>
                  <div className={classes.item}>
                    <h6>locked Until</h6>
                    <div>{el.lockedUntill}</div>
                  </div>
                  <div className={classes.item}>
                    <h6>APY</h6>
                    <div>{el.apy}</div>
                  </div>
                  <div className={classes.item}>
                    <h6>Earning Rate</h6>
                    <div>{el.earningRate}</div>
                  </div>
                  <div className={classes.item}>
                    <h6>My Staked</h6>
                    <div>{el.myStake.bst} BST</div>
                    <div>
                      ≈ <span className={classes.green}>${el.myStake.usd}</span>
                    </div>
                  </div>
                  <div className={classes.item}>
                    <h6>Available earnings</h6>
                    <div>{el.availableEarnings.bst} BST</div>
                    <div>
                      ≈{" "}
                      <span className={classes.green}>
                        ${el.availableEarnings.usd}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={classes.actions}>
                  <button className={classes.withdraw}>Withdraw All</button>
                  <button className={classes.lock}>Lock Again</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className={classes.foot}>
          <LoadMore />
        </div>
      </div>
    </div>
  );
};

export default Unlocked;
