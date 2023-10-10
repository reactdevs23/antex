import React from "react";
import styles from "./PeopleFirst.module.css";
import { investors, theTeam } from "../../../images";

const PeopleFirst = () => {
  const data = [
    {
      img: investors,
      name: "The investors",
      title: "Confidence in participation, a sense of belonging.",
      info: [
        "As a DAO, we prioritize community-driven collaboration, ensuring that our community members takes part in governance and some selection process of the projects we incubate.",
        "Hinox isn't just about projects; it's about forging strategic partnerships that yield exponential growth. Hinox  connects forward-thinking investors with a curated selection of high-potential ventures, providing a unique opportunity to be part of the next big thing. We believe that investing is not just about funding—it's about being part of a journey that reshapes industries.",
      ],
    },
    {
      img: theTeam,
      name: "The Team",
      title: "Launch with confidence, Defy gravity.",
      info: [
        "When it comes to  fund raising, the unique requirements of  the team's  needs should rightfully assume center stage, not be relegated as an afterthought.This pivotal juncture occupies a paramount position in the journey of a project – often serving as the initial connection with its prospective community. This interaction has the potential to establish the trajectory, positively or otherwise, for the project's future endeavours.",
        "We've designed a launchpad that goes beyond technology and business strategies – it's a platform that helps project defy gravity and go beyond the stars.",
        "Our commitment to fostering an environment of inclusivity, collaboration, and continuous learning sets us apart. We provide the tools, resources, and support needed for your seamless onboarding of web3 and successful  launching.",
      ],
    },
  ];
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <h2 className={styles.heading}>People First....</h2>
      <p className={styles.tagline}>
        our value proposition centres on providing an ecosystem that empowers
        projects, investors, and stakeholders alike, fostering a seamless and
        successful blockchain venture landscape.
      </p>

      <div className={styles.peoples}>
        {data.map((el, i) => (
          <div className={styles.details} key={i}>
            <div className={styles.imgAndName}>
              <img src={el.img} alt="#" className={styles.image} />
              <h4 className={styles.name}>{el.name}</h4>
            </div>

            <div className={styles.textContainer}>
              <h4 className={styles.title}>{el.title}</h4>

              <div className={styles.infoContainer}>
                {el.info.map((info, i) => (
                  <p className={styles.info} key={i}>
                    {info}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleFirst;
