import React from "react";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

import {
  arrowRightCircle,
  hinoxEcosystem,
  upcomingSales1,
  upcomingSales2,
} from "../../../images";

import SingleProject from "../../common/SingleProject/SingleProject";
import classes from "./UpComingAndOngoing.module.css";

const UpComingAndOngoing = () => {
  const projects = [
    {
      img: hinoxEcosystem,
      name: "HINOX Ecosystem",
      bg: upcomingSales1,
      type: "HiDAO WORTHY",
      bsdToHit: "16.75 HIT",
      description:
        "Introducing Panda, the cryptocurrency project with a user interface design that stands out like no other! Get ready to embark on a journey of seamless transactions, effortless navigation, and beautiful aesthetics. Panda is here to make your cryptocurrency experience smoother, faster, and more enjoyable.",
      timeLeft: "2023-10-15T00:00:00",
      status: "Registration open",
      targetRaise: "$2,000,000",

      access: "Public",
      tokenPrice: "$0.0045",
      tokenSymbol: "HIT",
      dateStarted: "Jan 20.23,11:14AM UTC",
    },
    {
      img: hinoxEcosystem,
      name: "HINOX Ecosystem",
      bg: upcomingSales2,
      type: "Projected Ido",
      currencies: "USDT/USDC",
      description:
        "Introducing Panda, the cryptocurrency project with a user interface design that stands out like no other! Get ready to embark on a journey of seamless transactions, effortless navigation, and beautiful aesthetics. Panda is here to make your cryptocurrency experience smoother, faster, and more enjoyable.",
      timeLeft: "2023-10-15T00:00:00",
      status: "Registration open",
      participants: 5000,
      reservedSpot: 5000,
      targetRaise: "$2,000,000",
      access: "Public",
      tokenPrice: "$0.0045",
      tokenSymbol: "HIT",
      dateStarted: "Jan 20.23,11:14AM UTC",
    },

    {
      img: hinoxEcosystem,
      name: "HINOX Ecosystem",
      bg: upcomingSales1,
      type: "HiDAO WORTHY",
      bsdToHit: "16.75 HIT",
      description:
        "Introducing Panda, the cryptocurrency project with a user interface design that stands out like no other! Get ready to embark on a journey of seamless transactions, effortless navigation, and beautiful aesthetics. Panda is here to make your cryptocurrency experience smoother, faster, and more enjoyable.",
      timeLeft: "2023-10-15T00:00:00",
      status: "upcoming",
      targetRaise: "$2,000,000",

      access: "Public",
      tokenPrice: "$0.0045",
      tokenSymbol: "HIT",
      dateStarted: "Jan 20.23,11:14AM UTC",
    },
  ];
  return (
    <div className={["mainWrapper", classes.wrapper].join(" ")}>
      <div className={classes.buttonAndTitle}>
        <SectionTitle noSpace tag={projects.length}>
          Upcoming and ongoing Project{" "}
        </SectionTitle>{" "}
        <button className={classes.btnGreen}>
          See All Sales
          <img src={arrowRightCircle} alt="arrow" />
        </button>
      </div>

      <div className={classes.projects}>
        {projects.map((project, idx) => (
          <SingleProject project={project} key={"project-cad-" + idx} />
        ))}
        <div className={classes.upcomingProjectWrapper}>
          <SingleProject project={projects[0]} />
          <div className={classes.upComingProject}>
            <h3 className={classes.title}>UPCOMING SALES</h3>
            <div className={classes.numberOfProjectWrapper}>
              <div className={classes.projectHeading}>
                <p className={classes.projectNumber}>10+</p> Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingAndOngoing;
