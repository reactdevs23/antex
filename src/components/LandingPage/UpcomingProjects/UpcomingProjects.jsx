import SectionTitle from "../../common/SectionTitle/SectionTitle";

import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import {
  arrowRightCircle,
  hinoxEcosystem,
  upcomingSales1,
  upcomingSales2,
} from "../../../images";
import classes from "./UpcomingProjects.module.css";

import SingleProject from "../../SingleProject/SingleProject";

const UpcomingProjects = () => {
  const slider = useRef();

  const projects = [
    {
      img: hinoxEcosystem,
      name: "HINOX Ecosystem",
      bg: upcomingSales1,
      type: "HiDAO WORTHY",
      bsdToHit: "16.75 HIT",
      description:
        "Introducing Panda, the cryptocurrency project with a user interface design that stands out like no other! Get ready to embark on a journey of seamless transactions, effortless navigation, and beautiful aesthetics. Panda is here to make your cryptocurrency experience smoother, faster, and more enjoyable.",
      timeLeft: "2023-11-15T00:00:00",
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
  ];
  return (
    <div className={["mainWrapper", classes.wrapper].join(" ")}>
      <SectionTitle tag={projects.length}>
        Live and upcoming Projects
      </SectionTitle>

      <div className={classes.buttons}>
        <button className={classes.btnWhiteOutlined}>
          Add Sales Dates To Calendar
        </button>
        <button className={classes.btnGreen}>
          See All Sales
          <img src={arrowRightCircle} alt="arrow" />
        </button>
      </div>

      <div className={classes.projects}>
        <Splide
          ref={slider}
          className={classes.slide}
          options={{
            arrows: false,
            perPage: 2,
            gap: 14,

            breakpoints: {
              991: {
                perPage: 1,
              },
            },
          }}
        >
          {projects.map((project, idx) => (
            <SplideSlide key={"project-cad-" + idx}>
              <SingleProject project={project} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default UpcomingProjects;
