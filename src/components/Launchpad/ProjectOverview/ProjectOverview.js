import React from "react";
import styles from "./ProjectOverview.module.css";
import Sidebar from "./Sidebar/Sidebar";

const ProjectOverview = () => {
  const highlights = [
    "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  ];
  return (
    <div>
      <Sidebar />
      <div className={styles.wrapper}>
        <div className={styles.highlightsContainer}>
          <h3 className={styles.heading}>Highlights</h3>
          <div className={styles.highlights}>
            {highlights.map((el, i) => (
              <li className={styles.text} key={i}>
                {el}
              </li>
            ))}
          </div>
        </div>

        <div id="overview" className={styles.overview}>
          <h4 className={styles.heading}>OVERVIEW</h4>
          <p className={styles.text}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <div id="problem" className={styles.problem}>
          <h4 className={styles.heading}>PROBLEM</h4>

          <p className={styles.text}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure{" "}
          </p>
        </div>
        <div id="solution" className={styles.solution}>
          <h4 className={styles.heading}>SOLUTION</h4>

          <p className={styles.text}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure{" "}
          </p>
        </div>
        <div id="valuepreposition" className={styles.valuePreposition}>
          <h4 className={styles.heading}>VALUE PREPOSITION</h4>

          <p className={styles.text}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure{" "}
          </p>
        </div>
        <div
          id="allocationanddistribution"
          className={styles.allocationAndDistribution}
        >
          <h4 className={styles.heading}>AllOCATION AND DISTRIBUTION</h4>

          <p className={styles.text}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
