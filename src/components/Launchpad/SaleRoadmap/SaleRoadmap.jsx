import React, { useState } from "react";
import {
  tickCircle,
  planet,
  saleRoadmap,
  tickCircleGrey,
  emptyWalletTick,
} from "../../../images";

import classes from "./SaleRoadmap.module.css";
// import { planet, saleRoadmap, tickCircle, tickCircleGrey } from "images";
import clsx from "clsx";
import Enabled from "../../common/Enabled/Enabled";

import ProgressBar from "../../common/Progressbar/Progressbar";

const roadmapItems = [
  {
    title: "REGISTRATION STARTS",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
  {
    title: "REGISTRATION ENDS",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
  {
    title: "EXECUTIVE ROUND",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
  {
    title: "STAKERS ROUND",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
  {
    title: "COMMUNITY ONGOING",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
  {
    title: "SALES ENDED",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
];

const SaleRoadmap = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <div className={[classes.box, "mainWrapper"].join(" ")}>
      <img className={classes.planet} src={planet} alt="planet" />
      <div className={classes.boxTop}>
        <div>
          <img src={saleRoadmap} alt="sale-roadmap" />
        </div>

        <div className={classes.rightSection}>
          <div className={classes.allocationTitle}>
            <img src={emptyWalletTick} alt="wallet" />
            <div className="text-light-1 font-popins fs-14">My Allocation</div>
          </div>

          <ProgressBar progress={50} background="#1CED86" allocation />

          <div className={classes.amount}>
            <div>400 USD</div>
            <div>3600 USD</div>
          </div>

          <div className={classes.reserveTitle}>Reserve-Spot</div>

          <Enabled />
        </div>
      </div>
      <div className={classes.boxBottom}>
        {roadmapItems.map((el, idx) => {
          return (
            <React.Fragment key={"roadmap-item-" + idx}>
              <div
                className={clsx(
                  classes.step,
                  idx + 1 <= currentStep && classes.complete
                )}
                onClick={() => setCurrentStep(idx + 1)}
              >
                <div className={classes.tickContainer}>
                  <img
                    src={idx + 1 <= currentStep ? tickCircle : tickCircleGrey}
                    alt="tick-circle"
                  />
                </div>
                <div className={classes.title}>{el.title}</div>
                <div className={classes.smallText}>Date: {el.date}</div>
                <div className={classes.smallText}>Time: {el.time}</div>
              </div>
              {idx < roadmapItems.length - 1 && (
                <div
                  className={clsx(
                    classes.line,
                    idx + 1 < currentStep && classes.complete,
                    idx + 1 === currentStep && classes.completing
                  )}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SaleRoadmap;
