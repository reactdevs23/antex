import React from "react";

import clsx from "clsx";
import { arbitrum } from "../../images";

import ProgressBar from "../common/Progressbar/Progressbar";
import CountDown from "../common/CountDown/CountDown";
import classes from "./SingleProject.module.css";

const SingleProject = ({ project }) => {
  return (
    <div className={classes.projectCard}>
      <img src={project.bg} alt="#" className={classes.bgImage} />
      <div className={classes.projectCardHead}>
        <div className={classes.top}>
          <div className={classes.left}>
            <img src={project.img} alt="#" className={classes.projectImage} />

            <div>
              <h5 className={classes.title}>{project.name}</h5>
              <div className={classes.subTitle}>
                <img src={arbitrum} alt="arbitrum" /> Arbitrum
              </div>
            </div>
          </div>

          <div className={classes.right}>
            <div className={classes.flex}>
              {project.type.toLowerCase() === "protected ido" && (
                <div className={classes.hours}>24hrs</div>
              )}
              <button className={classes.hidaoBtn}>
                {" "}
                <span className={classes.hidaoBtnText}>{project.type}</span>
              </button>
            </div>

            {project.status.toLowerCase() === "registration open" && (
              <p className={classes.approx}>{project.currencies}</p>
            )}
            {project.status.toLowerCase() === "sales is live" && (
              <p className={classes.approx}>1 BUSD≈ {project.bsdToHit}</p>
            )}
          </div>
        </div>

        <p>{project.description}</p>
      </div>
      <div className={classes.projectCardBody}>
        <div className={classes.title}>
          {(project.status.toLowerCase() === "sales is live" ||
            project.status.toLowerCase() === "registration open") && (
            <h4>
              Time Left:{" "}
              <span className={classes.white}>
                <CountDown dayCount={project.timeLeft} hourAndMinute />
              </span>
            </h4>
          )}
          {project.status.toLowerCase() === "sales is over" && (
            <div>
              <h4>Total Raised:</h4>
              <p className={classes.white}>{project.totalRaised}</p>
            </div>
          )}

          <button
            className={clsx(
              project.status.toLowerCase() === "sales is live" && classes.live,
              project.status.toLowerCase() === "registration open" &&
                classes.open,
              project.status.toLowerCase() === "upcoming" && classes.upcoming,
              project.status.toLowerCase() === "sales is over" && classes.over
            )}
          >
            <p className={classes.circle}></p>
            {project.status}
          </button>
        </div>
        {project.status.toLowerCase() === "sales is over" && (
          <>
            <ProgressBar progress={100} background="#1CED86" salesOver />
          </>
        )}
        {project.status.toLowerCase() === "sales is live" && (
          <>
            <h6 className={classes.progress}>
              Progress ({project.progress.value}%)
            </h6>
            <ProgressBar
              progress={project.progress.value}
              background="#65CDBA"
            />
            {/* <div className={classes.loader}>
                        <div className={classes.loaderMain}></div>
                      </div>{" "} */}
            <div className={classes.shortStatsDesc}>
              <p>{project.progress.from}</p>
              <p className={classes.big}>{project.progress.to}</p>
            </div>
          </>
        )}
        {project.status.toLowerCase() === "registration open" && (
          <>
            <div className={classes.participants}>
              <p>Participants:</p>
              <p className={classes.value}>{project.participants}</p>
            </div>

            <div className={classes.shortStatsDesc}>
              <p className={classes.key}>Reserved Spots</p>
              <p
                className={clsx(
                  classes.big,
                  classes.green,

                  classes.value
                )}
              >
                {project.reservedSpot}
              </p>
            </div>

            <div className={classes.statsDesc}>
              <p className={classes.key}>Target Raise:</p>
              <p className={[classes.green, classes.value].join(" ")}>
                {project.targetRaise}
              </p>
            </div>
          </>
        )}{" "}
        {project.status.toLowerCase() === "upcoming" && (
          <div className={[classes.statsDesc].join(" ")}>
            <p className={[classes.upcomingTargetRaise, classes.key].join(" ")}>
              Target Raise:
            </p>
            <p
              className={[classes.upcomingTargetRaise, classes.value].join(" ")}
            >
              {project.targetRaise}
            </p>
          </div>
        )}
        {(project.status.toLowerCase() === "sales is live" ||
          project.status.toLowerCase() === "registration open" ||
          project.status.toLowerCase() === "upcoming") && (
          <div
            className={
              project.status.toLowerCase() === "upcoming" && classes.keyAndValue
            }
          >
            <div className={classes.statsDesc}>
              <p className={classes.key}>Access:</p>
              <p className={[classes.white, classes.value].join(" ")}>
                {project.access}
              </p>
            </div>
            <div className={classes.statsDesc}>
              <p className={classes.key}>Token Price:</p>
              <p className={[classes.white, classes.value].join(" ")}>
                {project.tokenPrice}
              </p>
            </div>
            <div className={classes.statsDesc}>
              <p className={classes.key}>Token Symbol:</p>
              <p className={[classes.white, classes.value].join(" ")}>
                {project.tokenSymbol}
              </p>
            </div>

            <div className={classes.statsDesc}>
              <p className={classes.key}>Date Started:</p>
              <p className={[classes.white, classes.value].join(" ")}>
                {project.dateStarted}
              </p>
            </div>
          </div>
        )}
        {project.status === "sales is over" && (
          <div>
            <div className={classes.statsDesc}>
              <p className={classes.key}>Total price:</p>
              <p className={[classes.white, classes.value].join(" ")}>
                {project.totalPrice}
              </p>
            </div>
            <div className={classes.statsDesc}>
              <p className={classes.key}>Participants:</p>
              <p className={[classes.white, classes.value].join(" ")}>
                {project.participants}
              </p>
            </div>
            <div className={classes.statsDesc}>
              <p className={classes.key}>Token sold:</p>
              <p className={[classes.white, classes.value].join(" ")}>
                {project.tokenSold}
              </p>
            </div>

            <div className={classes.statsDesc}>
              <p className={classes.key}>Started Date:</p>
              <p className={[classes.white, classes.value].join(" ")}>
                {project.dateStarted}
              </p>
            </div>
          </div>
        )}
        {project.status.toLowerCase() === "registration open" && (
          <button className={clsx(classes.register)}>Register</button>
        )}{" "}
        {project.status.toLowerCase() === "sales is live" && (
          <button className={clsx(classes.participate)}>Participate</button>
        )}{" "}
        {project.status.toLowerCase() === "upcoming" && (
          <button className={clsx(classes.upcomingButton)}>Upcoming</button>
        )}
        {/* <button
          className={clsx(
            project.button.type.toLowerCase() === "participate" &&
              classes.participate,
            project.button.type.toLowerCase() === "register" && classes.register
          )}
        >
          {project.button.type}
        </button> */}
      </div>
    </div>
  );
};

export default SingleProject;
