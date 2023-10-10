import React from "react";
import { FaQuestion } from "react-icons/fa";
import styles from "./DidYouKnow.module.css";

const DidYouKnow = () => {
  const info = [
    "Being a member of the HiDAO executive Council gives you exclusive access and right in Hinox ecosystem",
    "All executive members can  participate in Gold sales.",
    "HiDOA Executives receives the highest allocation in every sales and highest APY in staking.",
    "HiDOA Executives receives airdrop from every project we incubate",
  ];

  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>DID YOU KNOW</h2>
        <FaQuestion className={styles.questionMark} />
      </div>
      <div className={styles.infoContainer}>
        {info.map((info, i) => (
          <li className={styles.info} key={i}>
            {info}
          </li>
        ))}

        <div className={styles.buttonContainer}>
          <button className={[styles.button, styles.beAnExecutive].join(" ")}>
            Be an Executive
          </button>
          <a
            href="https://blog.hinox.io/hidao-executive-council/"
            target="_blank"
            rel="noreferrer"
            className={[styles.button, styles.learnMore].join(" ")}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;
