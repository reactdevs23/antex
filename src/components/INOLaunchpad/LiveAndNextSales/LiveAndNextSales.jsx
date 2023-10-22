import React from "react";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

import {
  hinoxEcosystem,
  upcomingSales1,
  upcomingSales2,
} from "../../../images";

import SingleProject from "../../common/SingleProject/SingleProject";
import classes from "./LiveAndNextSales.module.css";

const time = new Date();
time.setSeconds(time.getSeconds() + 60 * 60 + 15);

const LiveAndNextSales = () => {
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
      status: "Sales is live",
      progress: {
        value: 34,
        from: "$ 680,000",
        to: "$ 2,000,000",
      },
      access: "Public",
      tokenPrice: "$0.0045",
      tokenSymbol: "HIT",
      dateStarted: "Jan 20.23,11:14AM UTC",
    },
    {
      img: hinoxEcosystem,
      name: "HINOX Ecosystem",
      bg: upcomingSales2,
      type: "Protected Ido",
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
      bg: upcomingSales2,
      type: "Protected Ido",
      bsdToHit: "16.75 HIT",
      description:
        "Introducing Panda, the cryptocurrency project with a user interface design that stands out like no other! Get ready to embark on a journey of seamless transactions, effortless navigation, and beautiful aesthetics. Panda is here to make your cryptocurrency experience smoother, faster, and more enjoyable.",
      totalRaised: "$2,000,000/$2,000,000",
      status: "sales is over",
      participants: 5000,
      totalPrice: "$ 0.0045",
      tokenSold: "500,000,000M / 500,000,000M",
      dateStarted: "Jan 20.23,11:14AM UTC",
    },
    {
      img: hinoxEcosystem,
      name: "HINOX Ecosystem",
      bg: upcomingSales2,
      type: "Protected Ido",
      bsdToHit: "16.75 HIT",
      description:
        "Introducing Panda, the cryptocurrency project with a user interface design that stands out like no other! Get ready to embark on a journey of seamless transactions, effortless navigation, and beautiful aesthetics. Panda is here to make your cryptocurrency experience smoother, faster, and more enjoyable.",
      totalRaised: "$2,000,000/$2,000,000",
      status: "sales is over",
      participants: 5000,
      totalPrice: "$ 0.0045",
      tokenSold: "500,000,000M / 500,000,000M",
      dateStarted: "Jan 20.23,11:14AM UTC",
    },
  ];
  return (
    <div className={["mainWrapper", classes.wrapper].join(" ")}>
      <div className={classes.buttonAndTitle}>
        <SectionTitle noSpace>
          Live and Next sales <span style={{ opacity: 0.7 }}>Past Sales</span>{" "}
        </SectionTitle>
        <button className={classes.btnWhiteOutlined}>
          Add Sales Dates To Calendar
        </button>
      </div>

      <div className={classes.projects}>
        {projects.map((project, idx) => (
          <SingleProject project={project} key={"project-cad-" + idx} />
        ))}
      </div>
    </div>
  );
};

export default LiveAndNextSales;
