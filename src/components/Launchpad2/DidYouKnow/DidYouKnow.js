import React from "react";
import { FaQuestion } from "react-icons/fa";
import styles from "./DidYouKnow.module.css";
const DidYouKnow = () => {
  const info = [
    "Contributing to the DOA treasury gives you all the  HiDAO executive benefits.",
    "All executive members can participate in project incubation voting process.",
    "Every DAO contributors gets  token from all incubated projects",
    "HiDOA Executives receives the highest allocation in every sales",
    "HiDOA Executives have access to exclusive private sales.",
  ];
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <h2 className={styles.title}>DID YOU KNOW</h2>
      <FaQuestion className={styles.questionMark} />

      <ul className={styles.infoContainer}>
        {info.map((el, i) => (
          <li className={styles.info} key={i}>
            {el}
          </li>
        ))}
      </ul>

      <button className={styles.button}>contribute</button>
    </div>
  );
};

export default DidYouKnow;
