import React from "react";
import { openLink } from "../../../images";
import classes from "./DataTable.module.css";

const DataTable = ({ data }) => {
  return (
    <div className={[classes.gridTableContainer].join(" ")}>
      <div
        className={[
          classes.gridTable,
          classes.gridHeaderWrapper,
          "overflow",
        ].join(" ")}
      >
        <div className={classes.gridHeader}>Position</div>
        <div className={classes.gridHeader}>Address</div>
        <div className={classes.gridHeader}>Amount staked</div>
        <div className={classes.gridHeader}>Earnings(BST)</div>
        <div className={classes.gridHeader}>Staking pool</div>

        {data.map((el, idx) => (
          <React.Fragment key={"table-row-" + idx}>
            <div
              className={[classes.gridItem, classes.positionContainer].join(
                " "
              )}
            >
              <p className={[classes.position].join(" ")}>{idx + 1}</p>
            </div>
            <div className={[classes.gridItem, classes.address].join(" ")}>
              <a href="#">
                {" "}
                {el.address} <img src={openLink} alt="" />
              </a>
            </div>
            <div className={[classes.gridItem]}>{el.amountStaked}</div>
            <div className={classes.gridItem}>{el.earnings}</div>
            <div className={classes.gridItem}>{el.stakingPool}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
